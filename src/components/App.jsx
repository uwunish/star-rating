import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function App() {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleClick(index) {
		setRating(index);
	}

	function handleMouseEnter(index) {
		setHover(index);
	}

	function handleMouseLeave() {
		setHover(rating);
	}

	return (
		<div>
			{Array(10)
				.fill()
				.map((x, index) => {
					index += 1;
					return (
						<FaStar
							key={index}
							className={
								index <= (hover || rating)
									? "active"
									: "inactive"
							}
							onClick={() => handleClick(index)}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={() => handleMouseLeave()}
						/>
					);
				})}
		</div>
	);
}

export default App;
