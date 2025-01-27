const mongoose = require('mongoose');

const url = `mongodb+srv://2300030049:!Gunners03-04@gunturmotorways.sbyw9.mongodb.net/FS_04?retryWrites=true`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))