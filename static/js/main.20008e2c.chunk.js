(this["webpackJsonptrivia-hooks"]=this["webpackJsonptrivia-hooks"]||[]).push([[0],{162:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s=t(0),l=t.n(s),u=t(47),d=t.n(u),b=t(20),j=t(6),f=t(14),p=t(15),O=p.c.section(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #000119;\n\n  & form {\n    width: 60vh;\n    height: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    flex-direction: column;\n    border-radius: 5px;\n    padding: 50px 0;\n    color: #f3f3f3;\n\n    & > div {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      opacity: 0;\n      transition: opacity 1s ease-in-out;\n      justify-content: space-evenly;\n\n      ","\n\n      ","\n    }\n  }\n\n  & > div {\n    color: #f3f3f3;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    font-size: 1.1rem;\n    display: flex;\n    align-items: center;\n\n    & > div {\n      max-width: 0;\n      overflow: hidden;\n      transition: all 0.2s ease;\n      background-color: rgba(255, 255, 255, 0.1);\n      padding: 0;\n      border-radius: 2px;\n\n      & > div {\n        min-width: 205px;\n      }\n      \n      ","\n    }\n  }\n"])),(function(n){return n.mounted&&Object(p.b)(c||(c=Object(f.a)(["\n          opacity: 1;\n        "])))}),(function(n){return n.nextActive&&Object(p.b)(a||(a=Object(f.a)(["\n          opacity: 0;\n        "])))}),(function(n){return n.open&&Object(p.b)(o||(o=Object(f.a)(["\n          max-width: 250px;\n          padding: 5px;\n        "])))})),x=t(3),h=t(19),g=t(208),m=t(215),v=t(217),y=Object(s.createContext)(),w=p.c.div(i||(i=Object(f.a)(["\n  flex-direction: column;\n\n  & p {\n    font-weight: 500;\n  }\n\n  & div {\n    font-size: 1.6rem;\n    & label {\n      font-size: 1.6rem;\n      color: #f3f3f3;\n    }\n  }\n\n  & button {\n    padding: 10px 30px;\n    font-size: 1.8rem;\n    color: #f3f3f3;\n    background-color: #e3001a;\n\n    &:hover {\n      background-color: #e3001a !important;\n      opacity: 0.8;\n    }\n  }\n\n  & button.Mui-selected {\n    background-color: #ff3b63;\n    color: #f3f3f3;\n  }\n"]))),k=t(209),S=t(1),C=Object(k.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#e3001a"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"#f3f3f3"},"& .MuiInputLabel-outlined.Mui-focused":{color:"#f3f3f3"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#e3001aa5"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#e3001a"},"& .MuiOutlinedInput-input":{color:"#f3f3f3"},"& .MuiInputLabel-outlined":{color:"#f3f3f3"},"&:hover .MuiInputLabel-outlined":{color:"red"}}});function M(n){var e=n.redirectNextScreen,t=n.setMounted,r=Object(s.useContext)(y),c=r.playerData,a=r.setPlayerData,o=r.quantity,i=r.setQuantity,l=C();return Object(s.useEffect)((function(){return t(!0),function(){t(!1)}}),[t]),Object(S.jsxs)(w,{children:[Object(S.jsx)("p",{children:"Informe seu nome"}),Object(S.jsx)(g.a,{id:"outlined-basic",label:"Name",name:"name",value:c.name,variant:"outlined",className:l.root,onChange:function(n){var e=n.target,t=e.value,r=e.name;a(Object(h.a)(Object(h.a)({},c),{},Object(x.a)({},r,t)))},autoFocus:!0,onBlur:function(){return e(!0)}}),Object(S.jsx)("p",{children:"Selecione a quantidade de perguntas"}),Object(S.jsxs)(m.a,{color:"primary",value:o,exclusive:!0,onChange:function(n){var e=n.target.value;return i(e)},onClick:function(){return e(!0)},children:[Object(S.jsx)(v.a,{name:"quantity",value:"5",children:"5"}),Object(S.jsx)(v.a,{name:"quantity",value:"10",children:"10"}),Object(S.jsx)(v.a,{name:"quantity",value:"15",children:"15"})]})]})}var I,z=t(18),q=t(24),N=t.n(q),E=t(38),L=t(218),D=t(219),_=t(213),F=t(212),A=p.c.div(I||(I=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & div {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    \n    & button {\n      font-size: 1.8rem;\n      padding: 10px 50px;\n    }\n  }\n\n  & .MuiFormGroup-root {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    width: fit-content;\n    \n    & svg {\n      font-size: 1.8rem;\n      color: #ffd833;\n    }\n\n    & span {\n      font-size: 1.6rem;\n    }\n  }\n"])));function R(n){return J.apply(this,arguments)}function J(){return(J=Object(E.a)(N.a.mark((function n(e){var t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var P=function(n){return n.map((function(e,t){var r=e.question,c=e.correct_answer,a=e.incorrect_answers,o=e.category,i=decodeURIComponent(r),s=decodeURIComponent(c),l=a.map((function(n){return decodeURIComponent(n)})),u=decodeURIComponent(o);return Object(h.a)(Object(h.a)({},n[t]),{},{question:i,correct_answer:s,incorrect_answers:l,category:u})}))},G=t(77),T=function(){var n=Object(E.a)(N.a.mark((function n(e){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(G.translate)(e,{to:"pt"});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),B=function(){var n=Object(E.a)(N.a.mark((function n(e){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(e.map(function(){var n=Object(E.a)(N.a.mark((function n(t,r){var c,a,o,i,s,l,u,d;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.question,a=t.correct_answer,o=t.incorrect_answers,i=t.category,n.next=3,T(c);case 3:return s=n.sent,n.next=6,T(i);case 6:return l=n.sent,n.next=9,T(a);case 9:return u=n.sent,n.next=12,Promise.all(o.map(function(){var n=Object(E.a)(N.a.mark((function n(e){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e);case 2:return t=n.sent,n.abrupt("return",t.text);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 12:return d=n.sent,n.abrupt("return",Object(h.a)(Object(h.a)({},e[r]),{},{question:s.text,correct_answer:u.text,incorrect_answers:d,category:l.text}));case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function H(n){var e=n.redirectNextScreen,t=n.setMounted,r=Object(s.useContext)(y),c=r.quantity,a=r.scoreboard,o=r.setQuestions,i=r.playerData,l=Object(s.useState)(!1),u=Object(j.a)(l,2),d=u[0],f=u[1],p=Object(s.useState)(!1),O=Object(j.a)(p,2),x=O[0],g=O[1],m=function(){var n=Object(E.a)(N.a.mark((function n(){var e,t,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R("https://opentdb.com/api.php?amount=".concat(Number(c),"&encode=url3986"));case 2:if(e=n.sent,t=P(e),!x){n.next=10;break}return n.next=7,B(t);case 7:return r=n.sent,o(r),n.abrupt("return");case 10:o(t);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(s.useEffect)((function(){return t(!0),function(){t(!1)}}),[i,t]),d?Object(S.jsx)(b.a,{to:"/game"}):Object(S.jsxs)(A,{children:[Object(S.jsx)("p",{children:"Ol\xe1, ".concat(i.name,". Vamos come\xe7ar?")}),Object(S.jsxs)("div",{children:[Object(S.jsx)(L.a,{variant:"contained",color:"success",size:"large",onClick:function(){!function(){var n=new Date,e=JSON.parse(localStorage.getItem("gameHistory")),t=e?e[e.length-1].id:1;e?localStorage.setItem("gameHistory",JSON.stringify([].concat(Object(z.a)(e),[Object(h.a)(Object(h.a)({},i),{},{scoreboard:a,startedIn:n,id:t+1})]))):localStorage.setItem("gameHistory",JSON.stringify([Object(h.a)(Object(h.a)({},i),{},{scoreboard:a,startedIn:n})]))}(),m(),f(!0)},children:"Start"}),Object(S.jsx)(L.a,{variant:"outlined",color:"error",size:"large",onClick:function(){return e(!1)},children:"Cancel"})]}),Object(S.jsx)(D.a,{children:Object(S.jsx)(_.a,{control:Object(S.jsx)(F.a,{onChange:function(){return g(!x)}}),label:"Traduzir para portugu\xeas"})})]})}Object(G.setCORS)("https://cors.bridged.cc/");var U,Q,V,W=t(108),Y=t.n(W),K=t(216),X=t(220),Z=t(210),$=Object(p.c)(Z.a)(U||(U=Object(f.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n& .MuiBox-root {\n  width: 50%;\n  min-width: 400px;\n  background-color: #f3f3f3;\n  padding: 10px;\n  border-radius: 10px;\n  max-height: 400px;\n  overflow: hidden;\n  overflow-y: auto;\n  transition: all 0.3s ease;\n\n  ::-webkit-scrollbar {\n    width: 20px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #d6dee1;\n    border-radius: 20px;\n    border: 6px solid transparent;\n    background-clip: padding-box;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #a8bbbf;\n  }\n\n  & ul {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    list-style: none;\n\n    & li {\n      margin: 5px 0;\n\n      & p {\n        padding: 1rem;\n        border-radius: 5px 5px 0 0;\n        cursor: pointer;\n\n        &.incorrect {\n          background-color: rgba(255, 0, 0, 0.9);\n\n          & ~ div {\n            background-color: rgba(255, 0, 0, 0.2);\n          }\n        }\n\n        &.correct {\n          background-color: rgba(0, 128, 0, 0.9);\n\n          & ~ div {\n            background-color: rgba(0, 128, 0, 0.2);\n          }\n        }\n      }\n\n      & div {\n        display: flex;\n        flex-direction: column;\n        max-height: 0;\n        overflow: hidden;\n        transition: all 0.3s ease;\n        font-family: 'Poppins', sans-serif;\n\n        &.open {\n          max-height: 100px;\n          padding: 5px;\n        }\n\n        & span {\n          display: flex;\n          align-items: center;\n          margin: 1px 0;\n\n          & svg {\n            margin: 0 5px;\n            font-size: 2rem;\n          }\n        }\n      }\n    }\n  }\n}\n"]))),nn=t(57),en=t.n(nn),tn=t(58),rn=t.n(tn),cn=Object(p.c)(en.a)(Q||(Q=Object(f.a)(["\n  color: green;\n"]))),an=Object(p.c)(rn.a)(V||(V=Object(f.a)(["\n  color: red;\n"])));function on(n){var e=n.answers,t=function(n){var e=n.target;e.nextSibling.classList.contains("open")?e.nextSibling.classList.remove("open"):e.nextSibling.classList.add("open")},r=function(n,e,t){return n===t&&n===e||n!==t&&e===t?Object(S.jsx)(cn,{}):n===e?Object(S.jsx)(an,{}):void 0};return Object(S.jsx)("ul",{children:e.map((function(n,e){var c=n.correct_answer,a=n.incorrect_answers,o=n.question,i=n.answer;return Object(S.jsxs)("li",{children:[Object(S.jsx)("p",{onClick:t,className:i===c?"correct":"incorrect",children:"".concat(e+1," - ").concat(o)}),Object(S.jsx)("div",{children:[c].concat(Object(z.a)(a)).map((function(n,e){return Object(S.jsxs)("span",{style:{fontWeight:i===n||n===c?"600":null},children:[n,r(i,n,c)]},e)}))})]},e)}))})}var sn,ln,un=t(107),dn=t.n(un),bn=p.c.div(sn||(sn=Object(f.a)(["\n  & div:nth-child(1) {\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: space-evenly;\n    padding: 10px 0;\n    cursor: pointer;\n    margin: 3px 0;\n    \n    & span {\n      display: flex;\n      align-items: center;\n\n      :nth-child(1) {\n        text-transform: uppercase;\n        font-weight: 500;\n      }\n      pointer-events: none;\n    }\n\n    & svg {\n      font-size: 2rem;\n      color: #000119;\n      margin: 0 5px;\n      pointer-events: none;\n    }\n  }\n\n  & div:nth-child(2) {\n    max-height: 0;\n    overflow: hidden;\n    transition: all 0.2s linear;\n    overflow-y: auto;\n\n    ::-webkit-scrollbar {\n    width: 20px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #d6dee1;\n    border-radius: 20px;\n    border: 6px solid transparent;\n    background-clip: padding-box;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: #a8bbbf;\n  }\n\n    &.open {\n      max-height: 200px;\n    }\n\n    & ul {\n    }\n  }\n"])));function jn(n){var e=n.openModal,t=e.openModal,r=e.setOpenModal,c=Object(s.useState)([]),a=Object(j.a)(c,2),o=a[0],i=a[1];if(Object(s.useEffect)((function(){var n=JSON.parse(localStorage.getItem("gameHistory"));i(n)}),[]),!o.length)return Object(S.jsx)("p",{children:"Carregando..."});var l=function(n){var e=n.target;console.log(e),e.nextSibling.classList.contains("open")?e.nextSibling.classList.remove("open"):e.nextSibling.classList.add("open")};return Object(S.jsx)($,{open:t,onClose:function(){return r(!1)},children:Object(S.jsx)(X.a,{children:o.map((function(n,e){var t=n.answers,r=n.name,c=n.startedIn,a=new Date(c);return Object(S.jsxs)(bn,{children:[Object(S.jsxs)("div",{onClick:l,children:[Object(S.jsxs)("span",{children:[Object(S.jsx)(dn.a,{}),r]}),Object(S.jsx)("span",{children:"Jogou em \n                  ".concat(a.toLocaleDateString("pt-BR"))})]}),Object(S.jsx)("div",{children:Object(S.jsx)(on,{answers:t})})]},e)}))})})}var fn,pn=Object(p.c)(Y.a)(ln||(ln=Object(f.a)(["\n  color: #f3f3f3;\n  font-size: 3rem !important;\n"])));function On(){var n=Object(s.useContext)(y),e=n.playerData,t=n.quantity,r=Object(s.useState)(!1),c=Object(j.a)(r,2),a=c[0],o=c[1],i=Object(s.useState)(!1),l=Object(j.a)(i,2),u=l[0],d=l[1],b=Object(s.useState)(!1),f=Object(j.a)(b,2),p=f[0],x=f[1],h=Object(s.useState)(!1),g=Object(j.a)(h,2),m=g[0],v=g[1],w=Object(s.useState)(!1),k=Object(j.a)(w,2),C=k[0],I=k[1],z=function(n){e.name&&t&&(d(!0),x(!1),setTimeout((function(){d(!1),o(n)}),1e3))};return Object(s.useEffect)((function(){z(!0)}),[e.name,t]),Object(s.useEffect)((function(){JSON.parse(localStorage.getItem("gameHistory"))&&(v(!0),setTimeout((function(){v(!1)}),2e3))}),[]),Object(S.jsxs)(O,{open:m,nextActive:u,mounted:p,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)("div",{children:"Clique aqui para ver jogos anteriores"})}),Object(S.jsx)(K.a,{onClick:function(){return I(!0)},children:Object(S.jsx)(pn,{})})]}),Object(S.jsx)("form",{children:a?Object(S.jsx)(H,{setMounted:x,redirectNextScreen:z}):Object(S.jsx)(M,{setMounted:x,redirectNextScreen:z})}),Object(S.jsx)(jn,{openModal:{openModal:C,setOpenModal:I}})]})}var xn=p.c.header(fn||(fn=Object(f.a)(["\n  width: 100%;\n  height: 100px;\n  background-color: rgba(0, 1, 25, 0.95);\n\n  & div {\n    color: #f3f3f3;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 100%;\n    width: 90%;\n    min-width: 300px;\n\n    & div {\n      display: flex;\n      flex-direction: column;\n      width: 30%;\n      justify-content: space-evenly;\n      height: 100%;\n      padding: 10px 0;\n\n      & p {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-weight: 700;\n\n        & span {\n          font-weight: 500;\n          font-size: 3rem;\n          margin: 0 5px;\n        }\n\n        &:nth-child(1) {\n          & svg {\n            font-size: 3rem;\n            color: rgb(0, 128, 0);\n          }\n        }\n\n        &:nth-child(2) {\n          & svg {\n            font-size: 3rem;\n            color: rgb(255, 0, 0);\n          }\n        }\n      }\n    }\n  }\n"])));function hn(){var n=Object(s.useContext)(y),e=n.playerData.name,t=n.scoreboard,r=t.right,c=t.wrong;return Object(S.jsx)(xn,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"PLAYER: ".concat(e.toUpperCase())}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[Object(S.jsx)(en.a,{}),Object(S.jsx)("span",{children:r})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)(rn.a,{}),Object(S.jsx)("span",{children:c})]})]})]})})}var gn,mn,vn,yn=t(33),wn=Object(p.d)(gn||(gn=Object(f.a)(["\n  0% {\n    transform: scale(4);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n"]))),kn=p.c.div(mn||(mn=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  \n   & div {\n    animation: "," 1s linear infinite;\n  }\n"])),wn),Sn=t.p+"static/media/start-game-countdown.f89c5fa1.wav";function Cn(){var n=Object(s.useState)(3),e=Object(j.a)(n,2),t=e[0],r=e[1],c=Object(yn.a)(Sn,{volume:.5}),a=Object(j.a)(c,1)[0];return Object(s.useEffect)((function(){a()}),[a]),Object(s.useEffect)((function(){if(0!==t){var n=setInterval((function(){r(t-1)}),1e3);return function(){return clearInterval(n)}}}),[t]),Object(S.jsx)(kn,{children:Object(S.jsx)("div",{children:t||"Go"})})}var Mn,In,zn,qn=p.c.div(vn||(vn=Object(f.a)(["\n  width: 60%;\n  height: 70vh;\n  color: #dedfee;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n  padding: 10px;\n\n  & > p {\n    font-size: 2rem;\n    font-weight: 500;\n    text-align: center;\n  }\n\n  & div {\n    display: flex;\n    flex-direction: column;\n\n    &:nth-child(1) {\n      background-color: rgba(0, 1, 25, 0.95);\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 1000;\n      font-size: 4rem;\n    }\n\n    & .incorrect.answered {\n      border-color: red !important;\n      background-color: rgba(255, 0, 0, 0.2);\n    }\n\n    & .correct.answered {\n      border-color: green !important;\n      background-color: rgba(0, 128, 0, 0.2);\n    }\n\n    & button {\n      border-color: #ffd833;\n      color: #dedfee;\n      padding: 5px 20px;\n      text-align: center;\n      margin: 5px;\n      border-radius: 5px;\n      font-size: 1.6rem;\n\n      &:hover {\n        background-color: rgba(255, 255, 0, 0.1);\n        border-color: #ffd833;\n      }\n    }\n  }\n"]))),Nn=Object(p.d)(Mn||(Mn=Object(f.a)(["\n  0% {\n    stroke: white;\n  }\n  100% {\n    stroke: red;\n  }\n"]))),En=p.c.div(In||(In=Object(f.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  opacity: 1;\n\n  ","\n\n  & span {\n    position: absolute;\n  }\n\n  & svg {\n    width: 50px;\n    height: 50px;\n\n    & circle {\n      stroke: white;\n      stroke-width: 5;\n      fill: transparent;\n      transition: 30s stroke-dashoffset linear;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &:nth-child(1) {\n        animation: "," 30s linear;\n      }\n\n      &:nth-child(2) {\n        stroke: rgba(255, 255, 255, 0.2);\n      }\n    }\n  }\n"])),(function(n){var e=n.timeLeft,t=n.isAnswered;return(!e||t)&&Object(p.b)(zn||(zn=Object(f.a)(["\n      opacity: 0;\n    "])))}),Nn);function Ln(n){var e,t=n.isAnswered,r=n.timeLeft,c=Object(s.useRef)(),a=c.current;return a&&!t&&(e=2*a.r.baseVal.value*Math.PI,a.style.strokeDasharray="".concat(e," ").concat(e),a.style.strokeDashoffset="".concat(e)),Object(S.jsxs)(En,{isAnswered:t,timeLeft:r,children:[Object(S.jsxs)("svg",{children:[Object(S.jsx)("circle",{ref:c,r:"40%",cx:"50%",cy:"50%"}),Object(S.jsx)("circle",{r:"40%",cx:"50%",cy:"50%"})]}),Object(S.jsx)("span",{children:r})]})}var Dn=t.p+"static/media/game-over.97b8c97e.wav",_n=t.p+"static/media/timer.ff163f02.wav",Fn=t.p+"static/media/correct-answer.c35664ce.wav",An=t.p+"static/media/wrong-answer.88943cf4.wav";function Rn(n){var e=n.question,t=n.question,r=t.incorrect_answers,c=t.correct_answer,a=t.category,o=t.question,i=n.answersRef,l=n.setNextButtonShow,u=Object(s.useContext)(y),d=u.setPlayerData,f=u.playerData,p=u.questions,O=u.scoreboard,x=u.setScore,g=Object(s.useState)([]),m=Object(j.a)(g,2),v=m[0],w=m[1],k=Object(s.useState)(!1),C=Object(j.a)(k,2),M=C[0],I=C[1],q=Object(s.useState)(30),N=Object(j.a)(q,2),E=N[0],D=N[1],_=Object(s.useState)(!1),F=Object(j.a)(_,2),A=F[0],R=F[1],J=Object(s.useState)(!1),P=Object(j.a)(J,2),G=P[0],T=P[1],B=Object(yn.a)(Dn,{volume:.5}),H=Object(j.a)(B,1)[0],U=Object(yn.a)(An,{volume:.5}),Q=Object(j.a)(U,1)[0],V=Object(yn.a)(Fn,{volume:.5}),W=Object(j.a)(V,1)[0],Y=Object(yn.a)(_n,{volume:.2}),K=Object(j.a)(Y,2),X=K[0],Z=K[1].stop,$=f.answers;Object(s.useEffect)((function(){console.log("aqyu");var n,e=JSON.parse(localStorage.getItem("gameHistory"));if(e){n=e[e.length-1];var t=e.findIndex((function(e){return e===n}));n=Object(h.a)(Object(h.a)({},n),{},{answers:$,scoreboard:O}),e[t]=n,localStorage.setItem("gameHistory",JSON.stringify(e))}}),[$,O]),Object(s.useEffect)((function(){var n=[].concat(Object(z.a)(r),[c]);w(n.sort((function(){return Math.random()-.5}))),Array.from(i.current.children).forEach((function(n){n.removeAttribute("disabled"),n.classList.contains("answered")&&n.classList.remove("answered")}))}),[i,c,r]);var nn=Object(s.useCallback)((function(){Array.from(i.current.children).forEach((function(n){n.classList.add("answered"),n.setAttribute("disabled",!0)})),I(!0)}),[i]),en=Object(s.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";d(Object(h.a)(Object(h.a)({},f),{},{answers:[].concat(Object(z.a)(f.answers),[{question:o,incorrect_answers:r,correct_answer:c,answer:n}])}))}),[]);Object(s.useEffect)((function(){if(0!==E){var n=setInterval((function(){D(E-1)}),1e3);return function(){return clearInterval(n)}}nn(),l(!0),en(),Q(),x(Object(h.a)(Object(h.a)({},O),{},{wrong:O.wrong+1}))}),[en,nn,l,E,Q]),Object(s.useEffect)((function(){p[p.length-1]===e&&M&&(setTimeout((function(){R(!0),H()}),3e3),setTimeout((function(){T(!0)}),6e3)),M?Z():X()}),[H,M,e,p,Z,X]);var tn=function(n){var t=n.target.value;p[p.length-1]!==e&&l(!0),t===c?W():Q(),en(t),x(t===c?Object(h.a)(Object(h.a)({},O),{},{right:O.right+1,score:O.score+(E+10)}):Object(h.a)(Object(h.a)({},O),{},{wrong:O.wrong+1})),nn(),I(!0)};return G?Object(S.jsx)(b.a,{to:"/feedback"}):Object(S.jsxs)(S.Fragment,{children:[A&&Object(S.jsx)("div",{children:"FIM DE JOGO!"}),Object(S.jsx)("span",{children:a}),Object(S.jsx)("p",{children:o}),Object(S.jsx)("div",{ref:i,children:v.map((function(n){return Object(S.jsx)(L.a,{value:n,className:n===c?"correct":"incorrect",variant:"outlined",onClick:tn,children:n},n)}))}),Object(S.jsx)(Ln,{isAnswered:M,timeLeft:E})]})}var Jn,Pn=t.p+"static/media/reveal.a8f44054.wav";function Gn(){var n=Object(s.useContext)(y).questions,e=Object(s.useState)(0),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(s.useState)(!1),o=Object(j.a)(a,2),i=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(j.a)(u,2),b=d[0],f=d[1],p=Object(s.useState)(!1),O=Object(j.a)(p,2),x=O[0],h=O[1],g=Object(yn.a)(Pn,{volume:.2}),m=Object(j.a)(g,1)[0],v=Object(s.useRef)(null);console.log(n);var w=Object(s.useCallback)((function(){l(!1),m(),setTimeout((function(){l(!0)}),2e3)}),[m]);return Object(s.useEffect)((function(){setTimeout((function(){w(),h(!0)}),4e3)}),[w]),Object(S.jsx)(S.Fragment,{children:x?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(qn,{children:i?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(Rn,{question:n[r],answersRef:v,setNextButtonShow:f})}):Object(S.jsx)("p",{children:n[r].category})}),Object(S.jsx)(L.a,{variant:"contained",color:"success",onClick:function(){c(r+1),w(),f(!1)},style:{display:b?"block":"none"},children:"Next"})]}):Object(S.jsx)(qn,{children:Object(S.jsx)(Cn,{})})})}var Tn,Bn,Hn,Un=p.c.section(Jn||(Jn=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  height: calc(100% - 100px);\n  align-items: center;\n  justify-content: space-evenly;\n  position: relative;\n  background-color: #000119;\n\n  & > button {\n    position: absolute;\n    font-size: 1.6rem;\n    top: -70px;\n    right: 20px;\n    color: #e3001a;\n    background-color: transparent !important;\n    border: 1px solid #e3001a;\n    /* padding: 10px 50px; */\n  }\n"]))),Qn=Object(p.d)(Tn||(Tn=Object(f.a)(["\n  0% {\n    color: #e3001a;\n  }\n  50% {\n    color: #dedfee;\n    opacity: 0.5;\n  }\n  75% {\n    color: #ffd833;\n    opacity: 0.7;\n  }\n  100% {\n    color: #e3001a;\n  }\n"]))),Vn=p.c.div(Bn||(Bn=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #000119;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  & span {\n    color: #e3001a;\n    font-size: 3rem;\n    font-weight: bold;\n    font-family: 'Montserrat', sans-serif;\n    text-transform: uppercase;\n    transition: all 1s linear;\n\n    animation: "," 5s linear infinite;\n  }\n"])),Qn);function Wn(){var n=Object(s.useState)(!0),e=Object(j.a)(n,2),t=e[0],r=e[1];return Object(s.useEffect)((function(){setTimeout((function(){r(!1)}),5e3)}),[]),t?Object(S.jsx)(Vn,{children:Object(S.jsx)("span",{children:"Aguarde... Buscando quest\xf5es..."})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(hn,{}),Object(S.jsx)(Un,{children:Object(S.jsx)(Gn,{})})]})}var Yn,Kn,Xn=p.c.section(Hn||(Hn=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #000119;\n  color: #f3f3f3;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  min-height: 300px;\n\n  & div:nth-child(1) {\n    background-color: rgba(227, 0, 26, 0.2);\n    display: flex;\n    align-items: center;\n    width: 40%;\n    height: 40%;\n    flex-direction: column;\n    justify-content: space-evenly;\n    min-width: 300px;\n    min-height: 200px;\n\n    & > p {\n      /* margin: 50px 0; */\n      font-size: 2.5rem;\n    }\n\n    & > div {\n      background-color: rgba(255, 255, 255, 0.2);\n      display: flex;\n      align-items: center;\n      width: 200px;\n      height: 50px;\n      justify-content: space-evenly;\n      border-radius: 10px;\n\n      & span {\n        display: flex;\n        align-items: center;\n        font-size: 3rem;\n\n        & svg {\n          font-size: 3rem;\n          margin: 0 5px;\n        }\n\n        &:nth-child(1) svg {\n          color: green;\n        }\n\n        &:nth-child(2) svg {\n          color: red;\n        }\n      }\n    }\n\n    & > span {\n      font-size: 4rem;\n      font-weight: bold;\n      text-align: center;\n    }\n  }\n  & div:nth-child(2) {\n    width: 50%;\n    display: flex;\n    justify-content: space-evenly;\n  }\n"]))),Zn=t.p+"static/media/drums-appear.397db652.wav";function $n(n){var e=n.openModal,t=e.openModal,r=e.setOpenModal,c=Object(s.useContext)(y).playerData.answers;return Object(S.jsx)($,{open:t,onClose:function(){return r(!1)},children:Object(S.jsx)(X.a,{children:Object(S.jsx)(on,{answers:c})})})}var ne,ee=Object(p.c)(L.a)(Yn||(Yn=Object(f.a)(["\n  font-size: 1.6rem !important;\n  background-color: rgba(0, 128, 0, 0.5) !important;\n\n  &:hover {\n    background-color: rgba(0, 128, 0, 0.7) !important;\n  }\n"]))),te=Object(p.c)(L.a)(Kn||(Kn=Object(f.a)(["\n  font-size: 1.6rem !important;\n  border-color: rgba(32, 0, 150, 0.5) !important;\n  background-color: rgba(32, 0, 150, 0.2) !important;\n  color: #f3f3f3 !important;\n\n  &:hover {\n    background-color: rgba(32, 0, 150, 0.7) !important;\n  }\n"])));function re(){var n=Object(s.useContext)(y),e=n.scoreboard,t=e.right,r=e.wrong,c=n.quantity,a=n.setNewGame,o=n.isNewGame,i=Object(s.useState)(!1),l=Object(j.a)(i,2),u=l[0],d=l[1],f=Object(yn.a)(Zn,{volume:1}),p=Object(j.a)(f,1)[0];Object(s.useEffect)((function(){p()}),[p]);return o?Object(S.jsx)(b.a,{to:"/"}):Object(S.jsxs)(Xn,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{children:"RESUMO"}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{children:[Object(S.jsx)(en.a,{}),t]}),Object(S.jsxs)("span",{children:[Object(S.jsx)(rn.a,{}),r]})]}),t===c?Object(S.jsx)("span",{children:"Very good!"}):t>=1?Object(S.jsx)("span",{children:"Good!"}):Object(S.jsx)("span",{children:"What a pity! Good luck next time."})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(ee,{variant:"contained",onClick:function(){return d(!0)},children:"Show answers"}),Object(S.jsx)(te,{onClick:function(){a(!0)},variant:"outlined",children:"New Game"})]}),Object(S.jsx)($n,{openModal:{openModal:u,setOpenModal:d}})]})}var ce=Object(p.a)(ne||(ne=Object(f.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.6rem;\n  }\n\n  main {\n    width: 100%;\n    height: 100vh;\n  }\n"])));var ae=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(ce,{}),Object(S.jsxs)(b.d,{children:[Object(S.jsx)(b.b,{path:"/",exact:!0,component:On}),Object(S.jsx)(b.b,{path:"/game",component:Wn}),Object(S.jsx)(b.b,{path:"/feedback",component:re})]})]})},oe=function(n){n&&n instanceof Function&&t.e(4).then(t.bind(null,222)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},ie=t(53),se={id:0,name:"",answers:[]},le={right:0,wrong:0,score:0},ue=function(n){var e=n.children,t=Object(s.useState)([]),r=Object(j.a)(t,2),c=r[0],a=r[1],o=Object(s.useState)(se),i=Object(j.a)(o,2),l=i[0],u=i[1],d=Object(s.useState)(le),b=Object(j.a)(d,2),f=b[0],p=b[1],O=Object(s.useState)(!1),x=Object(j.a)(O,2),h=x[0],g=x[1],m=Object(s.useState)(0),v=Object(j.a)(m,2),w=v[0],k=v[1];return Object(s.useEffect)((function(){h&&(u(se),p(le),g(!1))}),[h]),Object(S.jsx)(y.Provider,{value:{questions:c,setQuestions:a,playerData:l,setPlayerData:u,quantity:w,setQuantity:k,scoreboard:f,setScore:p,setNewGame:g,isNewGame:h},children:e})};d.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(ie.a,{children:Object(S.jsx)(ue,{children:Object(S.jsx)(ae,{})})})}),document.getElementById("root")),oe()}},[[162,1,2]]]);
//# sourceMappingURL=main.20008e2c.chunk.js.map