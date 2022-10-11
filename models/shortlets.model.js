
module.exports = (sequelize, Sequelize) => {
  const shortlets= sequelize.define("shortlets", {
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
    paymentPerNight: {
      type: Sequelize.INTEGER,
    },
    numberOfNights: {
      type: Sequelize.INTEGER,
    },
    duration: {
      type: Sequelize.STRING,
    },
  });

  return shortlets;
};


