// Step 1: import React
import * as React from "react";
import Layout from "../components/layout";
import BlogList from "../components/blog_list";

// Step 2: define component
const BlogListing = () => {
	return (
		<Layout pageTitle="Blog Listing">
			{/* Page Content */}
			<section class="py-5">
				<div class="container px-5">
					<h1 class="fw-bolder fs-5 mb-4">Company Blog</h1>
					<div class="card border-0 shadow rounded-3 overflow-hidden">
						<div class="card-body p-0">
							<div class="row gx-0">
								<div class="col-lg-6 col-xl-5 py-lg-5">
									<div class="p-4 p-md-5">
										<div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
										<div class="h2 fw-bolder">Article heading goes here</div>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus
											ab doloremque, qui doloribus ea officiis...
										</p>
										<a class="stretched-link text-decoration-none" href="#!">
											Read more
											<i class="bi bi-arrow-right"></i>
										</a>
									</div>
								</div>

								<div class="col-lg-6 col-xl-7">
									<div class="bg-featured-blog"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="py-5 bg-light">
				<div class="container px-5">
					<div class="row gx-5">
						<div class="col-xl-8">
							<h2 class="fw-bolder fs-5 mb-4">News</h2>
							<div class="mb-4">
								<div class="small text-muted">May 12, 2021</div>
								<a class="link-dark" href="#!">
									<h3>Start Bootstrap releases Bootstrap 5 updates for templates and themes</h3>
								</a>
							</div>
							<div class="mb-5">
								<div class="small text-muted">May 5, 2021</div>
								<a class="link-dark" href="#!">
									<h3>Bootstrap 5 has officially landed</h3>
								</a>
							</div>
							<div class="mb-5">
								<div class="small text-muted">Apr 21, 2021</div>
								<a class="link-dark" href="#!">
									<h3>This is another news article headline, but this one is a little bit longer</h3>
								</a>
							</div>
							<div class="text-end mb-5 mb-xl-0">
								<a class="text-decoration-none" href="#!">
									More news
									<i class="bi bi-arrow-right"></i>
								</a>
							</div>
						</div>
						<div class="col-xl-4">
							<div class="card border-0 h-100">
								<div class="card-body p-4">
									<div class="d-flex h-100 align-items-center justify-content-center">
										<div class="text-center">
											<div class="h6 fw-bolder">Contact</div>
											<p class="text-muted mb-4">
												For press inquiries, email us at
												<br />
												<a href="#!">press@domain.com</a>
											</p>
											<div class="h6 fw-bolder">Follow us</div>
											<a class="fs-5 px-2 link-dark" href="#!">
												<i class="bi-twitter"></i>
											</a>
											<a class="fs-5 px-2 link-dark" href="#!">
												<i class="bi-facebook"></i>
											</a>
											<a class="fs-5 px-2 link-dark" href="#!">
												<i class="bi-linkedin"></i>
											</a>
											<a class="fs-5 px-2 link-dark" href="#!">
												<i class="bi-youtube"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Blog preview section */}
			<section class="py-5">
				<div class="container px-5">
					<h2 class="fw-bolder fs-5 mb-4">Featured Stories</h2>
					<div class="row gx-5">
						<BlogList
							image_source="https://dummyimage.com/600x350/ced4da/6c757d"
							title="Blog post title"
							content="Some quick example text to build on the card title and make up the bulk of the card's content."
							author_image_source="https://dummyimage.com/40x40/ced4da/6c757d"
							date="March 12, 2021"
							reading_time="6 min"
						></BlogList>
						<BlogList
							image_source="https://dummyimage.com/600x350/ced4da/6c757d"
							title="Blog post title"
							content="Some quick example text to build on the card title and make up the bulk of the card's content."
							author_image_source="https://dummyimage.com/40x40/ced4da/6c757d"
							date="March 12, 2021"
							reading_time="6 min"
						></BlogList>
						<BlogList
							image_source="https://dummyimage.com/600x350/ced4da/6c757d"
							title="Blog post title"
							content="Some quick example text to build on the card title and make up the bulk of the card's content."
							author_image_source="https://dummyimage.com/40x40/ced4da/6c757d"
							date="March 12, 2021"
							reading_time="6 min"
						></BlogList>
					</div>
					<div class="text-end mb-5 mb-xl-0">
						<a class="text-decoration-none" href="#!">
							More stories
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>
			</section>
		</Layout>
	);
};

// Step 3: export component
export default BlogListing;
