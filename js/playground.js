/**
 * @file playground.js
 * @author Nathan Woltman
 */

/**
 * Colour animations demo
 */
(function() {
	var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'],
		colorIndex = 0,
		bgColorIndex = 3;

	function cycleColors() {
		colorIndex = ++colorIndex % colors.length;
		bgColorIndex = ++bgColorIndex % colors.length;
		document.body.animate(
			{color: colors[colorIndex], backgroundColor: colors[bgColorIndex]},
			1000,
			cycleColors
		);
	}

	$$('animate-colors').addEventListener('click', function() {
		this.css('width', this.css('width')); // Prevent the button from changing size

		if (this.hasClass('btn-success')) {
			// Start animation
			cycleColors();
			this.textContent = 'Normal Time!';
		}
		else {
			// Stop animation
			document.body.stop().style.cssText = '';
			this.textContent = 'Psychedelic Time!';
		}

		this.toggleClass('btn-success btn-primary');
	});
})();

/**
 * Transform animations demo
 */
$$('img-rotate').on('click', function() {
	this.finish() // Call .finish() in case the image is clicked in the middle of the animation
		.animate({transform: 'rotate(360deg)'}, 1000, function() {
			this.css('transform', ''); // Clear the transform style so the animation can be run again
		});
});

$$('img-scale').on('click', function() {
	this.stop(); // Stop the animation in case it's already running
	if (this.data('isBig')) {
		this.animate({transform: ''}, 700).data('isBig', false);
	}
	else {
		this.animate({transform: 'scale(2)'}, 700).data('isBig', true);
	}
});
