<template>

<base-dialog v-if="adminAuth ===false || adminAuth ===null  ">

    <template #input>
        <input id="auth"  type="text"   v-model="adAuth"/>
    </template>

    <template #actions>
        <button id="gbtn" @click="confirmAuth">Verify</button>
    </template>
</base-dialog>

<div class="card" >
    
    <section>
        <div class="txtInpt">
        <div class="flexP">
            <button id="rbtn" @click="delAuth">Log Out</button>
            <select class="selParent" name="vtestType" id="vtestType" v-model="vtestType">
            <option value="" >Select Test</option>
            <option value="malaria">Malaria</option>
            <option value="preg">Pregnancy</option>
            <option value="hepatitis">Hepatitis</option>
            <option value="bptest">Blood Pressure</option>
            <option value="bstest">Blood Sugar</option>
            <option value="hbtest">Hemoglobin</option>
            <option value="chtest">Cholesterol</option>
            <option value="tytest">Typhoid</option>
            <option value="psatest">PSA</option>
        </select>

        <button id="gbtn" @click="refreshData">Refresh</button>
        </div>
    </div>

    
    <!-- PREGNANCY TEST TABLE -->
    <div id="tble"  v-if="this.vtestType==='preg'">
        <h3>Pregnancy Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.presults.length}}</p>
        <table class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Test Result</th>

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="presult in presults" :key="presult">
                      
                      <td >{{presult.cName}}</td>
                      <td >{{presult.cAge}}</td>
                      <td >{{presult.cPhone}}</td>
                      <td >{{presult.cSex}}</td>
                      <td >{{presult.tResult}}</td>
                      <td >{{presult.pName}}</td>
                      <td >{{presult.pCont}}</td>
                      <td >{{presult.pLoc}}</td>
                      <td >{{presult.rDate}}</td>
                      <td >{{presult.rDate}}</td>
                      <td >{{presult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>

        <!-- MALARIA TEST TABLE -->
    <div id="tble"  v-if="this.vtestType==='malaria'">
        <h3>Malaria Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.results.length}}</p>
        <table class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Test Result</th>

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody>
                    <tr v-for="result in results" :key="result">
                      
                      <td >{{result.cName}}</td>
                      <td >{{result.cAge}}</td>
                      <td >{{result.cPhone}}</td>
                      <td >{{result.cSex}}</td>
                      <td >{{result.tResult}}</td>
                      <td >{{result.pName}}</td>
                      <td >{{result.pCont}}</td>
                      <td >{{result.pLoc}}</td>
                      <td >{{result.rDate}}</td>
                      <td >{{result.rTime}}</td>
                      <td >{{result.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>


        <!-- HEPATITIS TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='hepatitis'">
        <h3>Hepatitis B Testss</h3>
        <p style="font-size:smaller">Number of tests {{this.hepresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Test Result</th>

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="hepresult in hepresults" :key="hepresult">
                      
                      <td >{{hepresult.cName}}</td>
                      <td >{{hepresult.cAge}}</td>
                      <td >{{hepresult.cPhone}}</td>
                      <td >{{hepresult.cSex}}</td>
                      <td >{{hepresult.tResult}}</td>
                      <td >{{hepresult.pName}}</td>
                      <td >{{hepresult.pCont}}</td>
                      <td >{{hepresult.pLoc}}</td>
                      <td >{{hepresult.rDate}}</td>
                      <td >{{hepresult.rTime}}</td>
                      <td >{{hepresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>


        <!-- BLOOD PRESSURE TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='bptest'">
        <h3>Blood Pressure Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.bpresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Systolic</th>
                    <th>Systolic Feedback</th>
                    <th>Diastolic</th>
                    <th>Diastolic Feedback</th>
                    <th>Pulse</th>
                    <th>Pulse Feedback</th>
                    

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="bpresult in bpresults" :key="bpresult">
                      
                      <td >{{bpresult.cName}}</td>
                      <td >{{bpresult.cAge}}</td>
                      <td >{{bpresult.cPhone}}</td>
                      <td >{{bpresult.cSex}}</td>

                      <td >{{bpresult.rSys}}</td>
                      <td >{{bpresult.rSysV}}</td>
                      <td >{{bpresult.rDia}}</td>
                      <td >{{bpresult.rDiaV}}</td>
                      <td >{{bpresult.rPul}}</td>
                      <td >{{bpresult.rPulV}}</td>

                      

                      <td >{{bpresult.pName}}</td>
                      <td >{{bpresult.pCont}}</td>
                      <td >{{bpresult.pLoc}}</td>
                      <td >{{bpresult.rDate}}</td>
                      <td >{{bpresult.rTime}}</td>
                      <td >{{bpresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>

        <!-- BLOOD SUGAR TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='bstest'">
        <h3>Blood Sugar Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.bsresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Test Results Type</th>
                    <th>Test Result</th>
                    <th>Results Feedback</th>
                    

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="bsresult in bsresults" :key="bsresult">
                      
                      <td >{{bsresult.cName}}</td>
                      <td >{{bsresult.cAge}}</td>
                      <td >{{bsresult.cPhone}}</td>
                      <td >{{bsresult.cSex}}</td>

                      <td >{{bsresult.rType}}</td>
                      <td >{{bsresult.rAmt}}</td>
                      <td >{{bsresult.rFeedB}}</td>

                      <td >{{bsresult.pName}}</td>
                      <td >{{bsresult.pCont}}</td>
                      <td >{{bsresult.pLoc}}</td>
                      <td >{{bsresult.rDate}}</td>
                      <td >{{bsresult.rTime}}</td>
                      <td >{{bsresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>

        <!-- HEMOGLOBIN TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='hbtest'">
        <h3>Hemoglobin Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.hbresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>HB</th>
                    <th>HB Feedback</th>
                    <th>Hematocrit</th>
                    <th>Hematocrit Feedback</th>
                    

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="hbresult in hbresults" :key="hbresult">
                      
                      <td >{{hbresult.cName}}</td>
                      <td >{{hbresult.cAge}}</td>
                      <td >{{hbresult.cPhone}}</td>
                      <td >{{hbresult.cSex}}</td>

                      <td >{{hbresult.rHb}}</td>
                      <td >{{hbresult.rHbF}}</td>
                      <td >{{hbresult.rHct}}</td>
                      <td >{{hbresult.rHctF}}</td>

                      <td >{{hbresult.pName}}</td>
                      <td >{{hbresult.pCont}}</td>
                      <td >{{hbresult.pLoc}}</td>
                      <td >{{hbresult.rDate}}</td>
                      <td >{{hbresult.rTime}}</td>
                      <td >{{hbresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>


        <!-- CHOLESTEROL TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='chtest'">
        <h3>Cholesterol Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.chresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>CHOL</th>
                    <th>CHOL Feedback</th>
                    <th>HDL</th>
                    <th>HDL Feedback</th>
                    <th>Trig</th>
                    <th>Trig Feedback</th>
                    <th>LDL</th>
                    <th>LDL Feedback</th>
                    <th>Ratio</th>
                    <th>Ratio Feedback</th>
                    

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="chresult in chresults" :key="chresult">
                      
                      <td >{{chresult.cName}}</td>
                      <td >{{chresult.cAge}}</td>
                      <td >{{chresult.cPhone}}</td>
                      <td >{{chresult.cSex}}</td>

                      <td >{{chresult.rChol}}</td>
                      <td >{{chresult.rCholF}}</td>
                      <td >{{chresult.rHdl}}</td>
                      <td >{{chresult.rHdlF}}</td>
                      <td >{{chresult.rLdl}}</td>
                      <td >{{chresult.rLdlF}}</td>
                      <td >{{chresult.rTrig}}</td>
                      <td >{{chresult.rTrigF}}</td>
                      <td >{{chresult.rRatio}}</td>
                      <td >{{chresult.rRatioF}}</td>

                      <td >{{chresult.pName}}</td>
                      <td >{{chresult.pCont}}</td>
                      <td >{{chresult.pLoc}}</td>
                      <td >{{chresult.rDate}}</td>
                      <td >{{chresult.rTime}}</td>
                      <td >{{chresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>

        <!-- TYPHOID TEST TABLE -->
    <div id="tble" v-if="this.vtestType==='tytest'">
        <h3>Typhoid Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.tyresults.length}}</p>
        <table  class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>Test Result</th>
                    <th>Result Feedback</th>
                    

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody >
                    <tr v-for="tyresult in tyresults" :key="tyresult">
                      
                      <td >{{tyresult.cName}}</td>
                      <td >{{tyresult.cAge}}</td>
                      <td >{{tyresult.cPhone}}</td>
                      <td >{{tyresult.cSex}}</td>

                      <td >{{tyresult.rTyr}}</td>
                      <td >{{tyresult.rTyrF}}</td>

                      

                      <td >{{tyresult.pName}}</td>
                      <td >{{tyresult.pCont}}</td>
                      <td >{{tyresult.pLoc}}</td>
                      <td >{{tyresult.rDate}}</td>
                      <td >{{tyresult.rTime}}</td>
                      <td >{{tyresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>

        <!-- PSA TEST TABLE -->
    <div id="tble"  v-if="this.vtestType==='psatest'">
        <h3>PSA Tests</h3>
        <p style="font-size:smaller">Number of tests {{this.psresults.length}}</p>
        <table class="fl-table" >
            <thead>
                <tr>
                    
                    <th>Customer name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Sex</th>

                    <!-- TEST -->
                    <th>PSA Result</th>
                    <th>Result Feedback</th>

                    <!-- PHARMACY DETAILS -->
                    <th>Pharmacy name</th>
                    <th>Pharmacy contact</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Unique Time Stamp</th>
                    <th>Test ID</th>
                </tr>
            </thead>


            <tbody>
                    <tr v-for="psresult in psresults" :key="psresult">
                      
                      <td >{{psresult.cName}}</td>
                      <td >{{psresult.cAge}}</td>
                      <td >{{psresult.cPhone}}</td>
                      <td >{{psresult.cSex}}</td>

                      <td >{{psresult.tResult}}</td>
                      <td >{{psresult.tResultF}}</td>

                      <td >{{psresult.pName}}</td>
                      <td >{{psresult.pCont}}</td>
                      <td >{{psresult.pLoc}}</td>
                      <td >{{psresult.rDate}}</td>
                      <td >{{psresult.rTime}}</td>
                      <td >{{psresult.id}}</td>
                    </tr>
                  </tbody>

        </table>
    </div>


    </section>
    <section>TOTAL TESTS DONE: <span>{{totalTests}}</span> </section>
</div>

</template>

<script>

export default {
    data() {
        return{
            adminAuth:this.adminAuth,
            vtestType:'',
            results: [],
            presults: [],
            hepresults: [],
            bpresults: [],
            bsresults: [],
            hbresults: [],
            chresults: [],
            tyresults: [],
            psresults: [],

            //user auth
            
        }        
    },
    mounted(){
        this.loadResults();
        this.pregTests();
        this.hepTests();
        this.bpTests();
        this.bsTests();
        this.hbTests();
        this.chTests();
        this.tyTests();
        this.psaTests();


        this.adminAuth = localStorage.getItem('adminAuth');
        console.log(this.adminAuth)
    },
    
    computed:{
        totalTests(){
            return this.results.length+this.presults.length+this.hepresults.length+
            this.bpresults.length+this.bsresults.length+this.hbresults.length+
            this.chresults.length+this.tyresults.length+this.psresults.length;
        },

        refreshData(){
            return this.chTests(),
             this.loadResults(),
             this.hepTests(),
             this.pregTests(),
             this.bpTests(),
             this.bsTests(),
             this.hbTests(),
             this.chTests(),
             this.tyTests(),
             this.psaTests();

        },
        checkAuth(){
        return this.confirmAuth();
        },

        deleteAuth(){
        return this.delAuth();
        },
    
    },

    methods: {

        //SERIOUSLY I HAVE NO IDEA WHY THIS WORKS

        confirmAuth(){
            //admin authent Password  
            if(this.adAuth === 'kX$!S0hS&rvmyIZ05J0SE0u!'){
                 this.adminAuth=true;
            } else{
                this.adminAuth=false;
            }
            localStorage.setItem('adminAuth', this.adminAuth);
            console.log(this.adminAuth)
        },

        delAuth(){
            if(this.adminAuth===false){
                this.adminAuth=true;
            } else{
                this.adminAuth=false
            }
            localStorage.removeItem('adminAuth', this.adminAuth);
        },

        //DO NOT TOUCH

        loadResults() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/malaria.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const results = [];
                for (const id in data) {
                    results.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    tResult: data[id].Test_Result,
                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.results = results;
            });
        },

        hepTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Hepatitis_B.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const hepresults = [];
                for (const id in data) {
                    hepresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    tResult: data[id].Test_Result,
                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.hepresults = hepresults;
            });
        },

        pregTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Pregnany.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const presults = [];
                for (const id in data) {
                    presults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    tResult: data[id].Test_Result,
                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.presults = presults;
            });
        },

        bpTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Blood_Pressure.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const bpresults = [];
                for (const id in data) {
                    bpresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    
                    // TEST RESULTS
                    rSys:data[id].Systolic,
                    rSysV:data[id].Systolic_Feedback,

                    rDia:data[id].Diastolic,
                    rDiaV:data[id].Diastolic_Feedback,

                    rPul:data[id].Pulse,
                    rPulV:data[id].Pulse_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.bpresults = bpresults;
            });
        },

        bsTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Blood_Sugar.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const bsresults = [];
                for (const id in data) {
                    bsresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    
                    // TEST RESULTS
                    rType:data[id].Test_Type,
                    rAmt:data[id].Test_Result,
                    rFeedB:data[id].Test_Result_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.bsresults = bsresults;
            });
        },

        hbTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Hemoglobin.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const hbresults = [];
                for (const id in data) {
                    hbresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    
                    // TEST RESULTS
                    rHb:data[id].HB,
                    rHbF:data[id].HB_Feedback,
                    rHct:data[id].HCT,
                    rHctF:data[id].HB_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.hbresults = hbresults;
            });
        },


        chTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Cholesterol.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const chresults = [];
                for (const id in data) {
                    chresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    
                    // TEST RESULTS
                    rChol:data[id].Total,
                    rCholF:data[id].Total_Feedback,
                    rHdl:data[id].HDL,
                    rHdlF:data[id].HDL_Feedback,
                    rLdl:data[id].LDL,
                    rLdlF:data[id].LDL_Feedback,
                    rTrig:data[id].Trig,
                    rTrigF:data[id].Trig_Feedback,
                    rRatio:data[id].Ratio,
                    rRatioF:data[id].Ratio_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.chresults = chresults;
            });
        },

        tyTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/Typhoid.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const tyresults = [];
                for (const id in data) {
                    tyresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,
                    
                    // TEST RESULTS
                    rTyr:data[id].Typhoid_Result,
                    rTyrF:data[id].Typhoid_Result_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.tyresults = tyresults;
            });
        },

        
        psaTests() {
            fetch('https://rigelis-dx-default-rtdb.firebaseio.com/PSA.json')
                .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                })
                .then((data) => {
                const psresults = [];
                for (const id in data) {
                    psresults.unshift({
                    id: id,
                    cName: data[id].Customer_Name,
                    cAge: data[id].Customer_Age,
                    cPhone: data[id].Customer_Phone,
                    cSex: data[id].Customer_Sex,

                    tResult: data[id].Psa_Result,
                    tResultF: data[id].Psa_Result_Feedback,


                    pName: data[id].Pharmacy,
                    pLoc: data[id].Pharmacy_Location,
                    pCont: data[id].Phone,
                    rDate: data[id].Date,
                    rTime: data[id].Time_Stamp,
                    // testDate: data[id].Pharmacy_Location,
                    });
                }
                this.psresults = psresults;
            });
        },

        

    },

}

</script>

<style scoped>

#rbtn {
  border-radius: 16px;
  color: #fff;
  background: #c90000;
  text-decoration: none;
  border-style: none;
  padding: 4px 20px;
}

#gbtn {
  border-radius: 16px;
  color: #fff;
  background: #00c94d;
  text-decoration: none;
  border-style: none;
  padding: 4px 20px;
}


.flexP{
    display: flex;
    justify-content: space-evenly;
}

#auth{
    margin-top: 10px;
    min-height: 30px;
    width: 70%;
    font-size: large;
    text-align:center ;
    border-radius: 12px;
    padding: 7px 15px;
}

#tble {
    min-width: 100%;
    height: 70vh;
  overflow-y: scroll;
}
.selParent{
    min-width: 70%;
    min-height: 30px;
    width: 70%;
    font-size: large;
    text-align:center ;
    border-radius: 12px;
    padding: 10px 20px;
    background-color: #E6E4E4;
    border-style: none;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem 1rem;
  max-width: 99%;
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

h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
}

/* Table Styles */

.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    width: 100%;
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>