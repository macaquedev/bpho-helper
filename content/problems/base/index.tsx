// order doesn't matter; it will be alphabetical
export const tags = [
  "Data Structures",
  "Binary Search",
  "Dynamic Programming",
  "Trees",
  "Graphs", 
  "Divide and Conquer",
  "Greedy",
  "Brute Force",
  "Implementation", 
  "DFS and Similar",
  "Two Pointers",
  "Math",
  "Geometry",
] as const;

export type Tag = typeof tags[number];

// ordered from easiest to hardest
export const difficulties = [
  "Trivial",
  "Easy",
  "Medium",
  "Hard",
  "Insane"
] as const;

export type Difficulty = typeof difficulties[number];
export type Question = 1 | 2 | 3;
export type Part = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

export interface ProblemInfo {
  difficulty: Difficulty;
  display: string;
  original: string;
  year: number;
  question?: Question;
  part?: Part;
  tags: Tag[];
  component: JSX.Element;
  editorialAuthors: string[];
  solutionAuthors: string[];
}

export type DifficultyMap<T> = Record<Difficulty, T>;

export const difficultyColors: DifficultyMap<string> = {
  "Trivial": "blue",
  "Easy": "green",
  "Medium": "orange",
  "Hard": "red",
  "Insane": "purple"
};
