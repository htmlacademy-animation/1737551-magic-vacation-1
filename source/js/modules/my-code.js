export default () => {
	window.addEventListener('load', loadContent);

	function loadContent() {
		document.body.classList.add('_loaded');
		window.removeEventListener('load', this)
	}
}