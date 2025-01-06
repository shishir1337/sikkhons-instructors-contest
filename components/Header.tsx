"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="https://sikkhon.com" className="flex items-center">
          <Image
            src="/sikkhon-logo.webp"
            alt="Sikkhon Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
