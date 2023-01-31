import { createApp } from 'vue'

// create store to store selected gender

import router from './router.js'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TestFooter from './components/layouts/TestFooter.vue';
import PrintPopUp from './components/UI/PrintPopUp.vue';

import PrintBtns from './components/UI/PrintBtns.vue';
import BackBtns from './components/UI/BackBtns.vue';
import BloodSugarResult from './components/UI/BloodSugarResult.vue'
import HematocritResults from './components/UI/HematocritResults.vue'
import CholestrolResults from './components/UI/CholestrolResults.vue'

//NEW TESTS
import MalariaResult from './components/UI/MalariaResult.vue'
import HepResults from './components/UI/HepResults.vue'
import PregResult from './components/UI/PregResult.vue'
import TypResults from './components/UI/TypResults.vue'

import MalariaResultMale from './components/UI/MalariaResultMale.vue'
import HepResultsMale from './components/UI/HepResultsMale.vue'
import PsaResult from './components/UI/PsaResult.vue'
import TypResultsMale from './components/UI/TypResultsMale.vue'

//ADMIN AUTH
import BaseDialog from './components/UI/BaseDialog.vue'

//MALE TEST RESULT IMPORTS
import PrintPopUpMale from './components/UI/PrintPopUpMale.vue';
import BloodSugarResultMale from './components/UI/BloodSugarResultMale.vue'
import HematocritResultsMale from './components/UI/HematocritResultsMale.vue'
import CholestrolResultsMale from './components/UI/CholestrolResultsMale.vue'
import TheHeaderMale from './components/layouts/TheHeaderMale.vue';
import TestFooterMale from './components/layouts/TestFooterMale.vue';
import TestHeaderMale from './components/layouts/TestHeaderMale.vue';
// BASE PRINT TO PRINT ALL RESULTS

import VueGtag from "vue-gtag";
createApp(App).use(VueGtag, {
    config: { id: "G-Q9SQ59NZPS" }
  }).mount("#app");




const app = createApp(App);


app.use(router);

app.mount('#app');
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.component('the-header', TheHeader);
app.component('test-footer', TestFooter);
app.component('print-popUp', PrintPopUp);
app.component('blood-sugar-results', BloodSugarResult);
app.component('hematocrit-results', HematocritResults);
app.component('cholestrol-results', CholestrolResults);

//new tests
app.component('mal-results', MalariaResult);
app.component('hep-results', HepResults);
app.component('preg-result', PregResult);
app.component('typ-result', TypResults);

app.component('mal-results-male', MalariaResultMale);
app.component('hep-results-male', HepResultsMale);
app.component('psa-result', PsaResult);
app.component('typ-result-male', TypResultsMale);

//PRINT BTNS
app.component('print-btns', PrintBtns);
app.component('back-btns', BackBtns);

//route male
app.component('test-header-male', TestHeaderMale);
app.component('the-header-male', TheHeaderMale);
app.component('test-footer-male', TestFooterMale);
app.component('print-popUp-male', PrintPopUpMale);
app.component('blood-sugar-results-male', BloodSugarResultMale);
app.component('hematocrit-results-male', HematocritResultsMale);
app.component('cholestrol-results-male', CholestrolResultsMale);



