const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      // aqui inserimos o datatype da coluna criada
      phone_num: DataTypes.STRING,
    },
    {
      underscored: true,
      tableName: "Users",
    }
  );

  return User;
};

module.exports = User;
