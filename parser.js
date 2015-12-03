var espree = require('acorn');
var escodegen = require('escodegen');
var fs = require('fs');

module.exports = function(filePath, codeParsedCb, codeGeneratedCb){
	fs.readFile(filePath, 'utf8', function (err,data) {
	  if (err) {
	    return codeParsedCb(err);
	  }
		try{
			var comments = [], tokens = [];

			//parse
			var ast = espree.parse(data, {
				// collect ranges for each node
			    ranges: true,
			    // collect comments in Esprima's format
			    onComment: comments,
			    // collect token ranges
			    onToken: tokens
			});
			escodegen.attachComments(ast, comments, tokens);

			codeParsedCb(null, ast, function(updatedAst){
			try{
				//turn back into js
				var newCode = escodegen.generate(updatedAst, {comment: true});
				codeGeneratedCb(null, newCode);
			}catch(e){
				return codeGeneratedCb(e);
			}
		});
		}catch(e){
			return codeParsedCb(e);
		}
	});
}
