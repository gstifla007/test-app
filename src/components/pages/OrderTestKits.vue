<template>
    <the-header title="ORDER TEST KITS"></the-header>
    <div>
        
    <form>

        <base-card>
             <div class="con">
                <h3>Malaria </h3>
                <!-- <div>
                <a class="fcc-btn"  href="https://wa.me/233246790052?text=Hi%20would%20like%20to%20purchase%20malaria%20test%20kits"> Mapan Medical</a>
                </div> -->

                  <div >
                     <a class="fcc-btn"  href="https://wa.me/233257173767?text=Hi%20would%20like%20to%20purchase%20malaria%20test%20kits">Order Now</a>
                  </div>
               </div>

             <div class="con">
                <h3>Glucometers and Strips </h3>
                <!-- <div>
                <a class="fcc-btn"  href="https://wa.me/233246790052?text=Hi%20would%20like%20to%20purchase%20glucose%20strips%20test%20kits"> Mapan Medical</a>
                </div> -->

                <div>
                <a class="fcc-btn"  href="https://wa.me/233257173767?text=Hi%20would%20like%20to%20purchase%20glucose%20strips%20test%20kits">Order Now</a>
                </div>
             </div>

             <div class="con">
                <h3>Hb Readers/Strips </h3>

                <div>
                <a class="fcc-btn"  href="https://wa.me/233257173767?text=Hi%20would%20like%20to%20purchase%20Hb%20strips">Order Now</a>
                </div>
             </div>

             <div class="con">
                <h3>Cholesterol </h3>
                <div >
                <a class="fcc-btn"  href="https://wa.me/233257173767?text=Hi%20would%20like%20to%20purchase%20cholesterol%20test%20kits"> Order Now</a>
                </div>

             </div>
        </base-card>
   
    </form>

    <div>
      <button id="btn" @click="genSwitch">Home</button>
    </div>
    </div>

</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date +' '+ time;
      
      return dateTime;
    },

    
   genSwitch(){
      //go to order test kit page
      this.$router.push('/selectGen');
   },
  }
};
</script>

<style scoped>
#sex{
    display: flex;
    justify-content: center;
}

.con{
   margin: 40px;
}

#btn {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  background: #0081C9;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 30%;
  border-style: none;
  margin-left: auto;
  margin-right: auto;
}

.fcc-btn {
  background-color: #199319;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
  border-radius: 15px;
}

.fcc-btn:hover {
  background-color: #223094;
}
</style>