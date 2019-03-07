const randomColorRGB = function() {
	return Math.round(Math.random() * 1000) % 256;
}

const randomColor = () => {
	let r = randomColorRGB();
	let g = randomColorRGB();
	let b = randomColorRGB();
	return `rgb(${r},${g}, ${b})`;
};

module.exports = randomColor;