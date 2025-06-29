import type { Viewport } from "next";

export const metadata = {
  title: "Car Zone Syria",
  description: "وجهتك المثالية لشراء وبيع واستكشاف السيارات في سوريا. اعثر على سيارات جديدة ومستعملة، واحصل على آخر أخبار السيارات، وتواصل مع مجتمع من عشاق السيارات.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.5, // Change this value to adjust the zoom level
  maximumScale: 1,
  userScalable: true,
};

export default function Products() {
  return <div className="container mx-auto"> Search </div>;
}
