"use client";

import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import useErrorMessage from "@/hooks/useErrorMessage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    grantUsage: false,
    socialWelfareProgram: false,
    selectedPrograms: [] as string[], // 複数選択可能なプログラム
  });

  const [isSending, setIsSending] = useState(false);
  const { message, setErrorMessage } = useErrorMessage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProgramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return {
          ...prevData,
          selectedPrograms: [...prevData.selectedPrograms, value],
        };
      } else {
        return {
          ...prevData,
          selectedPrograms: prevData.selectedPrograms.filter(
            (program) => program !== value
          ),
        };
      }
    });
  };

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await axios.post("/api/contact", {
        ...formData,
      });

      if (response.status === 200) {
        console.log("メールの送信に成功しました!", response.data);
        setErrorMessage("メールの送信に成功しました!");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          grantUsage: false,
          socialWelfareProgram: false,
          selectedPrograms: [], // リセット
        });
      } else {
        setErrorMessage("エラー: " + response.statusText);
      }
    } catch (error: any) {
      setErrorMessage("ネットワークエラー: " + error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>株式会社日本住宅研究社</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">株式会社日本住宅研究社</h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              事業内容
            </a>
            <a href="#" className="hover:text-gray-300">
              会社概要
            </a>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
            >
              お問い合わせ・ご相談
            </a>
          </nav>
        </div>
      </header>

      <main className="font-light">
        <div className="mx-4 md:mx-20 my-10 md:my-20">
          <h2 className="text-2xl text-blue-500 mb-10 mt-10 md:mt-20 text-center">
            お問い合わせ・ご相談
          </h2>

          <form onSubmit={handleSendMail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">
                氏名
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="山田　太郎"
                required
                className="w-full px-3 py-2 border border-gray-300"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="company" className="block mb-1 text-sm">
                会社名・団体名<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="株式会社〇〇"
                required
                className="w-full px-3 py-2 border border-gray-300"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                メールアドレス<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@com"
                required
                className="w-full px-3 py-2 border border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 text-sm">
                電話番号 (ハイフンなしの半角数字でご入力ください)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="080-1234-5678"
                required
                pattern="[0-9]{10,11}"
                className="w-full px-3 py-2 border border-gray-300"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="grantUsage" className="block mb-1 text-sm">
                助成金　活用したいですか？
              </label>
              <input
                type="checkbox"
                id="grantUsage"
                name="grantUsage"
                className="w-4 h-4"
                checked={formData.grantUsage}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="socialWelfareProgram"
                className="block mb-1 text-sm"
              >
                社会福祉プログラムに申し込む
              </label>
              <input
                type="checkbox"
                id="socialWelfareProgram"
                name="socialWelfareProgram"
                className="w-4 h-4"
                checked={formData.socialWelfareProgram}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">
                プログラムの内容を選択してください：
              </label>
              <div className="flex flex-col space-y-2">
                <div>
                  <input
                    type="checkbox"
                    id="program1"
                    name="program1"
                    value="プログラム1"
                    className="w-4 h-4"
                    checked={formData.selectedPrograms.includes("プログラム1")}
                    onChange={handleProgramChange}
                  />
                  <label htmlFor="program1" className="ml-2">
                    プログラム1
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="program2"
                    name="program2"
                    value="プログラム2"
                    className="w-4 h-4"
                    checked={formData.selectedPrograms.includes("プログラム2")}
                    onChange={handleProgramChange}
                  />
                  <label htmlFor="program2" className="ml-2">
                    プログラム2
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="program3"
                    name="program3"
                    value="プログラム3"
                    className="w-4 h-4"
                    checked={formData.selectedPrograms.includes("プログラム3")}
                    onChange={handleProgramChange}
                  />
                  <label htmlFor="program3" className="ml-2">
                    プログラム3
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm">
                お問い合わせ内容<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="お問い合わせ内容をご記入ください"
                required
                className="w-full px-3 py-2 border border-gray-300 h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 block mx-auto w-full md:w-1/4"
            >
              {isSending ? "送信中..." : "送　信"}
            </button>
            {message && (
              <div
                className={`${
                  message.includes("成功") ? "text-green-700" : "text-red-700"
                } text-sm font-medium`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}