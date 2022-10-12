
module.exports = (sequelize, Sequelize) => {
  const Shortlets= sequelize.define("shortlets", {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    apartmentName: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    numberOfRooms: {
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
    amountPerNight: {
      type: Sequelize.INTEGER,
    },
    numberOfNights: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    }
  });

  return Shortlets;
};


