import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      company,
      phone,
      message,
      grantUsage,
      socialWelfareProgram,
      selectedPrograms,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAILUSER,
        pass: process.env.GMAILPASSWORD,
      },
    });

    // メールの内容を設定
    const userMailOptions = {
      from: process.env.GMAILUSER,
      to: email,
      subject: "株式会社日本住宅研究社　お問い合わせ",
      text: `${name}様\n\nお問い合わせありがとうございました。\n\n返信までしばらくお待ちください。\n\n助成金活用: ${
        grantUsage ? "はい" : "いいえ"
      }\n社会福祉プログラム: ${
        socialWelfareProgram ? "申し込む" : "申し込まない"
      }\n選択されたプログラム: ${selectedPrograms.join(
        ", "
      )}\n\nお問い合わせ内容:\n${message}`,
    };

    const hostMailOptions = {
      from: process.env.GMAILUSER,
      to: process.env.GMAILUSER, // 自分のメールアドレスに送信
      subject: `株式会社日本住宅研究社　お問い合わせ:`,
      text: `名前: ${name}\n会社名: ${company}\nメール: ${email}\n電話番号: ${phone}\n\n助成金活用: ${
        grantUsage ? "はい" : "いいえ"
      }\n社会福祉プログラム: ${
        socialWelfareProgram ? "申し込む" : "申し込まない"
      }\n選択されたプログラム: ${selectedPrograms.join(
        ", "
      )}\n\nお問い合わせ内容:\n${message}`,
    };

    // ユーザーにメールを送信
    const userInfo = await transporter.sendMail(userMailOptions);
    console.log("User email sent: " + userInfo.response);

    // 自分にもメールを転送
    const hostInfo = await transporter.sendMail(hostMailOptions);
    console.log("Host email sent: " + hostInfo.response);

    return NextResponse.json(
      { message: "メールが送信されました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "メールの送信中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
