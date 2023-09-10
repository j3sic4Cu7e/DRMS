require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Registered_accounts = require('./dormitory/registered_account');

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
    res.send({title: 'Registered_account'});
});

app.get('/add-note', async (req, res) => {
    try {
        await Registered_accounts.insertMany([
            {
                tenants_name: "Jessica Aoanan",
                tenant_username: "Jessica",
                tenant_password: "Aoanan",
            }
        ]);
        res.send('Registered_account Added...')
    } catch (error) {
        console.log("err", + error);
    }
})

app.get('/registered_accounts', async (req,res)=> {
    const registered_accounts = await Registered_accounts.find();

    if (registered_accounts) {
        res.json(registered_accounts)
    } else {
        res.send("Something went wrong");
    }
});
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
});

