import "./globals.css";
export const metadata = {
  title: "Magnolia Lawn & Landscape | Thoughtful Outdoor Care",
  description: "Landscape design, lawn maintenance, and commercial grounds care. Explore Magnolia's services and request a consultation for your outdoor space.",
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><a className="skip-link" href="#home">Skip to content</a>{children}</body></html>;
}
