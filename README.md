# std-nice

`std-nice` is a tool to log objects in NodeJS for dev environnement.

![](https://raw.githubusercontent.com/COTEP-DEV/std-nice/master/assets/example.png)

### Installation

std-nice requires [Node.js](https://nodejs.org/) v10+ to run.

Install and start the server.

```sh
$ npm i devutils
```
### Example

#### Require the dev util
```js
const std-nice = require('std-nice');
const mongoose = require('mongoose');

const obj = {
	_id: mongoose.Types.ObjectId('4edd40c86762e0fb12000003'),

	messages: [{
		type : 1,
		value: "fefzfzefzef",
	}, {
		type : 0,
		value: "aaaaaaaaaa",
	}],
};

obj.reference = obj;

std-nice.sd(obj);
std-nice.sd([]);
std-nice.sd(42);
```

#### Or use it globally

In your index.js :
```js
global.LOG = require('std-nice');
```
In foo.js :
```js
const messages: [{
	    type : 1,
	    value: "fefzfzefzef",
    }, {
	    type : 0,
	    value: "aaaaaaaaaa",
}];

global.LOG.sd(messages);
```

### Plugins

Devutils is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | Github |
| ------ | ------ |
| Colors | https://github.com/marak/colors.js/ |

# Provided by

[![N|Solid](http://www.cotep.fr/wp-content/uploads/2016/09/logo_home-1.jpg)](https://cotep.fr)

License
----

MIT

