const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tuaansdo18:tuandz123@cluster0.unhddxp.mongodb.net/ASM_KOT104')
    .then(() => console.log('Kết nối thành công'))
    .catch((err) => {
        console.log("Loi ket noi CSDL");
        console.log(err);
    });

module.exports = { mongoose }