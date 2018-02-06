### React

- For a **Component Library**,  we're going to use React.
- React is a project from Facebook that handles a very specific set of concerns, packing, composing, and rendering HTML components.
- Because of this focus, React is lightweight and makes it easy to create complex UIs by composing many simple component together. (**Simple composition**)
- Becuase React is so focused on this one goal, it can even be used along with other frameworks like Angular and Backbone.
- React **Utilizes a virtual DOM.**
- This makes it very fast.
- When UI changes, React compares the old state to the new state in memory, and then it updates the DOM in the least expensive way.
- This saves resources and makes React notably faster than many of today's popular alternatives, and with the power of Virtual DOM, React can even support rendering on both the client and the server. (**Can render on client and server**)
- This, of course, is critical for building isomorphic apps and really sets React apart from other traditional libraries and frameworks that are currently very DOM-oriented, like Angular or Knockout.

<br>

### React Router

- Since React is a small, focused view engine, it has no opinion on how to handle routing, and for small apps, you may have no need for a fully-featured router, but as your app grows, you'll likely find you want to split the application into multiple client-rendered pages with deep linking, and that's where a routing library comes in handy. 
- So for a routing app, we'll use React Router. (**Nested views map to nested routes**)
- React Router offers a simple nested approach to routing.
- You declaratively configure routes and the ability to nest routes means that you can support complex UIs that are many layers deep. (**Declarative**)
- React Router is both used by Facebook(**Used at Facebook**) and supported by Facebook, and if you're already familiar with Ember, you'll find React Router is very easy to pick up since it's heavily inspired by Ember's approach to routing. (**Inspired by Ember**)
- Regardless, I'm sure you'll find the declarative and centralized approach easy to understand.

<br>

### Flux

- Flux is a uni-directional data flow library created by Facebook to complement React. (**Uni-directional data flows**)
- Now, Flux is really just a branding name for Facebook's implementation of a pattern. (**More a pattern than a library**)
- This is a uni-directional data flow pattern.
- So there are a variety of alternatives out there including DeLorean, Fluxxor, Fluxy and Reflux, but we're going to use Facebook's Flux implementation in this course because it's very popular.
- Flux avoids a more traditional MVC-style pattern and instead implements one-way data flows.
- This tends to make large applications easier to predict and reason about by avoiding complex interactions that can occur between multiple view and view models in traditional MVC.

<br>

### Node

- Building an app with React and Flux doesn't require using Node, but Node certainly makes our job easier.

- Node runs JavaScript on the server using Google's fast V8 Engine. (**Server-side JS**) (**Uses the V8 Engine**)

- Node now includes npm, which is Node's package manager. (**Includes npm package manager**)

- npm includes thousands of useful JavaScript libraries, so we'll use npm to pull down the libraries we need for our project.

- If you haven't used Node, don't worry.

- We'll walk through the basics of what you need to know to get going in this course.

  #### npm: Node's Package Manager

- As I said in the previous slide, Node comes bundled with its own Package Manager, called npm.

- npm is how we'll install and manage the dependencies we need to run our app.

- You're likely already familiar with the concept of the Package Manager, but in case you're not, let me mention a few other.

- In .NET, developers use NuGet, Ruby has RubyGems, Java has Maven, Python has pip, PHP has PEAR, and front end developers often use Bower to manage packages related to HTML, JavaScript and CSS.

- npm is Node's Package Manager.

- It provides a quick, easy way to install Node packages, just like these Package Managers you see above.

- Once you've installed Node, you simply type npm and the name of the package that you'd like to install.

- Now, Node use the CommonJS Pattern for referencing and exporting modules.

- You might be familiar with alternative module patterns like RequireJS' Asynchronous Module Definition pattern, also known as AMD.

- Node's CommonJS Pattern serves the same general purpose.

- Its goal is to encapsulate your JavaScript into a reusable module that can be referenced by other modules.

- It's simply a different syntax.

