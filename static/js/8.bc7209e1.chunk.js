(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[8],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a(44),o=a(29),i=a(53),u=a(10),m=function(e){var t=Object(n.useContext)(u.a).translate,a=Object(n.useState)("TITLE_ASC"),m=Object(r.a)(a,2),s=m[0],E=m[1],p=Object(n.useState)(""),h=Object(r.a)(p,2),f=h[0],y=h[1],b=Object(i.a)(s),g=Object(i.a)().map((function(e){return e.category})),k=(g=g.filter((function(e,t){return g.indexOf(e)===t}))).map((function(t){return c.a.createElement("li",{id:t,key:"option_".concat(t)},c.a.createElement("div",{value:t,onClick:function(){y(t),e.history.push(e.match.url+"?category="+t)}},t))}));return c.a.createElement("section",null,c.a.createElement("h3",{className:"cat"},t("Category")),c.a.createElement("section",{className:"book-page"},c.a.createElement("section",{className:"book-category"},c.a.createElement("ul",null,c.a.createElement("li",{key:"all"},c.a.createElement("div",{value:"",onClick:function(){y("")}},"All Books")),k)),c.a.createElement("section",{className:"books-container"},c.a.createElement("div",{className:"sort-line"},c.a.createElement("label",null,"Sort By:"),c.a.createElement("select",{value:s,onChange:function(e){return E(e.currentTarget.value)}},c.a.createElement("option",{value:"TITLE_ASC"},"Title (A-Z)"),c.a.createElement("option",{value:"TITLE_DESC"},"Title (Z-A)"),c.a.createElement("option",{value:"PRICE_ASC"},"Price: Low to Higth"),c.a.createElement("option",{value:"PRICE_DESC"},"Price: Higth to Low"))),0===b.length?c.a.createElement(o.a,null):""===f?c.a.createElement("ul",{className:"book-container"},b.map((function(e){return c.a.createElement("li",{key:e.title},c.a.createElement(l.a,{id:e.id,src:e.URL,title:e.title,author:e.author,price:e.price,category:e.category}))}))):c.a.createElement("ul",{className:"book-container"},b.filter((function(e){return e.category===f})).map((function(e){return c.a.createElement("li",{key:e.title},c.a.createElement(l.a,{id:e.id,src:e.URL,title:e.title,author:e.author,price:e.price,category:e.category}))}))))))};function s(e){return c.a.createElement("div",null,c.a.createElement(m,{history:e.history,match:e.match}))}a.d(t,"default",(function(){return s}))}}]);
//# sourceMappingURL=8.bc7209e1.chunk.js.map