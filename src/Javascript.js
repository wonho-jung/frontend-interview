import React from "react";
import styled from "styled-components";
import ex from "./assets/ex.JPG";
import varlet from "./assets/varlet.JPG";
import varlet2 from "./assets/varlet2.JPG";
import destructuring from "./assets/destructuring.JPG";
function Javascript() {
  return (
    <Container>
      <Qbox>
        <h1>What is JavaScript?</h1>
        <Answer>
          JavaScript is a client-side and server-side scripting language
          inserted into HTML pages and is understood by web browsers. JavaScript
          is also an Object-based Programming language
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What are JavaScript Data Types?</h1>
        <Answer>
          <ul>
            <li>Number</li>
            <li>String</li>
            <li>Boolean</li>
            <li>Object</li>
            <li>Undefined</li>
          </ul>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What is 'this' keyword in JavaScript?</h1>
        <Answer>
          <p>'This' keyword refers to the object from where it was called.</p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>Explain event delegation</h1>

        <Answer>
          <p>
            Event delegation is a technique involving adding event listeners to
            a parent element instead of adding them to the descendant elements.
            The listener will fire whenever the event is triggered on the
            descendant elements due to event bubbling up the DOM. The benefits
            of this technique are:
            <ul>
              <li>
                Memory footprint goes down because only one single handler is
                needed on the parent element, rather than having to attach event
                handlers on each descendant.
              </li>
              <li>
                There is no need to unbind the handler from elements that are
                removed and to bind the event for new elements.
              </li>
            </ul>
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>What is the difference between null and undefined?</h1>
        <Answer>
          <p>
            null is an assigned value. It means nothing. undefined means a
            variable has been declared but not defined yet.
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>
          Can you describe the main difference between a .forEach loop and a
          .map() loop and why you would pick one versus the other?
        </h1>
      </Qbox>
      <Answer>
        <p>
          The main difference between .forEach and .map() is that .map() returns
          a new array. If you need the result, but do not wish to mutate the
          original array, .map() is the clear choice. If you simply need to
          iterate over an array, forEach is a fine choice.
        </p>
        <p></p>
      </Answer>
      <Qbox>
        Difference between: function Person(){}, var person = Person(), and var
        person = new Person()?
        <Answer>
          <p>
            function Person(){} is just a normal function declaration. The
            convention is to use PascalCase for functions that are intended to
            be used as constructors.
          </p>

          <p>
            {/* Invoking = 호출 */}
            var person = Person() invokes the Person as a function, and not as a
            constructor.
          </p>
          <p>
            {/* inherits=상속 , alternative= 대안 */}
            var person = new Person() creates an instance of the Person object
            using the new operator, which inherits from Person.prototype. An
            alternative would be to use Object.create, such as:
            Object.create(Person.prototype).
            <img style={{ marginTop: "20px" }} src={ex} alt="" />
          </p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>Explain Ajax in as much detail as possible</h1>
      </Qbox>
      <Answer>
        <p>
          Ajax (asynchronous JavaScript and XML) is a set of web development
          techniques using many web technologies on the client side to create
          asynchronous web applications. With Ajax, web applications can send
          data to and retrieve from a server asynchronously (in the background)
          without interfering with the display and behavior of the existing
          page. By decoupling the data interchange layer from the presentation
          layer, Ajax allows for web pages, and by extension web applications,
          to change content dynamically without the need to reload the entire
          page. In practice, modern implementations commonly use JSON instead of
          XML, due to the advantages of JSON being native to JavaScript.
        </p>
        <p>
          AJAX is not a programming language. AJAX is a technique for accessing
          web servers from a web page. AJAX stands for Asynchronous JavaScript
          And XML.
        </p>
        <ul>
          <li>Read data from a web server - after a web page has loaded</li>
          <li>Update a web page without reloading the page</li>
          <li>Send data to a web server - in the background</li>
        </ul>
      </Answer>
      <Qbox>
        <h1>What is the difference between == and ===?</h1>
        <Answer>
          <p>
            "==" checks only for equality in value, whereas "===" is a stricter
            equality test and returns false if either the value or the type of
            the two variables are different.
          </p>
          <ul>
            <li>= is used for assigning values to a variable in JavaScript.</li>
            <li>
              == is used for comparison between two variables irrespective of
              the datatype of variable.
            </li>
            <li>
              === is used for comparision between two variables but this will
              check strict type, which means it will check datatype and compare
              two values.
            </li>
          </ul>
        </Answer>
      </Qbox>

      <Qbox>
        <h1>duplicate([1,2,4,5,6]) => output [1,2,3,4,5,1,2,3,4,5]</h1>
        <Answer>
          <p>
            function duplicate(arr) {"return arr.concat(arr);"} duplicate([1, 2,
            3, 4, 5]);
          </p>
          <p>const duplicate((arr)=> [...arr, ...arr])</p>
        </Answer>
      </Qbox>
      <Qbox>
        <h1>
          WHAT DOES SINGLE PAGE APPLICATION MEAN AND WHY DO WE NEED SINGLE PAGE
          APPLICATION
        </h1>
        <p>
          A single-page application is an app that doesn’t need to reload the
          page during its use and works within a browser. Think of the apps you
          use daily: Facebook, Google Maps, Gmail, Twitter, Google Drive, or
          even GitHub. All these are examples of a SPA. One of the best
          advantages of a correctly-configured SPA is the user experience (UX),
          where the user enjoys a natural environment of the app without having
          to wait for the page reloads and other things. You remain on the same
          page, which is powered by JavaScript programming language.{" "}
        </p>
      </Qbox>
      <Qbox>
        <h1>
          What are the differences between variables created using let, var or
          const?
        </h1>
        <Answer>
          <img src={varlet} alt="" />
          <img src={varlet2} alt="" />
        </Answer>
      </Qbox>
      <Qbox>
        <h1>
          Can you give an example for destructuring an object or an array?
        </h1>
        <img src={destructuring} alt="" />
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
