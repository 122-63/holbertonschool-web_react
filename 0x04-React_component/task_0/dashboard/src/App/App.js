import React, { Component } from "react";
import "./App.css";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notification />
        <header className="App">
          <Header />
        </header>
        <hr />
        <body className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </body>
        <hr />
        <footer className="App-footer">
          <Footer />
        </footer>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
