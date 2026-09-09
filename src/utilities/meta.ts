export const title = "Stephanie's App";
export const description = "Just a man expressing his love for Stephanie.";
const icon =
  "https://res.cloudinary.com/olamileke/image/upload/v1788966644/meine/letter-s_dc1feu.png";

export const openGraph = {
  title,
  description,
  siteName: title,
  images: [{ url: icon, width: 800, height: 600 }],
  type: "website",
};

export const twitter = {
  title,
  description,
  creator: "@f_olamileke",
  card: "summary_large_image",
  images: [icon],
};

export const icons = {
  icon,
};
