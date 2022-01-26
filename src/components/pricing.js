// step 1: import
import * as React from "react";

// step 2: define
const Pricing = props => {
	return (
		<div class="col-lg-6 col-xl-4">
			<div class="card mb-5 mb-xl-0">
				<div class="card-body p-5">
					<div class="small text-uppercase fw-bold text-muted">{props.type}</div>
					<div class="mb-3">
						<span class="display-4 fw-bold">{props.price}</span>
						<span class="text-muted">/ mo.</span>
					</div>
					<ul class="list-unstyled mb-4">
						<li class="mb-2">
							<i class="bi bi-check text-primary"></i>
							<strong>{props.users}</strong>
						</li>
						<li class="mb-2">
							<i class="bi bi-check text-primary"></i>
							{props.storage} storage
						</li>
						<li class="mb-2">
							<i class="bi bi-check text-primary"></i>
							{props.projects} public projects
						</li>
						<li class="mb-2">
							<i class="bi bi-check text-primary"></i>
							{props.access} access
						</li>
						<li class="mb-2 text-muted">
							<i class="bi bi-x"></i>
							{props.private_projects} private projects
						</li>
						<li class="mb-2 text-muted">
							<i class="bi bi-x"></i>
							{props.support} support
						</li>
						<li class="mb-2 text-muted">
							<i class="bi bi-x"></i>
							{props.domain}
						</li>
						<li class="text-muted">
							<i class="bi bi-x"></i>
							{props.reports} status reports
						</li>
					</ul>
					<div class="d-grid">
						<a class="btn btn-outline-primary" href="#!">
							Choose plan
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// step 3: export
export default Pricing;
