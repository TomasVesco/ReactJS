(this.webpackJsonpprobando=this.webpackJsonpprobando||[]).push([[0],[,,,,,,,,,,,,,,function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var i=t(2),a=t.n(i),n=t(9),r=t.n(n),d=(t(14),t(4)),s=t(5),j=(t(20),t(21),t(0)),o=function(){return Object(j.jsx)("div",{className:"cart",children:Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)(d.a,{icon:s.b})})})},b=function(){return Object(j.jsxs)("div",{className:"navContainer",children:[Object(j.jsx)("div",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"/#",children:"Tienda"})}),Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{icon:s.a})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"/#",children:"Login"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:Object(j.jsx)(o,{})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"0"})})]})]})},l=t(6),f=(t(23),t(24),function(e){var c=e.stock,t=e.initial,a=Object(i.useState)(t),n=Object(l.a)(a,2),r=n[0],d=n[1];return Object(j.jsx)("div",{className:"countContainer",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){r>0&&d(r-=1)},children:"-"})}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:r})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){r<c&&d(r+=1)},children:"+"})})]})})}),m=(t(25),function(e){var c=e.productos;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:c.imagen,alt:""})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:c.nombre})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Precio: $",c.precio]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{stock:15,initial:1}),Object(j.jsx)("a",{href:"/#",children:"Agregar al carrito"})]})]})}),h=function(e){var c=e.productos;return Object(j.jsx)(j.Fragment,{children:c.map((function(e){return Object(j.jsx)(m,{productos:e},e.id)}))})},_=[{imagen:"https://static.wixstatic.com/media/c46aee_6f2538a860304191a03da6dc2e9c5c38~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_6f2538a860304191a03da6dc2e9c5c38~mv2.webp",nombre:"Cucha para perro",precio:349,id:1},{imagen:"https://static.wixstatic.com/media/c46aee_f051c30e02f5462f8af0cde60e41719a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_f051c30e02f5462f8af0cde60e41719a~mv2.webp",nombre:"Comederero para perro",precio:250,id:2},{imagen:"https://static.wixstatic.com/media/c46aee_da460041405c4caf8dab2da4fca53516~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_da460041405c4caf8dab2da4fca53516~mv2.webp",nombre:"Cucha para gato",precio:350,id:3},{imagen:"https://static.wixstatic.com/media/c46aee_dd948f0ca3c94108aee14f66c8a981ba~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_dd948f0ca3c94108aee14f66c8a981ba~mv2.webp",nombre:"Comedero para gato",precio:299,id:4},{imagen:"https://static.wixstatic.com/media/c46aee_c426b06d838747779d15c5c69d5ffee5~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/c46aee_c426b06d838747779d15c5c69d5ffee5~mv2.webp",nombre:"Corta u\xf1as para gato",precio:100,id:5},{imagen:"https://static.wixstatic.com/media/e10ba7_8dac73ff8f784a6399b9dd48193fa224~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85/e10ba7_8dac73ff8f784a6399b9dd48193fa224~mv2.webp",nombre:"Cepillo para gato",precio:89,id:6},{imagen:"https://static.wixstatic.com/media/fce4e5_2113a6ba053c4d6f83af5e2ea36d3612~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/fce4e5_2113a6ba053c4d6f83af5e2ea36d3612~mv2.webp",nombre:"Correa",precio:150,id:7}],u=function(){var e=Object(i.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1];return Object(i.useEffect)((function(){return new Promise((function(e){setTimeout((function(){e(_)}),3e3)})).then((function(e){a(e)})),function(){a([])}}),[]),Object(j.jsx)("div",{className:"itemListContainer",children:Object(j.jsx)(h,{className:"itemListContainer",productos:t})})};var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)(b,{})}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{children:Object(j.jsx)(u,{})})})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(c){var t=c.getCLS,i=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),i(e),a(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),x()}],[[26,1,2]]]);
//# sourceMappingURL=main.afd20797.chunk.js.map