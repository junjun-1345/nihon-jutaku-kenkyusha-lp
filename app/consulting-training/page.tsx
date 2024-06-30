"use client";

import Image from "next/image";
import AppButton from "@/components/button";
import { Spacer } from "@nextui-org/spacer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-40">
      <section className="">
        <h2 className="text-4xl">コンサルティング/研修</h2>
        <Spacer y={4} />
        <h3 className="text-2xl">生成AIをビジネス活用し業務効率化を進める</h3>
        <Spacer y={20} />
        <p className="font-light">
          当社のコンサルティングおよび研修サービスは、長年にわたる
          保育事業、介護事業、不動産仲介事業で培った豊富な経験とノウハウを基に展開しています。
          <br />
          これらの事業を通じて学んだ運営管理のベストプラクティスや顧客対応の技術を展開しています。
          <br />
          企業や組織の成長と発展を支援する研修プログラムを提供します。
        </p>
        <Spacer y={8} />
        <p className="font-light">
          また業界の最前線で活躍するための必要な実践的なスキルと知識を養うことを目的とした当社の研修は、
          参加者が現場で即座に活かせる内容を含みます。
          <br />
          経験豊富なトレーナー陣が、実践的なケーススタディや役立つツールを活用したトレーニングを通じて、
          参加者の能力向上と組織の成果向上をサポートします。
        </p>
      </section>

      <Spacer y={20} />

      <section>
        <div className="bg-gray text-white p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl">期待できる効果</h2>
          <Spacer y={4} />
          <ul className="list-disc list-inside">
            <li className="mb-2">
              ChatGPTを業務活用できるようになり業務そのものの削減ができる
            </li>
            <li className="mb-2">
              業務の性質やセキュリティリスクを踏まえたうえでの生成AI活用ができるようになる
            </li>
            <li className="mb-2">
              生成AIのトレンドや活用事例を踏まえて自社での活用を検討できる
            </li>
          </ul>
          <Spacer y={8} />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 p-4 bg-white flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-4 text-center bg-gray rounded-full py-1">
                研修前
              </h3>
              <Image
                src="/before.png"
                alt="研修後の状態"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <p className="text-sm mb-2 text-black">
                生成AIを業務で活用するイメージがわいていなかった
              </p>
              <p className="text-sm text-black">
                生成AIの種類やできることについて、よくわかっていなかった
              </p>
            </div>
            <Spacer x={4} />
            <div className="w-full md:w-1/2 p-4 bg-white flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-4 text-center bg-blue-500 rounded-full py-1">
                研修後
              </h3>
              <Image
                src="/after.png"
                alt="研修後の状態"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <p className="text-sm mb-2 text-black">
                生成AIを業務に取り入れることで効率化ができるようになった
              </p>
              <p className="text-sm text-black">
                技術的な仕組みやリスクを踏まえたうえで生成AIを使えるようになった
              </p>
            </div>
          </div>
        </div>
      </section>

      <Spacer y={10} />

      <div className="flex justify-center">
        <AppButton>
          <Link href={"/contact"}>コンサルティング/研修について相談する</Link>
        </AppButton>
      </div>

      <Spacer y={20} />

      <section>
        <h2 className="text-2xl font-bold">社会福祉DX人材育成研修</h2>
        <Spacer y={4} />
        <hr className="mb-8 border-l-8 border-black" />
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex-1">
            <p>
              デジタル技術を活用した社会福祉サービスの効率化と
              <br />
              質の向上を図るための
              <br />
              専門知識とスキルを身につけることができます。
            </p>
            <p>
              データ管理と分析能力の強化を通じて、
              <br />
              利用者のニーズに応じたサービス提供を最適化します。
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/teach.png"
              alt="DX人材育成研修のイラスト"
              width={300}
              height={200}
            />
          </div>
        </div>

        <Spacer y={8} />

        <div className="flex justify-end">
          <AppButton>
            <Link href={"/program"}>さらに詳しく　→</Link>
          </AppButton>
        </div>
      </section>
    </main>
  );
}
