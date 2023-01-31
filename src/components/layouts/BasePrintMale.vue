<template>
  <div @click="$emit('close')"></div>
  <dialog open>
    <header>
      <div>
        <label>Pharmacy: <slot name="phName"></slot> </label>
      </div>

      <div>
        <label>Location: <slot name="phLoc"></slot> </label>
      </div>

      <div>
        <label>Contact: <slot name="phCon"></slot> </label>
      </div>

    </header>

    <base-card>
      <section>
      <!-- section to contain title and date -->
      <div>
        <div>
          <h3><slot name="title"> </slot></h3>
        </div>

        <div>
          <p>Date: {{currentDateTime()}}</p>
        </div>
      </div>

      <!-- customer details -->
      <div class="child2">
          <div>
            <label>Name: <slot name="sName"></slot> </label>
          </div>

          <div>
            <label>Age: <slot name="sAge"></slot></label>
            <label>Sex: <slot name="sSex"></slot></label>
          </div>

          <div>
            <label>Contact: <slot name="sPhone"></slot></label>
          </div>
          
      </div>

      <!-- results table -->
      <div>
          <table>
            <tr>
                <td>SYS(mmHg)</td>
                <td><slot name="sSYS"></slot></td>
                <td><slot name="sSysVal"></slot></td>
            </tr>
            <tr>
                <td>DIA(mmHg)</td>
                <td><slot name="sDia"></slot></td>
                <td><slot name="sDiaVal"></slot></td>
            </tr>
            <tr>
                <td>PULSE<span style="font-size:100%;color:red;">&#10084;</span>(mmHg)</td>
                <td><slot name="sPulse"></slot></td>
                <td><slot name="sPulseVal"></slot></td>
            </tr>
          </table>
      </div>


      <div>
        <p>Please seek advice from qualified health professionals with 
          regards to your health and test results</p>
      </div>


    </section>
    </base-card>

    <base-card>
    <section>
            <div style="display:flex; justify-content:center;">
            <slot name="baseBtn1"></slot>
            <slot name="baseBtn2"></slot>

            </div>
    </section>
    </base-card>

  </dialog>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {


    back(){
            //go to home page
            
        },

    //gen pdf

  }
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 2vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
   
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>