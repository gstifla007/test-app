<template>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

    <header>
        <!-- <h2>Orionis ßeta</h2> -->
        <div id="rght">
          
          <!-- <img v-bind:src="require('../assets/logo.png')" /> -->
          <h2>RIGEL DX </h2>
        </div>
        <!-- <button><i style="font-size:24px" class="fa">&#xf232;</i></button> -->
        <div id="left">
          <a id="contUs" class="fcc-btn"  href="https://wa.me/233257173767?text=Hi%20there,%20I'm%20using%20the%20Diagnostic%20App.%20I%20need%20your%20help">Contact Us <span style="font-size:24px; padding: auto;"><i class="fa fa-whatsapp"></i></span></a>
          <!-- <button id="contUs" >Contact Us <span style="font-size:24px"><i class="fa fa-whatsapp"></i></span> </button> -->
        </div>
        

    </header>

</template>

<style scoped>
#rght{
  display: flex;
  width: 50%;
  justify-content: flex-start;
}

#left{
  display: flex;
  width: 50%;
  justify-content: flex-end;
}

#contUs{
   -webkit-border-radius: 12;
  -moz-border-radius: 12;
  border-radius: 12px;
  color: #0CAB0A;
  background: transparent;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  font-weight: 500;
}

header {
  width: 100%;
  height: 2%;
  background-color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
}

header h2 {
  color: #0081C9;
  padding-left: 5%;
}
</style>

<script>
export default {
  data() {
    return {
      //logo: require('../assets/logo.png')
    }
  },
}
</script>