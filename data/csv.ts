import { CsvData, ContentData } from "@/types";

// 項目と形式、時間、金額のデータ
export const csvData1: CsvData[] = [
  {
    項目: "AIと自然言語処理の基礎と実践",
    形式: "e-learning",
    時間: "2時間",
    金額: "¥148,500-(税込)",
  },
  {
    項目: "効果的なプロンプト作成と実践演習",
    形式: "e-learning",
    時間: "2時間",
    金額: "",
  },
  {
    項目: "ビジネス文書作成と実務演習プログラム",
    形式: "e-learning",
    時間: "6時間",
    金額: "",
  },
];

// 各項目に対応する説明と内容のデータ
export const contentData1: ContentData[] = [
  {
    項目: "AIと自然言語処理の基礎と実践",
    説明: "AIとNLPの基本理論から始め、実際のデータ処理や対話システム開発を体験するコースです。",
    内容: [
      "LLMとは -概要と進化の歴史-",
      "AI時代に求められる人材とは",
      "AIが用いている技術",
      "AI・LLMを扱う際の注意点",
      "日々の業務でChatGPTを活かすには -得意な領域と苦手な領域-",
      "プロンプトエンジニアリング基礎",
    ],
  },
  {
    項目: "効果的なプロンプト作成と実践演習",
    説明: "プロンプトエンジニアリングの手法を学び、実際のシナリオでプロンプトを設計し、コミュニケーション能力を向上させます。",
    内容: [
      "欲しい情報を引き出すためのプロンプトの作り方 -要約",
      "欲しい情報を引き出すためのプロンプトの作り方 -ソリューション",
      "欲しい情報を引き出すためのプロンプトの作り方 -アイディア列挙",
      "[演習]ケーススタディ",
    ],
  },
  {
    項目: "ビジネス文書作成と実務演習プログラム",
    説明: "報告書やプレゼン資料の作成技術を磨き、実践演習で実務での即戦力を身につけます。",
    内容: [
      "チラシ案の作成",
      "イベントの立案",
      "顧客への案内文書",
      "面談のトークスクリプト",
      "口コミへの返信",
      "顧客対応の改善",
      "お客様からのよくある質問を事前に準備する",
      "クレーム対応",
      "新人後輩部下指導",
      "業務マニュアルの作成",
      "[演習]ケーススタディ",
    ],
  },
];

// 他のデータも同様に分割する
export const csvData2: CsvData[] = [
  {
    項目: "LLMの革新と社会への影響",
    形式: "e-learning",
    時間: "1時間",
    金額: "¥148,500-(税込)",
  },
  {
    項目: "プロンプトエンジニアリングと業務改善演習の研修プログラム",
    形式: "e-learning",
    時間: "8時間",
    金額: "",
  },
  {
    項目: "顧客満足度と売上改善のケーススタディ研修",
    形式: "e-learning",
    時間: "1時間",
    金額: "",
  },
];

export const contentData2: ContentData[] = [
  {
    項目: "LLMの革新と社会への影響",
    説明: "大規模言語モデルの最新技術と社会的影響を探求するコースです。",
    内容: [
      "LLMの発展と拡大する影響",
      "最新時代のテクノロジーと社会",
      "LLMを使える人と使えない人で広がる格差",
      "LLMを使いこなすために必要な能力とは？",
    ],
  },
  {
    項目: "プロンプトエンジニアリングと業務改善演習の研修プログラム",
    説明: "プロンプトを活用して業務効率化を図る方法を学び、実践演習で問題解決力を養います。",
    内容: [
      "プロンプトエンジニアリング応用-プロンプト自体をLLMに生成させる",
      "プロンプトエンジニアリング応用-LLMの出力の質を高める条件付け",
      "AIを使って文章を添削・構成する",
      "プロンプトエンジニアリング応用-LLMを使った壁打ち手法",
      "AIを使った業務改善",
      "LLMの特性を踏まえた業務フロー",
      "LLMを活用するために必要な力 -ロジカルシンキング",
      "MECEの原則とシンキングツリー",
      "様々なロジックツリー",
      "フレームワークの紹介",
      "LLMを活用するために必要な力 -課題思考",
      "LLMを活用するために必要な力 -仮説思考",
      "LLMを活用するために必要な力 -多角的思考",
      "[演習]ケーススタディ",
    ],
  },
  {
    項目: "顧客満足度と売上改善のケーススタディ研修",
    説明: "実際の事例を通じて、顧客満足度向上と売上改善の戦略を練る研修です。",
    内容: [
      "[演習]居酒屋の顧客満足度改善案の作成",
      "[演習]テーマパークの売上改善施策の作成",
    ],
  },
];

