"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import type { LinkItem } from "@/data/links";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((data) => setCounts(data.counts ?? {}))
      .catch(() => {});
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          id={link.id}
          title={link.title}
          url={link.url}
          clickCount={counts[link.id] ?? 0}
        />
      ))}
    </div>
  );
}
