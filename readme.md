![Iceberg logo](https://kevinpy.com/Projects/Iceberg/iceberg_logo.png)
# Iceberg
### Front-End Boilerplate
Iceberg is a Starter for start your Web Projects.
***
**Author**: *Kevin Py*<br />
**Website**: <https://kevinpy.com><br />
**Iceberg Website**: <https://kevinpy.com/Projects/Iceberg><br />
**Version**: 1.0.0
***
#### Installation
```
$ git clone git@github.com:KevinPy/Iceberg.git
$ cd Iceberg
$ npm install
$ gulp
```
#### Packages for Gulp
[Gulp](https://www.npmjs.com/package/gulp) : The streaming build system<br />
[BrowserSync](https://www.npmjs.com/package/gulp-sass) : Live CSS Reload &amp; Browser Syncing<br />
[gulp-sass](https://www.npmjs.com/package/gulp-sass) : Gulp plugin for sass<br />
[gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont) : Create icon fonts from several SVG icons<br />
[gulp-consolidate](https://www.npmjs.com/package/gulp-consolidate) : Template engine consolidation for gulp<br />
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) : gulp plugin to minify HTML<br />
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) : Minify files with UglifyJS
#### Gulp Task
`gulp` : Compile **/app** folder, create **/www** folder and launch *BrowserSync*<br />
`gulp compile` : Compile **/app** folder and create **/www** folder <br />
`gulp imagemin` : Minify **/app/assets/img**<br />
`gulp iconfont` : Create icon font with SVG icons<br />
#### Structure
```
/app
|- /assets
	|- /img
		|- /icons
		apple_icon.png
	|- /js
		|- main.js
	|- /scss
		|- /templates
			|- _icons.scss
		|- _flexo.scss
		|- _normalize.scss
		|- _reset.scss
		|- _style.scss
		|- _variables.scss
		|- main.scss
humans.txt
index.html
robots.txt
```