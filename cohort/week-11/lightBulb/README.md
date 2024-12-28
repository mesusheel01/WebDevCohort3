### What is prop drilling?

- As our code base grows and we are familar with passing down the state to child component then there are some areas where we dont need a certain state but we are passing because another child components needs it so it makes large codebase more ugly and complex to maintain
- As if we want to make changes in a certain state then we will have to make changes in many componets for it.

- Thats why their is a concept of state management libraries. And in this React app we will study about the same.

### **What is Context Api**

- The context API is a powerful feature in React that enables you to mange stae across your application more effectively, especially when dealing with deply nested componets.
- The context API provides a way to shate vlaues (state, functions, etc.) between components without having to pass props down manually at every level.
**There are the three jargons that you need**

*Context*-> This is created using React.createContext(). It serves as a container for the data you want to share.

*Provider*-> This component wraps part of you application and provides the context value to all its decendants. Any component that is a child of this provider can access the context.

*Consumer*-> This component subscribes to context changes. It allows you to access the context value (using useContext hook)


ok now he told me something that is not acceptable to me so i should just mock him and put my brain to whatever someone says and tell him if he wrong and write this is the way of happiness rather that taking negative thought from it.


**When we use context api it makes render those elements of the dom re-reder which are not updateing their state so to avoid this we should use state management libraries like Redux, Recoil.**

***RECOIL***

- A state management library for react that provides a way to manange global state with fine-grained control.
- Recoil minimizes unnecessary renders by only re-rendering components that depend on changed atoms.
- The performance of a react app is measured by the number of re-renders. Each re-render is expensive and you should aim to minimise it.

Key concepts in recoil:
- Atoms: Units of state that can be read from and written to from any component.
- Selectors: Functions that derive state from atoms or other selectors, allowing for computed state.

