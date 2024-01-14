export type PaperType = {
  id: string; // UUID
  key: string; // Cache Key
  title: string;
  translatedTitle: string;
  ctime: number;
  mtime?: number;
};
