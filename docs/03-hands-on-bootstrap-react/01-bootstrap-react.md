# Hands-On: Part 1 - Create React Project

### Step 1: Initialize new application
Let's start with a react project. Make sure you have npm installed. Let's create our react application using `create-react-app` script.

```
$ npx create-react-app shopping-app
```

Wait for a few moments, a new application folder will be initialized with everything you need.

### Step 2: Delete boiler plate code

#### Delete the following files:
- `App.test.js`
- `logo.svg`

#### Modify `App.js` to look like following
```Javascript
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```

#### Delete everything from `App.css` file
```CSS
/** App.css */

/* empty */
```


### Step 3: Create new components
For this demo, we will just need two components, one is `ProductList.js` where we will display all the list of products and secondly `CartList.js` where we will display the products added to shopping cart.

[Go to Next Page: Hands-On Part 2 >>]()