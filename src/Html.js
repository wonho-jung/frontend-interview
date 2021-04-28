import React from "react";
import styled from "styled-components";

function Html() {
  return (
    <Container>
      <Qbox>
        <h1>What does a DOCTYPE do?</h1>
        <Answer>
          <p>It identifies which dialect of HTML you're using.</p>
          <p>
            It controls whether the browsers uses "standards" or "quirks" mode
            to render the document.
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What does a DOCTYPE do?</h1>
        <Answer>
          <p>It identifies which dialect of HTML you're using.</p>
          <p>
            It controls whether the browsers uses "standards" or "quirks" mode
            to render the document.
          </p>
        </Answer>
      </Qbox>
    </Container>
  );
}

export default Html;
const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  max-width: 1000px;
`;
const Qbox = styled.div`
  margin-bottom: 100px;
`;
const Answer = styled.div``;
