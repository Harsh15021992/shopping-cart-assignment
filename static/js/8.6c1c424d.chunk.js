(this["webpackJsonpshopping-cart-assignment"]=this["webpackJsonpshopping-cart-assignment"]||[]).push([[8],{116:function(e,c,t){},138:function(e,c,t){"use strict";t.r(c);t(116);var n=t(0),s=t(132),a=t(128),r=t(103),i=t(12),o=t(98),j=t(112),l=t(100),d=t(113),u=t(1),h=function(e){var c=e.item,t=e.index,s=Object(n.useContext)(i.a),a=s.cart,h=s.updateCart,b=function(e){var c=Object(o.a)(a);"decrease"===e?1!==c[t].count?c[t].count-=1:c.splice(t,1):"increase"===e&&(c[t].count+=1),h(c)};return Object(u.jsxs)(j.a,{className:"cart-item",children:[Object(u.jsx)(l.a,{xs:3,children:Object(u.jsx)(d.a,{src:"".concat("/shopping-cart-assignment").concat(c.imageURL),thumbnail:!0})}),Object(u.jsxs)(l.a,{xs:9,className:"pl-0",children:[Object(u.jsx)("h5",{children:c.name}),Object(u.jsx)(r.a,{variant:"primary",className:"theme-button decrease-count",onClick:function(){return b("decrease")},children:"-"}),Object(u.jsx)("span",{children:c.count}),Object(u.jsx)(r.a,{variant:"primary",className:"theme-button increase-count",onClick:function(){return b("increase")},children:"+"}),Object(u.jsx)("span",{children:"x"}),Object(u.jsxs)("span",{children:["Rs.",c.price]}),Object(u.jsxs)("span",{className:"total",children:["Rs.",c.count*c.price]})]})]})};c.default=function(e){var c=e.show,t=e.handleClose,o=Object(n.useContext)(i.a).cart;return Object(u.jsxs)(s.a,{show:c,onHide:t,children:[Object(u.jsx)(s.a.Header,{closeButton:!0,children:Object(u.jsxs)(s.a.Title,{children:["My Cart"," ",Object(u.jsxs)("span",{children:["(",o.reduce((function(e,c){return e+c.count}),0)," ","item)"]})]})}),Object(u.jsx)(s.a.Body,{className:!o.length&&"noItem-cart-modal-body",children:Object(u.jsx)(a.a,{fluid:!0,children:o.length?o.map((function(e,c){return Object(u.jsx)(h,{item:e,index:c},c)})):Object(u.jsxs)("div",{className:"empty-cart",children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"No items in your cart"})}),Object(u.jsx)("p",{children:"Your favourite items are just a click away"})]})})}),Object(u.jsxs)(s.a.Footer,{children:[Object(u.jsx)("p",{children:"Promocode can be applied on payment page"}),Object(u.jsxs)(r.a,{variant:"primary",className:"theme-button w-100",onClick:t,children:[Object(u.jsx)("span",{className:"btn-text",children:"Proceed to checkout"}),Object(u.jsxs)("span",{className:"total",children:["Rs.",o.reduce((function(e,c){return e+c.count*c.price}),0)," ",">"]})]})]})]})}}}]);