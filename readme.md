![Iceberg logo](http://kpy.me/Projects/Iceberg/iceberg_logo.png)
# Iceberg
### Front-End Boilerplate for your Web Projects
Iceberg is a boilerplate for start quickly your Web Projects, with the good foundation.
***
**Author**: *Kevin Py*<br />
**Website**: <http://kpy.me><br />
**Iceberg Website**: <http://kpy.me/Projects/Iceberg>
***
#### Installation
You can install directly on Github, or via Bower:
`bower install iceberg-bp`
#### Structure
```
assets
	|- css
		|- normalize.css
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
	1.2 - General
	1.3 - Elements
	1.4 - Header
	1.5 - Content
	1.6 - Footer

2 - Pages
	2.1 - Homepage

99 - Media Queries
	99.1 - > 960px
	99.2 - 640px < 960px
	99.3 - < 640px
	99.4 - Print
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

Iceberg use the `CSS Reset` from <em>Normalize</em>, and the constraints for all element, with `*`:

```
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```

#### JS Structure

JS file works, with the same summary that CSS file.

#### CSS Classes

You can use the existing CSS Classes for your project. This is the full list:

`.hide` - For hide elements<br />
`.left` - Floating left<br />
`.right` - Floating right<br />
`.center` - For center elements<br />
`.clearfix` - Using in parent Floating element

##### Example

```
<div class="clearfix center">
	<div class="left hide">
		<p>Left hide element</p>
	</div>
	<div class="right">
		<p>Right element</p>
	</div>
</div>
```