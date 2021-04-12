# a) Intro to React

```console
$ npx creat-react-app part1
$ cd part1
$ npm start
```
By default, the application runs in localhost port 3000 with the address http://localhost:3000
```JSX
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```
### Components

The component is defined as a JS arrow function w/ no parameters
```JSX
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```
Then assigned to a constant variable *App*
``` JSX
const App = ... 
```
This is a short hand for 
``` JSX
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
``` 
Any JS code within curly braces is evaluted and the result of this evaluation is embedded 
``` JSX
<p> {a} plus {b} is {a + b} </p>
```

COMPONENT NAMES MUST BE CAPITALIZED

Do Not Define Components Within Components

And the content of a component needs to contain ONE root element (such as div or an empty fragment <> </>)
or an array of components: 
```JSX
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}
```
This will not work: 
 ``` JSX
  const App = () => {
     return (
       <h1>Greetings</h1>
       <Hello name="Maya" age={26 + 10} />
       <Footer />
     )
  }
  ```
### JSX
The layout of React components is written using JSX< which looks similar to HTML but is actually compiled into JS using Babel. 

JSX tags, unlike HTML, must always have a closing tag. 

### Multiple components
Calling a component:
``` JSX
<Hello />
```
### props: passing data to components 
It's possible to pass data to components using props
``` JSX
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
``` 
Now the function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines.
``` JSX
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  )
}
```
There can be an arbitrary number of props and their values can be "hard coded" strings or results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.
``` JSX
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
```
### Some notes
You can use console.log() to debug

# b) JavaScript
ECMAScript is the JS standard. The latest vs. is ECMAScript® 2019, otherwise known as ES10.

Browsers do not yet support all of JavaScript's newest features. Due to this fact, a lot of code run in browsers has been transpiled from a newer version of JavaScript to an older, more compatible version.

Today, the most popular way to do the transpiling is by using Babel. Transpilation is automatically configured in React applications created with create-react-app. 

