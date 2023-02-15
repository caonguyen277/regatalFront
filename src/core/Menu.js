import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#000000" };
  }
};
const Menu = ({ history }) => (
  <Navbar expand="lg">
    <Container fluid>
      <Link className="nav-link" style={isActive(history, "")} to="/">
        <img style={{ width: "260px" }} src={logo} alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link" style={isActive(history, "/")} to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/shop")}
                to="/shop"
              >
                Shop
              </Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/admin/dashboard")}
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/user/dashboard")}
                  to="/user/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </Nav>
        <Nav className="d-flex">
          <ul className="form-inline my-2 my-lg-0 me-auto">
            <li className="nav-item ">
              <Link
                className="nav-link"
                style={isActive(history, "/favourite")}
                to="/favourite"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                style={isActive(history, "/cart")}
                to="/cart"
              >
                Cart{" "}
                <sup>
                  <small style={{ color: "white" }} className="cart-badge">
                    {itemTotal()}
                  </small>
                </sup>
              </Link>
            </li>
            {isAuthenticated() && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "#000000" }}
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  Signout
                </span>
              </li>
            )}
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signin")}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={isActive(history, "/signup")}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default withRouter(Menu);
