# SwipeableDrawer

A package that provides a swipeable drawer

## Installation

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

# How to use
First create a SwipeableDrawer element with your navigation in it on your website. Something like
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
You can than setup the drawer by putting this in a javascript file
```js
const drawer = new SwipeableDrawer();
drawer.setup();
```
This will initialize the drawer and bind the correct events.
