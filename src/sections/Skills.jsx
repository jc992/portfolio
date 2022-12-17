import React from "react";
import styled from "styled-components";
import { BOX_SHADOW_COLOR, TERTIARY_COLOR } from "../components/common";

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1.2;
  background: ${TERTIARY_COLOR};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Ul = styled.ul`
  max-width: 650px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
`;

const Li = styled.li`
  text-transform: none;
  background-color: var(--clr-bg-alt);
  box-shadow: ${BOX_SHADOW_COLOR} 0px 3px 3px 0px;
  border: 0;
  display: block;
  cursor: pointer;
  padding: 0.8em 1.4em;
  font-weight: 500;
  font-size: 0.9rem;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Skills = () => {
  const items = [
    "HTML5",
    "CSS3",
    "SASS",
    "Javascript",
    "Typescript",
    "React.js",
    "Styled Components",
    "Material-UI",
    "C#",
    ".NET Core",
    "ASP.NET Core",
    "Unity",
    "MySql",
    "PostgreSQL",
    "Solidity",
    "Node.js",
    "Nest.js",
    "TypeORM",
    "Supabase",
    "Next.js",
    "GraphQL",
    "React-Query",
    "Ruby on Rails",
    "Redux",
    "Web3.js",
    "Ethers.js",
    "Git",
  ];
  return (
    <div id='skills'>
      <H2>Skills</H2>
      <Ul>
        {items.map((item, i) => (
          <Li key={i}>{item}</Li>
        ))}
      </Ul>
    </div>
  );
};

export default Skills;
