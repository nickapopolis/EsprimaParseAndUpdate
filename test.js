var parser = require('./parser.js');

parser("./index.js", modifyAST, codeGenerated);

function modifyAST(err, astNode, cb){
	if(err){
		console.log(err);
	}
	if(!err){
		console.log('Heres the code passed in as AST');
		console.log('-------------------------------');
		console.log(JSON.stringify(astNode, false, 2));
		cb(astNode);
	}
	
}
function codeGenerated(err, code){
	if(err){
		console.log(err);
	}
	console.log('Heres the AST back in code form');
	console.log('-------------------------------');
	console.log(code);
}