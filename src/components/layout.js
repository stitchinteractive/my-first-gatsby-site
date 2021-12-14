// Step 1: import
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css";

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
		/*
		<div className="container">
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			<header className={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/blog" className={navLinkText}>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
		*/

		/*
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						{data.site.siteMetadata.title}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/blog" className="nav-link">
									Blog
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link to="/blog/blog-1" className="dropdown-item">
											Blog 1
										</Link>
									</li>
									<li>
										<Link to="/blog/blog-2" className="dropdown-item">
											Blog 2
										</Link>
									</li>
									<li>
										<Link to="/blog/blog-3" className="dropdown-item">
											Blog 3
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			*/

		<div>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>

			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container px-5">
					<Link to="/" className="test">
						Start Bootstrap
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/pricing" className="nav-link">
									Pricing
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/faq" className="nav-link">
									FAQ
								</Link>
							</li>
							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle"
									id="navbarDropdownBlog"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Blog
								</Link>
								<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
									<li>
										<Link to="/blog/blog-3" className="dropdown-item">
											Blog 3
										</Link>
									</li>
									<li>
										<Link to="/blog/blog-2" className="dropdown-item">
											Blog 2
										</Link>
									</li>
									<li>
										<Link to="/blog/blog-1" className="dropdown-item">
											Blog 1
										</Link>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<Link
									class="nav-link dropdown-toggle"
									id="navbarDropdownPortfolio"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Portfolio
								</Link>
								<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
									<li>
										<Link to="/portfolio-overview" className="dropdown-item">
											Portfolio Overview
										</Link>
									</li>
									<li>
										<Link to="/portfolio-item" className="dropdown-item">
											Portfolio Item
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<main>
				{/*
				<h1 className={heading}>{pageTitle}</h1>
				*/}
				{children}
			</main>

			<footer class="bg-dark py-4 mt-auto">
				<div class="container px-5">
					<div class="row align-items-center justify-content-between flex-column flex-sm-row">
						<div class="col-auto">
							<div class="small m-0 text-white">Copyright &copy; Your Website 2021</div>
						</div>
						<div class="col-auto">
							<a class="link-light small" href="#!">
								Privacy
							</a>
							<span class="text-white mx-1">&middot;</span>
							<a class="link-light small" href="#!">
								Terms
							</a>
							<span class="text-white mx-1">&middot;</span>
							<a class="link-light small" href="#!">
								Contact
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

// Step 3: export
export default Layout;
