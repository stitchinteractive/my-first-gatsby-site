// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Featured from "../components/featured";
import Testimonial from "../components/testimonial";
import BlogList from "../components/blog_list";
import NewsletterSubscription from "../components/newsletter_subscription";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			{/* header */}
			<header class="bg-dark py-5">
				<div class="container px-5">
					<div class="row gx-5 align-items-center justify-content-center">
						<div class="col-lg-8 col-xl-7 col-xxl-6">
							<div class="my-5 text-center text-xl-start">
								<h1 class="display-5 fw-bolder text-white mb-2">
									A Bootstrap 5 template for modern businesses
								</h1>
								<p class="lead fw-normal text-white-50 mb-4">
									Quickly design and customize responsive mobile-first sites with Bootstrap, the
									world’s most popular front-end open source toolkit!
								</p>
								<div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
									<a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
										Get Started
									</a>
									<a class="btn btn-outline-light btn-lg px-4" href="#!">
										Learn More
									</a>
								</div>
							</div>
						</div>
						<div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
							<img
								class="img-fluid rounded-3 my-5"
								src="https://dummyimage.com/600x400/343a40/6c757d"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</header>
			{/* end header */}

			{/* features */}
			<section class="py-5" id="features">
				<div class="container px-5 my-5">
					<div class="row gx-5">
						<div class="col-lg-4 mb-5 mb-lg-0">
							<h2 class="fw-bolder mb-0">A better way to start building.</h2>
						</div>
						<div class="col-lg-8">
							<div class="row gx-5 row-cols-1 row-cols-md-2">
								<Featured title="Featured 1" content="This is my content."></Featured>
								<Featured title="Featured 2" content="This is my content."></Featured>
								<Featured title="Featured 3" content="This is my content."></Featured>
								<Featured title="Featured 4" content="This is my content."></Featured>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end features */}

			{/* testimonials */}
			<Testimonial
				content="Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"
				image_source="https://dummyimage.com/40x40/ced4da/6c757d"
				client="John Doe"
				designation="Founder, Lorem Ipsum Pte Ltd"
			></Testimonial>

			{/* end testimonials */}

			{/* blogs */}
			<section class="py-5">
				<div class="container px-5 my-5">
					<div class="row gx-5 justify-content-center">
						<div class="col-lg-8 col-xl-6">
							<div class="text-center">
								<h2 class="fw-bolder">From our blog</h2>
								<p class="lead fw-normal text-muted mb-5">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta
									mollitia. Officiis ad.
								</p>
							</div>
						</div>
					</div>
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
					<NewsletterSubscription></NewsletterSubscription>
				</div>
			</section>
			{/* end blogs */}
		</Layout>
	);
};

// Step 3: Export your component
export default IndexPage;
