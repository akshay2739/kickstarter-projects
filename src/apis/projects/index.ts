import { ProjectsRow, ProjectsProcessed } from "../../common/types";
import { getRequest } from "../common";

export const fetchProjects = async (): Promise<ProjectsProcessed> => {
  const projectsFullData: ProjectsRow = await getRequest({
    engine: "https://raw.githubusercontent.com",
    path: "saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json",
  });

  return projectsFullData.map(
    ({
      "amt.pledged": amountPledged,
      "percentage.funded": percentageFunded,
      "s.no": sNo,
    }) => ({
      amountPledged,
      percentageFunded,
      sNo,
    })
  );
};
