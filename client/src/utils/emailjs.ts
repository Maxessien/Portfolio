import emailjs from "@emailjs/browser";

export interface EmailContent {
  fullName: string;
  email: string;
  message: string;
}

export interface RecordEmailContent extends EmailContent {
  [key: string]: unknown;
}

export const sendEmail = async (content: RecordEmailContent) => {
  try {
    await emailjs.init({
      limitRate: { throttle: 1000 },
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });
    const res = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      content,
    );
    return res;
  } catch (err) {
    console.log("Error sending Email: ", err);
    throw err;
  }
};
