<template>

  <router-view></router-view>
  
</template>

<style>
body {
    min-height: 100vh;
    max-width: 90%;
    margin: 0 auto;
}

@font-face {
  font-family: "Proxima";
  src: local("Proxima"),
   url(./fonts/Proxima.otf) format("opentype");
}
#app {
  font-family: "Proxima";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}


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
    margin-left: auto;
    margin-right: auto;
}

.txtLbl{
    min-width: 30%;
    
}

.txtInpt{
    min-width: 20%;
}

.txtInpt input{
    min-height: 30px;
    width: 70%;
    font-size: large;
    text-align:center ;
    border-radius: 12px;
    padding: 7px 15px;
}

.txtNorm{
    min-width: 30%;
    margin-left: 20px;
}

.lTop{
    font-size: large;
}

.lDwn{
    font-size: small;
}

.cusInpt{
    min-height: 30px;
    width: 90%;
    font-size: medium;
    text-align:left ;
    border-radius: 12px;
    border-radius: 12px;
    padding: 5px 10px;
}

#cusId{
    display: flex;
    justify-content: center;
}

.mparent{
  display: block;
    position: fixed;
    justify-content: center;
    align-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background: #fff;
}

.fparent{
  display: block;
    position: fixed;
    justify-content: center;
    align-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background: #fff;
}

#btn1 {
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
  margin-right: 10%;
}


#btn2 {
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  color: #fff;
  background: #00f729;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 30%;
  border-style: none;
}

#btn3 {
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
  margin-left: 10%;
}

#headm{
  border-radius: 12px;
  padding: 0.5rem;
  margin: 10px auto;
  width: 90%;
  background-color: #9F73AB;
  color: #fff;
}



.printFooter{
  border-radius: 12px;
  padding: 1rem;
  margin: auto;
  width: 80%;
}

#advice{
  color: #0081C9;
}

.table{
  margin-bottom: -20px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 30px;
  justify-content: space-between;
}

.td1{
  width: 30%;
  padding: 10px;
  font-size: normal;
  text-align: left;
  font-weight: 500px;
  color: black;
}

.td2{
  width: 30%;
  padding: 10px;
  font-size: normal;
  font-weight: 500px;
  color: black;
}

.td3{
  width: 30%;
  padding: 10px;
  font-size: normal;
  font-weight: 500px;
}

.titleCon{
  margin-bottom: -20px;
}

.custPrint{
  text-align: left;
  margin: 0;
  line-height:5px;
  font-size: small;
  margin-bottom: -50px;
}

.modalWrap{
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 80%;
  margin-bottom: -10px;
}

#hSect{
   display: flex;
   align-items: center; 
   justify-content: center;
   margin: 0;
   line-height:20px;
}

#headSect{
   display: flex;
   align-items: center; 
   justify-content: center;
   margin: 0;
   line-height:0;
}

#pSect{
   display: flex;
   align-items: center; 
   justify-content: center;
   margin-top: 20px;
   padding-bottom: 20px;
   line-height:5px;
   border-bottom: 1px solid black;
   margin-bottom: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.dialog::-webkit-scrollbar {display:none;}

header {
  background-color: #9F73AB;
  color: white;
  width: 100%;
  padding: 1rem;
  vertical-align: middle
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
