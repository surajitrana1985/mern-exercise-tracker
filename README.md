This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Mongo Script

Create a profile and cluster on MongoDb Atlas and generate a URI (as below) and place it in .env file under src folder and replace <password> with your database password:

ATLAS_URI=mongodb+srv://mongouser:<password>@cluster0-vgfiw.gcp.mongodb.net/test?retryWrites=true&w=majority

## Express Script

Install library by running below command:

### `npm install`

In the project directory, change directory to backend folder you can run:

### `cd backend`
### `npm install`
### `nodemon server.js`

Runs the Express API in the development mode.<br />
On [http://localhost:5000](http://localhost:5000).

## React Script

In the project directory, you can run:

### `npm install`
### `npm run start`

You will also see any lint errors in the console.Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.