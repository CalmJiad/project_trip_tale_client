import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import Addservice from "./Components/Addservice/Addservice";
import Services from "./Components/TourServices/Services/Services";
import ServiceDetails from "./Components/TourServices/ServiceDetails/ServiceDetails";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageEvents from "./Components/TourServices/ManageEvents/ManageEvents";
import BookedEvents from "./Components/TourServices/BookedEvents/BookedEvents";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/manageEvents">
              <ManageEvents></ManageEvents>
            </PrivateRoute>
            <PrivateRoute path="/bookedEvents">
              <BookedEvents></BookedEvents>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addService">
              <Addservice></Addservice>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
