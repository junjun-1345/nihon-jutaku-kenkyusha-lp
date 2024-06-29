import Head from "next/head";

export default function Home() {
  return (
    <div className=" p-8">
      <Head>
        <title>会社概要 | 株式会社日本住宅研究社</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white m-8 ">
        <h1 className="text-2xl font-bold mb-4 mx-4">会社概要</h1>
        <hr className="mb-8 border-l border-gray-300" />
        <div className="flex text-sm">
          <div className="flex flex-col space-y-4  w-1/4 pr-4">
            <div className="">社 名</div>
            <div className="">住 所</div>
            <div className="">代表者</div>
            <div className="">電話番号</div>
            <div className="">設立年月日</div>
            <div className="">事業内容</div>
            <div className="">免許番号</div>
            <div className="">所属団体</div>
          </div>
          <div className="border-l border-gray-300 mx-4"></div>
          <div className="flex flex-col space-y-4  w-3/4 pl-4">
            <div>株式会社日本住宅研究社</div>
            <div>神奈川県大和市南林間2丁目10番5号 ベストライフビル1階</div>
            <div>松本 征行</div>
            <div>046-259-7744</div>
            <div>平成19年7月17日</div>
            <div>
              放課後等デイサービス事業
              <br />
              保育園運営事業
              <br />
              不動産仲介事業
              <br />
              コンサルティング/研修事業
            </div>
            <div>神奈川県知事免許（01）第032304号</div>
            <div>
              （公社）神奈川県宅地建物取引業協会【公正取引協議会加盟業者】
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
