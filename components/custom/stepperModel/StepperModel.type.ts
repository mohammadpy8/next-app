import { ReactNode } from "react";

type IStepData = Array<{
  id: number;
  Component: ReactNode;
}>;

type TStepIcons = Array<{
  id: number;
  icon: JSX.Element;
}>;

type TStepperModel = {
  stepLabel: string[];
  stepData: IStepData;
  errorData: any;
  stepIcons: TStepIcons;
};

export type { TStepperModel };
