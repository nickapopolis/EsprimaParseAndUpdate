var path = require('path');
var parser = require('./parser.js');
if(require.main === module){ 
	//called from command line
	if(process.argv.length === 3){
		var codePath = process.argv[2];
		parser(path.resolve(codePath), modifyAST, codeGenerated);
	}
}else{
	//required as a module
	module.exports = parser;
}

/**
* Callback used to handle the AST node after parsing
**/
function modifyAST(err, astNode, cb){
	if(!err){
		console.log(JSON.stringify(astNode, false, 2));
		cb(astNode);
	}
	
}

/**
* Callback for when the AST is turned back into code
**/
function codeGenerated(err, code){
	console.log(code);
}