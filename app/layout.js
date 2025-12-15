import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Manish Patil | Web Developer Portfolio",
  description: "Aspiring Full Stack Web Developer skilled in React, Next.js, Tailwind CSS",
  keywords: 'web developer, react, next.js, portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}