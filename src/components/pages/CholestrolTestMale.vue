<template>
    <!-- <test-header-male>
        <template #testTitle>CHOLESTROL </template>
    ></test-header-male> -->
    <!-- pop up print doc when user press print button -->
    <cholestrol-results v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex> Male</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon> {{pharmPhone}}</template>>

        <!--TEST RESULTS SLOT  -->     
        <template #title> Cholesterol Results</template>
        <template #sTotal> {{sTotal}}</template>
        <template #sHdl> {{sHdl}}</template>
        <template #sLdl> {{sLdl}}</template>
        <template #sRatio> {{sRatio}}</template>
        <template #sTrig> {{sTrig}}</template>

        <!-- TEST VALIDATION -->
        <template #totalVal> {{tInput}}</template>
        <template #hdlVal> {{hInput}}</template>
        <template #ldlVal> {{lInput}}</template>
        <template #ratioVal> {{rInput}}</template>
        <template #trigVal> {{trigInput}}</template>
        <template #sDate> {{currentDateTime()}}</template>

         


        <!--pdf ends here]  -->
    </cholestrol-results>

    <form>

        <base-card>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">CHOL</label>
                </div>

                <div>
                    <label class="lDwn">(mmol/L)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="sTotal" name="sTotal" inputmode="decimal" maxlength="4" v-model="sTotal" @blur="validateTotal"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn" >&lt;5mmol/L </label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">HDL</label>
                </div>

                <div>
                    <label class="lDwn">(mmol/L)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="sTotal" name="sHdl" inputmode="decimal" maxlength="4" v-model="sHdl" @blur="validateHDL"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn"  >	&gt;1.2mmol/L </label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">TRIG</label>
                </div>

                <div>
                    <label class="lDwn">(mmol/L)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="sTrig" name="sTrig" inputmode="decimal" maxlength="4" v-model="sTrig" @blur="validateTrig"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn" >&lt;2.3mmol/L </label>
                </div>
                
            </div>
        </div>

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop" >LDL</label>
                </div>

                <div>
                    <label class="lDwn">(mmol/L)</label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="sLdl" name="sLdl" inputmode="decimal" maxlength="4" v-model="sLdl" @blur="validateLDL"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn"  >&lt;3mmol/L </label>
                </div>
                
            </div>
        </div>

        

        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLbl">
                <div>
                    <label class="lTop">CHOL/HDL</label>
                </div>

                <div>
                    <label class="lDwn"></label>
                </div>
            </div>
            
            <!-- INPUT COLUMN -->
            <div class="txtInpt">
                <input id="sRatio" name="sRatio" inputmode="decimal" maxlength="4" v-model="sRatio" @blur="validateRatio"/>
            </div>

            <!-- NORM COLUMN -->
            <div class="txtNorm">
                <div>
                    <label class="lDwn" >Normal Range</label>
                </div>
                <div>
                    <label  class="lDwn" >&lt;6</label>
                </div>
                
            </div>
        </div>

        <div>
        </div>

        
        </base-card>


              <!-- CUSTOMER DETAILS -->
        <base-card>
            <div><label for="">CUSTOMER</label></div>
            <div class="form-control" id="cusId">
                <input class="cusInpt"  name="user-name" type="text" placeholder="   Name :" v-model.trim="name"/>
            </div>
            
            <div class="form-control" id="cusId">
                <input class="cusInpt"  name="age" inputmode="decimal" placeholder="   Age :" v-model.trim="age"/>
            </div>

            <div class="form-control" id="cusId">
                <input class="cusInpt"  name="age" inputmode="decimal" placeholder="   Phone :" v-model.trim="phone" />
            </div>

        </base-card>

    </form>


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
            sex: null,

            //FORM VALIDATION
            tInput:'',
            hInput:',',
            lInput:'',
            rInput:'',
            trigInput:''


        }
    },
  components: { BaseCard },

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
        validateTotal(){
            if(this.sTotal < 5){
            this.tInput = 'normal'
        } else if(this.sTotal >= 5){
            this.tInput='high'
        } 
        },

        validateHDL(){
            if(this.sHdl > 1){
            this.hInput = 'normal'
        } else if(this.sHdl<1){
            this.hInput ='low'
        }
        },

        validateLDL(){
            if(this.sLdl<3){
                this.lInput='normal'
            } else if(this.sLdl >= 3){
                this.lInput='high'
            }
        },

        validateRatio(){
            if(this.sRatio<6){
                this.rInput='normal'
            } else if(this.sRatio > 6){
                this.rInput='high'
            }
        },

        validateTrig(){
            if(this.sTrig<2.3){
                this.trigInput='normal'
            } else if(this.sTrig >= 2.3){
                this.trigInput='high'
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
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Cholesterol.json', {
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
                Total:this.sTotal,
                Total_Feedback:this.tInput,

                HDL:this.sHdl,
                HDL_Feedback:this.hInput,

                LDL:this.sLdl,
                LDL_Feedback:this.lInput,

                Trig:this.sTrig,
                Trig_Feedback:this.trigInput,

                Ratio:this.sRatio,
                Ratio_Feedback:this.rInput,

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