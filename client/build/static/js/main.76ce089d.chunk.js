(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(63),l=a.n(s),o=(a(75),a(20)),m=a(1),i=a(8),u=(a(76),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),m=l[0],u=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(o.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(69),E=a(65),f=a.n(E),g=a(66),p=a.n(g),d=(a(119),a(120),a(21)),v=a.n(d),N=a(67),h=a.n(N),b=function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:v.a,alt:"onlineimage"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:h.a,alt:"closeimage"}))))},j=(a(121),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",null,r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),C=a(68),O=a.n(C),I=(a(164),a(36)),S=a.n(I),x=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},S.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},S.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},y=(a(165),function(e){var t=e.messages,a=e.name;return r.a.createElement(O.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(x,{message:e,name:a}))})))}),k=(a(166),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:v.a}))}))))):null)}),B=function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),l=s[0],o=s[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),E=u[0],g=u[1],d=Object(c.useState)(""),v=Object(i.a)(d,2),N=v[0],h=v[1],C=Object(c.useState)(""),O=Object(i.a)(C,2),I=O[0],S=O[1],x=Object(c.useState)([]),B=Object(i.a)(x,2),R=B[0],M=B[1],U="https://chat-app-9.herokuapp.com/";Object(c.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,c=e.room;return n=p()(U),o(a),g(c),console.log(n),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[U,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){M([].concat(Object(A.a)(R),[e]))})),n.on("roomData",(function(e){var t=e.users;h(t)}))}),[R,N]);return console.log(I,R),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{room:E}),r.a.createElement(y,{messages:R,name:l}),r.a.createElement(j,{message:I,setMessage:S,sendMessage:function(e){e.preventDefault(),I&&n.emit("sendMessage",I,(function(){return S("")}))}})),r.a.createElement(k,{users:N}))},R=function(){return r.a.createElement(o.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:u}),r.a.createElement(m.a,{path:"/chat",exact:!0,component:B}))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))},21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},67:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},70:function(e,t,a){e.exports=a(167)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.76ce089d.chunk.js.map