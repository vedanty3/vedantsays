import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VedantSays: Code Your Life",
  description: `Discover programming mastery and lifestyle insights at VedantSpeaks. Explore our blog for in-depth articles on MERN stack development, JavaScript tricks, competitive programming strategies, fashion tips, and health advice. Join us on this journey of learning, creating, and living your best life.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
