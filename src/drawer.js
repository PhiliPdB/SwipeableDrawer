'use strict';

class SwipeableDrawer {

	/**
	 * Initializes all the needed variables
	 */
	constructor() {
		this.drawer = document.querySelector("swipeable-drawer");

		this.startPosition = {
			x: 0,
			y: 0
		};
		this.startedSwipe = false;
		this.drawerWidth;
		this.startTime;
	}

	/**
	 * Binds the event listener
	 */
	setup() {
		// Touch start
		document.body.addEventListener("touchstart", (event) => {
			const touch = event.targetTouches[0];
			// Only initialize when drawer is open or when tapping in specific area when screen is small enough
			if (
				this.drawerOpen
				|| !this.drawerOpen && touch.pageX < 24 && window.innerWidth <= 540
			) {
				// Initialize
				this.startPosition.x = touch.pageX;
				this.startPosition.y = touch.pageY;
				// Get drawer width
				this.drawerWidth = this.drawer.offsetWidth;
				
				this.startTime = new Date();
				this.startedSwipe = true;
			}
		});

		// Touch move
		document.body.addEventListener("touchmove", (event) => {
			const touch = event.targetTouches[0]; // Pick the first finger
			
			// Calculate the position of the drawer to follow your finger
			// Keep in mind that the transform position is different when the drawer is open
			if (this.startedSwipe && this.drawerOpen && touch.pageX < this.startPosition.x) { // Drawer is open
				const position = Math.min(touch.pageX - (this.startPosition.x - this.drawerWidth), this.drawerWidth) + 30;

				this._updateTransform(position);
			} else if (this.startedSwipe && !this.drawerOpen && touch.pageX > this.startPosition.x) { // Drawer is closed
				const position = Math.min(touch.pageX - this.startPosition.x, this.drawerWidth) + 30;

				this._updateTransform(position);
			}
		});

		// Touch end
		document.body.addEventListener("touchend", (event) => {
			// Check if a swipe started
			if (!this.startedSwipe) return;

			// Get first touch point
			const touch = event.changedTouches[0];
			
			// Calculate speed and direction
			const distance = (touch.pageX - this.startPosition.x) / window.devicePixelRatio;
			const timeDiff = (new Date() - this.startTime) / 1000; // Time difference in seconds
			const speed = Math.abs(distance) / timeDiff;

			if (speed > 300) {
				if (distance < 0) {
					// Finish closing
					this._finishClosing();
				} else {
					// Finish opening
					this._finishOpening();
				}
				return;
			}
			
			// If speed is too low, check the end position
			if (touch.pageX <= this.drawerWidth / 2) {
				// Finish closing the drawer
				this._finishClosing();
			} else if (touch.pageX > this.drawerWidth / 2) {
				// Finish opening the drawer
				this._finishOpening();
			}
		});

		// Click
		document.body.addEventListener("click", (event) => {
			if (!(event.target === this.drawer || this.drawer.contains(event.target)) && this.drawerOpen) {
				// Close drawer when open and tapping outside of it
				event.preventDefault();
				this.close();
			}
		});
	}

	/**
	 * Update transform position of the drawer
	 * 
	 * @param {double} position 
	 */
	_updateTransform(position) {
		this.drawer.style.transition = "none";
		this.drawer.style.webkitTransition = "none";
		this.drawer.style.transform = `translate(${position}px, 0)`;
		this.drawer.style.webkitTransform = `translate(${position}px, 0)`;
	}

	/**
	 * Finish closing the drawer
	 */
	_finishClosing() {
		this.drawerOpen = false;
		this.startedSwipe = false;

		// Remove transitions and reset class name
		this.drawer.style.transition = "";
		this.drawer.style.webkitTransition = "";
		this.drawer.style.transform = "";
		this.drawer.style.webkitTransform = "";

		this.drawer.className = "";
	}

	/**
	 * Finish closing the drawer
	 */
	_finishOpening() {
		this.drawerOpen = true;
		this.startedSwipe = false;

		// Remove transitions and set class name to open
		this.drawer.style.transition = "";
		this.drawer.style.webkitTransition = "";
		this.drawer.style.transform = "";
		this.drawer.style.webkitTransform = "";

		this.drawer.className = "open";
	}

	/**
	 * Open the drawer
	 */
	open() {
		this.drawer.className = "open";
		const id = window.setTimeout(() => {
			this.drawerOpen = true;
			window.clearTimeout(id);
		}, 300);
	}
	
	/**
	 * Close the drawer
	 */
	close() {
		this.drawer.className = "";
		const id = window.setTimeout(() => {
			this.drawerOpen = false;
			window.clearTimeout(id);
		}, 300);
	}

}

// Export the drawer
module.exports = SwipeableDrawer;
