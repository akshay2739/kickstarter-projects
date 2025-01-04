import { getRequest } from "../common";

export const fetchProjects = async () => {
  const projects = await getRequest({
    engine: "https://raw.githubusercontent.com",
    path: "saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json",
  });

  console.log("projects :>> ", projects);
};
