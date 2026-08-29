import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-gray-500 dark:text-gray-400">
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
      </div>
    </div>
  );
}
