import type { ReactNode } from 'react';

export const MediaType = {
  IMG: 'img',
  VIDEO: 'video',
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export interface IMedia {
  url: string;
  type: MediaType;
}

export interface IProject {
  media: IMedia[];
  title: string;
  description: string;
  link: string;
  stack: string[];
}

export interface ICard {
  title: string;
  content: string;
  rowDirection?: RowDirection;
  image?: string;
  icon?: ReactNode;
  stack?: string[];
}

export const rowDirection = {
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
} as const;

export type RowDirection = (typeof rowDirection)[keyof typeof rowDirection];
