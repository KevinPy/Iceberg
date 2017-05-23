![Iceberg logo](https://kevinpy.com/Projects/Iceberg/out/iceberg-logo.png)
# Iceberg
### Front-End Boilerplate
Iceberg is built with React + Babel + Webpack. It's a solution for start your projects.<br />
<br />
[![Version](https://img.shields.io/github/release/kevinpy/Iceberg.svg)](https://github.com/kevinpy/Iceberg/releases)
[![dependencies Status](https://david-dm.org/kevinpy/iceberg/status.svg)](https://david-dm.org/kevinpy/iceberg)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](paypal.me/kevinpy)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1447c0dff5fd49fe93e9c2141ded90e1)](https://www.codacy.com/app/pykevin/Iceberg?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KevinPy/Iceberg&amp;utm_campaign=Badge_Grade)
***
**Author**: *Kevin Py*<br />
**Website**: <https://kevinpy.com>
***
#### Installation
```
$ git clone git@github.com:KevinPy/Iceberg.git
$ cd Iceberg
$ npm install
```
#### Scripts
`npm start` : Launch `webpack-dev-server` with Hot Module Replacement - http://localhost:8080<br />
`npm run build` : Compile **/src** folder and create **/dist** folder<br />
#### Structure
```
/src
    |- /assets
        |- /images
        |- /styles
            |- /main.scss
    |- /js
        |- components
            |- App.jsx
            |- NotFound.jsx
    |- index.html
    |- index.js
```
#### TODO
[ ] Tests<br />
[x] ESLint<br />
[ ] Separate Webpack Dev/Prod<br />
[x] Router