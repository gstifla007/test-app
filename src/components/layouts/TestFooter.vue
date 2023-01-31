<template>
  <footer class="fparent">
          <base-card>
          <div>
            <button id="btn1" @click="home">Back</button>
            <slot name="print"><button id="btn2" >Print</button></slot>
          </div>
          </base-card>
  </footer>
    
    
</template>

<style scoped>
.fparent{
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 12px;
   
  padding: 1rem;
  margin: 5px;
  width: 90%;
  background-color: #9F73AB;
  color: #;
  display: block;
    margin: auto;
    height: 8%;
}

#btn1 {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #9F73AB;
  font-size: 20px;
  background: #fff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 30%;
  border-style: none;
  margin-right: 10%;
}


#btn2 {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  background: #00f729;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 30%;
  border-style: none;
  margin-left: 10%;
}

</style>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default{
  components: { BaseCard },
    methods:{
        home(){
            //go to home page
            this.$router.push('/test');
        },

        print(){
            //go to bp page
            this.$router.push('/');
        }
    }
}
</script>