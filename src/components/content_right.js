// step 1: import
import * as React from "react";

// step 2: define
const ContentRight = props => {
	return (
		<div class="row gx-5 align-items-center">
			<div class="col-lg-6">
				<img class="img-fluid rounded mb-5 mb-lg-0" src={props.image_source} alt={props.image_alt} />
			</div>
			<div class="col-lg-6">
				<h2 class="fw-bolder">{props.title}</h2>
				<p class="lead fw-normal text-muted mb-0">{props.content}</p>
			</div>
		</div>
	);
};

// step 3: export
export default ContentRight;
