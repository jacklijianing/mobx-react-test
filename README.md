This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## functions and ideas of this web application

### Step 1: Select binary tree array file from local
We allow user to select the file from local instead of input file location directly so that less exceptions could happen.

### Step 2: Convert the binary tree array data into JSON and show it in the text area
By calling ConvertArrayToNode.tsx which is the solution of Problem 1, the web page shows the pretty JSON format in the text area.
In this tsx file, we assume the user is inputting an array with 1-3 elements. 
If the data format is not an array, or the children amount is not correct, we show error message.
The first element must be a string or number as the ID, if it is not, we show error message.
The second and third elements, if exist, must be another array which meets all requirements above also, so that we can transfer it into subtree.

### Step 3: Show the binary tree in visible way

### Step 4: The user is allowed to update JSON in the text area and when he or she inputs a valid JSON, the tree vision updates automatically.
The users are allowed to update the JSON manually, and if there is any mistake, the page will show error message to alert them.

All above is solution of Problem 2.

### Step 5: In the tree vision, the website detects the smallest subtree containing all deepest nodes.

the project calls ConvertArrayToNode.tsx which is the solution of Problem 3 to determine which subtree is the smallest subtree containing all deepest nodes.
In this tsx file, we check the tree from the root to all leaves by recursion.
If the root does not have any children, that is to say it is the only element, the result must be itself, and the depth of this tree is 1.
If the root has one child, the result must not be this root, because it must be inside of this child's search, and it must be the smaller one than the root. And the depth of this tree is the depth of the subtree + 1.
If the root has two children, 
if the depth of the two children are same (this is the reason why we keep calculating the depth of the tree), the root must be the result, because none of its child's search could include the other deepest node in the other child. And the tree height is the children's depth + 1.
If the depth of the two children are different, the root must not be the result, because it must be in the deeper children's search. We return the deeper children's result, and the tree height is the deeper children's depth + 1.

## Tickets of what's next to do

### 1 Check whether IDs are unique. [DONE]
We are using ID to identifier which subtree is the chosen one in Problem 3, however, since the user could make mistake, it's better to check whether IDs are unique, and if not, we should not valid this inputted JSON.

Done.
Created CeckIDUnique.tsx to check the tree's IDs.
When formatting JSON, call the function firstly.
Used BFS to traverse the tree and used a set to record all IDs, if duplicate, return false.
(DFS is also OK, using BFS just to show not only recursion method!)

### 2 Allow user to select whether highlight the smallest subtree containing all deepest nodes. [DONE]
We can allow user to select showing it or not.

Done.
Added a checkbox in the output container to allow user to select whether to outline the smallest subtree or not.

### 3 Add animation effects to the highlight
To make it easier to view.

### 4 Resize the result dynamatically by the size of the tree.
Now if the tree is too small, the layout seems to be very empty, and if it is too large, the page may not contain all of them. So we can add JavaScript to calculating the size dynamatically.

### 5 Allow user to drag the result to design, and show the generated JSON result.
This is a very future idea, just list here for dreaming!