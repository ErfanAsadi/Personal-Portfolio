/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/display-name */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createEmotionCache } from "$lib/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import { languageDirections } from "$utils/hooks/localeDirections";
import { mediaStyles } from "styles/Media";

export default class MyDocument extends Document {
  render = () => (
    <Html
      lang={this.props.locale}
      dir={languageDirections[this.props.locale || "en"]}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&family=Mitr:wght@200;300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  //   const sheets = new ServerStyleSheets();

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function (props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    locale: ctx?.locale || "en",
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
    pagePathName: ctx.pathname,
  };
};
