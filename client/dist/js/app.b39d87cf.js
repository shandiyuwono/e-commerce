(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)o=i[d],s[o]&&v.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"1a8a":function(t,e,a){"use strict";var n=a("a544"),s=a.n(n);s.a},"2b0a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("ce5b"),r=a.n(s),o=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("navbar"),a("v-content",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs8:"","offset-xs2":"",id:"content"}},[a("router-view")],1)],1)],1)],1)],1)}),i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"red darken-3 white--text",attrs:{app:""}},[a("v-toolbar-title",{attrs:{id:"mainNav"}},[a("router-link",{staticClass:"font-weight-bold",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[a("span",{attrs:{id:"logo"}},[t._v(t._s(t.appTitle))])])],1),a("v-spacer",[a("v-text-field",{staticStyle:{width:"85%","margin-top":"10px","margin-left":"188px"},attrs:{"prepend-inner-icon":"search","background-color":"white",label:"Search for a product",box:""},model:{value:t.searchProduct,callback:function(e){t.searchProduct=e},expression:"searchProduct"}})],1),a("navIcons")],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{staticClass:"white--text",attrs:{flat:"",to:{path:"/"}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("home")]),t._v("\n      Home\n    ")],1),a("v-btn",{staticClass:"white--text",attrs:{flat:""},on:{click:t.toCart}},[a("v-badge",{attrs:{left:""},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",[t._v(t._s(t.$store.getters.getTotalProducts))])]},proxy:!0}])},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("shopping_cart")]),t._v("\n      Cart\n    ")],1)],1),!1===t.$store.state.isLoggedIn?a("v-btn",{staticClass:"white--text",attrs:{flat:"",to:{path:"/signup"}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("face")]),t._v("\n      Sign Up\n    ")],1):t._e(),!1===t.$store.state.isLoggedIn?a("v-btn",{staticClass:"white--text",attrs:{flat:"",to:{path:"/signin"}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("input")]),t._v("\n      Sign in\n    ")],1):t._e(),t.$store.state.isLoggedIn?a("v-btn",{staticClass:"white--text",attrs:{flat:""},on:{click:t.signOut}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v("lock_open")]),t._v("\n      Sign out\n    ")],1):t._e(),a("v-dialog",{attrs:{"max-width":"420"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("You must sign in before continuing")]),a("v-card-text",{staticClass:"subheading"},[t._v("\n        Sign in and gain full access to the shopping cart and your transaction history. \n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat",to:{path:"/signin"}},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Sign in \n        ")])],1)],1)],1)],1)},d=[],v={name:"navIcons",data:function(){return{dialog:!1}},methods:{signOut:function(){localStorage.removeItem("access_token"),this.$store.commit("SET_LOGIN")},toCart:function(){localStorage.access_token?this.$router.push("/cart"):this.dialog=!0}}},f=v,h=a("2877"),p=Object(h["a"])(f,u,d,!1,null,null,null),g=p.exports,m={name:"navbar",components:{navIcons:g},data:function(){return{appTitle:"GAMEGIT",sidebar:!1,searchProduct:""}},computed:{}},_=m,b=(a("1a8a"),Object(h["a"])(_,c,l,!1,null,null,null)),x=b.exports,y={name:"App",components:{navbar:x},data:function(){return{page:""}},created:function(){this.$store.commit("SET_LOGIN")}},w=y,k=(a("034f"),Object(h["a"])(w,o,i,!1,null,null,null)),S=k.exports,C=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white",staticStyle:{width:"40%"},attrs:{"pa-0":"","mt-5":"","elevation-5":""}},[a("v-alert",{attrs:{value:t.alert,type:"warning",transition:"scale-transition"}},[a("span",{staticStyle:{"font-weight":"bold","font-size":"18px"}},[t._v(" "+t._s(t.errorMsg)+" ")])]),a("div",{staticClass:"header red darken-4 white--text",staticStyle:{border:"1px solid lightgrey","text-align":"center",padding:"18px"}},[a("h2",[t._v("Sign Up")])]),a("v-container",{staticStyle:{border:"1px solid lightgrey"}},[a("form",[a("v-text-field",{attrs:{"prepend-icon":"person",counter:10,label:"First Name",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),a("v-text-field",{attrs:{"prepend-icon":"person",counter:10,label:"Last Name",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),a("v-text-field",{attrs:{"prepend-icon":"email",counter:10,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password","prepend-icon":"vpn_key",label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-layout",{attrs:{row:"","justify-end":""}},[a("v-btn",{on:{click:t.register}},[t._v("Sign Up")])],1)],1)]),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Successfully registered")]),a("v-card-text",[t._v("\n      Please continue to the Sign In page.\n    ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.toSignIn}},[t._v("\n        Continue to sign in\n      ")])],1)],1)],1)],1)},T=[],P=(a("28a5"),a("6b54"),a("6762"),a("2fdb"),a("bc3a")),E=a.n(P),L={name:"SignUp",data:function(){return{errorMsg:"",alert:!1,dialog:!1,firstName:"",lastName:"",email:"",password:""}},methods:{register:function(){var t=this;E()({method:"POST",url:"http://localhost:3000/users/register",data:{firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password}}).then(function(e){e.data;t.dialog=!0}).catch(function(e){var a,n=e.response.data.message;a=n.includes("password")?"Password is too short":n.split(":").slice(2).toString(),t.errorMsg=a,t.alert=!0})},toSignIn:function(){this.dialog=!1,this.$router.push("/signin")}}},O=L,I=Object(h["a"])(O,$,T,!1,null,null,null),N=I.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white",staticStyle:{width:"40%"},attrs:{"pa-0":"","mt-5":"","elevation-5":""}},[a("v-alert",{staticClass:"font-weight-bold title",attrs:{value:t.alert,type:"warning",transition:"scale-transition"}},[t._v("\n        Username/password incorrect.\n      ")]),a("div",{staticClass:"header red darken-4 white--text",staticStyle:{border:"1px solid lightgrey","text-align":"center",padding:"18px"}},[a("h2",[t._v("Sign In")])]),a("v-container",{staticStyle:{border:"1px solid lightgrey"}},[a("form",[a("v-text-field",{attrs:{"prepend-icon":"email",counter:10,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"vpn_key",type:"password",label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-layout",{attrs:{row:"","justify-end":""}},[a("v-btn",{on:{click:t.signIn}},[t._v("Sign In")])],1)],1)])],1)},M=[],R={name:"SignIn",data:function(){return{email:"",password:"",alert:!1}},methods:{signIn:function(){var t=this;E()({method:"POST",url:"http://localhost:3000/users/login",data:{email:this.email,password:this.password}}).then(function(e){var a=e.data;localStorage.setItem("access_token",a.access_token),t.$store.commit("SET_LOGIN"),t.$router.push("/")}).catch(function(e){t.alert=!0})}}},U=R,q=Object(h["a"])(U,j,M,!1,null,null,null),A=q.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-parallax",{attrs:{src:"http://www.digitaltrends.com/wp-content/uploads/2013/02/wallpaper883199.jpg"}}),a("v-container",{staticClass:"elevation-3 main-content"},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.$store.state.productList,function(e){return a("v-flex",{key:e._id,staticClass:"game-card pa-2",attrs:{xs12:"",md6:"",lg3:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var s=n.hover;return a("v-card",{class:"elevation-"+(s?12:2)},[a("v-img",{attrs:{src:e.image,height:"350"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"title mb-0"},[t._v(t._s(e.name))])])]),a("v-divider"),a("v-card-actions",{attrs:{width:"3"}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-btn",{attrs:{flat:"",color:"blue"},on:{click:function(a){return t.seeProduct(e)}}},[t._v("See product info")])],1)],1)],1)}}],null,!0)})],1)}),1)],1)],1)},G=[],D={name:"home",data:function(){return{}},created:function(){this.$store.dispatch("getProducts")},methods:{seeProduct:function(t){this.$router.push("/product/".concat(t._id))}}},F=D,Q=(a("ee90"),Object(h["a"])(F,H,G,!1,null,null,null)),Y=Q.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.history,expression:"!history"}],attrs:{row:""}},[a("v-flex",{attrs:{xs8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.$store.state.cartList,function(e,n){return[a("v-flex",{key:n,staticClass:"mt-4",attrs:{xs12:""}},[a("v-card",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-img",{attrs:{src:e.product.image,height:"200",contain:""}})],1),a("v-flex",{attrs:{xs8:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.product.name))]),a("div",{staticClass:"title mt-3",staticStyle:{color:"#F15A22"}},[t._v(" $"+t._s(e.product.price))])])]),a("v-divider",{staticClass:"mb-1"}),a("v-card-actions",[a("v-layout",{attrs:{"align-center":""}},[a("v-btn",{staticStyle:{height:"30px",width:"30px"},attrs:{fab:""},on:{click:function(a){return t.decrement(n,e._id,e.product.price)}}},[a("v-icon",[t._v("remove")])],1),a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{staticClass:"inputNumber ml-2 mr-2",attrs:{type:"number",value:t.cartQuantity(n)}})],1),a("v-btn",{staticStyle:{height:"30px",width:"30px"},attrs:{fab:""},on:{click:function(a){return t.increment(n,e._id,e.product.price)}}},[a("v-icon",[t._v("add")])],1)],1),a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:function(a){return t.removeCart(e._id)}}},[t._v("Remove")])],1)],1)],1)],1)],1)]})],2)],1),a("v-flex",{staticClass:"mt-4 ml-3",attrs:{id:"cart-detail",xs4:""}},[a("Summary",{on:{viewHistory:function(e){t.history=!0}}}),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{staticClass:"white--text mt-4",attrs:{color:"blue"},on:{click:t.toHistory}},[t._v("See your transaction history")])],1)],1)],1),a("router-view")],1)},z=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"elevation-3"},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"title"},[t._v("Your Payment Summary")])]),a("v-divider"),t._l(t.$store.state.cartList,function(e,n){return a("v-layout",{key:n,staticClass:"pa-3",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"subheading",attrs:{xs8:""}},[t._v(t._s(e.product.name))]),a("v-flex",{staticClass:"subheading font-weight-bold",attrs:{xs2:""}},[t._v(" x"+t._s(e.quantity))]),a("v-flex",{staticClass:"subheading green--text",attrs:{xs1:""}},[t._v("$"+t._s(e.totalPrice.toFixed(2)))])],1)}),a("v-divider"),a("v-layout",{staticClass:"pa-3"},[a("v-flex",{staticClass:"subheading font-weight-bold",attrs:{xs10:""}},[t._v("Total price: ")]),a("v-flex",{staticClass:"subheading font-weight-bold",staticStyle:{color:"#F15A22"},attrs:{xs2:""}},[t._v(" $"+t._s(t.$store.getters.getTotalPrice.toFixed(2)))])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{color:"#C62829"},on:{click:t.checkout}},[t._v("Checkout")])],1)],2),a("v-dialog",{attrs:{"max-width":"420"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Successfully checkout")]),a("v-card-text",{staticClass:"subheading"},[t._v("\n            Your transaction has been recorded.\n          ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Close\n            ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat",to:{path:"/cart/history"}},on:{click:t.viewHistory}},[t._v("\n              View transaction history\n            ")])],1)],1)],1)],1)},V=[],K={name:"Summary",data:function(){return{dialog:!1}},methods:{checkout:function(){var t=this;this.$store.state.cartList.length>0&&E()({method:"POST",url:"".concat(this.$store.state.baseURL,"/carts/checkout"),headers:{access_token:localStorage.access_token}}).then(function(e){e.data;t.$store.dispatch("getCart"),t.dialog=!0}).catch(function(t){console.log(t)})},viewHistory:function(){this.dialog=!1,this.$emit("viewHistory")}}},W=K,X=Object(h["a"])(W,B,V,!1,null,null,null),Z=X.exports,tt={name:"Cart",components:{Summary:Z},data:function(){return{history:!1}},created:function(){this.$store.dispatch("getCart"),"/cart/history"===this.$route.path&&(this.history=!0)},watch:{$route:function(){"/cart"===this.$route.path&&(this.history=!1)}},methods:{toHistory:function(){this.$router.push("/cart/history"),this.history=!0},removeCart:function(t){var e=this;E()({method:"DELETE",url:"http://localhost:3000/carts/".concat(t),headers:{access_token:localStorage.access_token}}).then(function(){e.$store.dispatch("getCart")}).catch(function(t){console.log(t)})},decrement:function(t,e,a){this.$store.commit("DECREMENT",{index:t,price:a}),E()({method:"PATCH",url:"".concat(this.$store.state.baseURL,"/carts/").concat(e),headers:{access_token:localStorage.access_token},data:{status:"decrement",price:a}}).then(function(t){var e=t.data;console.log(e)}).catch(function(t){console.log(t)})},increment:function(t,e,a){this.$store.commit("INCREMENT",{index:t,price:a}),E()({method:"PATCH",url:"".concat(this.$store.state.baseURL,"/carts/").concat(e),headers:{access_token:localStorage.access_token},data:{status:"increment",price:a}}).then(function(t){var e=t.data;console.log(e)}).catch(function(t){console.log(t)})},cartQuantity:function(t){return this.$store.state.cartList[t].quantity}}},et=tt,at=(a("e7da"),Object(h["a"])(et,J,z,!1,null,null,null)),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[[a("v-flex",{staticClass:"mt-4",attrs:{xs12:""}},[a("v-card",[a("v-layout",{attrs:{row:""}},[a("v-img",{attrs:{src:t.game.image,height:"300",contain:""}}),a("v-flex",{attrs:{xs8:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline pb-2"},[t._v(t._s(t.game.name))]),a("v-divider"),a("div",{staticClass:"subheading pt-3"},[t._v(t._s(t.game.description))])],1)]),a("v-card-actions",[a("v-layout",{staticClass:"ml-2",attrs:{row:"",wrap:""}},[a("div",{staticClass:"subheading font-weight-bold mr-3"},[t._v("\n                          Price: $"+t._s(t.game.price)+"\n                        ")]),a("div",{staticClass:"subheading font-weight-bold"},[t._v("\n                          Stock: "+t._s(t.game.stock)+"\n                        ")])]),a("v-layout",{attrs:{"align-center":""}},[a("v-btn",{staticStyle:{height:"30px",width:"30px"},attrs:{fab:""},on:{click:t.decrement}},[a("v-icon",[t._v("remove")])],1),a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{staticClass:"inputNumber ml-2 mr-2",attrs:{type:"number"},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),a("v-btn",{staticStyle:{height:"30px",width:"30px"},attrs:{fab:""},on:{click:t.increment}},[a("v-icon",[t._v("add")])],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-btn",{attrs:{color:"#CB4046",dark:""},on:{click:t.addToCart}},[t._v("\n                        Add to Cart\n                      ")]),a("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.$store.state.isLoggedIn?a("cartSuccess",{attrs:{cart:t.cart,game:t.game,count:t.count},on:{closeModal:function(e){t.dialog=!1}}}):t._e(),!1===t.$store.state.isLoggedIn?a("cartFail",{on:{closeModal:function(e){t.dialog=!1}}}):t._e()],1)],1)],1)],1)],1)],1)],1)]],2)],1)},rt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Successfully added to cart")]),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-img",{attrs:{src:t.game.image,height:"100",contain:""}})],1),a("v-flex",[a("v-card-text",[a("div",{staticClass:"subheading font-weight-bold"},[t._v(t._s(t.game.name))]),a("div",{staticClass:"subheading"},[a("span",{staticClass:"font-weight-bold"},[t._v("Quantity: ")]),t._v(" "+t._s(t.count))])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1",flat:"flat"},on:{click:t.closeModal}},[t._v("\n      Close\n    ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.toCart}},[t._v("\n      See cart\n    ")])],1)],1)},it=[],ct={props:["cart","game","count"],name:"cartSuccess",methods:{closeModal:function(){this.$emit("closeModal")},toCart:function(){this.$router.push("/cart")}}},lt=ct,ut=Object(h["a"])(lt,ot,it,!1,null,null,null),dt=ut.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Please sign in before continuing")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1",flat:"flat"},on:{click:t.closeModal}},[t._v("\n      Close\n    ")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.toSignIn}},[t._v("\n      Procceed to Sign in\n    ")])],1)],1)},ft=[],ht={name:"cartFail",methods:{closeModal:function(){this.$emit("closeModal")},toSignIn:function(){this.$router.push("/signin")}}},pt=ht,gt=Object(h["a"])(pt,vt,ft,!1,null,null,null),mt=gt.exports,_t={data:function(){return{dialog:!1,count:1,game:{},cart:{}}},computed:{getTotalPrice:function(){return this.count*this.game.price}},components:{cartSuccess:dt,cartFail:mt},created:function(){var t=this,e=this.$route.params.id;E()({method:"GET",url:"".concat(this.$store.state.baseURL,"/products/").concat(e)}).then(function(e){var a=e.data;t.game=a}).catch(function(t){console.log(t)})},methods:{increment:function(){this.count<this.game.stock&&this.count++},decrement:function(){0!==this.count&&this.count--},addToCart:function(){var t=this;this.dialog=!0,localStorage.access_token&&(this.cart={productId:this.$route.params.id,quantity:this.count,totalPrice:this.getTotalPrice,price:this.game.price},E()({method:"POST",url:"".concat(this.$store.state.baseURL,"/carts"),data:this.cart,headers:{access_token:localStorage.access_token}}).then(function(e){e.data;t.dialog=!0}).catch(function(t){console.log(t)}))}}},bt=_t,xt=(a("794e"),Object(h["a"])(bt,st,rt,!1,null,null,null)),yt=xt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-3 summary"},[a("v-layout",{staticClass:"font-weight-bold title mb-2",attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs3:"","offset-xs1":""}},[t._v("\n      Products\n    ")]),a("v-flex",{attrs:{xs3:"","offset-xs1":""}},[t._v("\n      Total Price\n    ")]),a("v-flex",{attrs:{xs3:"","offset-xs1":""}},[t._v("\n      Transaction Date\n    ")])],1),a("v-divider"),t._l(t.$store.state.transactions,function(e,n){return a("v-layout",{key:n,staticClass:"pt-2 pb-2 subheading details",attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs3:"","offset-xs1":""}},t._l(e.carts,function(e,n){return a("div",{key:n},[t._v("\n        "+t._s(e.product.name)+" "),a("span",{staticClass:"font-weight-bold"},[t._v("x"+t._s(e.quantity))])])}),0),a("v-flex",{staticStyle:{color:"green"},attrs:{xs3:"","offset-xs1":""}},[t._v("\n     $"+t._s(e.total.toFixed(2))+"\n    ")]),a("v-flex",{attrs:{xs3:"","offset-xs1":""}},[t._v("\n      "+t._s(t.getDate(e.date))+"\n    ")])],1)})],2)},kt=[],St={name:"History",created:function(){this.$store.dispatch("getTransactions")},data:function(){return{}},methods:{getDate:function(t){var e=new Date(t),a=e.toLocaleString();return a}}},Ct=St,$t=(a("5e0c"),Object(h["a"])(Ct,wt,kt,!1,null,null,null)),Tt=$t.exports;n["default"].use(C["a"]);var Pt=new C["a"]({mode:"history",base:"/",routes:[{path:"/signup",name:"SignUp",component:N},{path:"/signin",name:"SignIn",component:A},{path:"/",name:"Home",component:Y},{path:"/cart",name:"Cart",component:nt,children:[{path:"history",component:Tt}]},{path:"/product/:id",name:"Product",component:yt,props:!0}]}),Et=(a("ac4d"),a("8a81"),a("ac6a"),a("2f62"));n["default"].use(Et["a"]);var Lt=new Et["a"].Store({state:{baseURL:"http://localhost:3000",productList:[],cartList:[],transactions:[],isLoggedIn:!1},getters:{getTotalPrice:function(t){var e=0,a=!0,n=!1,s=void 0;try{for(var r,o=t.cartList[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var i=r.value;e+=i.totalPrice}}catch(c){n=!0,s=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}return e},getTotalProducts:function(t){var e=0,a=!0,n=!1,s=void 0;try{for(var r,o=t.cartList[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var i=r.value;e+=i.quantity}}catch(c){n=!0,s=c}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}return console.log(e,"========"),e}},mutations:{SET_PRODUCTS:function(t,e){t.productList=e},SET_CART:function(t,e){t.cartList=e},SET_LOGIN:function(t){localStorage.access_token?t.isLoggedIn=!0:t.isLoggedIn=!1},SET_TRANSACTIONS:function(t,e){t.transactions=e},DECREMENT:function(t,e){var a=e.index;t.cartList[a].quantity>0&&(t.cartList[a].quantity--,t.cartList[a].totalPrice-=e.price)},INCREMENT:function(t,e){var a=e.index;t.cartList[a].quantity++,t.cartList[a].totalPrice+=e.price}},actions:{getProducts:function(t){E()({method:"GET",url:"".concat(this.state.baseURL,"/products")}).then(function(e){var a=e.data;t.commit("SET_PRODUCTS",a)}).catch(function(t){var e=t.response;console.log(e)})},getCart:function(t){E()({method:"GET",url:"".concat(this.state.baseURL,"/carts"),headers:{access_token:localStorage.access_token}}).then(function(e){var a=e.data;t.commit("SET_CART",a)}).catch(function(t){var e=t.response;console.log(e)})},getTransactions:function(t){E()({method:"GET",url:"".concat(this.state.baseURL,"/transactions"),headers:{access_token:localStorage.access_token}}).then(function(e){var a=e.data;t.commit("SET_TRANSACTIONS",a)}).catch(function(t){var e=t.response;console.log(e)})}}});n["default"].config.productionTip=!1,n["default"].use(r.a),new n["default"]({store:Lt,router:Pt,render:function(t){return t(S)}}).$mount("#app")},"5e0c":function(t,e,a){"use strict";var n=a("2b0a"),s=a.n(n);s.a},"64a9":function(t,e,a){},"74cf":function(t,e,a){},"794e":function(t,e,a){"use strict";var n=a("88c0"),s=a.n(n);s.a},"88c0":function(t,e,a){},a544:function(t,e,a){},ace0:function(t,e,a){},e7da:function(t,e,a){"use strict";var n=a("74cf"),s=a.n(n);s.a},ee90:function(t,e,a){"use strict";var n=a("ace0"),s=a.n(n);s.a}});
//# sourceMappingURL=app.b39d87cf.js.map