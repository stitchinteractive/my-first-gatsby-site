// Step 1: Import your component
import * as React from "react";
import Layout from "../components/layout";
import ContentRight from "../components/content_right";
import ContentLeft from "../components/content_left";
import Team from "../components/team";

// Step 2: Define your component
const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<section class="py-5 bg-light" id="scroll-target">
				<div class="container px-5 my-5">
					<ContentRight
						image_source="https://dummyimage.com/600x400/343a40/6c757d"
						image_alt="Lorem Ipsum"
						title="Heading 1"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
					></ContentRight>
				</div>
			</section>

			<section class="py-5">
				<div class="container px-5 my-5">
					<ContentLeft
						image_source="https://dummyimage.com/600x400/343a40/6c757d"
						image_alt="Lorem Ipsum"
						title="Heading 2"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
					></ContentLeft>
				</div>
			</section>

			<section class="py-5 bg-light">
				<div class="container px-5 my-5">
					<div class="text-center">
						<h2 class="fw-bolder">Our team</h2>
						<p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
					</div>
					<div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
						<Team
							image_source="https://dummyimage.com/150x150/ced4da/6c757d"
							name="Ibbie Eckart"
							designation="Founder &amp; CEO"
						></Team>
						<Team
							image_source="https://dummyimage.com/150x150/ced4da/6c757d"
							name="Ibbie Eckart"
							designation="Founder &amp; CEO"
						></Team>
						<Team
							image_source="https://dummyimage.com/150x150/ced4da/6c757d"
							name="Ibbie Eckart"
							designation="Founder &amp; CEO"
						></Team>
						<Team
							image_source="https://dummyimage.com/150x150/ced4da/6c757d"
							name="Ibbie Eckart"
							designation="Founder &amp; CEO"
						></Team>
					</div>
				</div>
			</section>
		</Layout>
	);
};

// Step 3: Export your component
export default AboutPage;
