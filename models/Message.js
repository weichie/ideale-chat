var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	body: String,
	author: String,
	owner: String,
});

/*AnswerSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
}

AnswerSchema.methods.downvote = function(cb){
	this.upvotes -= 1;
	this.save(cb);
}*/

mongoose.model('Message', MessageSchema);