import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-stone-200 shadow-[0_14px_32px_-10px_rgba(120,72,36,0.35)] ring-4 ring-white/70 dark:bg-stone-800 dark:shadow-[0_14px_32px_-10px_rgba(0,0,0,0.55)] dark:ring-white/10">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-stone-500 dark:text-stone-400">
            {name.slice(0, 1)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/45 via-transparent to-black/10 dark:from-white/10 dark:to-black/30" />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">{name}</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{bio}</p>
      </div>
    </div>
  );
}
