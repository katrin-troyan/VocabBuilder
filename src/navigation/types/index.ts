import { Word } from "../../types/word";

export type RootParamList = {
  Dictionary: { newWord?: Word } | undefined;
  Recommend: undefined;
  Training: undefined;
  AddWord: undefined;
  WellDone: { results: (string | null)[] };
};
