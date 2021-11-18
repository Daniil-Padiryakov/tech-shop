var O=Object.defineProperty,E=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var R=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,m=(t,e)=>{for(var s in e||(e={}))P.call(e,s)&&R(t,s,e[s]);if(b)for(var s of b(e))S.call(e,s)&&R(t,s,e[s]);return t},g=(t,e)=>E(t,y(e));import{o as i,c as d,a as o,r as p,b as f,d as D,e as M,m as F,f as $,F as h,g as T,t as l,n as k,h as v,i as A,p as L,j as I,k as w,l as G,q as N}from"./vendor.7e426493.js";const U=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};U();var u=(t,e)=>{for(const[s,n]of e)t[s]=n;return t};const q={name:"MyHeader"},H={class:"my-header navbar max-w-screen-2xl mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},j=o("div",{class:"flex-none px-2 mx-2"},[o("span",{class:"text-lg font-bold"}," Tech-Shop ")],-1),Y={class:"flex-1 px-2 mx-2"},B={class:"items-stretch hidden lg:flex"},V={class:"flex-none"},z=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"10",cy:"20.5",r:"1"}),o("circle",{cx:"18",cy:"20.5",r:"1"}),o("path",{d:"M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"})],-1),K=[z];function W(t,e,s,n,r,a){return i(),d("div",H,[j,o("div",Y,[o("div",B,[o("a",{onClick:e[0]||(e[0]=c=>t.$router.push({name:"catalog"})),class:"btn btn-ghost btn-sm rounded-btn"}," Catalog ")])]),o("div",V,[o("button",{onClick:e[1]||(e[1]=c=>t.$router.push({name:"cart"})),class:"btn btn-square btn-ghost"},K)])])}var X=u(q,[["render",W]]);const Z={components:{MyHeader:X}},J={class:"app flex flex-col container max-w-screen-2xl mx-auto rounded-box"},Q={class:"page flex"};function tt(t,e,s,n,r,a){const c=p("my-header"),_=p("router-view");return i(),d("div",J,[f(c),o("div",Q,[f(_)])])}var et=u(Z,[["render",tt]]),st={state:{categories:[{id:0,title:"Phones and gadgets",subCategories:[{id:2,title:"Apple"},{id:3,title:"Samsung"},{id:4,title:"Xiaomi"}]},{id:1,title:"Computers and peripherals",subCategories:[{id:5,title:"CPU"},{id:6,title:"GPU"},{id:7,title:"RAM"}]}],currentCategory:null},mutations:{CHANGE_CURRENT_CATEGORY:(t,e)=>t.currentCategory=e},actions:{},getters:{ALL_CATEGORIES:t=>t.categories,CURRENT_CATEGORY:t=>t.currentCategory}},ot={state:{products:[],filters:["A-Z","Price"]},mutations:{SET_PRODUCTS_FROM_API_TO_STATE:(t,e)=>t.products=e},actions:{GET_PRODUCTS_FROM_API({commit:t}){return D("https://my-json-server.typicode.com/Daniil-Padiryakov/tech-shop-json-server/products",{method:"GET"}).then(e=>{t("SET_PRODUCTS_FROM_API_TO_STATE",e.data)})}},getters:{CATEGORY_PRODUCTS(t,{CURRENT_CATEGORY:e}){return e===null?t.products:t.products.filter(s=>s.category_id===e)},PRODUCTS:(t,e)=>e.CATEGORY_PRODUCTS.sort((s,n)=>n.price-s.price)}},at={state:{cart:[]},mutations:{SET_TO_CART(t,e){const s=()=>{e.quantity=1,t.cart.push(e)};if(t.cart.length){let n=!1;t.cart.map(r=>{r.id==e.id&&(n=!0,r.quantity++)}),n||s()}else s()},REMOVE_FROM_CART:(t,e)=>t.cart.splice(e,1)},actions:{ADD_TO_CART:({commit:t},e)=>t("SET_TO_CART",e),DELETE_FROM_CART:({commit:t},e)=>t("REMOVE_FROM_CART",e)},getters:{CART:t=>t.cart,CART_TOTAL(t){let e=[];for(let s of t.cart)e.push(Number(s.price)*s.quantity);return e=e.reduce((s,n)=>s+n,0)}}},rt=M({state:{},mutations:{},actions:{},getters:{},modules:{categories:st,products:ot,cart:at}});const nt={name:"SideMenu",methods:m({},F(["CHANGE_CURRENT_CATEGORY"])),computed:m({},$(["ALL_CATEGORIES","CURRENT_CATEGORY"]))},ct={class:"categories-menu menu p-4 shadow-lg bg-base-100 rounded-box"},it={class:"menu"},dt=["onClick"];function _t(t,e,s,n,r,a){return i(),d("ul",ct,[(i(!0),d(h,null,T(t.ALL_CATEGORIES,c=>(i(),d("li",null,[o("a",null,l(c.title),1),(i(!0),d(h,null,T(c.subCategories,_=>(i(),d("ul",it,[o("li",null,[o("a",{onClick:C=>t.CHANGE_CURRENT_CATEGORY(_.id),class:k({active:t.CURRENT_CATEGORY===_.id})},l(_.title),11,dt)])]))),256))]))),256))])}var lt=u(nt,[["render",_t]]);const ut={name:"MyCard",props:{card_item:{type:Object,default:()=>{}}},emits:["addToCart"],methods:{addToCart(t){this.$emit("addToCart",t)}}},mt={class:"card flex p-5 max-w-xs mb-3 mr-3 card bordered text-center bg-base-100"},pt={class:"img mb-2"},ht=["src"],Ct={class:"mt-auto"},ft={class:"card__body mb-3"},Tt={class:"font-medium"},gt={class:"block font-medium text-xl"};function $t(t,e,s,n,r,a){return i(),d("div",mt,[o("div",pt,[o("img",{src:s.card_item.img,class:"mx-auto"},null,8,ht)]),o("div",Ct,[o("div",ft,[o("h2",Tt,l(s.card_item.title),1)]),o("span",gt,"$"+l(s.card_item.price),1),o("button",{onClick:e[0]||(e[0]=c=>a.addToCart(s.card_item)),class:"btn btn-accent mt-4"},"Add to Card ")])])}var vt=u(ut,[["render",$t],["__scopeId","data-v-2cb9639c"]]);const bt={name:"ProductsList",components:{MyCard:vt},data(){return{productsOnPage:10,pageNumber:1}},methods:g(m({},v(["ADD_TO_CART","GET_PRODUCTS_FROM_API"])),{addToCart(t){this.ADD_TO_CART(t)},pageClick(t){this.pageNumber=t}}),computed:g(m({},$(["PRODUCTS"])),{paginationPages(){return Math.ceil(this.$store.getters.PRODUCTS.length/10)},paginationProducts(){let t=(this.pageNumber-1)*this.productsOnPage,e=t+this.productsOnPage;return this.PRODUCTS.slice(t,e)}}),mounted(){this.GET_PRODUCTS_FROM_API()}},Rt={class:"catalog-list flex flex-wrap mb-3"},At={class:"pagination btn-group"},xt=o("button",{class:"btn"},"Prev",-1),Ot=["onClick"],Et=o("button",{class:"btn"},"Next",-1);function yt(t,e,s,n,r,a){const c=p("my-card");return i(),d(h,null,[o("div",Rt,[(i(!0),d(h,null,T(a.paginationProducts,_=>(i(),A(c,{card_item:_,onAddToCart:a.addToCart},null,8,["card_item","onAddToCart"]))),256))]),o("div",At,[xt,(i(!0),d(h,null,T(a.paginationPages,_=>(i(),d("button",{class:"btn",onClick:C=>a.pageClick(_)},l(_),9,Ot))),256)),Et])],64)}var Pt=u(bt,[["render",yt]]);const St={name:"TopMenu",methods:m({},v(["SET_CURRENT_FILTER"])),computed:$([])},Dt={class:"filters-menu menu items-stretch px-3 mb-3 shadow-lg bg-base-100 horizontal rounded-box"};function Mt(t,e,s,n,r,a){return i(),d("ul",Dt)}var Ft=u(St,[["render",Mt]]);const kt={name:"Catalog",components:{CategoriesMenu:lt,CatalogList:Pt,FiltersMenu:Ft}},Lt={class:"mr-3 flex-none"};function It(t,e,s,n,r,a){const c=p("categories-menu"),_=p("filters-menu"),C=p("catalog-list");return i(),d(h,null,[o("div",Lt,[f(c)]),o("div",null,[f(_),f(C)])],64)}var wt=u(kt,[["render",It]]);const Gt={name:"CartItem",emits:["deleteFromCart"],props:{cart_item_data:{type:Object,default(){return{}}}},methods:{deleteFromCart(){this.$emit("deleteFromCart")}},mounted(){}},Nt={class:"cart-item bg-base-100 p-4 rounded-xl mb-3"},Ut=["src"],qt={class:"cart-item__info text-center mx-5"},Ht={class:"cart-item__quantity font-medium"};function jt(t,e,s,n,r,a){return i(),d("div",Nt,[o("img",{src:"../../public/"+s.cart_item_data.img,class:"cart-item__img"},null,8,Ut),o("div",qt,[o("p",null,l(s.cart_item_data.title),1),o("p",null,"$"+l(s.cart_item_data.price),1)]),o("div",Ht,l(s.cart_item_data.quantity),1),o("button",{onClick:e[0]||(e[0]=(...c)=>a.deleteFromCart&&a.deleteFromCart(...c)),class:"btn btn-accent"},"Delete ")])}var Yt=u(Gt,[["render",jt],["__scopeId","data-v-dba50f56"]]);const Bt={name:"Cart",components:{CartItem:Yt},methods:g(m({},v(["DELETE_FROM_CART"])),{deleteFromCart(t){this.DELETE_FROM_CART(t)}}),computed:m({},$(["CART","CART_TOTAL"]))},x=t=>(L("data-v-e2b076b6"),t=t(),I(),t),Vt={class:"cart flex flex-col"},zt=x(()=>o("h2",{class:"font-medium text-3xl mb-3"},"Cart",-1)),Kt={class:"shadow stats"},Wt={class:"stat"},Xt=x(()=>o("div",{class:"stat-title"},"Total Cart Cost",-1)),Zt={class:"stat-value"};function Jt(t,e,s,n,r,a){const c=p("cart-item");return i(),d("div",Vt,[zt,(i(!0),d(h,null,T(t.CART,(_,C)=>(i(),A(c,{cart_item_data:_,onDeleteFromCart:se=>a.deleteFromCart(C)},null,8,["cart_item_data","onDeleteFromCart"]))),256)),o("div",Kt,[o("div",Wt,[Xt,o("div",Zt,"$"+l(t.CART_TOTAL),1)])])])}var Qt=u(Bt,[["render",Jt],["__scopeId","data-v-e2b076b6"]]);const te=[{path:"/",name:"catalog",component:wt},{path:"/cart",name:"cart",component:Qt}],ee=w({history:G(),routes:te});N(et).use(rt).use(ee).mount("#app");