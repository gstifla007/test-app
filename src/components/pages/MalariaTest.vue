<template>
    <mal-results v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex>F</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon> {{pharmPhone}}</template>

        <!--TEST RESULTS SLOT  -->     
        <template #title>Malaria Result</template>
        <template #sRes> {{malInput}}</template>
        <template #sDate> {{currentDateTime()}}</template>
         


        <!--pdf ends here]  -->
    </mal-results>

        <div>
        
    <form>

        <base-card>
        <div class="form-control">

            <!-- TYPE COLUMN -->
            <div class="txtLb">
                <div>
                    <label class="lTop">Result</label>
                </div>

            </div>

            <div class="wrapper">
                <input type="radio" name="malInput"  id="malInput-1" value="Positive" v-model="malInput" @blur="validateRes">
                <input type="radio" name="malInput" id="malInput-2" value="Negative" v-model="malInput" @blur="validateRes">
                <label for="malInput-1" class="malInput malInput-1">
                    <div class="dot"></div>
                    <span>Positive</span>
                </label>
                <label for="malInput-2" class="malInput malInput-2">
                    <div class="dot"></div>
                    <span>Negative</span>
                </label>
            </div>

        </div>

         <!-- POSITIVE -->
        <div class="form-control" v-if="this.malInput==='Positive'">
            <!-- TYPE COLUMN -->
            <div style="width: 100%; text-align:center; color: red;">
                <div>
                    <h3>POSITIVE</h3>
                </div>
            </div>
        </div>

         <!-- NEGATIVE -->
        <div class="form-control" v-if="this.malInput==='Negative'">
            <!-- TYPE COLUMN -->
            <div style="width: 100%; text-align:center; color: Green;" >
                <div>
                    <h3>NEGATIVE</h3>
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
import BaseCard from '../UI/BaseCard.vue';
import moment from 'moment';
//import BloodSugarResult from '../UI/BloodSugarResult.vue';
export default {
    data() {
        return{
            pharmName:'',
            pharmLoc:'',
            pharmPhone:'',
            //blood sugar info
            amount: null,

            //return false to hide pop up
            printIsTrue:false,

            //customer info
            name:'',
            age: null,
            phone:'',

            malInput: null,
            malResult:''
        }

        
    },
  components: { BaseCard,   },

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

    // uniqueID(){
    //     //unique id
    //     const newId = btoa((Math.random(0,(new Date()).getTime())).toString()).slice(0, -10);
    //     const uniID = "MalT" + newId;
    //     return uniID;
    // },

    // work on form validation later
    validateRes(){
        if(this.malInput ==='Positive'){
            this.malResult = 'Positive'
        } else if(this.malInput === 'Negative'){
            this.malResult='Negative'
        }

        this.custMalR=this.malResult;
        console.log(this.custMalR);

    },

    




    home(){
            //go to home page
            this.$router.push('/test');
        },

    startPrint(){
        const formData={
            //blood pressure dia
            custTestType: this.testType,
            custMalR: this.malResult,
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
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/malaria.json', {
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
                Test_Result:this.malInput,

                //PHARMACY DETAILS
                Pharmacy: this.pharmName,
                Pharmacy_Location: this.pharmLoc,
                Phone: this.pharmPhone,
                Date: this.currentDateTime(),
                Time_Stamp: this.timeStamp(),
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

.txtLb{
    min-width: 30%;
    
}

.wrapper{
    min-width: 70%;
}

.wrapper{
  display: inline-flex;
  height: 100%;
  max-width: 70%;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
}
.wrapper .malInput{
  background: #fff;
  height: 90%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  border: 2px solid lightgrey;
  transition: all 0.3s ease;
}
.wrapper .malInput .dot{
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .malInput .dot::before{
  position: absolute;
  content: "";
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #0081C9;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}

.wrapper .malInput-2 .dot::before{
    background: #da244b;
}

input[type="radio"]{
  display: none;
}
#malInput-1:checked:checked ~ .malInput-1{
  border-color: #0081C9;
  background: #0081C9;
}

#malInput-2:checked:checked ~ .malInput-2{
  border-color: #da244b;
  background: #da244b;
}
#malInput-1:checked:checked ~ .malInput-1 .dot,
#malInput-2:checked:checked ~ .malInput-2 .dot{
  background: #fff;
}
#malInput-1:checked:checked ~ .malInput-1 .dot::before,
#malInput-2:checked:checked ~ .malInput-2 .dot::before{
  opacity: 1;
  transform: scale(1);
}
.wrapper .malInput span{
  font-size: small;
  color: #808080;
}
#malInput-1:checked:checked ~ .malInput-1 span,
#malInput-2:checked:checked ~ .malInput-2 span{
  color: #fff;
}
</style>

