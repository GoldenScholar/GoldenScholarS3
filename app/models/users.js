module.exports = function(sequelize, Sequelize) {
 
    var Student = sequelize.define('users', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
		
		accountType: {
            type: Sequelize.STRING
        },
 
        username: {
            type: Sequelize.STRING
        },
 
        email: {
            type: Sequelize.STRING,
            //validate: {
            //    isEmail: true
            //}
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
		
		/*score:  {
			type: Sequelize.STRING
			
		},
		
		gamesPlayed:  {
			type: Sequelize.INTEGER
			
		},
		
		gamesCreated:  {
			type: Sequelize.INTEGER
			
		}*/
 
 
    });
 
    return Student;
 
}