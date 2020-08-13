import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

const NewsletterEditor = ({ currentUser }) => {
  return (
    currentUser && currentUser.attributes.group === "Newsletter" ?
    <div className="container">
      <br /><h2>Welcome {currentUser.attributes.first_name} {currentUser.attributes.last_name}</h2>
      <h2>Newsletter Editor</h2>
          <div className="container-news-edit">
            <NavLink className="button-link-newsletter" to='/newsletter-editor/new'>New</NavLink>
            <NavLink className="button-link-newsletter" to='/newsletter/edit'>| View</NavLink>
            <NavLink className="button-link-newsletter" to='/newsletter/edit'>| Archive</NavLink>
          </div>
    </div> : ""
  );
};

const mapStateToProps = state => {
  return {
    newsletters: state.newsletters,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(NewsletterEditor);
