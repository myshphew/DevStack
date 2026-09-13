
# Dev Stack

A modern single-page application for building and customizing your favourite development tech stack. Choose the technologies you use in your daily projects from a vast collection of programming languages, libraries, frameworks, tools, and more. 

Dev Stack was built as a simple and interactive way to visualize and customize the technologies developers use in their everyday projects, while exploring modern frontend development with React and TypeScript.

## Live Link

**[View Dev Stack](https://dev-stack-mu.vercel.app/)**

## Features

- **Modern & Clean UI**: Simple, minimal, and intuitive interface.
- **Dynamic Tech Stack**: Add and remove technologies to customize your personal stack.
- **Mobile Responsive**: Fully responsive across desktop, tablet, and mobile devices.
- **Wide Tech Collection**: Explore programming languages, libraries, frameworks, and other development technologies.

## Tech Stack

- **React**: Frontend library
- **Vite**: Development and build tool
- **TypeScript**: Type-safe JavaScript
- **Vercel**: Deployment and hosting


## React QnA

**1. What is JSX, and why is it used in React?**<br>
JSX is a syntax entension that is used to be like a bridge between javascript and html, so that we can write HTML similar codes in JS code for the frontend UI in react application.

**2. What is the difference between props and state?**<br>
Props is a value that is passed rom parent component to it's child component. Whereas, state is a variable like stucture within a component that stores data of the component.

**3. What does the useState hook do, and where did you use it in this project?**<br>
UseState hooks allows you to store data within a component and updates the UI according to the data. I have used it in the tech card, selected tech cards and the grids to store the selected techs and update the button states and dynamic counts.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**<br>
UseEffect hooks are used to to activities like fetching data, calling APIs and processing data what are outside react components. We need useEffect to fetch data from json by creating a promise, so that we can use the data to load in the UI.

**5. Why does every item in a .map() list need a unique key prop?**<br>
While using .map(), the UI is updated using the data from a given array, but to identify each data separatedly, we need unique identifier, and keys comes here to help it out.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**<br>
Conditional rendering means, the part of UI where there exists different states and which state will be rendered is selected from a condition. For example, in my project I have used conditional rendering for buttons, like if tech is added button becomes disable in color and text changes, else, when not selected, it's brand color and clickable.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**<br>
Data is passed to child from parent via props. These are sent to the child components while calling them. And the data is sent to parent from child via callback functions. When an event takes place in a child component, a callback function is called to send this data to the parent component.


