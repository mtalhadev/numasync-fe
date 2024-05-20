/* eslint-disable @typescript-eslint/no-explicit-any */
type Breakpoint = {
  slidesPerView: number;
};

type SliderBreakpoints = {
  [key: number]: Breakpoint;
};

export interface SliderPropsTypes {
  data: any;
  Card: any;
  height?: string;
  breakpoints?: SliderBreakpoints;
  pagination?: boolean;
  paginationClassName?: string;
}

export type AuthSliderDataTypes = {
  img: string;
  title: string;
  description: string;
};
