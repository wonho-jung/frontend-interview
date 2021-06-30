import React from "react";

function Interview() {
  return (
    <div>
      <h1>What is new React Version?</h1>
      <p>17.0.2</p>
      <h1>what is stateful component and stateless component?</h1>
      <p>
        React class component is called as a stateful component. Stateful
        component plays with all life cycle methods of React. This component
        will modify state.
      </p>
      <p>
        Functional component is like pure function in JavaScript. Functional
        component is also called as a stateless component. The functional
        component only receives props from parent component and return you JSX
        elements. The functional component doesn’t play with any lifecycle
        methods of React and doesn’t play with the component state.
      </p>
      <h1>stateless component</h1>
      <ul>
        <li>When you just need to present the props</li>
        <li>when you don't need a state, or any internal variables</li>
        <li>when creating elements does not need to be interactive</li>
        <li>when do you wnat reusable code</li>
      </ul>
      <h1>stateful component</h1>
      <ul>
        <li>when building element that accpet user input</li>{" "}
        <li>
          when dependent on state for rendering, suc as, fetching data before
          rendering
        </li>
        <li>when dependent on any data that cannot be passed down as props</li>
      </ul>

      <h1>What is virtual DOM?</h1>
      <p>
        The virtual DOM is an in-memory representation of the real DOM elements
        generated by React components before any changes are made to the page.
      </p>
      <h1>What is DOM?</h1>
      <p>
        Document object model. The DOM is the way Javascript sees its containing
        pages' data. It is an object that includes how the HTML/XHTML/XML is
        formatted, as well as the browser state. A DOM element is something like
        a DIV, HTML, BODY element on a page. You can add classes to all of these
        using CSS, or interact with them using JS.
      </p>
    </div>
  );
}

export default Interview;
