import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { TERTIARY_COLOR } from "../components/common";
import assets from "../utils/assets";

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22em, 1fr));
  grid-gap: 2em;
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1.2;
  color: ${TERTIARY_COLOR};
`;

const Projects = () => (
  <div id="projects">
    <H2>projects</H2>
    <Grid>
      {assets.map(({ title, paragraph, image, stack, link, github }, i) => (
        <Card
          key={i}
          title={title}
          paragraph={paragraph}
          image={image}
          stack={stack}
          github={github}
          link={link}
        />
      ))}
    </Grid>
  </div>
);

export default Projects;
