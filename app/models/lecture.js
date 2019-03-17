module.exports = function(sequelize, Sequelize) {
 
    var Lecture = sequelize.define('lecture', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        facultyName: {
            type: Sequelize.STRING
        },
 
        topicName: {
            type: Sequelize.STRING
        },
 
		/*subTopicNumber: {
            type: Sequelize.INTEGER
        },*/
 
        subTopicName: {
            type: Sequelize.STRING
        },
 
        subTopicInfo: {
            type: Sequelize.STRING
        }
 
 
    });
 
    return Lecture;
 
}