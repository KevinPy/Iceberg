![Iceberg logo](https://kevinpy.com/Projects/Iceberg/iceberg_logo.png)
# Iceberg
### Front-End Boilerplate for your Web Projects
Iceberg is a boilerplate for start quickly your Web Projects, with the good foundation.
***
**Author**: *Kevin Py*<br />
**Website**: <https://kevinpy.com><br />
**Iceberg Website**: <https://kevinpy.com/Projects/Iceberg><br />
**Version**: 0.2.0
***
#### Installation
You can install directly on Github, or via Bower:
`bower install iceberg-bp`
#### Structure
```
assets
	|- css
		|- flexo.css *
		|- reset.css
		|- style.css
		|- style.less
	|- img
	|- js
		|- jquery.js
		|- less.js
		|- main.js
404.html
humans.txt
index.html
robots.txt
```
* : Flexo is a grid system based on `flex` property. It's an extension for Iceberg. For more informations, check the Github project here: https://github.com/KevinPy/Flexo

#### HTML Structure

In the `index.html`, you are some meta tags. You do complete this meta tags:

```
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="author" content="" />
```

After, you are others tags, <b>Open Graph</b>, from Facebook and Twitter. This is the meta tags list:

```
<meta property="og:title" content="" />
<meta property="og:type" content="website" />
<meta property="og:url" content="" />
<meta property="og:image" content="" />
<meta property="og:description" content="" />
<meta property="og:locale" content="" />
<meta property="og:site_name" content="" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@" />
<meta name="twitter:title" content="" />
<meta name="twitter:description" content="" />
<meta name="twitter:image" content="" />
```

#### CSS Structure

The structure of CSS file is really simple. First, you are a summary for listed the differents parts of your CSS file. You have this presentation:

```
1 - General
	1.1 - Import
	1.2 - Style

99 - Media Queries
	99.1 - < 960px
	99.2 - 640px < 960px
	99.3 - > 640px
	99.99 - Print
```

And also the comment separator:

```
/*----------------------------------------*/
/* 0.0 - Section's Name */
/*----------------------------------------*/
```

Iceberg use the <b>rem</b> `font-size`. The `html`has this attribute :

```
html { font-size: 62.5%; }
```

With this hack, you doesn't converted value between <b>px</b> and <b>rem</b>. You can use the <b>px</b>, it's works. Example:

```
1rem => 10px
1.6rem => 16px
30rem => 300px
```

Iceberg use its own reset CSS, based on `normalize.css`.

#### JS Structure

JS file works, with the same summary that CSS file.