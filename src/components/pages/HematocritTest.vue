<template>
        
    <!-- <test-header>
        <template #testTitle>ANEMIA </template>
    </test-header> -->
    <!-- pop up print doc when user press print button -->
    <hematocrit-results v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex> Female</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon> {{pharmPhone}}</template>

        <!--TEST RESULTS SLOT  -->     
        <template #title> Anemia Results</template>
        <template #sHb> {{hb}}</template>
        <template #sHct> {{hct}}</template>
        <template #sHbResult> {{hbInput}}</template>
        <template #sHctResult> {{hctInput}}</template>
        <template #sDate> {{currentDateTime()}}</template>
        
         
        <!--pdf ends here]  -->
    </hematocrit-results>
    <div>
        
    <form>


        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lDwn" >Hb</label>
                </div>

                <div>
                    <label class="lDwn">(g/dL)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="hb" name="hb" inputmode="decimal" maxlength="4"  v-model.trim="hb" @blur="validateHb"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn" >12 - 16 g/dL</label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lDwn">HCT</label>
                </div>

                <div>
                    <label class="lDwn">(%)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="hct" name="hct"  inputmode="decimal" maxlength="4" v-model.trim="hct" @blur="validateHct"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" > Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn" >36 - 48</label>
                </div>
                
            </div>
        </div>

        
        <base-card>
        <div><label class="1Top">CUSTOMER INFO</label></div>
        <div class="form-control" id="cusId">
            <input class="cusInpt"  name="user-name" type="text" placeholder="   Name :" v-model.trim="name"/>
        </div>
        
        <div class="form-control" id="cusId">
            <input class="cusInpt"  name="age" inputmode="numeric" placeholder="   Age :" v-model.trim="age"/>
        </div>

        <div class="form-control" id="cusId">
            <input class="cusInpt"  name="age" inputmode="numeric" placeholder="   Phone :" v-model.trim="phone" />
        </div>

        </base-card>
        
    
    </form>

    </div>
    <div style="height:100px;">

    </div>

    <footer class="fparent">
    <div>
            <button id="btn1" @click="home">Back</button>
            <button id="btn2" @click="startPrint">Save</button>
        </div>
    
    </footer>

</template>

<script>
import moment from 'moment';
import BaseCard from '../UI/BaseCard.vue';
import HematocritResults from '../UI/HematocritResults.vue'
export default {
    data() {
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:'',
            //blood pressure info
            hb: null,
            hct: null,
            //return false to hide pop up
            printIsTrue:false,
            //customer info
            name:'',
            age: null,
            phone:'',
            // add data for radio
            sex: null,

            //test data
            hbInput: 'pending',
            hctInput: 'pending',

        }
    },
  components: { BaseCard, HematocritResults },

   mounted(){
    this.pharmName = JSON.parse(localStorage.getItem('pharmName'));
    this.pharmLoc = JSON.parse(localStorage.getItem('pharmLoc'));
    this.pharmPhone = JSON.parse(localStorage.getItem('pharmPhone'));
  },

  methods: {
    
    timeStamp() {
      const timeSt = moment().format('LTS');
      const timeStamp = timeSt;
      return timeStamp;
    },

    currentDateTime() {
      const date = moment().format('ll');
      const dateTime = date;
      
      return dateTime;
    },

    // work on form validation later
    validateHb(){
        if(this.hb >= 12 && this.hb <= 16){
            this.hbInput = 'normal'
        } else if(this.hb>16){
            this.hbInput='high'
        } else if(this.hb<12){
            this.hbInput ='low'
        }

        //for HCT
    },

    validateHct(){
        if(this.hct >= 36 && this.hct <= 48){
            this.hctInput = 'normal'
        } else if(this.hct>48){
            this.hctInput='high'
        } else if(this.hct<36){
            this.hctInput ='low'
        }
    },


    home(){
            //go to home page
            this.$router.push('/test');
        },

    startPrint(){
        const formData={
            //blood pressure dia
            custHB: this.hb,
            custHCT: this.hct,

            //cust Info
            custName:this.name,
            custAge:this.age,
            custPhone:this.phone,
            custSex:this.sex,
        }
        //open print review
        this.printIsTrue = true;
        console.log(formData);

        //save test result to database 
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Hemoglobin.json', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Customer_Name:this.name,
                Customer_Age:this.age,
                Customer_Phone:this.phone,
                Customer_Sex:'Female',

                //TEST RESULT
                HB:this.hb,
                HB_Feedback:this.hbInput,

                HCT:this.hct,
                HCT_Feedback:this.hctInput,


                //PHARMACY DETAILS
                Pharmacy: this.pharmName,
                Pharmacy_Location: this.pharmLoc,
                Phone: this.pharmPhone,
                Date: this.currentDateTime(),
                Time_Stamp: this.timeStamp(),

                //TIMESTAMP
                //does it by default
            })
        });

    },

    closePrint(){
        this.printIsTrue = false;
    }
  }
};
</script>

<style scoped>
#sex{
    display: flex;
    justify-content: center;
}

.form-control .invalid input{
    border-color: red;
}
</style>
