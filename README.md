
# Mustag

![node][node]
[![npm version][npm-badge]][npm]
[![dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]
[![PRs Welcome][prs-badge]][prs]
[![GitHub][license-badge]][license]

CLI tool to parse html custom components with mustache sintax to pure html views

## Install

* inside your project 

```
npm install --save-dev mustache
```

* globally

```
npm install -g mustache
```

## Using

```
mustache --components <path/to/components/folder> --views <path/to/views/folder> <path/to/dist/folder>
```

* components folder should include sub-folders with the name of the components
  * each sub-folder must include a html file with the same name
  * do not choose component names equal to reserved html tags
* views folder must should include html files that use the custom html tags
* the compiled views will be saved inside dist folder

```
...
"scripts": {
  ...
  "mustache": "mustache --components ./components --views ./views ./dist",
  ...
},
...
```



[node]: https://img.shields.io/node/v/mustag.svg

[npm-badge]: https://badge.fury.io/js/mustag.svg
[npm]: https://badge.fury.io/js/mustag

[dependencies-badge]: https://david-dm.org/joaogsleite/mustag/status.svg
[dependencies]: https://david-dm.org/joaogsleite/mustag

[dev-dependencies-badge]: https://david-dm.org/joaogsleite/mustag/dev-status.svg
[dev-dependencies]: https://david-dm.org/joaogsleite/mustag?type=dev

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com

[license-badge]: https://img.shields.io/github/license/joaogsleite/mustag.svg
[license]: https://github.com/joaogsleite/mustag/blob/master/LICENSE