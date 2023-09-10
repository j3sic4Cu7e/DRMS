require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const registered_account = require('./dormitory/registered_account');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

app.get('/', (req, res) => {
    res.send({DRMS: 'registered_account'});
});

app.get('/add-note', async (req, res) => {
    try {
        await registered_account.insertMany([
            {
                tenants_name: "Jessica Aoanan",
                tenant_username: "Jessica",
                tenant_password: "Aoanan",
                tenant_contact: "09692109531",
                tenant_email: "aoananjessica15@gmail.com",
                tenant_age: "21",
                tenant_gender: "Female",
            }
        ]);
        res.send('registered_account Added...')
    } catch (error) {
        console.log("err", + error);
    }
})

app.get('/registered_account', async (req,res)=> {
    const registered_account = await registered_account.find();
    if (registered_account) {
        res.json(registered_account)
    } else {
        res.send("Something went wrong");
    }
});
connectDB().then(() => {
    app.listen(PORT , () => {
        console.log(`listening on port ${PORT}`)
    })
})

