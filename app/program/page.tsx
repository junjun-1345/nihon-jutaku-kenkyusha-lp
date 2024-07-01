"use client";

import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";
import InfoSection from "./components/section";

import { csvData1, csvData2, csvData3, csvData4, csvData5 } from "@/data/csv";

import GridSection from "./components/gridSection";
import { data1, data2, data3, data4, data5 } from "@/data/program";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本住宅研究社　-社会福祉DX人材育成研修",
  description: "日本住宅研究社の詳細情報がご確認いただけます。",
};

export default function Home() {
  return (
    <main>
      <div className="max-w-full mx-auto">
        <div className="relative w-full">
          <Image
            src="/program_image.jpg"
            alt="DX人材育成研修のイラスト"
            layout="responsive"
            width={1600}
            height={900}
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div className="my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-40">
        <section>
          <h2 className="text-2xl font-bold">社会福祉DX人材育成研修</h2>
          <Spacer y={4} />
          <hr className="mb-8 border-l-8 border-black" />
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <p>
              社会福祉DX人材育成研修プログラムは、デジタル技術を活用して
              社会福祉サービスの提供を進化させる専門家を育成します。
              <br />
              参加者はデータ分析、クラウドソリューションの導入、
              顧客関係管理システムの最適化など、
              最新のテクノロジーとその適用方法を学びます。
              <br />
              <Spacer y={8} />
              また、エージェントとしての能力強化やオンラインケアの展開、
              プライバシーとセキュリティの考慮なども重視します。
              <br />
              <Spacer y={8} />
              プログラムは実務に即したトレーニングと実践的なプロジェクトを通じて、
              参加者が社会福祉分野でのDXイノベーションを推進するための
              リーダーシップとスキルを身につけることを目指します。
              <br />
            </p>
          </div>
        </section>
        <Spacer y={20} />
        <section className="flex flex-col lg:flex-row items-center bg-blue-500 text-white px-4 sm:px-8 lg:px-12 py-6 relative">
          <div className="flex-1 z-10">
            <h2 className="text-2xl mb-2">効果・特徴</h2>
            <ul className="list-disc pl-4 sm:pl-8 lg:pl-10 font-extralight">
              <li>効果的なコミュニケーションスキル</li>
              <li>QOL向上プログラム</li>
              <li>業務改善のためのDXと生成AI入門</li>
            </ul>
          </div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 lg:absolute lg:right-10 lg:top-1/2 lg:transform lg:-translate-y-1/2 mt-4 lg:mt-0">
            <Image
              src="/discovery.png"
              alt="発見のイラスト"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </section>
        <Spacer y={40} />
        <InfoSection
          title={data1.title}
          label={data1.label}
          price={data1.price}
          summary={data1.summary}
          merits={data1.merits}
          programs={data1.programs}
          industrys={data1.industrys}
        />
        <Spacer y={40} />
        <GridSection data={csvData1} />

        <Spacer y={40} />
        <InfoSection
          title={data2.title}
          label={data2.label}
          price={data2.price}
          summary={data2.summary}
          merits={data2.merits}
          programs={data2.programs}
          industrys={data2.industrys}
        />
        <Spacer y={40} />
        <GridSection data={csvData2} />

        <Spacer y={40} />
        <InfoSection
          title={data3.title}
          label={data3.label}
          price={data3.price}
          summary={data3.summary}
          merits={data3.merits}
          programs={data3.programs}
          industrys={data3.industrys}
        />
        <Spacer y={40} />
        <GridSection data={csvData3} />

        <Spacer y={40} />
        <InfoSection
          title={data4.title}
          label={data4.label}
          price={data4.price}
          summary={data4.summary}
          merits={data4.merits}
          programs={data4.programs}
          industrys={data4.industrys}
        />
        <Spacer y={40} />
        <GridSection data={csvData4} />

        <Spacer y={40} />
        <InfoSection
          title={data5.title}
          label={data5.label}
          price={data5.price}
          summary={data5.summary}
          merits={data5.merits}
          programs={data5.programs}
          industrys={data5.industrys}
        />
        <Spacer y={40} />
        <GridSection data={csvData5} />
      </div>
    </main>
  );
}
