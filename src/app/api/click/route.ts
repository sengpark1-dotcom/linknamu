import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  try {
    const client = await getMongoClientPromise();
    const db = client.db(process.env.MONGODB_DB || "linknamu");
    await db.collection("linkClicks").updateOne(
      { linkId },
      { $inc: { clickCount: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true }
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ error: "failed to record click" }, { status: 500 });
  }
}
