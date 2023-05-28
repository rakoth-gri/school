const options = {
	root: null,
	rootMargin: "0px",
	threshold: 1.0,
};

const lazyLoading = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target)
		}
	});
};

const scrollAnimation = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
            observer.unobserve(entry.target)
		}
	});
};

export const animeObserver = new IntersectionObserver(scrollAnimation, options);
export default new IntersectionObserver(lazyLoading, options);
