module.exports = function(sequelize, Sequelize) {
 
    var Groups = sequelize.define('groups', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        facultyName: {
            type: Sequelize.STRING
        },
 
        className: {
            type: Sequelize.STRING
        },
 
        classNumber: {
            type: Sequelize.STRING
        },
 
        description: {
            type: Sequelize.STRING
        }
 
 
    });
 
    return Groups;
 
}