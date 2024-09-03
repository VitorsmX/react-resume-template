import {Head, Html, Main, NextScript} from 'next/document';

// next/document <Head /> vs next/head <Head />
//
// next/document Head is rendered once on the server. This is different from next/head which will
// rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        {/* google translate breaks react:
          - https://github.com/facebook/react/issues/11538
          - https://bugs.chromium.org/p/chromium/issues/detail?id=872770 */}
        <meta content="notranslate" name="google" />
        <meta property="og:image" content="https://i.imgur.com/CKaPl4m.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Home Page" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
