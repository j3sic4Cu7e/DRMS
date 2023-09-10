require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const registered_accounts = require('./dormitory/registered_account');

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
    res.send({DRMS: 'registered_accounts'});
});

app.get('/add-note', async (req, res) => {
    try {
        await registered_accounts.insertMany([
            {
                tenants_name: "Jessica Aoanan",
                tenant_username: "Jessica",
                tenant_password: "Aoanan",
                tenant_contact: "09692109531",
                tenant_email: "aoananjessica15@gmail.com",
                tenant_age: "21",
                tenant_gender: "Female",
                tenant_status: "Student",
                tenant_id: "15",
            },
            {
                tenants_name: "Jessica Aoanan",
                tenant_username: "Jessica",
                tenant_password: "Aoanan",
                tenant_contact: "09692109531",
                tenant_email: "aoananjessica15@gmail.com",
                tenant_age: "21",
                tenant_gender: "Female",
                tenant_status: "Student",
                tenant_id: "15",
            }
        ]);
        res.send('registered_accounts Added...')
    } catch (error) {
        console.log("err", + error);
    }
})

app.get('/registered_accounts', async (req,res)=> {
    const registered_accounts = await registered_accounts.find();
    if (registered_account) {
        res.json(registered_accounts)
    } else {
        res.send("Something went wrong");
    }
});
connectDB().then(() => {
    app.listen(PORT , () => {
        console.log(`listening on port ${PORT}`)
    })
})

