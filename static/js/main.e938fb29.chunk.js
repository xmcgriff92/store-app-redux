(this["webpackJsonpstore-app-redux"]=this["webpackJsonpstore-app-redux"]||[]).push([[0],{83:function(A,t,e){"use strict";e.r(t);var c=e(1),a=e.n(c),r=e(19),n=e.n(r),s=e(86),i=e(85),j=e(87),o=e(23),d=e(28),b=e(37),p=e(49),l=e(2);function x(){var A=Object(o.c)((function(A){return A.basketReducer}));return Object(l.jsx)("div",{children:Object(l.jsx)(s.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(s.a.Brand,{as:d.b,to:"/",children:"EZ-Electronics"}),Object(l.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsxs)(s.a.Collapse,{id:"responsive-navbar-nav",children:[Object(l.jsxs)(j.a,{className:"me-auto",children:[Object(l.jsx)(j.a.Link,{as:d.b,to:"/",children:Object(l.jsx)(p.a,{})}),Object(l.jsx)(j.a.Link,{as:d.b,to:"/about",children:"About"})]}),Object(l.jsx)(j.a,{children:Object(l.jsxs)(j.a.Link,{eventKey:2,as:d.b,to:"/basket",children:[Object(l.jsx)(b.a,{})," Cart (",A.basketProducts.length,")"]})})]})]})})})}var h,O,u,m,S,f,g,T,N,E,K,Q,D,B,V=e(88),v=e(14),U=e(15),X=U.a.h1(h||(h=Object(v.a)(["\nfont-size: 18px;\n"]))),G=U.a.h4(O||(O=Object(v.a)(["\nfont-size: 20px;\n"]))),w=U.a.img(u||(u=Object(v.a)(["\nheight: 200px;\n"]))),P=U.a.img(m||(m=Object(v.a)(["\nheight: 50px;\n"]))),W=U.a.button(S||(S=Object(v.a)(["\nheight: 35px;\nwidth: 85px;\n"]))),y=U.a.div(f||(f=Object(v.a)(["\ntext-align: center;\n"]))),C=U.a.div(g||(g=Object(v.a)(["\ntext-align: center;\npadding-top: 15px;\npadding-right: 60px;\npadding-left: 60px;\n"]))),J=(U.a.div(T||(T=Object(v.a)(["\ntext-align: center;\n"]))),U.a.h4(N||(N=Object(v.a)(["\ntext-align: center;\nmargin-top: 15px;\nmargin-bottom: 15px;\n"])))),q=U.a.img(E||(E=Object(v.a)(["\nheight: 500px\n"]))),L=U.a.table(K||(K=Object(v.a)(["\ntext-align: center;\n"]))),M=(U.a.h1(Q||(Q=Object(v.a)(["\ntext-align: center;\nmargin-top: 15px;\nmargin-bottom: 15px;\n"]))),U.a.p(D||(D=Object(v.a)(["\nfont-size: 35px;\n"])))),k=U.a.div(B||(B=Object(v.a)(["\ntext-align: center\n"])));function Y(){return Object(l.jsx)("div",{children:Object(l.jsxs)(V.a,{children:[Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",alt:"First slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"Shop from iPhone X to 13!"}),Object(l.jsx)("p",{children:"Options from refurbished to brand new."})]})]}),Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",alt:"Second slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"Shop Headsets/Earpods"}),Object(l.jsx)("p",{children:"From Airpods, Beats by Dre, Samsung, and more!"})]})]}),Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1338&q=80",alt:"Third slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"Shop Android"}),Object(l.jsx)("p",{children:"From Samsung, Google, Sony, and many other Android brands!"})]})]})]})})}function I(A){var t=A.product,e=Object(o.b)();return Object(l.jsxs)(y,{className:"shadow p-3 mb-5 bg-white rounded",children:[Object(l.jsx)(X,{children:t.productName}),Object(l.jsx)(w,{src:t.productImage,className:"img-fluid",alt:""}),Object(l.jsxs)(G,{children:["Price: ",t.productPrice]}),Object(l.jsxs)("button",{onClick:function(){e({type:"ADD_PRODUCT_TO_BASKET",payload:t})},className:"btn btn-dark",children:[Object(l.jsx)(b.b,{})," ADD TO CART"]})]})}function H(){var A=Object(o.c)((function(A){return A.productsReducer})).products.map((function(A){return Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)(I,{product:A})})}));return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(Y,{}),Object(l.jsx)(J,{children:"Products"}),A]})})}var z=e(9);function R(){return Object(l.jsxs)("div",{className:"shadow p-3 mb-5 bg-white rounded",children:[Object(l.jsxs)(V.a,{children:[Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",alt:"First slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"TO "}),Object(l.jsx)("p",{children:"Help our customers get the most out of their technologiacal experience."})]})]}),Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1588336443962-49d88df004a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",alt:"Second slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"TO"}),Object(l.jsx)("p",{children:"Provide our users the oppurtunity to have up to date technologies."})]})]}),Object(l.jsxs)(V.a.Item,{children:[Object(l.jsx)(q,{className:"d-block w-100",src:"https://images.unsplash.com/photo-1514043133987-e4801c95b2c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=955&q=80",alt:"Third slide"}),Object(l.jsxs)(V.a.Caption,{children:[Object(l.jsx)("h3",{children:"TO"}),Object(l.jsx)("p",{children:"Further help revolutionize the worlds most cutting edge technologies."})]})]})]}),Object(l.jsxs)(k,{children:[Object(l.jsx)(J,{children:"Our Mission: "}),Object(l.jsx)(M,{children:"Is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking technological innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work. Making life for the user much easier."})]}),Object(l.jsx)(k,{children:Object(l.jsxs)(j.a.Link,{as:d.b,to:"/",children:[Object(l.jsx)(p.a,{}),"Home"]})})]})}function F(){var A=Object(o.c)((function(A){return A.basketReducer})),t=Object(o.b)(),e=A.basketProducts.map((function(A){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[Object(l.jsx)(P,{src:A.productImage}),A.productName]}),Object(l.jsx)("td",{children:A.productPrice}),Object(l.jsx)(W,{onClick:function(){return t({type:"DELETE_PRODUCT_FROM_BASKET",payload:A})},className:"btn btn-dark",children:Object(l.jsx)(b.c,{})})]})}));return Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)(L,{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Item Name"}),Object(l.jsx)("th",{children:"Item Price"}),Object(l.jsx)("th",{children:"Remove"})]})}),e,Object(l.jsx)("tbody",{})]})})}function Z(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(C,{className:"container"}),Object(l.jsx)("div",{className:"shadow p-3 mb-5 bg-white rounded",children:Object(l.jsx)(F,{})})]})}var _=e(56),$=e(65),AA=e.n($),tA=e(66),eA=e(30),cA=e(50),aA=e(3),rA={basketProducts:[]},nA={products:[{productName:"Microsoft Xbox Series X",productImage:"data:image/jpeg;base64,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",productPrice:"399.99"},{productName:"Sony Playstation 5",productImage:"data:image/jpeg;base64,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",productPrice:"499.99"},{productName:"iPhone 13 Pro Max - Gold",productImage:"https://cdn.tmobile.com/images/png/products/phones/Apple-iPhone-13-Pro-Max-Gold/250x270_3.png",productPrice:"999.99"},{productName:"iPhone 13 Pro Max - Silver",productImage:"https://cdn.tmobile.com/images/png/products/phones/Apple-iPhone-13-Pro-Max-Silver/250x270_3.png",productPrice:"999.99"},{productName:"iPhone 13 Pro Max - Graphite",productImage:"https://cdn.tmobile.com/images/png/products/phones/Apple-iPhone-13-Pro-Max-Graphite/250x270_3.png",productPrice:"999.99"},{productName:"Samsung Galaxy S21",productImage:"data:image/jpeg;base64,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",productPrice:"1299.99"},{productName:"GoPro HERO9 Camera",productImage:"https://www.leisurepro.com/Image/Product/Large/GOPH9.jpg",productPrice:"399.99"},{productName:"iPad Pro WiFi",productImage:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000",productPrice:"1199.99"},{productName:"Vantop - Snaptain SP7100",productImage:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473300cv11d.jpg;maxHeight=640;maxWidth=550",productPrice:"259.99"}]},sA=Object(eA.a)({productsReducer:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nA;return A},basketReducer:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rA,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_TO_BASKET":return Object(aA.a)(Object(aA.a)({},A),{},{basketProducts:[].concat(Object(cA.a)(A.basketProducts),[t.payload])});case"DELETE_PRODUCT_FROM_BASKET":return Object(aA.a)(Object(aA.a)({},A),{},{basketProducts:A.basketProducts.filter((function(A){return A.productName!=t.payload.productName}))})}return A}}),iA=sA;function jA(){return Object(l.jsx)("div",{children:Object(l.jsx)(s.a,{bg:"dark",variant:"dark",children:Object(l.jsx)(i.a,{children:Object(l.jsx)(s.a.Brand,{href:"#home"})})})})}var oA=function(){var A={key:"root",storage:AA.a},t=Object(_.a)(A,iA),e=Object(eA.b)(t,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),c=Object(_.b)(e);return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o.a,{store:e,children:Object(l.jsx)(tA.a,{persistor:c,children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(z.c,{children:[Object(l.jsx)(z.a,{exact:!0,path:"/",component:H}),Object(l.jsx)(z.a,{exact:!0,path:"/about",component:R}),Object(l.jsx)(z.a,{exact:!0,path:"/basket",component:Z})]}),Object(l.jsx)(jA,{})]})})})})};e(82);n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(oA,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e938fb29.chunk.js.map