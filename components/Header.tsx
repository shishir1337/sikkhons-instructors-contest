'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="https://sikkhon.com/instructor-registration/" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Become an Instructor
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 font-medium hover:text-blue-600 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="https://sikkhon.com/instructor-registration/" passHref>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Become an Instructor
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

