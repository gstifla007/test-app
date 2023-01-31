<template>
    <form>
  
        <base-card>
        <h3>Pharmacy Details</h3>
        <div class="form-control">
            
            <input id="name" name="user-name" type="text" placeholder="Name :" v-model.trim="name"/>
        </div>
        
        <div class="form-control">
            <input id="location" name="location" type="text" placeholder="location :" v-model.trim="loc"/>
        </div>

        <div class="form-control">
            <input id="contact" name="contact" inputmode="decimal" placeholder="Phone :" v-model.trim="phone" />
        </div>
        </base-card>
        

        <base-card>
        <h3>Pharmacy Manager Details</h3>
        <div class="form-control">
            
            <input id="name" name="user-name" type="text" placeholder="Name :" v-model.trim="mnName"/>
        </div>
        

        <div class="form-control">
            <input id="contact" name="contact" inputmode="decimal" placeholder="Phone :" v-model.trim="mnPhone" />
        </div>
        </base-card>
    </form>

    <!-- <section>
        <div> Current Pharmacy Details</div>
        <p> Pharmacy Name: {{pharmName}}</p>
    </section> -->

    <base-card id="save">
    <section style="display:flex; justify-content:center;">

        <div>
            <button id="btnr" @click="reset">reset</button>
        </div>

        <div>
            <button id="btn2" @click="persist">save</button>
        </div>
    </section>
    </base-card>

    <base-card id="back">
    <section>
        <div>
            <button id="btn" @click="back">Home</button>
        </div>
    </section>
    </base-card>

</template>

<script>
export default {
    data(){
        return{
        name:'',
        loc:'',
        phone:'',
        mnName:'',
        mnPhone:'',
        }
    },

    mounted(){
    this.pharmName = JSON.parse(localStorage.getItem('pharmName'));
    this.pharmLoc = JSON.parse(localStorage.getItem('pharmLoc'));
    this.pharmPhone = JSON.parse(localStorage.getItem('pharmPhone'));
  },

    methods:{
        persist() {
        localStorage.setItem('pharmName', JSON.stringify(this.name));
        localStorage.setItem('pharmLoc', JSON.stringify(this.loc));
        localStorage.setItem('pharmPhone', JSON.stringify(this.phone));


        //save pharmacy manager details locally
        localStorage.setItem('mnName', JSON.stringify(this.mnName));
        localStorage.setItem('mnPhone', JSON.stringify(this.mnPhone));

        //save pharmacy result to database 
        fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Pharmacy.json', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                //PHARMACY DETAILS
                Pharmacy: this.pharmName,
                Pharmacy_Location: this.pharmLoc,
                Phone: this.pharmPhone,

                //OWNER DETAILS
                Manager_Name: this.mnName,
                Manager_Phone: this.mnPhone,
            })
        });

        this.$router.push('/selectGen');
    },

        reset(){
            localStorage.clear();
            
        },

        back(){
            this.$router.push('/selectGen');
        }
    }
}
</script>

<style scoped>

/* FORM STYLING */
.form-control {
    align-items: center;
    border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.233);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 90%;
  display: flex;
  margin: 20px;
    height: 30px;
}


.form-control input{
    min-height: 30px;
    width: 90%;
    font-size: large;
    text-align:left ;
    border-radius: 12px;
    padding: 7px 15px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
}

#btn {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  font-size: 20px;
  background: #0081C9;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 30%;
  border-style: none;
  margin-right: auto;
  margin-left: auto;
}

#btn2 {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  font-size: 20px;
  background: green;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  border-style: none;
  margin-right: auto;
  margin-left: 40px;
  width: 100%;
}

#btnr {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  font-size: 20px;
  background: red;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  border-style: none;
  margin-right: 40px;
  margin-left: auto;
  width: 100%;
}



</style>