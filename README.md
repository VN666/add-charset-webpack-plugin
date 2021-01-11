# add-charset-webpack-plugin
a webpack plugin which add charset to css file

## Installation

```bash
npm install add-charset-webpack-plugin
```

This is a [webpack](http://webpack.js.org/) that add charset to final css files; 

## Usage
**webpack.config.js**

```js
const AddCharsetWebpackPlugin = require("add-charset-webpack-plugin");

module.exports = {
  	plugins: [
    	new AddCharsetWebpackPlugin({
    		charset: "utf-8"
    	})
  	]
}
```

This will add charset declare in the first line of all the final css files, example as following

```css
@charset "utf-8";

html {
	margin: 0;
	padding: 0;
}

body {
    min-width: 960px;
    background: #FFFFFF;
    font-size: 14px;
}
...
```

## Options
You can pass a hash of configuration options to `add-charset-webpack-plugin`.Allowed values are as follows:

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`charset`**|`{String}`|`utf-8`|To display an HTML page correctly, a web browser must know which character set to use, Defaults to `utf-8`|

## License

Copyright (c) 2021-present VN666

MIT (see [LICENSE](LICENSE))