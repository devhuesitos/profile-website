// Initialization of selectors
const navMenu = document.querySelector('.navbar-items');
const navToggle = document.querySelector('.nav-toggle');
const iconClose = document.querySelector('.nav-icon-close');
const iconOpen = document.querySelector('.nav-icon-open');

// EVENT: Open menu
navToggle.addEventListener('click', () => {
	const visibility = navMenu.getAttribute('data-visible');

	if (visibility === "false") {
		navMenu.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
		iconOpen.classList.add('hidden');
		iconClose.classList.remove('hidden');
	} else if (visibility === "true") {
		navMenu.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
		iconClose.classList.add('hidden');
		iconOpen.classList.remove('hidden');
	}
});