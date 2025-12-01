export type Word = {
  _id: string;
  en: string;
  ua: string;
  category: string;
  progress: number;
  owner: string;
  isIrregular?: boolean;
};
