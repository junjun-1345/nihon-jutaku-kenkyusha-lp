import Link from "next/link";
import VerticalLine from "./verticalLine";
import AppButton from "./button";

const Home = () => {
  return (
    <div>
      <header className="bg-gray text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl">
            <Link href={"/"}>株式会社日本住宅研究社</Link>
          </h1>
          <nav>
            <ul className="flex items-center space-x-4 text-sm font-light">
              <li>
                <Link href="/business" className="hover:text-blue-300">
                  事業内容
                </Link>
              </li>
              <VerticalLine height="h-8" color="bg-white" className="mx-4" />
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  会社概要
                </Link>
              </li>
              <VerticalLine height="h-8" color="bg-white" className="mx-4" />
              <li>
                <AppButton>
                  <Link href="/contact">お問い合わせ・ご相談</Link>
                </AppButton>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-4">{/* メインコンテンツ */}</div>
      </main>
    </div>
  );
};

export default Home;
