interface ProjectRow {
  "amt.pledged": number;
  "s.no": number;
  "percentage.funded": number;
}

export type ProjectsRow = ProjectRow[];

interface ProjectProcessed {
  amountPledged: number;
  percentageFunded: number;
  sNo: number;
}

export type ProjectsProcessed = ProjectProcessed[];
