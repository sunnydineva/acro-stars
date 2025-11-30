import type { Metadata } from 'next';
import '../styles/variables.css';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Акро Старс - Варна | Клуб по спортна акробатика',
  description: 'Клуб по спортна акробатика с голямо сърце. Тук децата се учат да летят – с усмивка, дисциплина и вдъхновение.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>
          <div className="main-bar-gradient"></div>
          {children}
          <div className="main-bar-gradient"></div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
