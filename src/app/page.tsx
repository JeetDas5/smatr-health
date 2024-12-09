// Home.js
import Navbar from '@/app/components/Navbar';
import HomePage from '@/app/pages/Home';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
