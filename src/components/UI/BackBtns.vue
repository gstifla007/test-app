<template>
    <div>
        <button @click="goHome" id="btn">Home</button>
    </div>
</template>


<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/selectGen')
        }
    }
}
</script>