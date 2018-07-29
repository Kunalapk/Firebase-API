'use strict';
const admin = require('firebase-admin');
const companyref = admin.database().ref('company');
const productref = admin.database().ref('product');
const cartref = admin.database().ref('cart');
const products = {};


let addCompany = (req, res) => {
	let obj = req.body;
	companyref.push(obj).then(function(result){
		res.status(200).send("Data Added Successfully at - "+result);
		return
	},function(error){
		res.status(500).send(error);
		return
	}).catch(function(reason) {
   		res.status(500).send(reason)
   		return
	});
};



let addProduct = (req, res) => {
	let companyID = req.params.companyID
	let obj = req.body;
	console.log(obj);
	productref.child(companyID).push(obj).then(function(result){
		res.status(200).send("Data Added Successfully at - "+result);
		return
	},function(error){
		res.status(500).send(error);
		return
	}).catch(function(reason) {
   		res.status(500).send(reason)
   		return
	});
};


let getCompany = (req, res) => {
	companyref.once("value").then(function(data){
		res.status(200).send(data)
		return
	},function(error){
		res.status(500).send(error)
		return
	}).catch(function(reason) {
   		res.status(500).send(reason)
   		return
	});
};




let getProduct = (req, res) => {
	let companyID = req.params.companyID
	
	productref.child(companyID).once("value").then(function(data){
		res.status(200).send(data)
		return
	},function(error){
		res.status(500).send(error)
		return
	}).catch(function(reason) {
   		res.status(500).send(reason)
   		return
	});
};



module.exports = {
    addCompany,
    addProduct,
    getProduct,
    getCompany
};