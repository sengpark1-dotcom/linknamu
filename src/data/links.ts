export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "바다",
  bio: "바다에 누워서",
  imageUrl: "https://placehold.co/150x150/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "instagram", title: "인스타그램", url: "https://instagram.com" },
  { id: "youtube", title: "유튜브", url: "https://youtube.com" },
];
