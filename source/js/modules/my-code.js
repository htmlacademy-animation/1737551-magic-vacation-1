export default () => {

	let screenEffectElement = document.querySelector('.screen__effect');

	let addEvent = function(object, type, callback) {
		if (object == null || typeof(object) == 'undefined') return;
		if (object.addEventListener) {
			object.addEventListener(type, callback, false);
		} else if (object.attachEvent) {
			object.attachEvent("on" + type, callback);
		} else {
			object["on"+type] = callback;
		}
	};
	window.addEventListener('load', loadContent);
	addEvent(document, 'click', handleClick);

	function loadContent() {
		document.body.classList.add('_loaded');
		window.removeEventListener('load', this)
	}

	function handleClick(e) {
		const EVENT = e.target;
		if(EVENT.classList.contains('js-menu-link')) {
			const EVENT_ATTRIBUTE_HREF = EVENT.getAttribute('href');
			if(window.location.hash === '#story' && EVENT_ATTRIBUTE_HREF === '#prizes') {
				e.preventDefault();
				screenEffectElement.classList.add('_active');

				setTimeout(() => {
					window.location.hash = EVENT_ATTRIBUTE_HREF;
					screenEffectElement.classList.remove('_active');
				}, 400)
			}	
		}
	}
}