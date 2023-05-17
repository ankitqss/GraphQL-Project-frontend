import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "./query/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went Wrong !!</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <>
          <div className="row mt-5">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
