(this["webpackJsonpjoplin-proposal-draft"]=this["webpackJsonpjoplin-proposal-draft"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t){},19:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(3),r=n.n(o),c=(n(16),n(4)),i=n(5),u=n(9),m=n(10),s=(n(17),n(1)),d=n.n(s),p=n(6),E=n.n(p),h=n(7),w=n(8),k=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e,t=new E.a.Converter,n=new h.a({headingStyle:"atx",bulletListMarker:"-"});n.use(w.a),d()("#Joplin-mockup").on("keydown keyup mousedown mouseup",(function(l){var a;e&&(a=e),e=d()(window.getSelection().anchorNode).closest("#Joplin-mockup > *"),console.log(e.data("editMode")),e&&e[0]&&!e.data("editMode")&&(e.html(n.turndown(e[0].outerHTML)||"<br />"),e.data("editMode",!0),e.css("white-space","pre")),a&&a[0]&&e&&e[0]&&!a[0].isSameNode(e[0])&&a.replaceWith(t.makeHtml(a[0].innerHTML).replace(/\\/g,""))}))}},{key:"render",value:function(){return a.a.createElement("div",{id:"Joplin-mockup",className:"Joplin-mockup content",contentEditable:"true"},a.a.createElement("p",null,a.a.createElement("b",null,"Joplin-Inline Markdown editor DRAFT 1  ")),a.a.createElement("p",null," ",a.a.createElement("i",null,"This was made in 2 days and does not represent what the final project would be")),a.a.createElement("p",null,"The content would not move from it place in the final project"),a.a.createElement("h1",null,"Heading 1"),a.a.createElement("h2",null,"Heading 2"),a.a.createElement("h3",null,"Heading 3"),a.a.createElement("p",null,"This is ",a.a.createElement("strong",null,"Bold Text")," "),a.a.createElement("p",null,"This is ",a.a.createElement("em",null,"emphasis Text")),a.a.createElement("p",null,"This is ",a.a.createElement("code",null,"code")),a.a.createElement("p",null,a.a.createElement("strike",null,"strike")),a.a.createElement("p",null,a.a.createElement("blockquote",null,"Blockquote")),a.a.createElement("ul",null,a.a.createElement("li",null,"list items"),a.a.createElement("li",null,"list items")),a.a.createElement("ol",null,a.a.createElement("li",null,"number list"),a.a.createElement("li",null,"numbered list")),a.a.createElement("p",null,a.a.createElement("strong",null,"Lorem ipsum")," ",a.a.createElement("em",null,"dolor sit amet,")," consectetur adipiscing ",a.a.createElement("strong",null,a.a.createElement("em",null,"elit, sed do eiusmod"))," tempor incididunt"),a.a.createElement("br",null))}}]),n}(a.a.Component);var f=function(){return a.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ae184251.chunk.js.map