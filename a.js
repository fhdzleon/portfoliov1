---
// Importar datos de proyectos
import { projectsData } from '../helpers/projects';
import { useState } from 'react';

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const showProjectDetails = (index) => {
    setSelectedProject(projectsData[index]);
  };

  return (
    <div class="flex flex-col md:flex-row justify-center items-center max-w-full md:max-w-6xl mx-auto min-h-screen px-4 md:px-8 lg:px-16">
      <div class="flex md:w-2/5 mr-12 items-start flex-col">
        <h2 class="font-orbitron text-lg md:text-2xl font-semibold text-wine mb-5">
          Mis proyectos
        </h2>

        <ul class="text-blue font-orbitron font-semibold space-y-2 text-base md:text-xl mb-3">
          {projectsData.map((project, index) => (
            <li
              class="cursor-pointer"
              onClick={() => showProjectDetails(index)}
              key={index}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>

      <div class="md:w-3/5">
        {selectedProject && (
          <>
            <h1 class="font-orbitron text-lg md:text-2xl font-semibold text-wine mb-5">
              {selectedProject.name}
            </h1>
            <p>{selectedProject.description}</p>
            {/* Aquí puedes añadir más detalles del proyecto */}
          </>
        )}
      </div>
    </div>
  );
};

// Exportar el componente para su uso
export default ProjectList;

