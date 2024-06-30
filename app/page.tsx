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

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <Link href="/contact">コンタクト</Link>
          <Link href="/consulting-training">コンサルティング | 研修</Link>
          <div className="bg-red-500">大野</div>
        </div>
      </main>
    </div>
  );
}
