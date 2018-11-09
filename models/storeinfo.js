'use strict';
module.exports = (sequelize, DataTypes) => {
  const storeInfo = sequelize.define('storeInfo', {
    storeName: DataTypes.STRING,
    storeLocation: DataTypes.STRING
  }, {});
  storeInfo.associate = function(models) {
    // associations can be defined here
  };
  return storeInfo;
};
