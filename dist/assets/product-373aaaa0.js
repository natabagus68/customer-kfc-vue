import{i as o}from"./index-d1851a0a.js";import{a}from"./axios-3e40ca62.js";const c=o("product",{state(){return{data:[],detail:[],isLoading:!1,name:null,category:null,offset:0,count:0}},actions:{fetchProduct:async function(t){try{t.name?this.name=t.name:t.category?this.category=t.category:t.offset?this.offset=t.offset:(this.name=null,this.category=null,this.offset=0),this.isLoading=!0;const e=(await a({method:"get",url:"https://server-kfc-deploy-production.up.railway.app/customers/products",params:{name:this.name,category:this.category,offset:this.offset}})).data.data;this.data=e.rows,console.log(this.data,"access"),this.count=Math.ceil(parseInt(e.count)/8),this.isLoading=!1}catch(s){console.log(s)}}}});export{c as u};
