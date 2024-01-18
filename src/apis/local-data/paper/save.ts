import { PaperType } from "@/apis/local-data/paper/paper.type";
import Logger from "@/utils/logger";
import localforage from "localforage";

export async function savePaper(paper: PaperType) {
  const logger = new Logger(savePaper.name)
  paper.mtime = new Date().getTime();
  const savedPaper = await localforage.setItem<PaperType>(paper.key, paper);
  logger.debug('savedPaper', savedPaper)
  return savedPaper
}
