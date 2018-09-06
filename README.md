# WIP: SwipeableDrawer
[![NPM Version](https://img.shields.io/npm/v/swipeabledrawer.svg)](https://www.npmjs.com/package/swipeabledrawer)
[![NPM Downloads](https://img.shields.io/npm/dt/swipeabledrawer.svg)](https://www.npmjs.com/package/swipeabledrawer)
[![License](https://img.shields.io/github/license/philipdb/swipeabledrawer.svg)](https://github.com/PhiliPdB/SwipeableDrawer/blob/master/LICENSE)


A package that provides a swipeable drawer

# Installation

#### By download
Download the files in `src/` and include the files in your webpage

#### Using npm (recommended)
First download by running
```
npm install --save swipeabledrawer
```

Then include the package into your javascript file by adding the following line
```js
const SwipeableDrawer = require("swipeabledrawer");
```

# Setup
First create a SwipeableDrawer element with your navigation in it on your webpage. Something like this:
```html
<swipeable-drawer>
	<!-- Free to choose content -->
	<div class="navigation">
		<div class="link"><a href="{{link}}">{{name}}</a></div>
		<div class="link"><a href="{{link}}">{{name}}</a></div>
		<div class="link"><a href="{{link}}">{{name}}</a></div>
	</div>
</swipeable-drawer>
```
You can than setup the drawer by putting this in a javascript file:
```js
const drawer = new SwipeableDrawer();
drawer.setup();
```
This will initialize the drawer and bind the correct events. You can than also manually open and close the drawer by calling `drawer.open()` and `drawer.close()`. This is useful for extra buttons to open and close the drawer.

# TODO
- Bundle styling with the package
