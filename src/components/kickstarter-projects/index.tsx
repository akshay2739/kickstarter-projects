import { useEffect, useState } from "react";
import { fetchProjects } from "../../apis/projects";

const KickStarterProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchProjects();

      console.log("fetchedProjects :>> ", fetchedProjects);

      //   @ts-expect-error
      setProjects(fetchedProjects);
    };

    fetchData();
  }, []);

  return <div>KickStarterProjects</div>;
};

export default KickStarterProjects;
