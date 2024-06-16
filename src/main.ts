// import 'tailwindcss/tailwind.css';
// import 'tailwindcss/base.css';


// import "primevue/resources/themes/lara-light-green/theme.css"
// import 'primevue/resources/primevue.css';
// import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";
// import 'primeflex/primeflex.css';

import './assets/main.css'
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';

//#region Import Components Primevue

import AnimateOnScroll from 'primevue/animateonscroll';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Accordion from "primevue/accordion";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import BlockUI from "primevue/blockui";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Card from "primevue/card";
import CascadeSelect from "primevue/cascadeselect";
import Carousel from "primevue/carousel";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import DeferredContent from "primevue/deferredcontent";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Fieldset from "primevue/fieldset";
import FileUpload from "primevue/fileupload";
import Galleria from "primevue/galleria";
import Inplace from "primevue/inplace";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import Knob from "primevue/knob";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import OrderList from "primevue/orderlist";
import OrganizationChart from "primevue/organizationchart";
import Paginator from "primevue/paginator";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import PickList from "primevue/picklist";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import Rating from "primevue/rating";
import RadioButton from "primevue/radiobutton";

import Row from "primevue/row";
import SelectButton from "primevue/selectbutton";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";
import Skeleton from "primevue/skeleton";
import Slider from "primevue/slider";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Steps from "primevue/steps";
import TabMenu from "primevue/tabmenu";
import TieredMenu from "primevue/tieredmenu";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";

import Toolbar from "primevue/toolbar";
import TabPanel from "primevue/tabpanel";
import Tag from "primevue/tag";
import Terminal from "primevue/terminal";
import Timeline from "primevue/timeline";
import ToggleButton from "primevue/togglebutton";
import Tree from "primevue/tree";
import TreeSelect from "primevue/treeselect";
import TreeTable from "primevue/treetable";

//#endregion Import Components Primevue


//#region  Import Custom Components

import Navbar from "@/components/User/Navbar.vue";
import Footer from "@/components/User/Footer.vue";

import Login from "@/components/User/Account_Auth/Login.vue";
import Reg from "@/components/User/Account_Auth/Register.vue";
import ForgotPassword from "@/components/User/Account_Auth/ForgotPassword.vue";
import Profile from "@/components/User/Account_Auth/Profile.vue";

import SearchYachts from "@/components/User/Home/H1_SearchYachts.vue";
import ListCruiseView from "@/components/User/Home/H2_ListCruiseView.vue";

import BreadcrumbDetail from "@/components/User/CruiseInformation/C1_BreadcrumbDetail.vue";
import YachtTitle from "@/components/User/CruiseInformation/C2_YachtTitle.vue";
import Highlight from "@/components/User/CruiseInformation/C3_Highlight.vue";
import RomCruise from "@/components/User/CruiseInformation/C4_RomCruise.vue";
import Introduce from "@/components/User/CruiseInformation/C5_Introduce.vue";
import Rules from "@/components/User/CruiseInformation/C6_Rules.vue";
import Evaluate from "@/components/User/CruiseInformation/C7_Evaluate.vue";

import Dashboard from "@/components/Admin/Dashboard.vue";
import AdminView from "@/views/AdminView/AdminView.vue";
import SlideBar from "@/components/Admin/SlideBar.vue";


import ProfileView from "@/views/UserView/ProfileView.vue";
import HomeView from "@/views/UserView/HomeView.vue";
import LoginView from "@/views/UserView/LoginView.vue";
import CruiseDetailsView from "@/components/User/CruiseInformation/C0_CruiseDetailsView.vue";

//#endregion Import Custom Components


import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura';
import Lara from '@primevue/themes/lara';
import Nora from '@primevue/themes/nora';
import ToastService from "primevue/toastservice";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ToastService)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities',
                darkModeSelector: 'system',
                cssLayer: false,
            },

        }
    }
});
app.directive('animateonscroll', AnimateOnScroll);
app.use(PrimeVue, {ripple: true});


//#region Components Primevue
app.component("InputGroupAddon", InputGroupAddon);
app.component("FloatLabel", FloatLabel);
app.component("Accordion", Accordion);
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Badge", Badge);
app.component("BlockUI", BlockUI);
app.component("Breadcrumb", Breadcrumb);
app.component("Button", Button);
app.component("Card", Card);
app.component("Carousel", Carousel);
app.component("CascadeSelect", CascadeSelect);
app.component("Checkbox", Checkbox);
app.component("Chip", Chip);
app.component("ColorPicker", ColorPicker);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("ConfirmDialog", ConfirmDialog);
app.component("ConfirmPopup", ConfirmPopup);
app.component("ContextMenu", ContextMenu);
app.component("DataTable", DataTable);
app.component("DataView", DataView);
app.component("DeferredContent", DeferredContent);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Fieldset", Fieldset);
app.component("FileUpload", FileUpload);
app.component("Inplace", Inplace);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);
app.component("InputText", InputText);
app.component("Galleria", Galleria);
app.component("Knob", Knob);
app.component("Listbox", Listbox);
app.component("MegaMenu", MegaMenu);
app.component("Menu", Menu);
app.component("Menubar", Menubar);
app.component("Message", Message);
app.component("MultiSelect", MultiSelect);
app.component("OrderList", OrderList);
app.component("OrganizationChart", OrganizationChart);
app.component("Paginator", Paginator);
app.component("Panel", Panel);
app.component("PanelMenu", PanelMenu);
app.component("Password", Password);
app.component("PickList", PickList);
app.component("ProgressBar", ProgressBar);
app.component("ProgressSpinner", ProgressSpinner);
app.component("RadioButton", RadioButton);
app.component("Rating", Rating);
app.component("Row", Row);
app.component("SelectButton", SelectButton);
app.component("ScrollPanel", ScrollPanel);
app.component("ScrollTop", ScrollTop);
app.component("Slider", Slider);
app.component("Skeleton", Skeleton);
app.component("SplitButton", SplitButton);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("Steps", Steps);
app.component("TabMenu", TabMenu);
app.component("TabPanel", TabPanel);
app.component("Tag", Tag);
app.component("Textarea", Textarea);
app.component("Terminal", Terminal);
app.component("TieredMenu", TieredMenu);
app.component("Timeline", Timeline);
app.component("Toast", Toast);
app.component("Toolbar", Toolbar);
app.component("ToggleButton", ToggleButton);
app.component("Tree", Tree);
app.component("TreeSelect", TreeSelect);
app.component("TreeTable", TreeTable);
//#endregion   Components Primevue


app.component("Login", Login);
app.component("Reg", Reg);
app.component("ForgotPassword", ForgotPassword);
app.component("Navbar", Navbar);
app.component("Profile", Profile);
app.component("ProfileView", ProfileView);
app.component("HomeView", HomeView);
app.component("LoginView", LoginView);
app.component("SearchYachts", SearchYachts);
app.component("Footer", Footer);

app.component("ListCruiseView", ListCruiseView)
app.component("YachtTitle", YachtTitle)
app.component("BreadcrumbDetail", BreadcrumbDetail)
app.component("CruiseDetailsView", CruiseDetailsView)
app.component("Highlight", Highlight)
app.component("RomCruise", RomCruise)
app.component("Introduce", Introduce)
app.component("Rules", Rules)
app.component("Evaluate", Evaluate)


app.component("Dashboard", Dashboard)
app.component("AdminView", AdminView)
app.component("SlideBar", SlideBar)


app.mount('#app')


