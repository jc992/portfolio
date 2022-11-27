import React from "react";
import styled from "styled-components";
import { A } from "../components/common";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 8em;
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
`;

const H3 = styled.h3`
  position: relative;
  padding-bottom: .3em;
  color: #fcfcfc;
  font-size: 1.5rem;
  line-height: 1.2;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Li = styled.li`
  margin-left: 1.5em;
  position: relative;
  padding-bottom: .3em;
  font-weight: 500;
  text-transform: lowercase;
`;

const Navbar = () => {
  return (
    <Header>
      <H3>
        <A href="#">ffmcgee_</A>
      </H3>
      <nav>
        <Ul>
          <Li>
            <A href="#projects">projects</A>
          </Li>
          <Li>
            <A href="#skills">skills</A>
          </Li>
          <Li>
            <A href="#contact">contact</A>
          </Li>
        </Ul>
      </nav>
    </Header>
  );
};

export default Navbar;
