var espree = require('esprima');
var escodegen = require('escodegen');
var fs = require('fs');

module.exports = function(filePath, codeParsedCb, codeGeneratedCb){
	fs.readFile(filePath, 'utf8', function (err,data) {
	  if (err) {
	    return codeParsedCb(err);
	  }
		try{
			//parse
			var parsedCode = espree.parse(data, {attachComment: true});
			codeParsedCb(null, parsedCode, function(updatedCode){
			try{
				//turn back into js
				var newCode = escodegen.generate(updatedCode, {comment: true});
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