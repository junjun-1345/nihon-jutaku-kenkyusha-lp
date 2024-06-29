// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>株式会社日本住宅研究社</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header className="bg-gray-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">株式会社日本住宅研究社</h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              事業内容
            </a>
            <a href="#" className="hover:text-gray-300">
              会社概要
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
            >
              お問い合わせ・ご相談
            </a>
          </nav>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        <div className="relative h-96 mb-8">
          <Image
            src="/city-view.jpg"
            alt="都市の景色"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">事業内容</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <Link href="/contact">コンタクト</Link>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">
              4つの主軸のアプローチ
            </h3>
            <p className="text-gray-600 mb-4">
              日本住宅研究社の主軸のアプローチ方法は主に4つ
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>事業内容</li>
              <li>放課後等デイサービス事業</li>
              <li>保育園運営</li>
              <li>不動産仲介</li>
              <li>コンサルティング/研修</li>
            </ul>
          </div>

          <div className="col-span-3 space-y-8">
            <section>
              <h3 className="text-2xl font-semibold mb-4">
                放課後等デイサービス事業
              </h3>
              <p className="text-gray-600">
                当社の放課後等デイサービスは、子どもたちの可能性を引き出し、個性を伸ばすプログラムを提供します。...
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">保育園運営</h3>
              <p className="text-gray-600">
                当社の保育園運営サービスは、子どもたちの健全な成長と発達を支援し、保護者の方々の就労を支援します。...
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">不動産仲介</h3>
              <p className="text-gray-600">
                当社の不動産仲介サービスは、住宅から商業用不動産に至るまで、幅広い不動産を取り扱います。...
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4">
                コンサルティング/研修
              </h3>
              <p className="text-gray-600">
                当社のコンサルティングおよび研修サービスは、最新のトレンドや専門知識を活用し、クライアントの課題解決をサポートします。...
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          © 2024 株式会社日本住宅研究社. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}