- In short, using the CommonJS Pattern consists of three core parts.

- First, you reference any modules that you wnat to use using a require function.

- You pass the path of the module that you'd like to import.

- If the module's in your Node modules folder you don't need to specify a path since Node will check there automatically.

- So if you've worked in Java, then this is like a Java import statement.

- If you've worked in C#, this is a lot like a using statement.

- Second, you Declare the module itself.

- You write all your code within this module, so it sits between these brackets, and you give it a name.

- And finally, at the bottom of your file, you export the module that you just defined.

- This Exposes your module so that other modules can reference this module using the require statement.

- We will build all of our JavaScript files using the CommonJS Pattern.

- ```javascript
  // 1. Get reference to dependency
  var dependency = require('/path/to/file');

  // 2. Declare module
  var MyModule = {
    // code here
  }

  // 3. Expose to others
  module.exports = MyModule;
  ```

<br>

### Props and State

- ```react
  Props: Look like HTML attributes, but immutable
  	this.props.username

  State: Holds mutable state
  	this.state.username
  ```


- Data for a given React component is held in two places, props and state.
- Props is short for properties.
- You can think of properties a lot like HTML attributes.
- Props allow you to pass data down to child components.
- For example, if I had a component that displayed a username, a parent component could pass down a username prop.
- Props are immutable.
- Since they're passed down by the parent, they're effectively owned by the parent.
- State, in contrast, is mutable.
- And since state is mutable, you should strive to only utilize state on your controller views.
- In other words, only use state on the top level component.
- Pass data down to your child components via props.
- You can optionally define a **getInitialState** function.
- In this function, you can set the initial state for your component.
- This should typically only be done in your top level component, also known as your controller view.
- You can also define default values for properties on your component using the **getDefaultProps** method.
- Inside this method, you can return a set of properties that your component should use by default if the parent component doesn't declare a value.

<br>

### Component Lifecycle

- ```react
  Lifecycle Methods

  componentWillMount
  componentDidMount
  componentWillReceiveProps
  shouldComponentUpdate
  componentWillUpdate
  componentDidUpdate
  componentWillUnmount
  ```

- Now here's a surprising reference.

- If you've ever worked with asp.net webforms then this aspect of React components will feel very familiar to you.

- Each React component has a lifecycle.

- So there's a list of functions that allow you to hook into various parts of the component's lifecycle.

- Let's quickly explore when and where each of these lifecycle functions are called, and consider why each is useful.

- We'll also consider where each of these functions run.

- Since React was built from the ground up to be rendered on both the client and the server, also known as isomorphically or universally, some of these functions run on both the client and the server, while some of them run only on the client.

- ```react
  componentWillMount

  When
  Before initial render, both client and server

  Why
  Good spot to set initial state
  ```

- **componentWillMount** runs immediately before initial rendering.

- So this function's a great spot to set your component's initial state.

<br>

- ```react
  componentDidMount

  When
  After render

  Why
  Access DOM, integrate with frameworks set timers, AJAX requests
  ```

- **componentDidMount** runs immediately after render.

- By the time this function's called, the component's DOM exists.

- So this is a handy spot for integrating with other frameworks such as third party component libraries.

- This is also a good spot set times and make AJAX requests since you now know the component is rendered in the DOM.

<br>

- ```react
  componentWillReceiveProps

  When
  When receiving new props. Not called on initial render.

  Why
  Set state before a render.
  ```

- **componentWillReceiveProps** runs when the component is receiving new properties.

- In other words, when properties have changed.

- This is a place to set state before the next render since this runs just before the new properties are received.

<br>

- ```react
  shouldComponentUpdate

  When
  Before render when new props or state are being received.
  Not called on initial render.

  Why
  Performance. Return false to void unnecessary re-renders.
  ```

- **shouldComponentUpdate** runs immediately before render and when new props or state are being received by your component.

- The big reason this function is useful is for performance.

- Why? Well, sometimes props and/or state changes, but the components doesn't actually need to re-render because the data change doesn't affect the DOM.

