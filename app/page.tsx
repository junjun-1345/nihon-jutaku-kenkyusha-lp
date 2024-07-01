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
      <SlantedImage />
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
        AI・DX人材育成研修
        <br />
        取り入れてみませんか？
      </div>
      <div className="absolute inset-x-0 top-5 md:top-10 lg:top-14 font-semibold text-white text-center tracking-normal leading-snug text-xl md:text-2xl lg:text-3xl">
        株式会社日本住宅研究社
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="relative w-full h-auto flex justify-center items-center mt-10 md:mt-20">
      <div className="absolute inset-6 md:inset-32 bg-black/50 blur-3xl"></div>
      <div className="relative z-10 px-4 py-8 md:px-40 md:py-20 mx-2 md:mx-40 bg-white rounded-lg font-light">
        <p className="text-black text-base md:text-xl leading-normal text-left md:text-center">
          日本住宅研究社は、
          <Spacer y={8} />
          不動産仲介事業、放課後デイサービス運営事業、保育園運営事業という、
          <Spacer y={4} />
          それぞれ異なる分野で事業をこれまで展開してきました。
          <Spacer y={8} />
          それぞれの事業を通じて、顧客が抱える課題と向き合い、
          <Spacer y={4} />
          解決へと導くことで、社会に貢献してきたという自負があります。
          <Spacer y={8} />
          しかし、近年急速に進むデジタル化の波は、私たちの事業にも大きな影響を与え始めていました。
          <Spacer y={4} />
          顧客のニーズはますます複雑化し、
          <Spacer y={4} />
          従来のやり方では対応できない場面が増えてきました。
          <Spacer y={8} />
          そこで、私たちは新たな挑戦を決意しました。
          <Spacer y={8} />
          <span className="text-[#FFDE00] font-bold">
            「DX人材育成で、企業の未来を創る」
          </span>
          <Spacer y={8} />
          私たちは、これまで培ってきた不動産、福祉、教育の専門知識と、
          <Spacer y={4} />
          デジタル技術を活用した経験を活かし、
          <Spacer y={4} />
          企業のDX人材育成を支援するコンサルティング研修事業を開始しました。
          <Spacer y={8} />
          今回の研修事業では、様々な業界の企業に対して、
          <Spacer y={4} />
          単にデジタルツールの使い方を教えるだけでなく、
          <Spacer y={4} />
          企業全体の業務改革を視野に入れた、実践的なDX人材育成プログラムを提供します。
          <Spacer y={8} />
          私たちは、企業のDX人材育成を通じて、
          <Spacer y={4} />
          日本企業の競争力強化に貢献したいです。
          <Spacer y={8} />
          そして、持続可能な社会の実現に向けて、
          <Spacer y={4} />
          新たな価値を生み出すお手伝いをしていきたいと思っています。
        </p>
        <Spacer y={8} />
        <h2 className="text-center text-2xl md:text-4xl">
          株式会社日本住宅研究社
        </h2>
      </div>
    </div>
  );
};

const SlantedImage = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-visible mt-10 md:mt-20">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-2/3 max-w-3xl aspect-[16/9]">
        <div className="w-full h-full overflow-hidden transform rotate-[10deg] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <Image
            src="/top_1.jpg"
            alt="Slanted decorative image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

const BusinessContent: React.FC = () => {
  return (
    <div className="relative w-full h-auto flex justify-center items-center mt-10 md:mt-20">
      <div className="absolute inset-6 md:inset-32 bg-black/50 blur-3xl"></div>
      <div className="relative z-10 px-6 py-12 md:px-10 md:py-12 mx-4 md:mx-8 bg-white rounded-lg w-full max-w-6xl">
        <Section
          title="事業内容"
          subtitle="コンサルティング/研修"
          content={
            <>
              当社のコンサルティングおよび研修サービスは、長年にわたる保育事業、介護事業、不動産仲介事業で培った豊富な経験とノウハウを基に展開しています。
              <br />
              <br />
              これらの事業を通じて学んだ運営管理のベストプラクティスや顧客対応の技術を展開しています。企業や組織の成長と発展を支援する研修プログラムを提供します。
              <br />
              <br />
              また業界の最前線で活躍するための必要な実践的なスキルと知識を養うことを目的とした当社の研修は、参加者が現場で即座に活かせる内容を含みます。
              <br />
              <br />
              経験豊富なトレーナー陣が、実践的なケーススタディや役立つツールを活用したトレーニングを通じて、参加者の能力向上と組織の成果向上をサポートします。
            </>
          }
          imageSrc="/top_2.jpg"
          imageAlt="DX人材育成研修のイラスト"
          linkHref="/consulting-training"
          linkText="さらに詳しく　→"
        />
        <Spacer y={16} />
        <Section
          title="会社概要"
          content="株式会社日本住宅研究社は、神奈川県大和市を拠点とし、放課後等デイサービス、保育園運営、不動産仲介、そしてコンサルティング/研修事業を行っております。"
          imageSrc="/top_3.jpg"
          imageAlt="DX人材育成研修のイラスト"
          linkHref="/about"
          linkText="さらに詳しく　→"
        />
        <Spacer y={16} />
        <Section
          title="社会福祉DX人材育成研修"
          content="デジタル技術を活用した社会福祉サービスの効率化と質の向上を図るための専門知識とスキルを身につけることができます。データ管理と分析能力の強化を通じて、利用者のニーズに応じたサービス提供を最適化します。"
          imageSrc="/top_4.jpg"
          imageAlt="DX人材育成研修のイラスト"
          linkHref="/contact"
          linkText="さらに詳しく　→"
        />
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  subtitle?: string;
  content: string | JSX.Element;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  linkText: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  linkHref,
  linkText,
}) => {
  return (
    <section className="font-light">
      {title && <h2 className="text-2xl">{title}</h2>}
      <Spacer y={4} />
      <hr className="mb-8 border-l-8 border-black" />
      {subtitle && <h2 className="text-2xl">{subtitle}</h2>}
      <Spacer y={16} />
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1">
          <p>{content}</p>
        </div>
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </div>
      <Spacer y={8} />
      <div className="flex justify-end">
        <AppButton>
          <Link href={linkHref}>{linkText}</Link>
        </AppButton>
      </div>
    </section>
  );
};
