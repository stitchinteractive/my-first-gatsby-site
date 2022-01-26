// step 1: import
import * as React from "react";

// step 2: define
const BlogList = props => {
	return (
		<div class="col-lg-4 mb-5">
			<div class="card h-100 shadow border-0">
				<img class="card-img-top" src={props.image_source} alt={props.title} />
				<div class="card-body p-4">
					<div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
					<a class="text-decoration-none link-dark stretched-link" href="#!">
						<h5 class="card-title mb-3">{props.title}</h5>
					</a>
					<p class="card-text mb-0">{props.content}</p>
				</div>
				<div class="card-footer p-4 pt-0 bg-transparent border-top-0">
					<div class="d-flex align-items-end justify-content-between">
						<div class="d-flex align-items-center">
							<img class="rounded-circle me-3" src={props.author_image_source} alt={props.author} />
							<div class="small">
								<div class="fw-bold">{props.author}</div>
								<div class="text-muted">
									{props.date} &middot; {props.reading_time} read
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// step 3: export
export default BlogList;
