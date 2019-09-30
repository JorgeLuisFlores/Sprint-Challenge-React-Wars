# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a Javascript Library that aids in development of Web Applications.
It tries to solve the problem of DRY programming through the usage of reusable components.
React also makes building websites much faster and easier to deploy.

2. What does it mean to think in react?
It means to think of apps/websites as components and where components will be placed based on hierarchy.

3. Describe state.
State is data that belong to a component, this data is usually set by an object(data) and a method to alter the data(setData).

4. Describe props.
Props allows data from one component(usually a parent component) to be transfered to several other components(child components) in your application.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effect's are anything that affects something outside the scope of the function being executed.
useEffect can be used to avoid side effects by adding parameters which must be met before the useEffect will render.
For example a certain component or state must trigger a change before useEffect will allow a render.