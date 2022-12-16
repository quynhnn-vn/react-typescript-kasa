import { ReactNode } from "react";

export type BannerProps = {
  page: string;
};
export type HostType = {
  name: string;
  picture: string;
};

export type LodgementType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HostType;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export type CollectionItemProps = {
  lodgement: LodgementType;
};

export type QualityType = {
  title: string;
  content: string;
};

export type CollapseProps = {
  quality: QualityType;
};

export type CarouselProps = {
  children: ReactNode;
};

export type TagProps = {
  tag: string;
};

export type RatingProps = {
  rate: string;
};
