import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchProjects } from "apis/projects";
import { ProjectsWrapper, Table } from "./styles";
import { ProjectsProcessed } from "../../common/types";
import Pagination from "common-util/pagination";
import Loader from "common-util/loader";

const KickStarterProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allProjects, setAllProjects] = useState<ProjectsProcessed>([]);
  const [projectsToShow, setProjectsToShow] = useState<ProjectsProcessed>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get("page") || "1", 10);
  };

  const [currentPage, setCurrentPage] = useState(getPageFromQuery());

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  useEffect(() => {
    if (currentPage) {
      setIsLoading(true);
      setProjectsToShow(
        allProjects.slice((currentPage - 1) * 5, currentPage * 5)
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  }, [currentPage, allProjects]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedProjects = await fetchProjects();

      const firstFiveProjects = fetchedProjects.slice(0, 5);

      setAllProjects(fetchedProjects);
      setProjectsToShow(firstFiveProjects);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(getPageFromQuery());
  }, [location.search]);

  const totalPages = Math.ceil(allProjects.length / 5);

  return (
    <ProjectsWrapper>
      <h1>Kickstarter Projects</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            </thead>
            <tbody>
              {projectsToShow.map(
                ({ amountPledged, sNo, percentageFunded }) => (
                  <tr key={sNo}>
                    <td>{sNo}</td>
                    <td>{percentageFunded}</td>
                    <td>{amountPledged}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
    </ProjectsWrapper>
  );
};

export default KickStarterProjects;
