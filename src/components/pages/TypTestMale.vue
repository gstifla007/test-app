<template>
    <typ-result-male v-if="printIsTrue">
        <!-- put everything in the pdf here -->
        <template #sName> {{name}}</template>
        <template #sAge> {{age}}</template>
        <template #sSex>M</template>
        <template #sPhone> {{phone}}</template>

        <!-- PHARM DETAILS -->
        <template #phName> {{pharmName}}</template>
        <template #phLoc> {{pharmLoc}}</template>
        <template #phCon> {{pharmPhone}}</template>

        <!--TEST RESULTS SLOT  -->     
        <template #title> Typhoid Results</template>
        <template #sTypResM> {{finRes}}</template>
        <template #sDate> {{currentDateTime()}}</template>
         


        <!--pdf ends here]  -->
    </typ-result-male>

        <div>
        
    <form>

        <base-card>

        <!-- TYPE COLUMN -->
            <div style="display:flex;">

                <div class="txtLb1">
                <div>
                    <label class="child1">SELECT RESULT</label>
                    <p style="font-size:10px; margin-left: 20px; margin-right: auto;">click twice on iOS devices</p>
                </div>

            </div>
            
            <div class="radio-toolbar">
                
                <div class="check">
                    <input type="radio" id="crad" name="radio" value="C Present" v-model="typInpt" @click="validateTyp" >
                    <label for="crad">Only C</label>
                    
                </div>
                
                <div class="check">
                    <input type="radio" id="cgrad" name="radio" value="C and G Present" v-model="typInpt"  @click="validateTyp">
                    <label for="cgrad">C &amp; G</label>
                </div>
                
                <div class="check">
                    <input type="radio" id="cmrad" name="radio" value="C and M Present" v-model="typInpt"  @click="validateTyp">
                    <label for="cmrad">C &amp; M</label>
                </div>
                
                <div class="check">
                    <input type="radio" id="cgmrad" name="radio" value="C, G and M Present" v-model="typInpt"  @click="validateTyp">
                    <label for="cgmrad">C, G &amp; M</label>
                </div>
  
            </div>
            
            </div>  
            <base-card v-if="this.finRes!=''">
                <h3 style="color:#0081C9;">{{this.finRes}}</h3>
            </base-card>
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

            typInput: null,
            typResult:'',
            finRes:'',
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

    // work on form validation later
    validateTyp(){
        if(this.typInpt ==='C Present'){
            this.typResult = 'Negative'
        } else if(this.typInpt === 'C and G Present'){
            this.typResult='Positive (Previous)'
        } else if(this.typInpt === 'C and M Present'){
            this.typResult='Positive (Current)'
        } else if(this.typInpt === 'C, G and M Present'){
            this.typResult='Positive (Current & Previous)'
        } else if(this.typInpt === 'test'){
            this.typResult='test'
        }

        this.finRes=this.typResult;
        console.log(this.finRes);

    },



    home(){
            //go to home page
            this.$router.push('/testMale');
        },

    startPrint(){
        const formData={
            //blood pressure dia
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
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Typhoid.json', {
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
                Typhoid_Result:this.typInpt,
                Typhoid_Result_Feedback:this.finRes,

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

.child1{
  margin-left: 20px;
  margin-right: auto;
}

.txtLb1{
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.wrapper{
    min-width: 70%;
    
}

.radio-toolbar {
  margin: 10px;
  display: inline-block;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
.check{
  margin: 20px;
  width:100px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
  margin: 100px;
   
}


.radio-toolbar label {
    display: inline-block;
    background-color: rgb(241, 241, 241);
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 1px solid rgb(241, 241, 241);
    border-radius: 14px;
    width:90%;
    text-align: center;
    color: #0081C9;
    font-weight: 55s0;
}

.radio-toolbar label:hover {
  background-color: #dfd;
}

.radio-toolbar input[type="radio"]:focus + label {
    border: 2px solid #0081C9;
}

.radio-toolbar input[type="radio"]:checked + label {
    background-color: #0081C9;
    color: #fff;
}

/* 
#hebBfInp-1:checked:checked ~ .hebBfInp-1{
  border-color: #0081C9;
  background: #0081C9;
} */


</style>

