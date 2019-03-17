//var passport = require('..\\config\\passport\\passport.js');
var Lecture = require('..\\models\\index');

var exports = module.exports = {}
 
exports.signupstu = function(req, res) { res.render('registerStudent');}
exports.signupfac = function(req, res) { res.render('registerFaculty');}
exports.signinstu = function(req, res) {res.render('loginStudent');}
exports.signinfac = function(req, res) {res.render('loginFaculty');}
exports.resetPass = function(req, res) {res.render('resetPass');}
exports.invalidPage = function(req, res) {res.render('invalidPage');}
exports.dashboard = function(req, res) {res.render('dashboard');}
exports.studentHub = function(req, res) {res.render('studentHub');}
exports.facultyHub = function(req, res) {res.render('facultyHub', { username: "Jill" });}
exports.createLecture = function(req, res) {res.render('createLecture');}
exports.createGame = function(req, res) {res.render('createGame');}
exports.createFill = function(req, res) {res.render('createFill');}
exports.viewMyLectures = function(req, res) {res.render('viewMyLectures');}
exports.createGroup = function(req, res) {res.render('createGroup');}
exports.deleteGroup = function(req, res) {res.render('deleteGroup');}
exports.viewProfile = function(req, res) {res.render('viewProfile');}
exports.joinGroup = function(req, res) {res.render('joinGroup');}

exports.createLecturePost = function(req, res){

        var lecture = new Lecture.create({
            facultyName: req.user.username,
			topicName: req.body.tName,
			subTopicName: req.body.subName0,
			subTopicInfo: req.body.subInfo0,

        }).then(function(user){
			console.log("Did we get this far");
            console.log(user.get({plain:true}));
			res.render('facultyHub');
        });



        lecture.save(function(err){
            if (err)
                res.send(err);
		})
}

exports.viewMyLectures = function(req, res) {res.render('viewMyLectures');}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/invalidPage');
 
    });
 
}