- When this is the case, you can return false from this function to avoid an unnecessary render call.

<br>

- ```react
  componentWillUpdate

  When
  Immediately before rendering when new props or state are being received.
  Not called on initial render.

  Why
  Prepare for an update
  ```

- **componentWillUpdate** runs immediately before rendering when new props or state are being received.

- This function is a useful place to prepare for an update.

- But take note that you can't call set state in this function.

<br>

- ```react
  componentDidUpdate

  When
  After component s updates are flushed to the DOM.
  Not called for the initial render.

  Why
  Work with thd DOM after an update
  ```

- **componentDidUpdate** is evoked immediately after the component's updates are flushed to the DOM.

- So this function allows you to operate on the DOM immediately after the component has been updated and re-rendered in the DOM.

<br>

- ```react
  componentWillUnmount

  When
  Immediately before component is removed from the DOM

  Why
  Cleanup
  ```

- The final lifecycle function is **componentWillUnmount.**

- This function runs just before component is unmounted from the DOM.

- So this is a great place to clean up by destroying any related resources or DOM elements that were created when the component was mounted.

<br>

### Keys for Dynamic Children

- ```react
  Add a key to dynamic child elemants

  <tr key={author.id}>
  ```

- Also, keep in mind, when you're creating multiple child components dynamically, you need to provide a key for each child component.

- As children are added and removed, React uses this key to assure that child components are properly reordered or destroyed.

- So in this example, I'm using the author's ID field as the key.

- This is often the primary key for the corresponding database record, but it need not be.

- You just need to declare a unique ID for each specific record.

<br>

### Intro to Redux

- In the first few modules, we created a solid foundation with a robust development environment and a solid application structure using React and React Router.
- In this module, we'll explore how Redux can help us manage our application's data flows via a quick introduction.
- In this module, we'll begin by asking the most obvious question, **Do I need Redux?**
- Like any tool, it's useful in certain contexts and not necessary for everyone.
- Then we'll consider Redux's 3 **core principles**.
- From there, I'll show how these 3 principles impact Redux's design.
- I'll contrast Flux with Redux in detail.
- This section is really useful for those who already know Flux well.
- It should help you get up to speed on Redux pretty quickly.
- Then we'll wrap up by reviewing a simple example of the full Redux flow.
- Let's dive into Redux.

<br>

### Do I need Redux?

