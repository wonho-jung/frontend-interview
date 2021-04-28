import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <NavLeft>
        <h1>Front-end Interview</h1>
      </NavLeft>

      <NavRight>
        <Link to="/">
          <h1>HTML5</h1>
        </Link>
        <Link to="/css">
          <h1>CSS3</h1>
        </Link>
        <Link to="/javascript">
          <h1>javaScript</h1>
        </Link>
      </NavRight>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
  }
`;
const NavRight = styled.div`
  margin-right: 100px;
  display: flex;
  a {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: black;
    opacity: 0.7;
  }
  a:hover {
    opacity: 1;
  }
`;
const NavLeft = styled.div`
  margin-left: 100px;
`;
