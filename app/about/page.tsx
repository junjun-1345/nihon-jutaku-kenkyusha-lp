import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本住宅研究社　-会社概要",
  description: "日本住宅研究社の詳細情報がご確認いただけます。",
};

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <Head>
        <title>会社概要 | 株式会社日本住宅研究社</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white m-4 md:m-8">
        <h1 className="text-2xl font-bold mb-4 mx-4">会社概要</h1>
        <hr className="mb-8 border-l border-gray-300" />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  社 名
                </td>
                <td className="py-2 pl-4 border-l">株式会社日本住宅研究社</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  住 所
                </td>
                <td className="py-2 pl-4 border-l">
                  神奈川県大和市南林間2丁目10番5号 ベストライフビル1階
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  代表者
                </td>
                <td className="py-2 pl-4 border-l">松本 征行</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  電話番号
                </td>
                <td className="py-2 pl-4 border-l">046-259-7744</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  設立年月日
                </td>
                <td className="py-2 pl-4 border-l">平成19年7月17日</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  事業内容
                </td>
                <td className="py-2 pl-4 border-l">
                  放課後等デイサービス事業
                  <br />
                  保育園運営事業
                  <br />
                  不動産仲介事業
                  <br />
                  コンサルティング/研修事業
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  免許番号
                </td>
                <td className="py-2 pl-4 border-l">
                  神奈川県知事免許（01）第032304号
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium whitespace-nowrap">
                  所属団体
                </td>
                <td className="py-2 pl-4 border-l">
                  （公社）神奈川県宅地建物取引業協会【公正取引協議会加盟業者】
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
