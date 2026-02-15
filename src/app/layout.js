import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Canadian Archive",
    template: "%s | Canadian Archive",
  },
  description:
    "Step through Canada's defining eras and uncover the stories that shaped a nation.",
  applicationName: "Canadian Archive",
  icons: {
    icon: [{ url: "/home/maple-leaf.png", type: "image/png" }],
    shortcut: ["/home/maple-leaf.png"],
    apple: [{ url: "/home/maple-leaf.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: geistMono.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}
