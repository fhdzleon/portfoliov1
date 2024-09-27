import React from 'react';
import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';

interface TechIconProps {
  tech: string;
}

const iconMap: Record<string, IconType> = {
  react: FaReact,
  vite: SiVite,
  next: SiNextdotjs,
  javascript: FaJs,
  tailwind: SiTailwindcss,
  node: FaNodeJs,
  html: FaHtml5,
  css: FaCss3Alt,
  typescript: SiTypescript,
  postgres: SiPostgresql,
  mongo: SiMongodb,
};

const TechIcon: React.FC<TechIconProps> = ({ tech }) => {
  const lowercaseTech = tech.toLowerCase();
  const IconComponent = iconMap[lowercaseTech];

  if (!IconComponent) {
    console.warn(`No icon found for technology: ${tech}`);
    return null;
  }

  return (
    <div className={`inline-block  text-textColor font-bold`}>
      <IconComponent className="text-3xl " title={tech} />
    </div>
  );
};

export default TechIcon;
