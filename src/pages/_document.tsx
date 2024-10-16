import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <Main />
          <NextScript />
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
