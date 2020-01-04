import React from "react";
import { connect } from "react-redux";
import "./big-title.scss"

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

function BigTitle({ title }) {
  return (
    <div className="big-title-container">
      <h1>{title}</h1>
    </div>
  );
}

export default connect(mapStateToProps)(BigTitle);
