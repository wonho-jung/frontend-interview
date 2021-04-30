import React, { useState } from "react";
import styled from "styled-components";

function Css() {
  const [float, setFloat] = useState("left");
  return (
    <Container>
      <Qbox>
        <h1>Describe floats and how they work.</h1>
        <Answer>
          <p>
            “A CSS float tells the browser to put a particular element to the
            right side or the left side of the container. I use floats when I’m
            developing a page that dynamically resizes based on the user
            resolution"
          </p>
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
        <Example>
          <button onClick={() => setFloat("left")}>left</button>{" "}
          <button onClick={() => setFloat("right")}>right</button>{" "}
          <button onClick={() => setFloat("inherit")}>inherit</button>
          <p>
            <img
              style={{ float: float }}
              src="https://www.w3schools.com/css/pineapple.jpg"
            />
            <span>This float:{float}</span>!! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa dolorem sed excepturi?
            Doloremque illo at quo delectus aliquid sit neque, eveniet cum
            quisquam? Vel nobis laborum hic perferendis ratione eos.
          </p>
        </Example>
      </Qbox>

      <Qbox>
        <h1>What does box-sizing: border-box; do? What are its advantages?</h1>
        <Answer>
          <ul>
            <li>
              By default, elements have box-sizing: content-box applied, and
              only the content size is being accounted for.
            </li>
            <li>
              box-sizing: border-box changes how the width and height of
              elements are being calculated, border and padding are also being
              included in the calculation.
            </li>
            <li>
              The height of an element is now calculated by the content's height
              + vertical padding + vertical border width.
            </li>
            <li>
              Taking into account paddings and borders as part of our box model
              resonates better with how designers actually imagine content in
              grids.
            </li>
          </ul>
        </Answer>
      </Qbox>

      <Qbox>
        <h1>Have you played around with the new CSS Flexbox or Grid specs?</h1>
        <Answer>
          <p>
            Yes. Flexbox is mainly meant for 1-dimensional layouts while Grid is
            meant for 2-dimensional layouts.
            <br /> Flexbox solves many common problems in CSS, such as vertical
            centering of elements within a container, sticky footer, etc.
            Bootstrap and Bulma are based on Flexbox, and it is probably the
            recommended way to create layouts these days. Have tried Flexbox
            before but ran into some browser incompatibility issues (Safari) in
            using flex-grow, and I had to rewrite my code using inline-blocks
            and math to calculate the widths in percentages, it wasn't a nice
            experience.
            <br />
            Grid is by far the most intuitive approach for creating grid-based
            layouts (it better be!) but browser support is not wide at the
            moment.
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What is a CSS Preprocessor ?</h1>
        <Answer>
          <p>
            CSS preprocessors are scripting languages that extend the default
            capabilities of CSS. They enable us to use logic in our CSS code,
            such as variables, nesting, inheritance, mixins, functions, and
            mathematical operations.
          </p>
        </Answer>
      </Qbox>
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
  ul {
    list-style: square;
  }
`;
const Answer = styled.div``;
const Example = styled.div`
  margin-bottom: 300px;
  span {
    font-size: 30px;
    font-weight: 700;
  }
`;
const Box = styled.div`
  margin: 50px;
  padding: 30px;
  border: 1px solid red;
`;
