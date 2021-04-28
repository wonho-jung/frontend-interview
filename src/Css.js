import React, { useState } from "react";
import styled from "styled-components";

function Css() {
  const [float, setFloat] = useState("left");
  return (
    <Container>
      <Qbox>
        <h1>Describe floats and how they work.</h1>
        <Answer>
          <p> The CSS float property specifies how an element should float.</p>
          <ul>
            <li>left - The element floats to the left of its container</li>
            <li>right - The element floats to the right of its container</li>
            <li>
              none - The element does not float (will be displayed just where it
              occurs in the text). This is default
            </li>
            <li>
              inherit - The element inherits the float value of its parent
            </li>
          </ul>
        </Answer>
      </Qbox>
      <Example>
        <button onClick={}>left</button> <button>right</button>{" "}
        <button>inherit</button>
        <p>
          <img test={float} src="https://www.w3schools.com/css/pineapple.jpg" />
          <span>This float:left</span>!! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Culpa dolorem sed excepturi? Doloremque illo at quo
          delectus aliquid sit neque, eveniet cum quisquam? Vel nobis laborum
          hic perferendis ratione eos.
        </p>
      </Example>
    </Container>
  );
}

export default Css;
const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  max-width: 1000px;
`;
const Qbox = styled.div`
  margin-bottom: 100px;
`;
const Answer = styled.div``;
const Example = styled.div`
  img {
    float: ${(props) => (props.test === "left" ? "left" : "right")};
  }
  span {
    font-size: 30px;
    font-weight: 700;
  }
`;
