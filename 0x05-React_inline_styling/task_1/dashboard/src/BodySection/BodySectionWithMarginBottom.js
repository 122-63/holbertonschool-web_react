import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.margin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: "40px",
    width: "100%",
  },
});

export default BodySectionWithMarginBottom;
