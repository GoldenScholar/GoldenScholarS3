var authController = require('..\\controllers\\authcontroller.js');
var Lecture = require('..\\models\\index');
var currentGame = 'None';
 
 
module.exports = function(app, passport, lecture, group, fillblank, games) {
 
    app.get('/signupstu', authController.signupstu);
 
	app.get('/signupfac', authController.signupfac);
 
    app.get('/signinstu', authController.signinstu);
	
	app.get('/signinfac', authController.signinfac);
	
	app.get('/resetPass', authController.resetPass);
	
	app.get('/invalidPage', authController.invalidPage);
 
	app.get('/dashboard',isLoggedIn, authController.dashboard);
	
	app.get('/studentHub',isLoggedIn, authController.studentHub);
	
	app.get('/facultyHub',isLoggedIn, function(req, res) {res.render('facultyHub', { user: req.user });});
	
	app.get('/createLecture',isLoggedIn, authController.createLecture);
	
	app.get('/createGame',isLoggedIn, authController.createGame);
	
	app.get('/createFill',isLoggedIn, authController.createFill);
	
	app.get('/viewMyLecture',isLoggedIn, function(req, res) {
		
		var Lecture = lecture;
		Lecture.findAll({where: {facultyName: req.user.username}})
		.then((lecture) => {
            res.render('viewMyLecture', {
                 lecture: lecture
            });
      });
	});
	
	app.get('/playGame',isLoggedIn, function(req, res) {
		
		var Games = games;
		Games.findAll({where: {gameType: 'fill'}})
		.then((games) => {
            res.render('playGame', {
                 games: games
            });
      });
	});
	
	app.get('/playFill',isLoggedIn, function(req, res) {
		
		console.log(currentGame);
		var Fillblank = fillblank;
		Fillblank.findAll({where: {gameName: currentGame}})
		.then((fillblank) => {
            res.render('playFill', {
                 fillblank: fillblank
            });
      });
	});
	
	app.get('/createGroup',isLoggedIn, authController.createGroup);
	
	app.get('/deleteGroup',isLoggedIn, function(req, res) {
		
		var Group = group;
		Group.findAll()
		.then((group) => {
            res.render('deleteGroup', {
                 group: group
            });
      });
	});
	
	
	app.get('/joinGroup',isLoggedIn, function(req, res) {
		
		var Group = group;
		Group.findAll()
		.then((group) => {
            res.render('joinGroup', {
                 group: group
            });
      });
	});
	
	app.get('/viewProfile',isLoggedIn, function(req, res) {res.render('viewProfile', { user: req.user });});
	
	app.get('/logout',authController.logout);
	
	app.get('/viewLectureStu',isLoggedIn, function(req, res) {res.render('viewLectureStu', { lecture: req.lecture });});
	//
	
	
	app.post('/signupstu', passport.authenticate('local-stu-signup', {
            successRedirect: '/signinstu',
 
            failureRedirect: '/signupstu'
        }
 
    ));
	
	app.post('/createGroup',function(req, res){
		var newGroup = {
            facultyName: req.user.username,
			className: req.body.className,
			classNumber: req.body.classNum,
			description: req.body.descrip,
			}
			group.create(newGroup);	
        res.location('/facultyHub');
		res.redirect('/facultyHub');
	});
	
	app.post('/playGame',function(req, res){
        currentGame = req.body.gName;
        res.location('/playFill');
		res.redirect('/playFill');
	});
	
	app.post('/createLecture',function(req, res){
		var newLecture;
		var count = req.body.count;
		
			console.log(count);
			newLecture = {
            facultyName: req.user.username,
			topicName: req.body.tName,
			subTopicName: req.body.subName0,
			subTopicInfo: req.body.subInfo0,
			}
			lecture.create(newLecture);	
			req.body.subName0 = "";
	});
	
	app.post('/createFill',function(req, res){
		var newFill;
		var newGame;
		var Games = games;
		
			newFill = {
            studentName: req.user.username,
			gameName: req.body.gName,
			gameQuestion: req.body.question,
			gameAnswer: req.body.answer,
			}
			fillblank.create(newFill);
			newGame = {
			gameName: req.body.gName,
			creatorName: req.user.username,
			gameType: 'fill',
			}
			games.create(newGame);
	});
	
	app.post('/deleteGroup',function(req, res){
		var Group = group;
		
			Group.destroy({
			where: {
				className: req.body.gName
			}
			})
			res.location('/facultyHub');
			res.redirect('/facultyHub');
			
	});
	
    /*app.post('/createLecture', passport.authenticate('create-lecture', {
            successRedirect: '/createLecture',
 
            failureRedirect: '/facultyHub'
        }
 
    ));*/
	
	app.post('/signupfac', passport.authenticate('local-fac-signup', {
            successRedirect: '/signinfac',
 
            failureRedirect: '/signupfac'
        }
 
    ));
	
	app.post('/resetPass', passport.authenticate('forgot-pass', {
            successRedirect: '/',
 
            failureRedirect: '/resetPass'
        }
 
    ));
	
	app.post('/signinstu', passport.authenticate('local-stu-signin', {
			successRedirect: '/studentHub',
 
			failureRedirect: '/signinstu'
		}
 
	));
	
	app.post('/signinfac', passport.authenticate('local-fac-signin', {
			successRedirect: '/facultyHub',
 
			failureRedirect: '/signinfac'
		}
 
	));
 
	function isLoggedIn(req, res, next) {
 
		if (req.isAuthenticated())
     
			return next();
         
		res.redirect('/invalidPage');
 
	}
 
}