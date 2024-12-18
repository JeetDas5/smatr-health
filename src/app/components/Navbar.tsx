// Navbar.js
"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user, error, isLoading } = useUser();

  console.log("Current user: ", user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav className="bg-card text-card-foreground py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
          SmartHealth Navigator
        </Link>
        <div className="space-x-4 gap-2 md:gap-0">
        {user ? (
          <div className="flex flex-row">
          <p className="text-white m-2 text-xl ">
            Welcome {user.name}
          </p>
          <Link
            href="/api/auth/logout"
            className="text-green-800 text-lg bg-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Logout
          </Link>
          </div>
        ) : (
          <Link
            href="/api/auth/login"
            className="text-green-800 text-lg bg-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Login
          </Link>
        )}

          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
