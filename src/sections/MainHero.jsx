import React from "react";
import styled from "styled-components";
import GitHub from "../components/icons/Github";
import Mail from "../components/icons/Mail";
import LinkedIn from "../components/icons/LinkedIn";
import { A, SECONDARY_COLOR, TERTIARY_COLOR } from "../components/common";
import avatar from '../assets/avatar.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: .5em;
`;

const Span = styled.span`
  color: ${TERTIARY_COLOR};
`;

const P = styled.p`
  font-size: 1rem;
  max-width: 600px;
  text-align: center;
  margin-top: 0.8em;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 1.2em;
  font-size: 2rem;
  line-height: 1.2;
  color: ${SECONDARY_COLOR};
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8em;
  position: relative;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  position: relative;
  margin: 0.5em;
`;

const Img = styled.img`
  max-width: 100%;
  opacity: 0.75;
  border-radius: 100px;
`;

const MainHero = () => {
  return (
    <Container>
    <Img height='250px' src={avatar} />
      <H2>
        Full Stack <Span>Web3</Span> Engineer.
      </H2>
      <P>
        Music, computers, and adventure are a constant part of my life. I've
        been a curious cat since my childhood, putting pieces together and
        figuring out how things work, from real-life situations to cybernetic
        environments. My passion for music got me into DJing, and my passion for
        computers got me into programming. Backed up by my analytical skills and
        intuition, I'm going to mix your code, perfectly sync it to your
        desires, and get fun(key) with you!
      </P>
      <ContactWrapper>
        <Ul>
          <Li>
            <A href="https://github.com/jc992/" target='_blank'>
              <GitHub size="16" color={SECONDARY_COLOR} style={{ strokeWidth: "3" }} />
            </A>
          </Li>
          <Li>
            <A href="mailto:jc.992@hotmail.com" target='_blank'>
              <Mail size="16" color={SECONDARY_COLOR} style={{ strokeWidth: "3" }} />
            </A>
          </Li>
          <Li>
            <A href="https://www.linkedin.com/in/jc-tavares/" target='_blank'>
              <LinkedIn size="16" color={SECONDARY_COLOR} style={{ strokeWidth: "3" }} />
            </A>
          </Li>
        </Ul>
      </ContactWrapper>
    </Container>
  );
};

export default MainHero;
