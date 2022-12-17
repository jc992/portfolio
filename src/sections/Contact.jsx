import React from "react";
import styled from "styled-components";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from "../components/common";
import Mail from "../components/icons/Mail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 1.2em;
  font-size: 2rem;
  line-height: 1.2;
  background: ${TERTIARY_COLOR};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: ${SECONDARY_COLOR};
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid ${SECONDARY_COLOR};
    border-bottom: 2px solid ${SECONDARY_COLOR};
    transform: scaleY(2);
    opacity: 0;
    transition: 0.3s;
  }

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${SECONDARY_COLOR};
    transform: scale(0);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover {
    color: ${PRIMARY_COLOR};

    svg {
      stroke: ${PRIMARY_COLOR};
    }

    &:before {
      transform: scaleY(1);
      opacity: 1;
    }

    &:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

const Contact = () => (
  <Container id="contact">
    <H2>CONTACT</H2>
    <Wrapper href="mailto:jc.992@hotmail.com">
      <div style={{ display: "flex", alignItems: "center", gap: ".5em" }}>
        <span>email me</span>{" "}
        <Mail size="16" color={SECONDARY_COLOR} style={{ strokeWidth: "3" }} />
      </div>
    </Wrapper>
  </Container>
);

export default Contact;
