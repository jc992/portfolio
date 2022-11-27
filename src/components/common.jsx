import styled from "styled-components";

const A = styled.a`
  text-decoration: none;
  color: #fcfcfc;

  &:hover::before {
    width: 100%;
  }
  &::before {
    content: "";
    display: inline;
    width: 0;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    background-color: #ddd;
    transition: width 0.2s ease-in;
  }
`;

export { A };
