(this["webpackJsonpshopping-cart-assignment"]=this["webpackJsonpshopping-cart-assignment"]||[]).push([[11],{114:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var a=c(13),n=(c(114),c(0)),s=c(12),r=c(137),i=c(135),o=c(126),d=c(120),j=c(10),u=c(1),l=function(){var e=Object(n.useContext)(s.a),t=e.categories,c=e.updateCategories;return Object(n.useEffect)((function(){t.length||c()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{style:{width:"100%"},className:"xs-hide left-nav",children:Object(u.jsx)(i.a,{variant:"flush",children:t.map((function(e){return e.order>0?Object(u.jsx)(i.a.Item,{children:Object(u.jsx)(j.b,{to:"/products/".concat(e.id),children:e.name})},e.key):null}))})}),Object(u.jsx)(o.a,{id:"dropdown-basic-button",title:"Category Name",className:"xs-show",children:t.map((function(e){return Object(u.jsx)(d.a.Item,{children:Object(u.jsx)(j.b,{to:"/products/".concat(e.id),children:e.name})},e.key)}))})]})},m=c(98),b=c(100),h=c(103),p=function(e){var t=e.item,c=Object(n.useContext)(s.a),a=c.cart,i=c.updateCart,o=t.name,d=t.imageURL,j=t.description,l=t.price,p=t.id,O=function(){var e=-1;a.filter((function(t,c){return t.id===p?(e=c,1):0}));var c=Object(m.a)(a);-1!==e?c[e].count+=1:(t.count=1,c.push(t)),i(c)};return Object(u.jsx)(b.a,{lg:3,md:6,sm:12,className:"product-section-wrapper",children:Object(u.jsxs)(r.a,{className:"brb-1-dashed",children:[Object(u.jsx)(r.a.Body,{children:Object(u.jsx)(r.a.Title,{children:o})}),Object(u.jsx)(r.a.Img,{variant:"top",src:"".concat("").concat(d),className:"product-image"}),Object(u.jsxs)(r.a.Body,{className:"product-desciption",children:[Object(u.jsx)(r.a.Text,{children:j}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"card-price md-hide",children:["MRP Rs.",l]}),Object(u.jsx)(h.a,{variant:"primary",className:"theme-button md-hide",onClick:O,children:"Buy Now"}),Object(u.jsxs)(h.a,{variant:"primary",className:"theme-button md-show prod-button-price",onClick:O,children:["Buy Now @ Rs.",l]})]})]})]})})},O=c(112),x=c(127);t.default=function(e){var t=e.match,c=Object(n.useState)([]),r=Object(a.a)(c,2),i=r[0],o=r[1],d=Object(n.useContext)(s.a),j=d.products,m=d.updateProducts;return Object(n.useEffect)((function(){j.length||m()}),[]),Object(n.useEffect)((function(){0!==j.length&&("all"===t.params.productCategory?o(j):o((function(){return j.filter((function(e){return e.category===t.params.productCategory}))})))}),[t.params.productCategory,j]),Object(u.jsx)("div",{className:"product-page layout-container",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(b.a,{md:3,sm:12,className:"bg-col-e8e8e8 left-nav-container",children:Object(u.jsx)(l,{})}),Object(u.jsx)(b.a,{md:9,sm:12,className:"product-section-container",children:Object(u.jsx)(O.a,{lg:9,md:12,sm:12,children:i.length?i.map((function(e,t){return Object(u.jsx)(p,{item:e},t)})):Object(u.jsx)(x.a,{variant:"info",className:"no-data-alert",children:"No Product Found!!!!"})})})]})})}}}]);