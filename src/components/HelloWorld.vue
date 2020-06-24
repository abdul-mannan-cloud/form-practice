<template>
    <v-app>
        <v-form ref="myForm" class="flex">
            <v-card elevation="10" class="grid" >
                <div class="cls"><h1>Donor Form </h1></div>
                <v-text-field label="Donor Name" v-model="person.name" outlined  dense dark
                        :rules="[(v)=> !!v || 'Please provide a Name']"
                />

                <v-text-field  label="S/O,W,O/D,O" v-model="person.pass" outlined dense dark/>

                <v-text-field label="Age" v-model="person.age" outlined dense dark/>
                <v-text-field label="NIC" v-model="person.NIC" outlined dense dark/>

                <v-select label="Gender" :items="['Male','Female']" v-model="person.gender" outlined dense dark></v-select>
                <v-select label="Blood Group" :items="['A+','A-','B+','B-','C+','C-','D+','D-']" v-model="person.blood" outlined dense dark/>

                <v-text-field label="Phone #" v-model="person.phone" outlined dense dark/>
                <v-text-field label="Email Adress" v-model="person.email" outlined dense dark/>

                <v-textarea label="Adress" v-model="person.adress" outlined class='rowc' dense dark/>

                <v-text-field label="Fund Type" v-model="person.fund" outlined dense dark/>
                <v-text-field label="Fund Rs" v-model="person.rs" outlined dense dark/>

                <v-menu>
                    <template v-slot:activator="{on}">
                        <v-text-field label="Current Date" v-model="cod"  outlined dense dark>
                            <template v-slot:append>
                                <v-icon v-on="on">
                                    mdi-calendar
                                </v-icon>
                            </template>
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="cod" />
                </v-menu>

                <v-menu>
                    <template v-slot:activator="{on}">
                        <v-text-field label="Collection Date" v-model="doc" outlined dense dark>
                            <template v-slot:append>
                                <v-icon v-on="on">
                                    mdi-calendar
                                </v-icon>
                            </template>
                         </v-text-field>
                    </template>
                    <v-date-picker v-model="doc" />
                </v-menu>

                <v-text-field label="Branches" v-model="person.branch" outlined dense dark/>
                <v-text-field label="City" v-model="person.city" outlined dense dark/>

                <v-text-field label="Reference" v-model="person.reference" outlined dense dark/>

                <v-radio-group row >
                      <v-radio label="Members" dark></v-radio>
                      <v-radio label="Donors" dark></v-radio>
                </v-radio-group>

                <v-card class="pad" elevation="0">
                  <v-btn @click="save" class="mid" dark outlined rounded>Submit</v-btn>
                </v-card>
            </v-card>
        </v-form>
       </v-app>
</template>

<script>
    import {
        PersonModel
    } from "../../models/PersonModel";
    import {
        ipcRenderer
    } from 'electron'

    export default {
        name: 'HelloWorld',

        data: () => ({
            person: new PersonModel,
            cod: null,
            doc: null
        }),

        mounted() {
            ipcRenderer.on('person-created', () => {
                console.log('person-created')
            })
            ipcRenderer.on('person-created-error', (_, error) => {
                console.log(error)
            })
        },

        methods: {
            save() {
                if (this.$refs.myForm.validate()) {
                    ipcRenderer.send('create-person', this.person)
                }
            }
        }
    }
</script>

<style scoped>
    .grid {
        display: grid;
        justify-content: center;
        align-items: center;
        column-gap: 50px;
        grid-template-columns: 300px 300px;
        padding: 20px;
        width: 700px;
        border-radius: 7px !important;
        background-color: #424242 !important;
        font-family: fantasy;
    }
    
    .rowc {
        grid-column: 1 / 3;
    }
    
    .pad {
        padding: 0px 0px 0px 280px;
        background-color: #424242 !important;
    }
    
    .mid {
        width: 100px;
    }
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cls{
        grid-column: 1/3;
        padding: 0px 0px 0px 245px;
        color: white;
        margin-bottom: 10px;
    }

</style>
