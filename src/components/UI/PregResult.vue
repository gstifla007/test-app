<template>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
  <div @click="$emit('closePrint')"></div>
  <dialog open id="printModal">
    <section id="capture" style="background: #fff;">

        <section id="headSect">
          <section>
            <p style=" min-width:99%; font-size:14px; padding:0px; margin-top: 5; line-height:15px"><slot name="phName"></slot></p>
             <p style="font-size:12px;  padding-bottom: 5px" ><slot name="phLoc"></slot></p>
             <p style="font-size:12px;  margin-bottom: 5" ><slot name="phCon"></slot></p>
          </section>
        
        </section>

    <section class="modalWrap">
    <section class="titleCon">
      <h5 id="hSect" style="color:#0081C9; font-size:12px; border-bottom: 1px solid black;" ><slot name="title">
        </slot>&nbsp;&nbsp;|&nbsp;&nbsp;<slot name="sDate"></slot> </h5>
    </section>

    <section class="custPrint">
      <p ><slot name="sName"></slot></p>
      <p style="font-size:small;  padding-bottom: 10px; border-bottom: 1px solid black; ">
      <slot name="sAge"></slot> &lpar; F &rpar;  &nbsp;&nbsp;|&nbsp;&nbsp; <slot name="sPhone"></slot></p>
    </section>

    <section>
      <table class="table">
            <tr>
                <td class="td1"></td>
                <td class="td2"><slot name="sPreg"></slot></td>
                <td class="td3"></td> 
            </tr>
            
          </table>
          <section style=" border-bottom: 1px solid black; padding:0; "></section>
          <section>
            <p id="advice">Please seek advice from qualified health 
              professionals with regards to your health and test results</p>
          </section>
    </section>



    </section>
    
    </section>

    <menu>
      <section class="printFooter">
        <button id="homeBtn" @click="backPage">Home</button>
        <button id="saveBtn" @click="startPrint"><i class="fa fa-download" aria-hidden="true"></i></button>
      </section>
    </menu>
  </dialog>
</template>

<script>
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default {
  
  components: {  },
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['closePrint'],
  methods: {

    backPage(){
      this.$router.push('/selectGen');
    },



    startPrint(){
      var node = document.getElementById('capture');
      var scale = 3;
      domtoimage.toPng(node, {
      width: node.clientWidth * scale,
      height: node.clientHeight * scale,
      style: {
        transform: 'scale('+scale+')',
        transformOrigin: 'top left'
      }}).then(function (dataUrl){
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        saveAs(dataUrl, 'results.png');
      })
      
},

  }
};
</script>


<style scoped>

#headSect{
  text-align: center;
  padding: 0;
  /* line-height:5px; */
  font-size: normal;
  border-radius: 12px;
  width: 90%;
  margin: 2rem auto;
  margin-bottom: -40px;
  margin-top: 5px;
  max-height: 100px;
  background: #9F73AB;
  color: #fff;
}

#saveBtn {
  border-radius: 16px;
  color: #fff;
  background: #00f729;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 40%;
  border-style: none;
  margin-left: 20px;
  margin-right: auto;
}

#homeBtn {
  border-radius: 16px;
  color: #fff;
  background: #0081C9;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 40%;
  border-style: none;
  margin-left: auto;
  margin-right: 20px;
}


.printFooter{
  border-radius: 12px;
  padding: 1rem;
  margin: auto;
  margin-top: 0;
  width: 80%;
}

#advice{
  color: #0081C9;
  font-size: 9px;
  margin-top: 0px;
  padding-bottom: 20px;
}

.table{
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 30px;
  justify-content: space-between;
}
.td1{
  width: 30%;
  padding: 5px;
  font-size: normal;
  text-align: left;
  font-weight: 500px;
}

.td2{
  width: 30%;
  padding: 5px;
  font-size: normal;
  font-weight: 500px;
}

.td3{
  width: 30%;
  padding: 5px;
  font-size: normal;
  font-weight: 500px;
}

.titleCon{
  margin-bottom: -30px;
}

.custPrint{
  text-align: center;
  margin: 0;
  line-height:5px;
  font-size: 14px;
  margin-bottom: -50px;
}

.modalWrap{
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 80%;
  margin-bottom: -80px;
}

#hSect{
   display: flex;
   align-items: center; 
   justify-content: center;
   margin: 0;
   line-height:20px;
   margin-top: -10px;
}



#pSect{
   display: flex;
   align-items: center; 
   justify-content: center;
   margin-top: 20px;
   padding-bottom: 10px;
   line-height:5px;
   border-bottom: 1px solid black;
   margin-bottom: 0;
}

div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  /* hide scroll bar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

dialog {
  position: absolute;
  top: 2vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  /* hide scroll bar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

}

/* Hide scrollbar for Chrome, Safari and Opera */
.dialog::-webkit-scrollbar {display:none;}

header {
  background-color: #fff; 
  color: #9F73AB;
  width: 100%;
  vertical-align: left;
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
