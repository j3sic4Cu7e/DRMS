const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Registered_accountsSchema = new Schema({
    tenant_username: {
        type: String,
        required: true,
    },
    tenant_password: {
        type: String,
        required: true,
    }
        
});

module.exports = mongoose.model('Registered_accounts', Registered_accountsSchema);