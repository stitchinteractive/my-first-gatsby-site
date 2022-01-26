// step 1: import
import * as React from "react";

// step 2: define
const Team = props => {
	return (
		<div class="col mb-5 mb-5 mb-xl-0">
			<div class="text-center">
				<img class="img-fluid rounded-circle mb-4 px-4" src={props.image_source} alt={props.name} />
				<h5 class="fw-bolder">{props.name}</h5>
				<div class="fst-italic text-muted">{props.designation}</div>
			</div>
		</div>
	);
};

// step 3: export
export default Team;
