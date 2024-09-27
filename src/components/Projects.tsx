import React, { useState } from 'react';
import { projectsData } from '../helpers/projects';
import type { Project } from '../interfaces/projectInterface';
import TechIcon from '../helpers/TechIcon';

const ProjectList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showProjectDetails = (index: number) => {
    setSelectedProject(projectsData[index]);
  };

  console.log('Estado del proyecto seleccionado:', selectedProject); // Verifica el estado actual

  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-full md:max-w-6xl mx-auto min-h-screen px-4 md:px-8 lg:px-16">
      <div className="flex md:w-2/5 mr-12 items-start flex-col">
        <h2 className="font-orbitron text-lg md:text-2xl font-semibold text-wine mb-5">
          Mis proyectos
        </h2>

        <ul className="text-blue font-orbitron font-semibold space-y-2 text-base md:text-xl mb-3">
          {projectsData.map((project, index) => (
            <li
              className="cursor-pointer"
              onClick={() => showProjectDetails(index)}
              key={index}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-3/5 mt-16">
        {selectedProject ? (
          <div className="flex flex-col ">
            <div className="flex items-center justify-between mb-5">
              <h1 className="font-orbitron text-lg md:text-2xl font-semibold text-wine  ">
                {selectedProject.name}
              </h1>
              <a
                href={selectedProject.deployUrl}
                target="_blank"
                className="relative z-10"
              >
                <button className="border-2 rounded border-wine px-3 py-1 font-orbitron text-wine">
                  Visitame
                </button>
              </a>
            </div>

            <div className="flex space-x-4 justify-center items-center mb-2">
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagen del proyecto ${selectedProject.name}`}
                  className="w-auto h-48 object-cover shadow-2xl shadow-gray-600 transform rounded-md -translate-x-1 -translate-y-1  "
                />
              ))}
            </div>

            <div>
              <p className="text-textColor text-base xl:text-lg mb-6 ">
                {selectedProject.description}
              </p>
            </div>

            <h2 className="font-orbitron text-xl font-semibold text-wine  ">
              Funciones principales
            </h2>
            <ul className="list-disc list-inside text-textColor mb-6  ">
              {selectedProject.mainFunctions.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <h2 className="font-orbitron text-xl font-semibold text-wine mb-3">
                Tecnologías utilizadas
              </h2>
              <div className="flex space-x-4">
                {selectedProject.technologies.map((tech, index) => (
                  <TechIcon key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-textColor text-base md:text-lg xl:text-xl mb-6">
            Elige un proyecto para ver sus detalles
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
