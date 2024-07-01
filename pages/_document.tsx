import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <!-- Google tag (gtag.js) --> */}

          <Script
            async
            strategy="beforeInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
          />

          <Script strategy="beforeInteractive" id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}');
          `}
          </Script>
          {/* <!-- END Google tag (gtag.js) --> */}

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          {/* <GoogleAnalytics gaId={process.env.GOOGLE_MEASUREMENT_ID || ""} /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
        {/* <GoogleAnalytics gaId={process.env.GOOGLE_MEASUREMENT_ID || ""} /> */}
      </Html>
    );
  }
}
