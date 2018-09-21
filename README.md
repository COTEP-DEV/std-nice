# std-nice

`std-nice` is a tool to log objects in [Node.js](https://nodejs.org/) for dev environnement.

![](https://raw.githubusercontent.com/COTEP-DEV/std-nice/master/assets/example.png)

### Installation

std-nice requires [Node.js](https://nodejs.org/) v8+ to run.

Install and start the server.

```sh
$ npm i devutils
```
### Example

#### Require std-nice
```js
const stdnice = require('std-nice');
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

stdnice.sd(obj);
stdnice.sd([]);
stdnice.sd(42);
```

#### Import std-nice
```js
import stdnice from 'std-nice';

const obj = {
	messages: [{
		type : 1,
		value: "fefzfzefzef",
	}, {
		type : 0,
		value: "aaaaaaaaaa",
	}],
};

stdnice.sd(obj);
```

#### You can use it globally

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

std-nice is currently extended with the following plugins.

| Plugin | Github |
| ------ | ------ |
| Colors | https://github.com/marak/colors.js/ |

# Provided by

[![N|Solid](https://www.cotep.fr/wp-content/uploads/2016/09/logo_home-1.jpg)](https://cotep.fr)

Contributors
----

g.neut
a.emilien

License
----

MIT
