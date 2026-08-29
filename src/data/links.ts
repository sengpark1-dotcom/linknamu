export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "바다",
  bio: "바다에 누워서",
  imageUrl: "/sea.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐈‍⬛ 깃허브", url: "https://github.com/sengpark1-dotcom" },
  { id: "youtube", title: "📺 유튜브", url: "https://www.youtube.com/@STANDSEA" },
  { id: "email", title: "📫 이메일", url: "mailto:parksh@tomoon.co.kr" },
];
