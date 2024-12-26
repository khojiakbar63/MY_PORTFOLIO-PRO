import { ReactNode } from "react";

// Container
export interface IContainer{
    children: ReactNode;
  }


export interface IRoundedBtn{
    children: ReactNode;
    path: string;
    className?: string;
  }


  export interface IParagraph{
    text: ReactNode | string | JSX.Element;
    style?: object;
  }
  export interface ISocialBtn{
    children: ReactNode;
    path: string;
  }

  export interface ITypingAnimation {
    text: any;
  }