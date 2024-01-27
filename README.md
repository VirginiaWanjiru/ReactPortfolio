# ReactPortfolio
This repository contains my personal portfolio implemented  in React


Q and A section 

Questions
What is NPM?
NMP stands for node package manager which developers use to install dependencies, manage versions, run scripts in a package.json file, and share code. It simplifies package management and helps streamline the development process.

What is SPA?
SPA is a type of web application that dynamically updates content on a single web page rather than loading separate pages from the server. SPAs use JavaScript to interact with the server and update the page without requiring full page reloads, resulting in faster and more responsive user experiences guaranteeing immediate response to change.


What is the event loop?
Refers to the mechanism through which JavaScript manages asynchronous tasks and updates the user interface. React's event loop coordinates the scheduling and execution of various operations, including rendering updates, handling user interactions, and managing component lifecycles. It ensures that applications remain responsive by efficiently processing tasks and reconciling changes to the virtual DOM with minimal performance overhead.

What is the difference between export x and export default x? How do you import them differently?
They are used to export values from a module. Export x is used to export named exports from a module. You can export multiple values using this syntax, and when importing them, you need to use curly braces {} and specify the names of the exports you want to import. Export default x  is used to export a default export from a module. You can only have one default export per module. When importing a default export, you can choose any name you want for the imported value.

Why do you use className as a property in React and not class?
class is a reserved name in react for defining purposes.

Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button>
setCounter(counter + 1) will be executed first and not when the button is clicked because it is within the OnClick attribute.


What is object deconstruction and how is it connected to React components (example)?

How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

What is async/await? Bring an example

What is a Promise? Bring an example

