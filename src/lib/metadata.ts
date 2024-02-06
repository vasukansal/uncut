import type { Metadata } from "next";

const theme = "dark";

export const meta: Metadata = {
  metadataBase: new URL(process.env.URL as string),
  title: "Uncut: Get Real. Stay Anonymous.",
  description:
    "Uncut is a community for college students that allows you to share your thoughts anonymously.",
  authors: [
    {
      name: "Mohak Bajaj",
    },
    {
      name: "Mridul Singh",
    },
    {
      name: "Vasu Kansal",
    },
    {
      name: "Sanskar Sisodia",
    },
  ],
  keywords: ["Uncut", "Anonymous", "College", "Community"],
  twitter: {
    card: "summary_large_image",
    title: "Uncut: Get Real. Stay Anonymous.",
    description:
      "Uncut is a community for college students that allows you to share your thoughts anonymously.",
    images: [`${process.env.URL}/${theme}/uncut-${theme}.png`],
  },
  icons: {
    icon: `/${theme}/favicon.ico`,
    shortcut: `/${theme}/favicon.ico`,
    apple: `/${theme}/apple-touch-icon.png`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.URL,
    siteName: "Uncut: Get Real. Stay Anonymous.",
    title: "Uncut: Get Real. Stay Anonymous.",
    description:
      "Uncut is a community for college students that allows you to share your thoughts anonymously.",
    images: [
      {
        url: `${process.env.URL}/${theme}/uncut-${theme}.png`,
        width: 1200,
        height: 630,
        alt: "Uncut: Get Real. Stay Anonymous.",
      },
    ],
  },
  applicationName: "Uncut",
  creator: "Uncut Team",
};
