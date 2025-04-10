import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/NavComponent";

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
  metadataBase: new URL('https://cromax-typescript.vercel.app'),
  openGraph: {
    title: 'Cromax Photography | Capturing Real Moments',
    description:
      'Visual storytelling that goes beyond aesthetics. Experience fashion, culture, and life through the lens of Cromax.',
    url: 'https://cromax-typescript.vercel.app',
    siteName: 'Cromax Photography',
    images: [
      {
        url: 'https://cromax-typescript.vercel.app/banners/banner.png',
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
      'https://cromax-typescript.vercel.app/banners/banner.png',
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
          {/* <ScrollToTop /> */}
        </div>
      </body>
    </html>
  );
}
