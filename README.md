# ModifyJS

## Usage via node module
```
var modifyJS = require('path.to.module.js');
var path = 'path.to.file.js';

modifyJS(
  path, 
  function modifyAST(err, astNode, cb){cb(astNode);},
  function codeGenerated(err, code){}
);
```
## Usage via CLI
```
node index.js 'path.to.file'
```
## Example
```
npm test
```
