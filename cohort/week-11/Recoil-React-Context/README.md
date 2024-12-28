### What is Recoil?
- It is a state management libaray that lets you write and manage all the states changes with minimizing the number of component rendering.

- As using direct useState to manage the state or Context Api to manage the state is not efficient as it renders those that should not be rendered or whose state is not going to change, here Recoil helps.

- The efficiency of the website is measured by the number of re-renderes and atom minimizes it, not only atom there are many libararies for staate management such as redux, recoil and so on.

- Atoms are unit sof state that can be read from and   written to from any c omponent. when an atom's stae changes, all componnets that subscribedto tath atom will re-render

- How it works : the value is read by only the components that renders it excluding those components that updates it like in case of counter app, the increase and decrease button is just updating the value of the count so they shouldn't render right and this is how recoil works.


### MEMO API

- The reason both the components re-reder is because when a component re-renders, all its children re-render as well. To avoid this we can use MEMO API.

- We can wrap the component inside the memo so then if the count variable is passed to a component then that child will render and if not passed to a component then dont re-render that particular children,

- React says : Anytime a component re-rednder all its children also re-render, But if you wrap a component inside a memo then if the component recieves the prop thenn only it will re-render.

***Selector***

- A selector reprsent a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
- Derived state is a powerful concept because it lets us build dynamic data that depends on other data.

- We use selector for computing the derived state based on the values of other pieces of state.

- We use selector to access state values as we can use get() method to read the value of atoms and other selectors. This is essential for creating derived state that depend upon other states.

- Composing state: It helps in composing or combining multiple state values to produce a computer value. This can be used to keep derived data consistent with the source data.

- let suppose their is a component that renders according to a derived state with a condition if let it be if a number is multiple of 2 then it renders true else it renders false but the component which re-renders will render only when the value changes from true to false let suppose a case where their is array of numbers that we wanna show on UI if it is true then render true with the number and if it is false render false but what is the array is full of even numbers the component will never re-render and under the hood derived state will check if it is even or odd.
