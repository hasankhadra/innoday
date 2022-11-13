/* eslint-disable no-unused-vars */

export enum METHODS {
  STATS = "STATS",
  HISTORY = "HISTORY",
  ADD_ACTIVITIES = "ADD_ACTIVITIES",
}

export type Activity = {
  name: string;
  type: string;
  duration: number;
  datetime: number;
};

export type ActivityStats = {
  name: string;
  type: string;
  numPeople: number;
  numHours: number;
};

export type Stats = {
  totalHours: number;
  totalPeople: number;
  activities: ActivityStats[];
};

export type History = {
  activities: Activity[];
};
