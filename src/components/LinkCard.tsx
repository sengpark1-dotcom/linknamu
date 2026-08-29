"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  clickCount: number;
};

export default function LinkCard({ id, title, url, clickCount }: LinkCardProps) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-stone-700 shadow-[0_4px_20px_-4px_rgba(120,72,36,0.15)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_26px_-6px_rgba(120,72,36,0.22)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)] dark:hover:bg-white/10"
    >
      <span>{title}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-500">
        {clickCount}회
      </span>
    </a>
  );
}
