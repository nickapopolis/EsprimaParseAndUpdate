var path = require('path');
var parser = require('./parser.js');
if(require.main === module){ 
	if(process.argv.length === 3){
		var codePath = process.argv[2];
		parser(path.resolve(codePath), modifyAST, codeGenerated);
	}
}else{
	module.exports = parser;
}
function modifyAST(err, astNode, cb){
	if(!err){
		console.log(JSON.stringify(astNode, false, 2));
		cb(astNode);
	}
	
}
function codeGenerated(err, code){
	console.log(code);
}