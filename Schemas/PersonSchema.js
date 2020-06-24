import { Schema, model } from 'mongoose'

const PersonSchema = new Schema({
    name: String,
    pass: String,
    status: String,
    age: String,
    phone: String,
    gender: String,
    NIC: String,
    blood: String,
    email: String,
    fund: String,
    rs: String,
    adress: String,
    branch: String,
    city: String,
    reference: String,
})

export const people = model('PersonModel', PersonSchema)