import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/NavComponent";
import ToasterProvider from "@/components/ToasterProvider";
import ReduxProvider from "./ReduxProvider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: {
    default: 'Cromax Photography | Capturing Real Moments',
    template: '%s - Cromax Photography'
  },
  description: "Cromax is a visual storytelling brand capturing unforgettable moments in fashion, events, and real-life documentaries. Based in Nigeria, telling your story frame by frame.",
  keywords: 'Cromax, Cromax Photography, documentary photography, fashion photography, event photography, portrait photography, Nigerian photographer, visual storytelling',
  robots: 'index, follow',
  authors: [{ name: 'Cromax' }, { name: 'Ifeivbunu Godskey' }],
  metadataBase: new URL('https://cromaxlens.vercel.app'),
  openGraph: {
    title: 'Cromax Photography | Capturing Real Moments',
    description:
      'Visual storytelling that goes beyond aesthetics. Experience fashion, culture, and life through the lens of Cromax.',
    url: 'https://cromaxlens.vercel.app',
    siteName: 'Cromax Photography',
    images: [
      {
        url: 'https://cromaxlens.vercel.app/banners/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Cromax Photography Cover',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cromax Photography',
    description:
      'Experience raw moments, vibrant fashion, and powerful documentary visuals with Cromax.',
    images: [
      'https://res.cloudinary.com/dmgooo1dr/image/upload/v1744451466/banner_ugoqmv.jpg',
      'https://cromaxlens.vercel.app/banners/banner.jpg',
    ]
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased`}
      >
        <ReduxProvider>
          <div className='bg-black min-h-[100vh]'>
            <div className='max-w-7xl mx-auto'>
              <header className='py-4'>
                <NavComponent />
              </header>
              {children}
              <footer className='text-xs lg:text-sm text-center text-white/45 py-10'>
                <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This website was made by Cromax</p>
              </footer>
            </div>
            <ToasterProvider />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
