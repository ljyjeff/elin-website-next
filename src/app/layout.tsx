import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Space_Mono } from 'next/font/google';
import theme from '@/theme';
import NavigationBar from "@/components/navbar/NavigationBar";
import { Card, Container, CssBaseline } from "@mui/material";


const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Elin Hua",
  description: "Elin Hua's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={spaceMono.variable}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>

            <NavigationBar />

            <Container maxWidth='lg'>
              {children}
            </Container>

            <Card sx={{height: 100}}>{/* footer */}</Card>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
