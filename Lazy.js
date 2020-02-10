const images = document.querySelectorAll("[data-src]");

const imageOb = new IntersectionObserver((entries,
	imageObserver) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			var src = entry.target.getAttribute("data-src");
			entry.target.setAttribute("src", src);
			entry.target.classList.add("loaded")
			imageObserver.unobserve(entry.target);
		}
	});
});

images.forEach(image => {
	imageOb.observe(image);
});