**Node.js** is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine and works practically anywhere - from servers to mobile phones. The latest versions of Node already understand the latest versions of JavaScript, so the code does not need to be transpiled.
```console
$ node file_name.js 
```
### Variables
``` JavaScript
const x = 1 // value can't be changed later
let y = 5
```
(var isn't recommmended)

the data type assigned to the variable can change during execution
### Arrays
``` JavaScript 
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})                    
```
The contents of the array can be modified even though it's defined as a const - bc the array is an object, the variable always points to the same objects. 

forEach receives a function defined using the arrow syntax as a parameter, which it calls for each item in the array, passing the individual item as a parameter
``` JavaScript
value => {
  console.log(value)
}
```
In the previous example, a new item was added using the method **push**. However, when using React techniques from functional programming are often used. One if immutable data structures. 

So it is preferable to use the method **concat**, which creates a new array in which the content of the old array and the new item are both included. 
``` JavaScript
const t2 = t.concat(5)
```
The **Map** method 
```JavaScript
const t = [1, 2, 3]
const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
```
Based on the old array, map creates a new array, for which the function given  as a parameter is used to create the items. In the case of this example the original value is multiplied by two.

Map can also transform the array into something completely different:
```JavaScript
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

**Destructuring assignment**
Individual items of an array can be assigned to variables 
```JavaScript 
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed
```
### Objects 
**Object literals** - define an object by listing it's properties in braces
```JavaScript
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```
The properties of an object are referenced using dot notation or brackets:
```JavaScript
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed
```
And you can add properties the same way: 
```JavaScript
object1.address = 'Helsinki'
object1['secret number'] = 12341
```
### Functions 
If there is just a single parameter, parentheses can be excluded:
```JavaScript
const square = p => {
  console.log(p)
  return p * p
}
```
If the function only contains a single experssion then the braces are not needed:
```JavaScript
const square = p => p * p
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```

Before the arrow function feature, functions were defined using the keyword **function**

Either as a function declaration: 
```JavaScript
function product(a, b) {
  return a * b
}
```

or as a function expression:
```JavaScript
const average = function(a, b) {
  return (a + b) / 2
}
const result = average(2, 5)
```
### Object methods
We can assign methods to an object by defining properties that are functions:
```JavaScript
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()
```
Methods can also be assigned to objects after the creation of an object:
```JavaScript
arto.growOlder = function() {
  this.age += 1
}
```
### Classes
There is no class mechanism like the ones in object-oriented programming languages. There are, however, features in JavaScript which make "simulating" object-oriented classes possible.
```JavaScript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()
```

# c) Component state, event handlers
### Component helper functions 
```JavaScript
const Hello = (props) => {
  const bornYear = () => new Date().getFullYear() - age  
```
### Destructuring
Since props is an object
```JSX
props = {
  name: 'Arto Hellas',
  age: 35,
}
```
we can streamline our component by assigning the values of the properties directly into two variables:
```JSX
const Hello = (props) => {
  const name = props.name
  const age = props.age
  // or 
  const {name, age} = props
```
or even: 
```JSX
const Hello = ({name, age}) => {
```
### Page re-rendering
Making repeated calls to the ReactDOM.render method is not the recommended way to re-render components. 

### Stateful component 
Let's add state to our component using React's **state hook**
```JSX
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // adds state to the component and renders it initalized with a value of zero
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    // when the state modifying setCounter is called, React re-renders the comoponent
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
```
### Event handling
Add a button that increases the counter:
```JSX
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
```
The event handler function can also be defined directly in the value assignment of the onClick-attribute:
```JSX
<button onClick={() => setCounter(counter + 1)}>
  plus
</button>
```
### Event handler as a function
Event handlers must be a *function* or *function reference*, not a *function call*, which would lead to infinite re-renders
```JSX
<button onClick={setCounter(counter + 1)}>
```
### Passing state to child components
React components should be small and reusable. The state should be lifted up in the component hierarchy. 

So let's place the application's state in the App component and pass it down to the Display component through props:
```JSX
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
``` 
And create a reusable button component:
```JSX
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
```
The final refactored program:
```JSX
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}
```
This can be further simplified to:
```JSX
const Display = ({ counter }) => <div>{counter}</div>
```
and 
```JSX
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
```

# d) A more complex state, debugging React apps
### Complex state
There can be separate "pieces" of state, that make up a more complex state
```JSX
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
```
Both pieces can also be combined into a single object:
```JSX
{
  left: 0,
  right: 0
}
```
Making the app look like:
```JSX
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
```
This can be simplified to: 
```JSX
const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })
```
`{ ...clicks}` creates a new object that has all the properties of the `clicks` object. When we specify a particular property - e.g. right in `{ ...clicks, right: 1 }`, the value of the right property in the new object will be 1. 

(Remember, it's forbidden to mutate a React state directly (like clicks.left++) The state must always be set to a new object, which can be copied from the old one)

### Handling arrays 
Add a piece of state to the app containing an array allClicks that remembers every click that has occurred
```JSX
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  //allClicks is initialized as an empty array
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      // The join method joins all the items in the array into a single space-separated string 
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
```
### Conditional rendering 
A History component is added, which displays instructions if no buttons have been clicked or the allClicks array if they have. 
```JSX
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const App = () => {
...
   <History allClicks={allClicks} />
```
### Debugging React apps
Keep the browser's dev console open at all times

Use console.log() - console.log('props value is', props)

Write 'debugger' anywhere on you rcode to pause the execution in Chrome developer's console, or add breakpoints in the Sources tab

Look at the Console tab to inspect the current state of the variables

Add the React developer tools extension to Chrome

### Rules of Hooks
useState must not be called from inside a loop, a conditional expression. Hooks may only be called from inside a function body that defines a React component. 
```JSX
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }
```
### Function that returns a function 
``` JSX
const App = () => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}
```
This is correct, even though the event handler is set to a function call, because the function call returns a function. 

### Passing Event Handlers to Child Components
```JSX
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
...
<Button handleClick={() => setToValue(1000)} text="thousand" />
```

