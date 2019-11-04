import * as functions from 'firebase-functions';

const nodemailer = require("nodemailer");
const gmailEmail :string = functions.config().gmail.email;
const gmailPassword :string = functions.config().gmail.password;
const adminEmail :string = functions.config().admin.email;

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレート
const adminContents = (data: any) => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.contents}
`;
};

export const sendMail = functions.https.onCall((data) => {
  // メール設定
  const adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  mailTransport.sendMail(adminMail, (err: any) => {
    if (err) {
      // tslint:disable-next-line: no-void-expression
      return console.error(`send failed. ${err}`);
    }
    // tslint:disable-next-line: no-void-expression
    return console.log("send success.");
  });
});
