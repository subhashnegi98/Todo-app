import React from 'react'

export const About = () => {
    return (
        <div>
           <h3>React</h3>
           <p>React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.[7]</p>
           <p>Components:=
            React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props".</p>
            <p>The two primary ways of declaring components in React is via functional components and class-based components.<br/>

            Functional components:=Functional components are declared with a function that then returns some JSX</p>
            <p>Class-based components:=Class-based components are declared using ES6 classes.</p>
            <h3>React Router</h3>
            <p>Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>
            <p>React Router is the standard routing library for React. ... “React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.</p>
            <p>React router can be an overkill for certain projects where all you need is basic navigation and routing functionalities. In that context, React Router is not necessary at all. ... It is also great for React Native applications.</p>
            <p>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.</p>
        </div>
    )
}
