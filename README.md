# SwipeableDrawer

A package that provides a swipeable drawer

## Installation

#### By download
Download `src/drawer.js` and include it into your webpage.

#### Using npm (recommended)
First download by running
```
npm install --save swipeabledrawer
```

Then include the package into your javascript file by adding the following line
```js
const SwipeableDrawer = require("swipeabledrawer");
```

# How to use
First create an drawer element on your website. Something like
```html
<nav id="navigation_drawer">
	<div class="navigation">
		<div class="link"><a href="{{link}}">{{name}}</a></div>
		<div class="link"><a href="{{link}}">{{name}}</a></div>
		<div class="link"><a href="{{link}}">{{name}}</a></div>
	</div>
</nav>
```
You can than setup the drawer by putting this in a javascript file
```js
const drawer = new SwipeableDrawer(document.querySelector("#navigation_drawer"));
drawer.setup();
```
This will initialize the drawer and bind the correct events.
