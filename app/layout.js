import { Albert_Sans, Italiana, Roboto } from "next/font/google";
import Shell from "./shell";
import "../src/styles.css";

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-albert",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Naturhotel Haller",
  description:
    "Naturhotel Haller in Mareit, Ridnaun Valley. Rooms, wellness, winter and summer in South Tyrol.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albert.variable} ${italiana.variable} ${roboto.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
