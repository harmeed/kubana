module.exports = (sequelize, Sequelize) => {
  const book = sequelize.define("book", {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    shortletsId: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
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
  });
  return book;
};
