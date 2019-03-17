module.exports = function(sequelize, Sequelize) {
 
    var Groups = sequelize.define('groups', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING
        },
 
        className: {
            type: Sequelize.STRING
        }
 
    });
 
    return Groups;
 
}