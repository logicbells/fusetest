(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1083:function(e,a,t){"use strict";var n=t(40),r=t.n(n),i="[E-COMMERCE APP] GET PRODUCTS",l="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function c(){var e=r.a.get("/api/e-commerce-app/products");return function(a){return e.then(function(e){return a({type:i,payload:e.data})})}}function o(e){return{type:l,searchText:e.target.value}}var u=t(13),s=t(35),m="[E-COMMERCE APP] GET PRODUCT",d="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var a=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return a.then(function(a){return e({type:m,payload:a.data})})}}function h(e){var a=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return a.then(function(a){return e(Object(s.H)({message:"Product Saved"})),e({type:d,payload:a.data})})}}function f(){var e={id:u.B.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:m,payload:e}}var g="[E-COMMERCE APP] GET ORDERS",E="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function v(){var e=r.a.get("/api/e-commerce-app/orders");return function(a){return e.then(function(e){return a({type:g,payload:e.data})})}}function b(e){return{type:E,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",y="[E-COMMERCE APP] SAVE ORDER";function w(e){var a=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return a.then(function(a){return e({type:x,payload:a.data})})}}t.d(a,"d",function(){return i}),t.d(a,"h",function(){return l}),t.d(a,"l",function(){return c}),t.d(a,"p",function(){return o}),t.d(a,"c",function(){return m}),t.d(a,"f",function(){return d}),t.d(a,"k",function(){return p}),t.d(a,"n",function(){return h}),t.d(a,"m",function(){return f}),t.d(a,"b",function(){return g}),t.d(a,"g",function(){return E}),t.d(a,"j",function(){return v}),t.d(a,"o",function(){return b}),t.d(a,"a",function(){return x}),t.d(a,"e",function(){return y}),t.d(a,"i",function(){return w})},1171:function(e,a,t){"use strict";var n=t(48),r=t(9),i=t(1083),l={data:[],searchText:""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.d:return Object(r.a)({},e,{data:a.payload});case i.h:return Object(r.a)({},e,{searchText:a.searchText});default:return e}},o={data:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.c:case i.f:return Object(r.a)({},e,{data:a.payload});default:return e}},s={data:[],searchText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.b:return Object(r.a)({},e,{data:a.payload});case i.g:return Object(r.a)({},e,{searchText:a.searchText});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.a:case i.e:return Object(r.a)({},a.payload);default:return e}},p=Object(n.d)({products:c,product:u,orders:m,order:d});a.a=p},2227:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(9),i=t(15),l=t(0),c=t.n(l),o=t(128),u=t(1036),s=t(1056),m=t(1062),d=t(1049),p=t(1052),h=t(1034),f=t(403),g=t(1061),E=t(13),v=t(130),b=t(31),x=t(3),y=t(6),w=t(5),C=t(186),I=t(1083),P=t(1171),O=Object(g.a)(function(e){return{productImageFeaturedStar:{position:"absolute",top:0,right:0,color:f.a[400],opacity:0},productImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}});a.default=Object(C.a)("eCommerceApp",P.a)(function(e){var a=Object(w.b)(),t=Object(w.c)(function(e){return e.eCommerceApp.product}),f=O(e),g=Object(l.useState)(0),C=Object(i.a)(g,2),P=C[0],N=C[1],T=Object(v.b)(null),S=T.form,R=T.handleChange,j=T.setForm;function A(e,a){j(y.a.set(Object(r.a)({},S),a,e.map(function(e){return e.value})))}return Object(l.useEffect)(function(){!function(){var t=e.match.params.productId;a("new"===t?I.m():I.k(e.match.params))}()},[a,e.match.params]),Object(l.useEffect)(function(){(t.data&&!S||t.data&&S&&t.data.id!==S.id)&&j(t.data)},[S,t.data,j]),c.a.createElement(E.r,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:S&&c.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},c.a.createElement("div",{className:"flex flex-col items-start max-w-full"},c.a.createElement(E.d,{animation:"transition.slideRightIn",delay:300},c.a.createElement(o.a,{className:"normal-case flex items-center sm:mb-12",component:b.a,role:"button",to:"/apps/e-commerce/products",color:"inherit"},c.a.createElement(u.a,{className:"mr-4 text-20"},"arrow_back"),"Products")),c.a.createElement("div",{className:"flex items-center max-w-full"},c.a.createElement(E.d,{animation:"transition.expandIn",delay:300},S.images.length>0&&S.featuredImageId?c.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:y.a.find(S.images,{id:S.featuredImageId}).url,alt:S.name}):c.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:S.name})),c.a.createElement("div",{className:"flex flex-col min-w-0"},c.a.createElement(E.d,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(o.a,{className:"text-16 sm:text-20 truncate"},S.name?S.name:"New Product")),c.a.createElement(E.d,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(o.a,{variant:"caption"},"Product Detail"))))),c.a.createElement(E.d,{animation:"transition.slideRightIn",delay:300},c.a.createElement(s.a,{className:"whitespace-no-wrap",variant:"contained",disabled:!(S.name.length>0&&!y.a.isEqual(t.data,S)),onClick:function(){return a(I.n(S))}},"Save"))),contentToolbar:c.a.createElement(m.a,{value:P,onChange:function(e,a){N(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},c.a.createElement(d.a,{className:"h-64 normal-case",label:"Basic Info"}),c.a.createElement(d.a,{className:"h-64 normal-case",label:"Product Images"}),c.a.createElement(d.a,{className:"h-64 normal-case",label:"Pricing"}),c.a.createElement(d.a,{className:"h-64 normal-case",label:"Inventory"}),c.a.createElement(d.a,{className:"h-64 normal-case",label:"Shipping"})),content:S&&c.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===P&&c.a.createElement("div",null,c.a.createElement(p.a,{className:"mt-8 mb-16",error:""===S.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:S.name,onChange:R,variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",id:"description",name:"description",onChange:R,label:"Description",type:"text",value:S.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),c.a.createElement(E.g,{className:"mt-8 mb-24",value:S.categories.map(function(e){return{value:e,label:e}}),onChange:function(e){return A(e,"categories")},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0}),c.a.createElement(E.g,{className:"mt-8 mb-16",value:S.tags.map(function(e){return{value:e,label:e}}),onChange:function(e){return A(e,"tags")},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0})),1===P&&c.a.createElement("div",null,c.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(e){var a=e.target.files[0];if(a){var t=new FileReader;t.readAsBinaryString(a),t.onload=function(){j(y.a.set(Object(r.a)({},S),"images",[{id:E.B.generateGUID(),url:"data:".concat(a.type,";base64,").concat(btoa(t.result)),type:"image"}].concat(Object(n.a)(S.images))))},t.onerror=function(){console.log("error on load image")}}}}),c.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},c.a.createElement("label",{htmlFor:"button-file",className:Object(x.a)(f.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},c.a.createElement(u.a,{fontSize:"large",color:"action"},"cloud_upload")),S.images.map(function(e){return c.a.createElement("div",{onClick:function(){return a=e.id,void j(y.a.set(Object(r.a)({},S),"featuredImageId",a));var a},className:Object(x.a)(f.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",e.id===S.featuredImageId&&"featured"),key:e.id},c.a.createElement(u.a,{className:f.productImageFeaturedStar},"star"),c.a.createElement("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"}))}))),2===P&&c.a.createElement("div",null,c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",name:"priceTaxExcl",value:S.priceTaxExcl,onChange:R,InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",name:"priceTaxIncl",value:S.priceTaxIncl,onChange:R,InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",name:"taxRate",value:S.taxRate,onChange:R,InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",name:"comparedPrice",value:S.comparedPrice,onChange:R,InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"})),3===P&&c.a.createElement("div",null,c.a.createElement(p.a,{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",name:"sku",value:S.sku,onChange:R,variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:S.quantity,onChange:R,variant:"outlined",type:"number",fullWidth:!0})),4===P&&c.a.createElement("div",null,c.a.createElement("div",{className:"flex"},c.a.createElement(p.a,{className:"mt-8 mb-16 mr-8",label:"Width",autoFocus:!0,id:"width",name:"width",value:S.width,onChange:R,variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16 mr-8",label:"Height",id:"height",name:"height",value:S.height,onChange:R,variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16 mr-8",label:"Depth",id:"depth",name:"depth",value:S.depth,onChange:R,variant:"outlined",fullWidth:!0})),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Weight",id:"weight",name:"weight",value:S.weight,onChange:R,variant:"outlined",fullWidth:!0}),c.a.createElement(p.a,{className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",name:"extraShippingFee",value:S.extraShippingFee,onChange:R,variant:"outlined",InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")},fullWidth:!0}))),innerScroll:!0})})}}]);