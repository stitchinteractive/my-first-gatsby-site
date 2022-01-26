// step 1: import
import * as React from "react";

// step 2: define
const Testimonial = props => {
	return (
		<div class="py-5 bg-light">
			<div class="container px-5 my-5">
				<div class="row gx-5 justify-content-center">
					<div class="col-lg-10 col-xl-7">
						<div class="text-center">
							<div class="fs-4 mb-4 fst-italic">{props.content}</div>
							<div class="d-flex align-items-center justify-content-center">
								<img class="rounded-circle me-3" src={props.image_source} alt={props.client} />
								<div class="fw-bold">
									{props.client}
									<span class="fw-bold text-primary mx-1">/</span>
									{props.designation}
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
export default Testimonial;
