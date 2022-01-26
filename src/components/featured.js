// step 1: import
import * as React from "react";

// step 2: define
const Featured = props => {
	return (
		<div class="col mb-5 h-100">
			<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
				<i class="bi bi-collection"></i>
			</div>
			<h2 class="h5">{props.title}</h2>
			<p class="mb-0">{props.content}</p>
		</div>
	);
};

// step 3: export
export default Featured;
