import React from "react";
import styled from "styled-components";

function ReactJs() {
  return (
    <Container>
      <Qbox>
        <h1>Features of ReactJS</h1>
        <ul>
          <li>
            JSX : JSX is an extension to javascript. Though it is not mandatory
            to use JSX in react, it is one of the good features and easy to use.
          </li>
          <li>
            Components: Components are like pure javascript functions that help
            make the code easy by splitting the logic into reusable independent
            code. We can use components as functions and components as classes.
            Components also have a state, props which makes life easy. Inside a
            class, the state of each of the props is maintained.
          </li>
          <li>
            Virtual DOM: React creates a virtual dom, i.e., in-memory data
            -structure cache. Only the final changes of DOM has later updated in
            the browsers DOM.
          </li>
          <li>
            Javascript Expressions: JS expressions can be used in the jsx files
            using curly brackets, for example {}.
          </li>
        </ul>
      </Qbox>
      <Qbox>
        <h1>Advantages of ReactJS</h1>
        <ul>
          <li>
            ReactJS uses virtual dom that makes use of in-memory data-structure
            cache, and only the final changes are updated in browsers dom. This
            makes the app faster.
          </li>
          <li>
            You can create components of your choice by using the react
            component feature. The components can be reused and also helpful in
            code maintenance.
          </li>
          <li>
            Reactjs is an open-source javascript library, so it is easy to start
            with.
          </li>
          <li>
            ReactJS has become very popular in a short span and maintained by
            Facebook and Instagram. It is used by many famous companies like
            Apple, Netflix, etc.
          </li>
          <li>
            Easy to debug and test as most of the coding is done in Javascript
            rather than on Html.
          </li>
        </ul>
        <h1>Disadvantages of ReactJS</h1>
        <ul>
          <li>
            Most of the code is written in JSX, i.e., Html and css are part of
            javascript, it can be quite confusing as most other frameworks
            prefer keeping Html separate from the javascript code.
          </li>
          <li>The file size of ReactJS is large.</li>
        </ul>
      </Qbox>
      <Qbox>
        <h1>What is JSX?</h1>
        <p>
          JSX is an extension to javascript. It is a template script where you
          will have the power of using HTML and Javascript together.
        </p>
      </Qbox>
      <Qbox>
        <h1>What are Props in ReactJS?</h1>
        <p>
          Props are properties to be used inside a component. They act as global
          object or variables which can be used inside the Component.
        </p>
      </Qbox>
      <Qbox>
        <h1>Life Cycle of a Component</h1>
        <p>
          A component life cycle is divided into Initialization, Mounting,
          Update, and UnMounting stages. Here is a detail explanation about each
          Component.
        </p>
      </Qbox>
    </Container>
  );
}

export default ReactJs;
const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  max-width: 1000px;
`;
const Qbox = styled.div`
  margin-bottom: 100px;
`;
const Answer = styled.div``;
