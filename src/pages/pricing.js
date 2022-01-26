// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Pricing from "../components/pricing";

// Step 2: Define your component
const PricingPage = () => {
	return (
		<Layout pageTitle="Pricing">
			<section class="bg-light py-5">
				<div class="container px-5 my-5">
					<div class="text-center mb-5">
						<h1 class="fw-bolder">Pay as you grow</h1>
						<p class="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
					</div>
					<div class="row gx-5 justify-content-center">
						{/* Pricing card free */}
						<Pricing
							type="Free"
							price="$0"
							users="1 user"
							storage="5GB"
							projects="Unlimited"
							access="Community"
							private_projects="Unlimited"
							support="Dedicated"
							domain="Free linked domain"
							reports="Monthly"
						></Pricing>
						{/* Pricing card pro */}
						<Pricing
							type="Pro"
							price="$9"
							users="5 users"
							storage="10GB"
							projects="Unlimited"
							access="Community"
							private_projects="Unlimited"
							support="Dedicated"
							domain="Free linked domain"
							reports="Monthly"
						></Pricing>
						{/* Pricing card enterprise */}
						<Pricing
							type="Enterprise"
							price="$49"
							users="Unlimited users"
							storage="20GB"
							projects="Unlimited"
							access="Community"
							private_projects="Unlimited"
							support="Dedicated"
							domain="Unlimited linked domains"
							reports="Monthly"
						></Pricing>
					</div>
				</div>
			</section>
		</Layout>
	);
};

// Step 3: Export your component
export default PricingPage;
