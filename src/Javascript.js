import React from "react";
import styled from "styled-components";

function Javascript() {
  return (
    <Container>
      <Qbox>
        <h1>Explain event delegation</h1>

        <Answer>
          <p>
            Event delegation is a technique involving adding event listeners to
            a parent element instead of adding them to the descendant elements.
            The listener will fire whenever the event is triggered on the
            descendant elements due to event bubbling up the DOM. The benefits
            of this technique are:
          </p>
        </Answer>
      </Qbox>
    </Container>
  );
}

export default Javascript;

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
