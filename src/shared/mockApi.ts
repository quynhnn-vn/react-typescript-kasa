import { LodgementType, QualityType } from "./types";
import lodgements from "../assets/logements.json";
import qualities from "../assets/qualities.json";

export const getLodgements = (): Promise<LodgementType[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(lodgements), 1000);
  });
};

export const getQualities = (): Promise<QualityType[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(qualities), 500);
  });
};

export const getLodgementById = (
  lodgementId: string
): Promise<LodgementType> => {
  return new Promise((res, rej) => {
    const matchedLodgement = lodgements.find((item) => item.id === lodgementId);
    if (matchedLodgement) {
      setTimeout(() => res(matchedLodgement), 500);
    } else {
      rej("Not found");
    }
  });
};
