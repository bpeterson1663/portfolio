'use client'

import { useMemo } from 'react';

import { ColorSchemeScript, MantineProvider, MantineTheme, createTheme, mantineHtmlProps } from '@mantine/core';
import Navigation from './components/navigation/navigation';

import '@mantine/core/styles.css';
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = useMemo(
    () =>
      createTheme({
        colors: {
          dark: [
            '#0D0D0D', // Darkest
            '#121212', // Background
            '#1A1A1A',
            '#1E1E1E', // Card Background
            '#252525',
            '#2C2C2C',
            '#343434',
            '#3D3D3D',
            '#F5F5F5', // **Updated Primary Text**
            '#FFFFFF', // **Brighter White for Emphasis**
          ],
          accent: [
            '#001F3F',
            '#003366',
            '#004C99',
            '#0066CC',
            '#007BFF', // Button Highlights
            '#0096FF',
            '#00AAFF',
            '#00BFFF', // Primary Accent (Cyan)
            '#33CCFF',
            '#66D9FF',
          ],
        },
        primaryColor: 'accent', 
        defaultRadius: 'md',
        components: {
          Button: {
            styles: (theme: MantineTheme) => ({
              root: {
                color: theme.colors.dark[3],
              }
            })
          },
          Card: {
            styles: (theme: MantineTheme) => ({
              root: {
                backgroundColor: 'black',
                color: theme.colors.dark[8]
              }
            })
          },
          Badge: {
            styles: (theme: MantineTheme) => ({
              root: {
                backgroundColor: theme.colors.accent[5],
                color: theme.colors.dark[8],
              }
            })
          },
        },
      }),
    []
  );

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          <Navigation />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}