import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/Context';
import ProductContext from './store/ProductContext';

/* =====Import Components===== */
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <ProductContext>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/sellProduct" component={Create} />
        <Route exact path="/singleProduct" component={ViewPost} />
      </Router>
    </ProductContext>
  );
}

export default App;
