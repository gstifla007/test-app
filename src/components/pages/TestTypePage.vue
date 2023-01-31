<template>
<header id="head">

    <div>
        <h2>FEMALE</h2>
    </div>

</header>


<div>

  <div class="tBtnParent">
    
    <div class="btnCon">
      <div class="b1">
        <button id="btn2" @click="bpTest">Blood Pressure</button>
      </div>

      <div class="b2">
        <button id="btn2" @click="bsTest">Blood Sugar</button>
      </div>
    </div>

    <div class="btnCon">
      <div class="b1">
        <button id="btn2" @click="hbTest">Hemoglobin</button>
      </div>

      <div class="b2">
        <button id="btn2" @click="chTest">Cholesterol</button>
      </div>
    </div>

    <div class="btnCon">
      <div class="b1">
        <button id="btn2" @click="malTest">Malaria</button>
      </div>

      <div class="b2">
        <button id="btn2" @click="hepTest">Hepatitis B</button>
      </div>
    </div>

    <div class="btnCon">
      <div class="b1">
        <button id="btn2" @click="typTest">Typhoid</button>
      </div>

      <div class="b2">
        <button id="btn2" @click="pregTest">Pregnancy</button>
      </div>
    </div>

    





    <div style="margin: 10px;">
      <!-- div for space -->
    </div>

    <!-- MALARIA, PSD AND TYPHOID FOR MALE / ADD PREGNANCY - PSA FOR WOMAN -->
  </div>
  
</div>


<footer class="Sparent">
    <div style="display:flex; justify-content:center;">
      <button id="btn3" @click="genSwitch"> <strong>Home</strong> </button>
    </div>
    
</footer>


    
</template>
<script>
export default{

    data() {
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:''

        }
    },
    mounted(){
    this.pharmName = JSON.parse(localStorage.getItem('pharmName'));
    this.pharmLoc = JSON.parse(localStorage.getItem('pharmLoc'));
    this.pharmPhone = JSON.parse(localStorage.getItem('pharmPhone'));
  },
    methods:{
        bpTest(){
            //go to bp page
            this.$router.push('/bpTest');
        },

        bsTest(){
            //go to bp page
            this.$router.push('/bsTest');
        },

        hbTest(){
            //go to blood sugar page
            this.$router.push('/hbTest');
        },

        chTest(){
            //go to hematocrit page
            this.$router.push('/chTest');
        },

        malTest(){
            //go to hematocrit page
            this.$router.push('/malTest');
        },

        hepTest(){
            //go to hematocrit page
            this.$router.push('/hepBTest');
        },

        typTest(){
            //go to hematocrit page
            this.$router.push('/typTest');
        },


        pregTest(){
            //go to hematocrit page
            this.$router.push('/pregTest');
        },



        
        genSwitch(){
            //go to order test kit page
            this.$router.push('/selectGen');
        },
    }
}
</script>

<style scoped>

.b1{
  width: 50%;
}

.b2{
  width: 50%;
}

.btnCon{
  display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
}

.Sparent{
    display: flex;
    position: fixed;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 97%;
    padding: 20px 0px;
    width: 100%;
    color: #fff;
    background: #fff;
}

#homeBtn{
  border-radius: 16px;
  color: #9F73AB;
  font-size: 20px;
  background: #fff;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  min-width: 40%;
  width: 40%;
  border-style: none;
}

#head{
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 10px auto;
  width: 90%;
  background-color: #9F73AB;
  color: #fff;
}

#btn2 {
  text-align: center;
  border-radius: 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  /* background: #0081C9; */
  background: #9F73AB;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 20px ;
  text-decoration: none;
  min-width: 80%;
  min-height: 11vh;
  border-style: none;
  margin: 2%;
}

#btn3 {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  background: #9F73AB;
  font-size: 20px;
  padding: 15px 30px;
  text-decoration: none;
  width: 100%;
  border-style: none;
  margin-left: auto;
  margin-right: auto;
}

</style>