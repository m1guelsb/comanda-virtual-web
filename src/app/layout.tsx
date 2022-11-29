import { QueryProvider } from '@/contexts/QueryContext';
import { stitchesGlobalStyles } from '@/styles/global.styles';
import { getCssText } from '@/styles/stitches.config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  stitchesGlobalStyles();

  return (
    <html lang="pt-br">
      <head>
        <title>Comanda Virtual</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="description" content="Comanda Virtual" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* stitches ssr config */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        {/* fonts preload */}
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
