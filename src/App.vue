<template>
    <v-content style="background-color:#BDBDBD">
        <v-container>
            <hello-world style="background-color:#BDBDBD"/>
        </v-container>
    </v-content>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name:'App',
        components:{
            HelloWorld
        }
    }

</script>

<style scoped>
    
</style>