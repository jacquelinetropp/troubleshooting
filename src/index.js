import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import firebase from './firebase/firebase';

import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true,
};

// react-redux-firebase config
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const root = document.getElementById("root");

ReactDOM.render(

    <Fragment>
     Hi
    </Fragment>
,
  root
);

function AuthIsLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading screen...</div>
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)

// store.firebaseAuthIsReady.then(() => {
//   ReactDOM.render(
//     <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <BrowserRouter>
 
//           <Fragment>

//             <App />
//           </Fragment>
   
//       </BrowserRouter>
//       </ReactReduxFirebaseProvider>
//     </Provider>,
//     root
//   );
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
