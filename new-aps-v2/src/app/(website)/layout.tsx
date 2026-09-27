import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="flex min-h-screen flex-col">
        {children}
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}