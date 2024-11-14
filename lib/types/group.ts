import { TSection } from './section';

export type TGroup = {
  name: string;
  active: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
  sections: TSection[];
};
