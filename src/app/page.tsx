import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { links, profile } from "@/data/links";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center px-6 py-20 sm:px-8">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.id} id={link.id} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