export const csvData3: CsvData[] = [
  {
    項目: "DX推進と業務改善の実践研修プログラム",
    形式: "e-learning",
    時間: "5時間",
    金額: "¥148,500-(税込)",
  },
  {
    項目: "LLMを活用した業務改善と問題解決の研修プログラム",
    形式: "e-learning",
    時間: "5時間",
    金額: "",
  },
];

export const contentData3: ContentData[] = [
  {
    項目: "DX推進と業務改善の実践研修プログラム",
    説明: "デジタルトランスフォーメーションを促進し、企業の業務改善を実現する戦略的スキルを学びます。",
    内容: [
      "企業と個人におけるDX",
      "DX推進における効果的な業務的な取り組み方",
      "課題とタスクの違い",
      "課題解決とは？",
      "イシューとは？",
      "業務を構造的に理解する",
      "イシューを特定するためのテクニック",
    ],
  },
  {
    項目: "LLMを活用した業務改善と問題解決の研修プログラム",
    説明: "LLMを活用して業務の効率化と問題解決の手法を習得し、実践的なスキルを身につけます。",
    内容: [
      "プロンプトエンジニアリング発展 -LLMを使った壁打ち5手法",
      "LLMを活用した改善策の策定",
      "LLMを活用した実行計画の立案",
      "LLMの回答を活かす創造的な問題解決法",
      "[演習]ケーススタディ",
    ],
  },
];

// 他のデータセットも同様に分割する...
// csvData4, contentData4
// csvData5, contentData5

export const csvData4: CsvData[] = [
  {
    項目: "メタバースの基礎",
    形式: "オンタイム",
    時間: "1時間",
    金額: "¥330,000-(税込)",
  },
  {
    項目: "メタバースの業務活用",
    形式: "オンタイム",
    時間: "2時間",
    金額: "",
  },
  {
    項目: "AIの基礎",
    形式: "オンタイム",
    時間: "1時間",
    金額: "",
  },
];

export const contentData4: ContentData[] = [
  {
    項目: "メタバースの基礎",
    説明: "メタバースの概念と歴史、主要な技術、ビジネスへの影響を学びます。",
    内容: [
      "メタバースとは何か",
      "メタバースの歴史と発展",
      "メタバースの主要技術",
      "ビジネスへの影響",
    ],
  },
  {
    項目: "メタバースの業務活用",
    説明: "メタバースをビジネスにどう活用するか、具体的な事例を交えて学びます。",
    内容: [
      "メタバースの活用事例",
      "業務改善への応用",
      "新規ビジネスのアイデア",
      "実習ワーク：仮想オフィスのツアー",
      "ディスカッションとQ&A",
    ],
  },
  {
    項目: "AIの基礎",
    説明: "AIの基本理論、機会学習と深層学習の違い、AIの実務応用例を学びます。",
    内容: [
      "AIの基本概念",
      "機会学習と深層学習の違い",
      "AIの業務応用例",
      "AIの導入ステップ",
    ],
  },
];

export const csvData5: CsvData[] = [
  {
    項目: "DXの正体 なぜ今実践する必要があるのか？",
    形式: "オンタイム",
    時間: "1時間",
    金額: "¥330,000-(税込)",
  },
  {
    項目: "売上アップのための基本的な考え方と計算式",
    形式: "オンタイム",
    時間: "1時間",
    金額: "",
  },
  {
    項目: "BI活用① BIとは？追うべきKPIとOODAループ",
    形式: "オンタイム",
    時間: "1時間",
    金額: "",
  },
];

export const contentData5: ContentData[] = [
  {
    項目: "DXの正体 なぜ今実践する必要があるのか？",
    説明: "なぜDXは失敗するのか？成功するDXの特徴と具体的な事例を理解し、自社ならではの影響するものを理解する。",
    内容: [
      "DXの93％が失敗する",
      "DXは顧客と従業員の便利！が優先",
      "DXのインパクトと価値",
    ],
  },
  {
    項目: "売上アップのための基本的な考え方と計算式",
    説明: "そもそも、企業の目的とは？時流に適応するために従業員としてできる考え方と必要なスキルと計算式を知る。",
    内容: [
      "DXで変えるべき3の要素",
      "時流適応するために必要なスキルとは？",
      "これだけでOK!売上を上げるための計算式",
    ],
  },
  {
    項目: "BI活用① BIとは？追うべきKPIとOODAループ",
    説明: "BIとは？なぜ使うべきなのか？必要なOODAループについて理解する",
    内容: [
      "KPIとは？売上を上げるための設定のポイント",
      "PDCAを最適化するOODAループとは？",
    ],
  },
];