- Let's begin with the big question you should ask yourself first, Do I need Redux at all?
- To answer that, it's helpful to discuss context.
- No tool is perfect for every job.
- So I think it helps to think about complexity on a spectrum.
- See, if you're building an ultra-simple application, then perhaps all you want to use is plain vanilla JavaScript.
- But as you start having to manipulate the DOM, make AJAX calls, and handle interactivity, something like jQuery might become more handy.
- However, an app doesn't have to get very complex before you realize that writing in vanilla JavaScript or jQuery gets painful.
- React comes in quite handy at that point.
- The clear component module, the virtual DOM, synthetic events, and the ability to think about your app in terms of small pure functions are just a few of the great features that make React so popular and help us manage increasing complexity in our apps.
- Now as data flows get more complex, you may find yourself displaying the same data in multiple places.
- You may have a large number of potential state changes that are hard to manage.
- You may find it helpful to handle state changes in a single spot for consistency, testability, and heck, your own sanity.
- This is where React with Redux really shines.
- Of course, as you move right on this chart, capabilities increase.
- And, yes, that also means setup time increases because there's no setup time required when you start writing plain JavaScript.
- But to handle more complex apps, you have to accept that the initial setup will take some time.
- I want you to keep this in mind as we set up Redux for the first time in an upcoming module.
- There're quite a few moving pieces to get right.
- But once we do, we'll have a very powerful and scalable foundation for handling seriously complex applications in a manner that's testable, maintainable, and provides us a rapid feedback experience along the way.
- The bottom line is you can build impressive and scalable applications using just React.
- But Flux and Redux are really useful for applications that have **complex data flows.**
- If you're writing an app that merely displays simple static data, then Redux isn't likely to be useful.
- For example, if you need to handle interactions between two components that don't have a parent-child relationship, Redux offers a clear a and elegant solution. (**Inter-component communication**)
- When you find two disparate components are manipulating the same data, Redux becomes really helpful.
- This scenario is often the case when your application has **Non-hierarchical data**.
- Also, as your application offers an increasing number of actions, the structure and scalability of Redux can become really useful. (**Many actions**)
- The most obvious sign that you'll want something like Redux is if you're utilizing the same data in multiple places. (**Same data used in multiple places**)
- If your components need to utilize the same data and they don't have a simple parent-child relationship, Redux helps solve that problem.
- Now I like the way Pete Hunt boils this all down.
- "You'll know if you need Flux or Redux. If you aren't sure you need it, you don't need it."
- When building a new app, you don't need to automatically reach for Redux.
- Add Redux when it feels necessary.
- So let's consider an obvious example of where Redux is really helpful.
- Imagine that each circle here represents a React component.
- What if we have components in different parts of the app that need to manipulate and work with the same data.
- If these components in blue work with the same piece of data, how do they communicate to assure that that data stays in sync.
- With Redux, the answer is simple.
- We have a centralized store.
- You can think of the store like a local client-side database.
- Once you have a store, it means a component can dispatch an action, which ultimately updates the single store.
- So once your components are connected to the store, when the store is updated, they're immediately notified of data changes.
- So does Redux sound useful to you?
- If so, let's move on and learn about the three principles at the foundation of Redux's design.

<br>

### Three Core Redux Principles	

- `One immutable store`
- `Actions trigger changes`
- `Reducers update state`
- Redux has three core principles.


- The first is that all your application state is placed in a single immutable store.
- And by immutable, I mean the state can't be changed.
- I'll get into how this works in a moment.
- But as you'll see, the single-store concept isn't just conceptually simpler than Flux's multi-store model.
- Having one immutable store aids debugging, supports server rendering, and makes things like undo/redo easily possible.
- In Redux, the only way to mutate state is to emit an action, which describes a user's intent.
- So, for example, a user might click the Submit Contact Form button, and that would trigger a Submit Contact Form action.
- The final principle is that state is changed by pure functions.
- These functions are called reducers.
- It sounds complicated, but it's not.
- In Redux, a reducer is just a function that accepts the current state in an action and returns a new state.
- And to help provide a kickstart for those that are familiar with Flux, in the next clip, I'll compare Flux and Redux.

<br>

### Redux Flow Overview

- Now that we've contrasted Flux and Redux, let's explore Redux in more detail.
- Let's look at how actions, reducers, the store, and container components will interact to create unidirectional data flows.
- Let's consider a simple example to understand this flow.
- An action describes user intent.
- It's an object with a type property and some data.
- The data portion can be whatever shape you like.
- The only requirement is that an action has a type.
- If you've already worked with Flux, then this should look familiar.
- This concept doesn't change in Redux.
- This is an action for rating a course.
- Imagine you were rating my course on a scale of 1 to 5.
- Let's say you rated it at a 5.
- If you did click to rate it a 5-star course, this is the action that would be produced.
- This data portion on the right can be whatever you like.
- You could pass multiple separate pieces of data here or one or more objects.
- This action will ultimately be handled by a reducer.
- A reducer is just a fancy name for a function that returns new state.
- So as you can see, the reducer receives the current state and an action, and then it returns a new state.
- Reducers typically contain a switch statement that checks the type of the action passed.
- This determines what new state should be returned.
- And once this new state is returned from a reducer, the store is updated.
- React re-renders any components that are utilizing the data.
- Your React components are connected to the store using React-Redux.
- We'll get to how that works in an upcoming module.
- But that's the Redux flow in a nutshell.
- Not too bad.

<br>







































