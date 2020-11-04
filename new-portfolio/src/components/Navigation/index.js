import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

    return (
        <section className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-head" to="/">
                        <h1>Ethan Torres</h1>
                    </Link>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse-navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">

                            <li
                                class={`nav-item ${
                                    props.location.pathname=== "/" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>

                            <li 
                                class={`nav-item ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li
                                class={`nav-item ${
                                    props.location.pathname === "contact" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/contact">
                                    Contact Me
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    );

}

export default withRouter(Navigation);