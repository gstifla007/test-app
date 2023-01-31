<template>

    <!-- <the-header></the-header> -->
    <!-- <test-header-male>
        <template #testTitle>BLOOD PRESSURE</template>
    </test-header-male> -->

    <!-- pop up print doc when user press print button -->
    <print-pop-up-male v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex> Male</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon>  {{pharmPhone}}</template>

        <!--TEST RESULTS SLOT  -->     
        <template #title> Blood Pressure Results</template>
        <template #sSYS> {{sys}}</template>
        <template #diaInput> {{dia}}</template>
        <template #sPulse> {{pulse}}</template>
        <!-- slots for input validation -->
        <template #sSysVal> {{sysVal}}</template>
        <template #sDiaVal> {{diaVal}}</template>
        <template #sPulseVal> {{pulseVal}}</template>
        <template #sDate> {{currentDateTime()}}</template>
         


        <!--pdf ends here]  -->
    </print-pop-up-male>
    
    <div>
        
    <form>

    <base-card>
            <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">SYS</label>
                </div>

                <div>
                    <label class="lDwn">(mmHg)</label>
                </div>
            </div>

            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input name="sys"  inputmode="decimal" maxlength="4" v-model.trim="sys" @blur="validateSYS"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn"  for="sys" >Normal Range</label>
                </div>
                <div>
                    <label class="lDwn" for="sys" >90 - 120 </label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">DIA</label>
                </div>

                <div>
                    <label class="lDwn">(mmHg)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input name="dia" inputmode="decimal" maxlength="4"  v-model.trim="dia" @blur="validateDIA"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn"  for="sys" >Normal Range</label>
                </div>
                <div>
                    <label class="lDwn"  for="sys" >60 - 80 </label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">PULSE</label>
                </div>

            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input  name="pulse" inputmode="decimal" maxlength="4" v-model.trim="pulse" @blur="validatePULSE"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" for="sys" >Normal Range</label>
                </div>
                <div>
                    <label class="lDwn" for="sys" >60 - 100 </label>
                </div>
                
            </div>
        </div>
    </base-card>

        
        <base-card>
        <div><label for="">CUSTOMER</label></div>
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

    <footer class="mparent">
    <div>
            <button id="btn1" @click="home">Back</button>
            <button id="btn2" @click="startPrint">Save</button>
        </div>
    
    </footer>

</template>

<script>
import moment from 'moment';
import BaseCard from '../UI/BaseCard.vue';
import PrintPopUpMale from '../UI/PrintPopUpMale.vue';
export default {
    data() {
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:'',
            //blood pressure info
            sys: null,
            dia: null,
            pulse: null,

            //return false to hide pop up
            printIsTrue:false,

            //customer info
            name:'',
            age: null,
            phone:'',
            // add data for radio
            //sex: null,

            //TES DATA
            sysVal: 'pending',
            diaVal: 'pending',
            pulseVal: 'pending'

        }
    },
  components: { BaseCard, PrintPopUpMale },

  computed:{

  },

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
    // work on form validation later
    validateSYS(){
        if(this.sys >= 90 && this.sys <= 120){
            this.sysVal = 'normal'
        } else if(this.sys>140){
            this.sysVal='high'
        } else if(this.sys<90){
            this.sysVal ='low'
        } else if(this.sys >= 120 && this.sys <= 140){
            this.sysVal='medium'
        }
    },

    validateDIA(){
        if(this.dia >= 60 && this.dia <= 80){
            this.diaVal = 'normal'
        } else if(this.dia>90){
            this.diaVal='high'
        } else if(this.dia<60){
            this.diaVal ='low'
        } else if(this.dia >= 80 && this.dia <= 90){
            this.diaVal='medium'
        }
    },

    validatePULSE(){
        if(this.pulse >= 60 && this.pulse <= 100){
            this.pulseVal = 'normal'
        } else if(this.pulse>100){
            this.pulseVal='high'
        } else if(this.pulse<60){
            this.pulseVal ='low'
        } 
    },


    home(){
            //go to home page
            this.$router.push('/testMale');
        },

    startPrint(){
        const formData={
            //blood pressure dia
            custSys: this.sys,
            custDia: this.dia,
            custPulse:this.pulse,

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
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Blood_Pressure.json', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Customer_Name:this.name,
                Customer_Age:this.age,
                Customer_Phone:this.phone,
                Customer_Sex:'Male',

                //TEST RESULT
                Systolic:this.sys,
                Systolic_Feedback:this.sysVal,

                Diastolic:this.dia,
                Diastolic_Feedback:this.diaVal,

                Pulse:this.pulse,
                Pulse_Feedback:this.pulseVal,

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


</style>