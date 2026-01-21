import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sellsmart - Single Product Landing page HTML Template",
  description: "Smarter time smarter life - Sellsmart smartwatch landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/mousecursor.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        {children}

        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
