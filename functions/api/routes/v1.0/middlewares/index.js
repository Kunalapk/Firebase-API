'use strict';
const admin = require('firebase-admin');
let authenticate = (req, res, next) => {
	// if(req.headers.authorization){
	// 	//var idToken = req.headers.authorization;
	// 	var idToken = req.headers.authorization.split('Bearer ')[1];

 //    	admin.auth().verifyIdToken(idToken).then(function(decodedToken) {
 //        	var uid = decodedToken.uid;
 //        	req.headers.uID = uid;
 //        	next()
 //        	return
	//     }).catch(function(error) {
	//         res.status(401).send();
	//     });
	// }else{
	// 	res.status(401).send();
	// }



	next();
};

module.exports = {
    authenticate
};
