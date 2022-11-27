import React from "react";
import styled from "styled-components";
import { A, BOX_SHADOW_COLOR, SECONDARY_COLOR } from "./common";
import ExternalLink from "./icons/ExternalLink";
import GitHub from "./icons/Github";

const Container = styled.div`
  padding: 2em;
  margin: 0 auto;
  text-align: center;
  box-shadow: ${BOX_SHADOW_COLOR} 0px 7px 29px 0px;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 50vw;
  &:hover {
    transform: translateY(-7px);
  }
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.2;
  color: ${SECONDARY_COLOR};
`;
const P = styled.p`
  margin-top: 1em;
  color: ${SECONDARY_COLOR};
`;
const Img = styled.img`
  max-width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;
  padding: 0;
  list-style-type: none;
`;

const Li = styled.li`
  position: relative;
  margin: 0.5em;
  font-weight: 500;
  font-size: 0.8rem;
  color: ${SECONDARY_COLOR};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

const Card = ({ title, paragraph, image, stack, link, github }) => {
  if (!title || !paragraph || !image || !stack) return null;
  return (
    <Container>
      <H3>{title}</H3>
      <P>{paragraph}</P>
      <Img src={image} alt={`${title}_img`}></Img>
      <Ul>
        {stack.map((item, i) => (
          <Li key={i}>{item}</Li>
        ))}
      </Ul>
      <IconContainer>
        <Ul>
          {github ? (
            <Li>
              <A href={github} target="_blank">
                <GitHub size="16" color={SECONDARY_COLOR} style={{ strokeWidth: "3" }} />
              </A>
            </Li>
          ) : null}
          {link ? (
            <Li>
              <A href={link} target="_blank">
                <ExternalLink
                  size="16"
                  color={SECONDARY_COLOR}
                  style={{ strokeWidth: "3" }}
                />
              </A>
            </Li>
          ) : null}
        </Ul>
      </IconContainer>
    </Container>
  );
};

export default Card;
