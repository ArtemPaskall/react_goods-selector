(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),l=c(5),o=c(8),r=c(7),d=c(1),i=c.n(d),j=(c(13),c(6)),u=c.n(j),b=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(o.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selected:"Jam"},e.deleteItem=function(){e.setState({selected:""})},e}return Object(l.a)(c,[{key:"addItem",value:function(e){this.setState({selected:e})}},{key:"render",value:function(){var e=this,t=this.state.selected;return Object(b.jsxs)("div",{className:"App",children:[""===t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h1",{children:"No selected Goods"})})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h1",{children:"Selected good: ".concat(t)}),Object(b.jsx)("button",{className:"button",type:"button",onClick:this.deleteItem,children:"Clear"})]})}),Object(b.jsx)("ul",{className:"goodList",children:h.map((function(c){return Object(b.jsxs)("li",{className:u()("goodStyle",{"goodStyle--selected":e.state.selected===c}),children:[Object(b.jsx)("p",{children:c}),c===t?Object(b.jsx)("button",{className:"button",type:"button",onClick:e.deleteItem,children:"Delete"}):Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){return e.addItem(c)},children:"Add"})]},c)}))})]})}}]),c}(i.a.Component),p=m;s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f0edbff.chunk.js.map