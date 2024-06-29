import Link from "next/link";
import VerticalLine from "./verticalLine";
import { Spacer } from "@nextui-org/spacer";

export default function Footer() {
  return (
    <footer className="bg-gray text-white px-4 py-10">
      <div className="container mx-auto flex flex-col items-end">
        <nav>
          <ul className="flex space-x-4 font-thin">
            <li>
              <Link href="/business" className="hover:text-blue-300">
                事業内容
              </Link>
            </li>
            <VerticalLine height="h-8" color="bg-white" className="mx-4" />
            <li>
              <Link href="/about" className="hover:text-blue-300">
                企業概要
              </Link>
            </li>
            <VerticalLine height="h-8" color="bg-white" className="mx-4" />
            <li>
              <Link href="/contact" className="hover:text-blue-300">
                お問い合わせ・ご相談
              </Link>
            </li>
          </ul>
        </nav>
        <Spacer y={6} />
        <h2 className="text-2xl">株式会社日本住宅研究社</h2>
        <Spacer y={2} />
        <p className="text-xs font-thin">©2024 nihon-jutaku-kenkyusha, inc.</p>
      </div>
    </footer>
  );
}
