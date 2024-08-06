import { Inter, Lato, Open_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Fit Future Healtcare",
  description: "Serving Health and Happiness"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/c713401fe7.js" crossOrigin="anonymous"></script>
        {/* <link rel="stylesheet" href="css/fontawesome.css" /> */}
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-gray-100`}>
        <header>
          <Header />
        </header>
        <hr />
        <navbar>
          <Navbar />
        </navbar>
        <main className="">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
