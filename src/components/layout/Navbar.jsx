import React from "react";
import Link from "next/link";
import { Home, Info, FileText, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">BrandName</div>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <div className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
                <Info className="w-5 h-5" />
                <span>About</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <div className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
                <FileText className="w-5 h-5" />
                <span>Blog</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="flex items-center space-x-2 hover:text-gray-300 transition duration-300">
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
