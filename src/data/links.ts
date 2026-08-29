export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "바다 위에서",
  bio: "일상과 생각을 기록합니다",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "instagram", title: "인스타그램", url: "https://instagram.com" },
  { id: "youtube", title: "유튜브", url: "https://youtube.com" },
];
