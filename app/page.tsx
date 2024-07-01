import React from "react";
import Image from "next/image";
import AppButton from "@/components/button";
import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";
import { Metadata } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div className="relative w-full bg-blue">
      <Head>
        <title>TOP | 株式会社日本住宅研究社</title>
      </Head>
      <Header />
      <Introduction />
      <Spacer y={80} />
      <BusinessContent />
    </div>
  );
}

const Header = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[925px]">
      <div className="absolute inset-0">
        <div className="max-w-full mx-auto h-full">
          <Image
            src="/top_1.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[#4b91b8b2]" />
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 font-semibold text-white text-center tracking-wide leading-snug text-2xl md:text-4xl lg:text-6xl">
        すべての人に
        <br />
        AI・DXの研修を
      </div>
    </div>
  );
};

const Introduction: React.FC = () => {
  const paragraphs = [
    "日本住宅研究社は、不動産仲介事業、放課後デイサービス運営事業、保育園運営事業というそれぞれ異なる分野で事業をこれまで展開してきました。",
    "それぞれの事業を通じて、顧客が抱える課題と向き合い解決へと導くことで、社会に貢献してきたという自負があります。",
    "しかし、近年急速に進むデジタル化の波は私たちの事業にも大きな影響を与え始めていました。顧客のニーズはますます複雑化し従来のやり方では対応できない場面が増えてきました。",
    "そこで、私たちは新たな挑戦を決意しました。",
    <span key="highlight" className="text-blue font-bold">
      「DX人材育成で、企業の未来を創る」
    </span>,
    "私たちは、これまで培ってきた不動産、福祉、教育の専門知識とデジタル技術を活用した経験を活かし企業のDX人材育成を支援するコンサルティング研修事業を開始しました。",
    "今回の研修事業では、様々な業界の企業に対して単にデジタルツールの使い方を教えるだけでなく企業全体の業務改革を視野に入れた実践的なDX人材育成プログラムを提供します。",
    "私たちは、企業のDX人材育成を通じて日本企業の競争力強化に貢献したいです。",
    "そして、持続可能な社会の実現に向けて新たな価値を生み出すお手伝いをしていきたいと思っています。",
  ];

  return (
    <div className="relative w-full h-auto flex justify-center items-center mt-10 md:mt-20">
      <div className="absolute inset-0 w-full max-w-4xl mx-auto h-full bg-black/50 blur-3xl transform scale-105 origin-center"></div>
      <div className="relative z-10 p-8 md:p-20 mx-2 md:mx-40 bg-white rounded-lg font-light max-w-4xl w-full">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-black font-light md:text-xl leading-normal text-left mb-8"
            style={{ fontFamily: "serif" }}
          >
            {paragraph}
          </p>
        ))}
        <h2
          className="text-left text-2xl md:text-4xl mt-8"
          style={{ fontFamily: "serif" }}
        >
          株式会社日本住宅研究社
        </h2>
      </div>
    </div>
  );
};
const BusinessContent: React.FC = () => {
  return (
    <div className="relative w-full h-auto flex justify-center items-center mt-10 md:mt-20 pb-40">
      <div className="absolute inset-0 w-full max-w-6xl mx-auto h-full bg-black/50 blur-3xl transform scale-105 origin-center"></div>
      <div className="relative z-10 px-6 py-12 md:px-10 md:py-12 mx-4 md:mx-8 bg-white rounded-lg w-full max-w-6xl">
        <section>
          <h2 className="text-2xl font-bold">事業内容</h2>
          <Spacer y={4} />
          <hr className="mb-8 border-l-8 border-black" />
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 ">
              <p className="text-2xl">DX人材研修</p>
              <p className="mt-8">
                DX人材とは、デジタル技術を使って企業や社会の変革を推進するスキ
                ルを持った人々のことです。デジタル技術の知識だけでなく、ビジネ
                スの理解やプロジェクト管理能力、問題解決力、コミュニケーション
                能力が求められます。DX人材は、現代の急速な技術進化に対応し、企
                業の競争力を高めるために不可欠な存在であると言えます。弊社では、
                DX人材育成の研修事業に取り組んでいます。
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/top_2.jpg"
                alt="DX人材育成研修のイラスト"
                width={700}
                height={475}
              />
            </div>
          </div>

          <Spacer y={8} />

          <div className="flex justify-end">
            <AppButton>
              <Link href={"/program"}>詳しい研修内容はこちら</Link>
            </AppButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">会社概要</h2>
          <Spacer y={4} />
          <hr className="mb-8 border-l-8 border-black" />
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 ">
              株式会社日本住宅研究社は、神奈川県大和市を拠点とし、放課後等デイサービス、保育園運営、不動産仲介、そしてDX人材育成研修をしています。
            </div>
            <div className="flex-1">
              <Image
                src="/top_3.jpg"
                alt="DX人材育成研修のイラスト"
                width={700}
                height={475}
              />
            </div>
          </div>

          <Spacer y={8} />

          <div className="flex justify-end">
            <AppButton>
              <Link href={"/about"}>さらに詳しく　→</Link>
            </AppButton>
          </div>
        </section>
      </div>
    </div>
  );
};
