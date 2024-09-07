import { Resend } from 'resend';

// resume config
const RESUME_URL = process.env.RESUME_URL as string;
const SHOW_RESUME_BTN = process.env.SHOW_RESUME_BTN?.toLowerCase() === 'true';

// Resend config
const RESEND = new Resend(process.env.RESEND_API_KEY);
const DEV_WORK_EMAIL = process.env.DEV_EMAIL_ADDRESS as string;
const DEV_PERSONAL_EMAIL = process.env.DEV_PERSONAL_EMAIL as string;

export {
  RESUME_URL,
  SHOW_RESUME_BTN,
  RESEND,
  DEV_WORK_EMAIL,
  DEV_PERSONAL_EMAIL,
};
