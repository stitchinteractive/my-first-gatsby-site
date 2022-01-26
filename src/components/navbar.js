// Step 1: import
import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Step 2: define
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container px-5">
				<Link to="/">Start Bootstrap</Link>
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
									<Link to="/blog_listing" className="dropdown-item">
										Blog Listing
									</Link>
								</li>
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
									<Link to="/portfolio_listing" className="dropdown-item">
										Portfolio Listing
									</Link>
								</li>
								<li>
									<Link to="/portfolio_details" className="dropdown-item">
										Portfolio Details
									</Link>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

// Step 3: export
export default Navbar;