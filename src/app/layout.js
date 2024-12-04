import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(main)/components/Navbar";
import Footer from "./(main)/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aerotech Technicians",
  description:
    " Aerotech Technicians provides expert aircraft maintenance services in Harare, ensuring safety, reliability, and precision for all your aviation needs. Our skilled team specializes in comprehensive inspections, repairs, and overhauls to keep your aircraft in optimal condition. Trust Aerotech Technicians for exceptional service and industry-leading standards in aircraft maintenance. This description focuses on the key services and expertise your company offers, which is more likely to attract search engine attention and provide value to your visitors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
