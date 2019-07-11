import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.scss";

const Navigation = ({ showListItem }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          {showListItem && (
            <li>
              <Link to="/">Contacts</Link>
            </li>
          )}
          <li>
            <Link to="/">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {
  showListItem: true
};

export default Navigation;