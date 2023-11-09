import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Remove a blur from any image with Blur Remover. Try it today!"
          />
          <meta property="og:site_name" content="Blur Remover" />
          <meta
            property="og:description"
            content=""
          />
          <meta property="og:title" content="Blur Remover" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blur Remover" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
