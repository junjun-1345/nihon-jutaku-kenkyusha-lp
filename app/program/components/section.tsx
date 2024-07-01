import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spacer } from "@nextui-org/spacer";
import AppButton from "@/components/button";

interface InfoSectionProps {
  title: string;
  label: string;
  price: string;
  summary: string;
  merits: { title: string; description: string }[];
  programs: { title: string; description: string }[];
  industrys: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  label,
  price,
  summary,
  merits,
  programs,
  industrys,
}) => {
  return (
    <>
      <div className="bg-blue-500 text-white p-4 flex flex-col sm:flex-row justify-between items-center w-full rounded-t-md">
        <h2 className="text-lg text-center sm:text-left">{title}</h2>
        <span className="bg-white text-blue-500 py-1 px-3 rounded-full mt-2 sm:mt-0">
          {label}
        </span>
      </div>
      <section className="bg-white border-2 border-blue-500 overflow-hidden">
        <Spacer y={16} />
        <div className="flex justify-center items-center">
          <h2 className="text-4xl">¥{price}- (税込)</h2>
        </div>
        <Spacer y={16} />
        <div className="px-4 md:px-16">
          <section>
            <div className="relative border-2 border-black rounded-md mt-4">
              <h3 className="absolute left-2 -top-4">
                <span className="bg-white text-black-500 px-2">概要</span>
              </h3>
              <div className="py-3 pl-4 pr-2">{summary}</div>
            </div>
          </section>
          <Spacer y={16} />
          <section>
            <div className="relative border-2 border-black rounded-md mt-4">
              <h3 className="absolute left-2 -top-4">
                <span className="bg-white text-black-500 px-2">メリット</span>
              </h3>
              <div className="py-3 pl-4 pr-2">
                {merits.map((merit, index) => (
                  <div key={index}>
                    <p className="font-medium">
                      {index + 1}. {merit.title}
                    </p>
                    <p>{merit.description}</p>
                    {index !== programs.length - 1 && <Spacer y={8} />}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Spacer y={16} />

          <section className="mb-8">
            {programs.map((program, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p>{program.description}</p>
                <Spacer y={8} />
                {index !== programs.length - 1 && (
                  <hr className="border-l-8 border-blue" />
                )}
              </div>
            ))}
          </section>
        </div>
      </section>
      <Spacer y={8} />
      <div className="flex justify-center items-center">
        <div className="relative w-32 h-16 md:w-64 md:h-32">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[50px] border-r-[50px] border-t-[50px] md:border-l-[100px] md:border-r-[100px] md:border-t-[100px] border-l-transparent border-r-transparent border-t-blue-500"></div>
        </div>
      </div>
      <Spacer y={8} />
      <section className="flex flex-col md:flex-row items-center border-2 border-blue-500 px-4 py-6 md:px-12 relative mb-16">
        <div className="absolute left-0 top-[-20px] md:top-[-40px] w-20 h-20 md:w-40 md:h-40">
          <Image
            src="/program_left.png"
            alt="左端の画像"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="flex-1 z-10 px-4 md:px-20 mt-0 md:mt-0">
          <h2 className="text-xl md:text-2xl mb-2 text-center">対象者</h2>
          <h2 className="text-xl md:text-2xl mb-2 text-center">
            AIを活用したい全ての社員におすすめ
          </h2>
        </div>
        <div className="absolute right-0 top-[-20px] md:top-[-40px] w-20 h-20 md:w-40 md:h-40">
          <Image
            src="/program_right.png"
            alt="右端の画像"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center bg-blue-500 text-white px-2 py-3 md:px-6 relative">
        <div className="flex-1 z-10">
          <h2 className="text-xl md:text-2xl mb-2">おすすめの業界</h2>
          <ul className="list-disc pl-4 md:pl-10 font-extralight">
            {industrys.map((industry, index) => (
              <li key={index}>{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex justify-center my-10">
        <AppButton>
          <Link href={"/contact"}>
            研修に関するお問い合わせ・ご相談はこちらから
          </Link>
        </AppButton>
      </div>
    </>
  );
};

export default InfoSection;
