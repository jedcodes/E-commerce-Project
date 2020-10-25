import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInUp from "./components/SignIn-Up/SignIn-Up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-action";

function App({setCurrentUser}) {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchProps)(App);
