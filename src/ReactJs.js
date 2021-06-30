import React from "react";
import styled from "styled-components";
import dom from "./assets/dom.JPG";
import state from "./assets/state.JPG";
import mount from "./assets/mount.JPG";
import unmount from "./assets/unmount.JPG";
import update from "./assets/update.JPG";

function ReactJs() {
  return (
    <Container>
      <Qbox>
        <h1>What is React?</h1>
        <Answer>
          <ul>
            <li>
              React is a front-end JavaScript library developed by Facebook in
              2011.
            </li>
            <li>
              It follows the component based approach which helps in building
              reusable UI components.
            </li>
            <li>
              It is used for developing complex and interactive web and mobile
              UI.
            </li>
            <li>
              Even though it was open-sourced only in 2015, it has one of the
              largest communities supporting it.
            </li>
          </ul>
        </Answer>
      </Qbox>

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
        <ul>
          <li>Increases the application’s performance with Virtual DOM</li>
          <li>JSX makes code is easy to read and write</li>
          <li>It renders both on client and server side</li>
          <li>
            Easy to integrate with other frameworks (Angular, BackboneJS) since
            it is only a view library
          </li>
          <li>
            Easy to write UI Test cases and integration with tools such as JEST.
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
        <p>
          JSX stands for JavaScript XML. JSX allows us to write HTML in React.
          JSX makes it easier to write and add HTML in React.
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
        <h1>Differentiate between Real DOM and Virtual DOM.</h1>
        <img src={dom} alt="" />
      </Qbox>
      <Qbox>
        <h1>What is a state in React and how is it used?</h1>
        <Answer>
          <p>
            States are the heart of React components. States are the source of
            data and must be kept as simple as possible. Basically, states are
            the objects which determine components rendering and behavior. They
            are mutable unlike the props and create dynamic and interactive
            components. They are accessed via this.state().
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>Differentiate between states and props.</h1>
        <Answer>
          <img src={state} alt="" />
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What are React lifecycle methods?</h1>
        <p>Mounting – Birth of your component</p>
        <p>Update – Growth of your component</p>
        <p>Unmount – Death of your component</p>
        <h3>componentDidMount()</h3>
        <img src={mount} alt="" />
        <h3>componentDidUpdate()</h3>
        <img src={update} alt="" />
        <p>useEffect()</p>
        <p>
          It serves the same purpose as componentDidMount, componentDidUpdate,
          componentWillUnmount in React classes. This is a good place to perform
          functions like data fetching, subscriptions or manually changing the
          DOM from React components before.
        </p>

        <h3>componentWillUnmount()</h3>
        <img src={unmount} alt="" />
      </Qbox>
      <Qbox>
        <h1>What is the need of Redux OR Why we use Redux?</h1>
        <p>
          Suppose, you need to pass data in between such components that don't
          have any relationship (parent-child), so while making communication
          between such components, it is difficult to pass data and maintaining
          them is also a very difficult task.
        </p>
      </Qbox>
      <Qbox>
        <h1>What are the benefits of using Redux?</h1>
        <ul>
          <li>Single-Source of Truth</li>
          <li>Predictable States</li>
          <li>Easy to Maintain</li>
          <li>Reusable Code</li>
          <li>No need to uplift State</li>
          <li>Easy to Debug</li>
        </ul>
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
