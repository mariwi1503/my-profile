import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammad-ary.my.id"),
  title: "Muhammad Ary Widodo - Backend Developer Portfolio",
  description:
    "Experienced Backend Developer specializing in Node.js, NestJS, and scalable API development. Building secure, efficient systems for digital transformation.",
  keywords: [
    "Backend Developer Indonesia",
    "Node.js Developer Remote",
    "NestJS Specialist",
    "API Development Expert",
    "Database Design Consultant",
    "Fullstack JavaScript Developer",
    "TypeScript Backend Engineer",
    "Microservices Architecture",
    "REST API Development",
    "GraphQL Developer",
    "PostgreSQL Database Expert",
    "MySQL Developer",
    "MongoDB Specialist",
    "Redis Cache Implementation",
    "Prisma ORM Developer",
    "Express.js Backend",
    "Software Architecture Design",
    "Scalable System Development",
    "Backend Performance Optimization",
    "Cloud Infrastructure Setup",
  ],
  authors: [{ name: "Muhammad Ary Widodo" }],
  creator: "Muhammad Ary Widodo",
  // viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.jpg", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.jpg",
  },
  openGraph: {
    title: "Muhammad Ary Widodo - Backend Developer Portfolio",
    description: "Experienced Backend Developer specializing in Node.js, NestJS, and scalable API development.",
    url: "https://www.muhammad-ary.my.id",
    siteName: "Ary Widodo Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ary Widodo - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ary Widodo - Backend Developer Portfolio",
    description: "Experienced Backend Developer specializing in Node.js, NestJS, and scalable API development.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      <head>
        <meta name="msvalidate.01" content="C60A35A3E889CB1C17398FC0AA243699" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Ary Widodo",
              jobTitle: "Backend Developer",
              description:
                "Experienced Backend Developer specializing in Node.js, NestJS, and scalable API development",
              url: "https://arywidodo.dev",
              sameAs: ["https://github.com/arywidodo", "https://linkedin.com/in/arywidodo"],
              knowsAbout: [
                "Node.js",
                "NestJS",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "API Development",
                "Backend Architecture",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Backend Developer",
              },
            }),
          }}
        />
      </head>
      <body className="font-nunito">
        {children}
        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-border bg-slate-700">
          <p className="">© 2025 Muhammad Ary Widodo</p>
        </div>
      </body>
    </html>
  )
}
