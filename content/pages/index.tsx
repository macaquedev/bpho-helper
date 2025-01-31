export interface PageInfo {
  display: string;
  path: string;
}

export const pages = {
  home: {
    display: "Home",
    path: "/"
  } as PageInfo,
  bpho1: {
    display: "Round 1",
    path: "/bpho/r1",
  } as PageInfo,
  bpho2: {
    display: "Round 2",
    path: "/bpho/r2"
  } as PageInfo,
  grader: {
    display: "Challenges",
    path: "/grader"
  } as PageInfo,
  resources: {
    display: "Resources",
    path: "/resources"
  } as PageInfo,
};

export type Pages = typeof pages;
