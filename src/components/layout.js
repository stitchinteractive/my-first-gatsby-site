// Step 1: import
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./layout.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Step 2: define
const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<div>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>

			<Navbar></Navbar>

			<main>{children}</main>

			<Footer></Footer>
		</div>
	);
};

// Step 3: export
export default Layout;
