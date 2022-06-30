"Props" refers to the properties being 
passed into a component in order for it 
to work correctly, similar to how a function
recieves parameters: "from above." A component
receiving props is not allowed to modify those 
props. (i.e. they are "immutable.")

"State" referes to values that are
managed by the component, similar to
variables declared inside a function.
Any time you have changing values
that should be saved/displayed, you'll
likely be using state.


Quiz

1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
