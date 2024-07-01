import React from "react";
import { Link } from "react-scroll";
import { MaterialSymbolsExpandCircleDownOutline } from "./icon";

const ScrollSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white py-16 px-8 sm:px-16 md:px-24 lg:px-32 w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
      <h2 className="text-3xl mb-12 font-bold">
        - DX人材研修プログラム 一覧 -
      </h2>
      <ul className="space-y-8">
        {[
          "社会福祉DX人材育成研修プログラム 導入編",
          "社会福祉DX人材育成研修プログラム 応用編",
          "社会福祉DX人材育成研修プログラム 発展編",
          "メタバースとAI実践研修 - 基礎から業務応用まで",
          "AI&BI導入で差をつける！超実践型DX講座編",
        ].map((title, index) => (
          <li key={index}>
            <Link
              to={`section${index + 1}`}
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer hover:text-blue-300 text-xl"
            >
              <span className="mr-4">
                <MaterialSymbolsExpandCircleDownOutline />
              </span>
              {title}
            </Link>
            {index !== 4 && (
              <hr className="my-8 border-t border-white opacity-50" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSection;
