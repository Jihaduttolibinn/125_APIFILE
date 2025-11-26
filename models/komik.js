const { daysToWeeks } = require("date-fns")

module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            aoutoincrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        penulis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dekskripsi: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageType : DataTypes.STRING,
        imageName : DataTypes.STRING,
        imageData : DataTypes.BLOB('long'),
        }, 
    {
        tableName: 'Komik',
    });
    return Komik;
};