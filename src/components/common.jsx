import styled from "styled-components";

const PRIMARY_COLOR = "#2978b5"; // replace in index.css as well for main bg
const SECONDARY_COLOR = "#ddd";
const TERTIARY_COLOR = "#b08a3f";
const BOX_SHADOW_COLOR = "rgba(61, 61, 59, 0.4)";

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
    background-color: ${SECONDARY_COLOR};
    transition: width 0.2s ease-in;
  }
`;


export { A, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, BOX_SHADOW_COLOR };
