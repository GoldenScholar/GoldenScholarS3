module.exports = function(sequelize, Sequelize) {
 
    var Games = sequelize.define('games', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        gameName: {
            type: Sequelize.STRING
        },
		
		creatorName: {
            type: Sequelize.STRING
        },
 
        gameType: {
            type: Sequelize.STRING
        }
 
    });
 
    return Games;
 
}