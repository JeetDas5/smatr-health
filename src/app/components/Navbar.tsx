// Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-card text-card-foreground py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
          SmartHealth Navigator
        </Link>
        <div className="space-x-4 gap-2 md:gap-0">
          <Link
            href="/login"
            className="text-green-800 text-lg bg-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-green-800 text-lg bg-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
