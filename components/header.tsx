"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AppButton from "./button";
import VerticalLine from "./verticalLine";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-gray text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl">
            <Link href="/">株式会社日本住宅研究社</Link>
          </h1>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-light　">
            <li className="list-none">
              <Link href="/business" className="hover:text-blue-300">
                事業内容
              </Link>
            </li>
            <VerticalLine height="h-8" color="bg-white" className="mx-4" />
            <li className="list-none">
              <Link href="/about" className="hover:text-blue-300">
                会社概要
              </Link>
            </li>
            <VerticalLine height="h-8" color="bg-white" className="mx-4" />
            <li className="list-none">
              <AppButton>
                <Link href="/contact">お問い合わせ・ご相談</Link>
              </AppButton>
            </li>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 text-sm font-light mt-4">
              <li>
                <Link href="/business" className="hover:text-blue-300">
                  事業内容
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-300">
                  会社概要
                </Link>
              </li>

              <li>
                <AppButton>
                  <Link href="/contact">お問い合わせ・ご相談</Link>
                </AppButton>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
