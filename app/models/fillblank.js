module.exports = function(sequelize, Sequelize) {
 
    var Fillblank = sequelize.define('fillblank', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        studentName: {
            type: Sequelize.STRING
        },
 
        gameName: {
            type: Sequelize.STRING
        },
		
		questionNumber: {
            type: Sequelize.INTEGER
        },
 
        gameQuestion: {
            type: Sequelize.STRING
        },
 
        gameAnswer: {
            type: Sequelize.STRING
        }
 
    });
 
    return Fillblank;
 
}