import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from './Providers.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docs for contents and research",
  description: "We provides free contents to software engineers and other who are interested in research",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
      </body>
    </html>
  );
}
