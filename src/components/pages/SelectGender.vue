<template>
    <the-header></the-header>

    <!-- <div class="card" >
        <h2>Select Sex</h2>
    </div> -->
         
    <section>
        
        <div class="btnClass">
            <h3 style="margin:20px;">Customer</h3>
            <button class="mbtn" @click="malePage"><span class="btnText">MALE</span></button>
        </div>

        <div class="btnClass">
            <button class="fbtn" @click="femalePage"><span class="btnText">FEMALE</span></button>
        </div>

        <div class="btnClass"> 
            <button class="obtn" @click="otKits">ORDER TEST KITS</button>
        </div>
    </section>

    <div style="height:10px;">

    </div>

    
    <footer class="footer">
        <div class="Sparent"> 
            <div class="child1">
                <div><p id="p">{{pharmName}}</p></div>
                <p id="p">{{pharmLoc}}</p>
                <p id="p">{{pharmPhone}}</p>
            </div>

            <div class="child2">
                <button class="pbtn" @click="setAdmin"><strong>Facility Details</strong></button>
            </div>
        </div>
        <p>trial version 1.0</p>

    </footer>
<div style="height:100px;">

    </div>

</template>

<script>
import TheHeader from '../layouts/TheHeader.vue';
export default {
  components: { TheHeader },
    data(){
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:'',
        }
    },

    mounted(){
    this.pharmName = JSON.parse(localStorage.getItem('pharmName'));
    this.pharmLoc = JSON.parse(localStorage.getItem('pharmLoc'));
    this.pharmPhone = JSON.parse(localStorage.getItem('pharmPhone'));
  },

    methods:{
        malePage(){
            this.$router.push('/testMale');
        },

        femalePage(){
            this.$router.push('/test');
        },

        setAdmin(){
            this.$router.push('/admin');
        },

        otKits(){
            //go to order test kit page
            this.$router.push('/otKits');
        },

    },

    
}
</script>

<style scoped>
/* .footer{
    backface-visibility: red;
    margin-left: auto;
    margin-right: auto;
} */
.Sparent{
    display: flex;
    position: fixed;
    background: #2a2a2a;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    color: #000;
}

.child1{
    justify-content: left;
    width: 50%;
    color: #fff;
}

.child2{
    display: block;
    width: 50%;
    margin: auto;
    color: #fff;
}

#p{
    font-size: large;
    text-align: left;
    padding-left: 10%;
    margin: 3px;
}


.mbtn {
    /* font-weight: bold; */
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #ffffff;
  font-size: 20px;
  background: #0081C9;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
  width: 90%;
  border-style: none;
}

.fbtn {
    /* font-weight: bold; */
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #ffffff;
  font-size: 20px;
  background: #9F73AB;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
  width: 90%;
  border-style: none;
}


.obtn {
     -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #ffffff;
  font-size: 20px;
  background: #0CAB0A;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
  width: 90%;
  border-style: none;

}

.pbtn {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #2a2a2a;
  font-size: 12px;
  background: #fff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 65%;
  border-style: none;
}

.btnText{
    font-size: xx-large;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1px;
  max-width: 100%;
  background-color: #0081C9;
  color: #fff;
  margin-bottom: 2em;
}

.btnClass{
    margin: 2em;
    height: 10%;
}
</style>