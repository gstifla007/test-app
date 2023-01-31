import { createRouter, createWebHistory } from "vue-router";
import TestTypePage from './components/pages/TestTypePage.vue';
import BpTest from './components/pages/BpTest.vue';
import BloodSugarTest from './components/pages/BloodSugarTest.vue';
import HematocritTest from './components/pages/HematocritTest.vue';
import CholestrolTest from './components/pages/CholestrolTest.vue';
import OrderTestKits from './components/pages/OrderTestKits.vue';
import SelectGender from './components/pages/SelectGender.vue';

import SetPharmDetails from './components/pages/admin/SetPharmDetails';
import TestTable from './components/pages/admin/TestTable';

//MALE TEST IMPORT
import TestTypePageMale from './components/pages/TestTypePageMale.vue';
import BpTestMale from './components/pages/BpTestMale.vue';
import BloodSugarTestMale from './components/pages/BloodSugarTestMale.vue';
import HematocritTestMale from './components/pages/HematocritTestMale.vue';
import CholestrolTestMale from './components/pages/CholestrolTestMale.vue';

//new test
import MalariaTest from './components/pages/MalariaTest.vue';
import HepB from './components/pages/HepB.vue';
import PregTest from './components/pages/PregTest.vue';
import TypTest from './components/pages/TypTest.vue';

import MalariaTestMale from './components/pages/MalariaTestMale.vue';
import HepBMale from './components/pages/HepBMale.vue';
import PsaTest from './components/pages/PsaTest.vue';
import TypTestMale from './components/pages/TypTestMale.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect:'/selectGen'},
        {path:'/selectGen', component: SelectGender},
        {path:'/test', component: TestTypePage},
        {path:'/bpTest', component: BpTest},
        {path:'/bsTest', component: BloodSugarTest},
        {path:'/hbTest', component: HematocritTest},
        {path:'/chTest', component: CholestrolTest},
        {path:'/otKits', component: OrderTestKits},

        {path:'/malTest', component: MalariaTest},
        {path:'/hepBTest', component: HepB},
        {path:'/pregTest', component: PregTest},
        {path:'/typTest', component: TypTest},

        {path:'/malTestM', component: MalariaTestMale},
        {path:'/hepBTestM', component: HepBMale},
        {path:'/psaTest', component: PsaTest},
        {path:'/typTestM', component: TypTestMale},


        {path:'/admin', component: SetPharmDetails},
        {path:'/analytics', component: TestTable},

        //PATHS FOR MALE
        {path:'/testMale', component: TestTypePageMale},
        {path:'/bpTestMale', component: BpTestMale},
        {path:'/bsTestMale', component: BloodSugarTestMale},
        {path:'/hbTestMale', component: HematocritTestMale},
        {path:'/chTestMale', component: CholestrolTestMale},
        
        
    ]
});

export default router;