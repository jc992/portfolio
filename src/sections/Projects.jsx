import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import apy_vision from "../assets/apy_vision.svg";
import apy_vision_landing from "../assets/apy_vision_landing.svg";
import ohne from "../assets/ohne.svg";
import olympus from "../assets/olympus.svg";
import data_talks from "../assets/data_talks.svg";
import spice_landing_page from "../assets/spice_landing_page.svg";

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
  color: #444;
`;

const Projects = () => {
  const assets = [
    {
      title: "APY.Vision Web App",
      paragraph: "DeFi data platform for tracking liquidity pool gains and impermanent loss, also providing information useful for entering and exiting liquidity pools or yield farms.",
      image: apy_vision,
      stack: [
        "Typescript",
        "Nest.js",
        "TypeORM",
        "React.js",
        "Next.js",
        "Web3.js",
        "Redux",
        "Ruby on Rails",
      ],
      link: "https://app.apy.vision/",
    },
    {
      title: "Olympus DAO Web App",
      paragraph: "Front End Web App for a Decentralized Reserve Cryptocurrency known as Olympus (open source project with decentralized work methodology).",
      image: olympus,
      stack: [
        "Typescript",
        "React-Query",
        "Next.js",
        "React.js",
        "Redux",
        "Ethers.js",
      ],
      github: "https://github.com/OlympusDAO/olympus-frontend",
      link: "https://app.olympusdao.finance/",
    },
    {
      title: "Spice Finance Landing Page",
      paragraph: "Marketing landing page for an Aggregated NFT lending liquidity protocol known as Spice Finance.",
      image: spice_landing_page,
      stack: [
      "Javascript",
      "Vite",
      "React.js",
      "Styled-Components",
      "Supabase",
      ],
      github: "https://github.com/jc992/spice-landing-page-v1",
      link: "https://spice-landing-page-v1.vercel.app/",
      },
    {
      title: "APY.Vision Landing Page",
      paragraph: "Marketing landing page with the purpose of guiding users to the main Web App of APY.Vision.",
      image: apy_vision_landing,
      stack: [
       "Javascript",
       "React.js",
       "SASS",
      ],
      link: "https://apy.vision/",
     },
     {
      title: "Ohne",
      paragraph: "E-Commerce platform for 100% organic period related products.",
      image: ohne,
      stack: [
        "Typescript",
        "Express.js",
        "Knex.js",
        "GraphQl",
        "Gatbsy.js",
        "React.js",
      ],
      link: "https://ohne.com/",
    },
     {
      title: "DataTalks CDP",
      paragraph: "Customer data platform with the purpose of segmenting customers into audiences with similar characteristics in order to achieve a more accurate and personalized communication.",
      image: data_talks,
      stack: [
       "C#",
       ".NET Core",
       "HTML5",
       "SASS",
       "Javascript",
       "PostgreSQL",
       "Git",
      ],
     },
  ];
  return (
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
};

export default Projects;
