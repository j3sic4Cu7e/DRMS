const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const registered_accountsSchema = new Schema({
    tenant_name: {
        type: String,
        required: true,
    },
    tenant_username: {
        type: String,
        required: true,
    },
    tenant_password: {
        type: String,
        required: true,
    }, 
    tenant_contact: {
        type: String,
        required: true,
    },
    tenant_email: {
        type: String,
        required: true,
    },
    tenant_age: {
        type: String,
        required: true,
    },  
    tenant_gender: {
        type: String,
        required: true,
    },
    tenant_status: {
        type: String,
        required: true,
    },
    tenant_id: {
        type: String,
        required: true,
    }        
});

module.exports = mongoose.model('registered_accounts', registered_accountsSchema);