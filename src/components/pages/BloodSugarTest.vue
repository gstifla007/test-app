<template>
        
    <!-- <test-header>
        <template #testTitle>BLOOD SUGAR</template>
    ></test-header> -->
    <!-- pop up print doc when user press print button -->
    <blood-sugar-result v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex>  Female</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon> {{pharmPhone}}</template>

        <!--TEST RESULTS SLOT  -->     
        <template #title> Blood Sugar Result</template>
        <template #type> {{vtestType}}</template>
        <template #amount> {{valAmt}}</template>
        <template #label> {{result}}</template> 
        <template #sDate> {{currentDateTime()}}</template>


        <!--pdf ends here]  -->
    </blood-sugar-result>

    <div>
        
    <form>

        <base-card>
        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">Type</label>
                </div>

            </div>

            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <select class="selParent" name="vtestType" id="vtestType" v-model="vtestType">
                    <option value="fasting">Fasting</option>
                    <option value="random">Random</option>
                    <option value="2hrs Post">2hrs Post</option>
                </select>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" for="sys" >Normal Range</label>
                </div>
                
            </div>
        </div>

        <div class="form-control" v-if="this.vtestType==='fasting'">

            <!-- TYPE COLUMN -->
            <div class="txtLbl" >
                <div>
                    <label for="showFast">FASTING</label>
                </div>

            </div>

            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="fast" name="fast" inputmode="decimal" maxlength="4"  v-model.trim="fastInput" @blur="validateFAST"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label for="showFast">  &lt;5.5</label>
                </div>
                
            </div>
        </div>

        <div class="form-control" v-if="this.vtestType==='random'">

            <!-- TYPE COLUMN -->
            <div class="txtLbl" >
                <div>
                    <label  for="random">RANDOM</label>
                </div>

            </div>

            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="random" name="random" inputmode="decimal" maxlength="4" v-model.trim="randomInput" @blur="validateRANDOM"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label for="showFast">  &lt;11.1</label>
                </div>
                
            </div>
        </div>

          <!-- TEST SPECIFIC -->
        <div class="form-control" v-if="this.vtestType==='2hrs Post'">

            <!-- TYPE COLUMN -->
            <div class="txtLbl" >
                <div>
                    <label class="lDwn" for="2hrs Post">2hrs Post Meal</label>
                </div>

            </div>

            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="2hrs Post" name="2hrs Post" inputmode="decimal" maxlength="4" v-model.trim="hrsInput" @blur="validateHRS"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn"  for="showFast">  &lt;7.8</label>
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


    <footer class="fparent">
    <div>
            <button id="btn1" @click="home">Back</button>
            <button id="btn2" @click="startPrint">Save</button>
        </div>
    
    </footer>

    </div>

    <div style="height:100px;">

    </div>

</template>

<script>

import moment from 'moment';
import BaseCard from '../UI/BaseCard.vue';
import BloodSugarResult from '../UI/BloodSugarResult.vue';
export default {
    data() {
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:'',
            //blood sugar info
            amount: null,
            testType: null,

            //return false to hide pop up
            printIsTrue:false,

            //customer info
            name:'',
            age: null,
            phone:'',
            // add data for radio
            iFast:'',

            //amount to render as test result
            valAmt:null,

            vtestType:'',
            fastVal:'',
            ranVal:'',
            hsrVal:'',

            result:''
        }

        
    },
  components: { BaseCard, BloodSugarResult  },

   mounted(){
    this.pharmName = JSON.parse(localStorage.getItem('pharmName'));
    this.pharmLoc = JSON.parse(localStorage.getItem('pharmLoc'));
    this.pharmPhone = JSON.parse(localStorage.getItem('pharmPhone'));
  },
  
  methods: {
    currentDateTime() {
      const date = moment().format('ll');
      const dateTime = date;
      return dateTime;
    },

    timeStamp() {
      const timeSt = moment().format('LTS');
      const timeStamp = timeSt;
      return timeStamp;
    },
    // work on form validation later
    validateFAST(){
        if(this.fastInput >=2 && this.fastInput <5.5){
            this.fastVal = 'Normal'
        } else if(this.fastInput >= 5.5){
            this.fastVal='High'
        } else if(this.fastInput < 3){
            this.fastVal ='Low'
        }

        this.valAmt=this.fastInput;
        this.result=this.fastVal;

    },

    
    validateRANDOM(){
        if(this.randomInput >=2 && this.randomInput <11.1){
            this.ranVal = 'normal'
        } else if(this.randomInput >= 11.1){
            this.ranVal='high'
        } else if(this.randomInput < 3){
            this.ranVal ='low'
        }
        this.valAmt=this.randomInput;
        this.result=this.ranVal;

    },

    validateHRS(){
        if(this.hrsInput >=2 && this.hrsInput <7.8){
            this.hsrVal = 'normal'
        } else if(this.hrsInput >= 7.8){
            this.hsrVal='high'
        } else if(this.hrsInput < 3){
            this.hsrVal ='low'
        }
        this.valAmt=this.hrsInput;

        this.result=this.hsrVal;

    },

 
    home(){
            //go to home page
            this.$router.push('/test');
        },

    startPrint(){
        const formData={
            //blood pressure dia
            custTestType: this.testType,
            custFast: this.amount,
            // custRandom: this.random,
            // custHrs:  this.hrs,

            //cust Info
            custName: this.name,
            custAge: this.age,
            custPhone: this.phone,
            custSex: this.sex,

            
        }
        //open print review
        this.printIsTrue = true;
        console.log(formData);

        //save test result to database 
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Blood_Sugar.json', {
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
                Test_Type:this.vtestType,
                Test_Result:this.valAmt,
                Test_Result_Feedback:this.result,

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
        //TAKE US HOME instead
        this.$router.push('/selectGen');
    }
  }
};
</script>

<style scoped>
.selParent{
    min-width: 100%;
    min-height: 30px;
    width: 70%;
    font-size: large;
    text-align:center ;
    border-radius: 12px;
    padding: 10px 20px;
}
</style>



