"use client";

import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";
import InfoSection from "./components/section";
import GridSection from "./components/gridSection";

export default function Home() {
  const items = [
    "アイテム1",
    "アイテム2",
    "アイテム3",
    "アイテム4",
    "アイテム5",
    "アイテム6",
    "アイテム7",
    "アイテム8",
    "アイテム9",
    "アイテム10",
    "アイテム11",
    "アイテム12",
  ];

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
          title="社会福祉DX人材育成研修"
          label="e-Learning"
          price="148,000"
          summary="本研修では、LLM（大規模言語モデル）や文章生成AIについての幅広い知識やスキルを身につける事ができます。自然言語処理や機械学習、強化学習などの技術を理解し、LLMのセキュリティリクすや情報の不確実性に対するリテラシーを向上させます。さらに、プロンプトエンジニアリングの基礎を学び、要約、ソリューション提示、アイディア列挙などの具体的なプロンプトの作成方法を実践します。ケーススタディを通じて、日常業務におけるLLMの活用法を体験し、日常の様々な業務にAIを活用できるスキルを身につけます。"
          merits={[
            {
              title: "最新AI技術の深い知識習得",
              description:
                "LLMや文章生成AIの概要と進化、ビジネスへの影響を理解し、AI時代における最新の知識やスキルを身に付け、業務活用スキルを高めることができます。",
            },
            {
              title: "プロンプトエンジニアリングスキルの実践",
              description:
                "具体的なプロンプトエンジニアリングスキルを習得し、要約、ソリューション提示、アイディア列挙など、日々の業務で役立つプロンプト作成の技術を実践的に学ぶことで、業務効率化や問題解決能力を向上させます。",
            },
            {
              title: "AIツール活用のためのスキル獲得",
              description:
                "AIツールを効果的かつ安全に活用するためのリテラシーを高め、セキュリティリスクや情報の不確実性を正しく認識し、適切に対応することで、安心してAIを業務に取り入れることができるようになります。これにより、AI活用における最大限の利益を引き出すことが可能となります。",
            },
          ]}
          programs={[
            {
              title: "AIと自然言語処理の基礎と実践",
              description:
                "AIとNLPの基本理論から始め、実際のデータ処理や対話システム開発を体験するコースです。",
            },
            {
              title: "効果的なプロンプト作成と実践演習",
              description:
                "プロンプトエンジニアリングの手法を学び、実際のシナリオでプロンプトを設計し、コミュニケーション能力を向上させます。",
            },
            {
              title: "ビジネス文書作成と実務演習プログラム",
              description:
                "報告書やプレゼン資料の作成技術を磨き、実践演習で実務での即戦力を身につけます。",
            },
          ]}
          industrys={["社会福祉事業", "製造業", "農林・水産業"]}
        />
      </div>
    </main>
  );
}
