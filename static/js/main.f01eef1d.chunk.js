(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{316:function(e,a,t){e.exports=t(644)},321:function(e,a,t){},322:function(e,a,t){},368:function(e,a,t){},639:function(e,a,t){},642:function(e,a,t){},643:function(e,a,t){},644:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(321),t(646)),i=t(311),s=t(72),b=t(73),m=t(75),p=t(74),u=t(76),g=t(286),d=t(220),k=t(38),f=t(7),h=(t(322),g.a.confirm),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).showModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),t.setState({visible:!1})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t.showDeleteConfirm=function(){h({title:"\u60a8\u786e\u5b9a\u8981\u6e05\u7a7a\u4e3b\u64cd\u4f5c\u533a\u5417?",content:"\u70b9\u51fb\u786e\u8ba4\u540e\u4e3b\u64cd\u4f5c\u533a\u5c06\u6e05\u7a7a\uff0c\u6570\u636e\u65e0\u6cd5\u6062\u590d\uff01",okText:"\u786e\u8ba4",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){console.log("OK"),d.a.success("\u6e05\u7a7a\u6210\u529f\uff01")},onCancel:function(){console.log("Cancel"),d.a.warning("\u60a8\u53d6\u6d88\u4e86\u6e05\u7a7a\u64cd\u4f5c\uff01")}})},t.state={visible:!1},t}return Object(u.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"https://github.com/winyh/astx",target:"_blank",rel:"noopener noreferrer"},"ASTX")),r.a.createElement("div",{className:"action"},r.a.createElement("div",{className:"item"},r.a.createElement(k.a,{title:"\u64a4\u9500"},r.a.createElement(f.a,{type:"arrow-left"}))),r.a.createElement("div",{className:"item"},r.a.createElement(k.a,{title:"\u6062\u590d"},r.a.createElement(f.a,{type:"arrow-right"}))),r.a.createElement("div",{className:"item",onClick:this.showModal},r.a.createElement(k.a,{title:"\u6e90\u7801"},r.a.createElement(f.a,{type:"codepen"}))),r.a.createElement("div",{className:"item"},r.a.createElement(k.a,{title:"\u9884\u89c8"},r.a.createElement(f.a,{type:"eye"}))),r.a.createElement("div",{className:"item"},r.a.createElement(k.a,{title:"\u53d1\u5e03"},r.a.createElement(f.a,{type:"cloud-upload"}))),r.a.createElement("div",{className:"item"},r.a.createElement(k.a,{title:"\u4e0b\u8f7d"},r.a.createElement(f.a,{type:"download"}))),r.a.createElement("div",{className:"item",onClick:this.showDeleteConfirm},r.a.createElement(k.a,{title:"\u6e05\u7a7a"},r.a.createElement(f.a,{type:"delete"}))),r.a.createElement("div",{className:"item"},r.a.createElement("a",{href:"https://github.com/winyh/astx",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{type:"github"})))),r.a.createElement(g.a,{title:"\u6e90\u7801",width:"60%",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents...")))}}]),a}(n.Component),y=(t(368),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"side"},r.a.createElement("div",{className:"bar"},r.a.createElement("ul",{className:"wrap"},r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u65b0\u589e\u9875\u9762"},r.a.createElement(f.a,{type:"plus-circle"}))),r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u670d\u52a1\u5668"},r.a.createElement(f.a,{type:"cloud-server"}))),r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u6570\u636e\u5e93"},r.a.createElement(f.a,{type:"database"}))),r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u8282\u70b9"},r.a.createElement(f.a,{type:"cluster"}))),r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u8d44\u6e90"},r.a.createElement(f.a,{type:"picture"})))),r.a.createElement("ul",{className:"wrap"},r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u79fb\u52a8\u7aef"},r.a.createElement(f.a,{type:"mobile"}))),r.a.createElement("li",null,r.a.createElement(k.a,{placement:"right",title:"\u684c\u9762\u7aef"},r.a.createElement(f.a,{type:"desktop"}))),r.a.createElement("li",{style:{marginBottom:"20px"}},r.a.createElement(k.a,{placement:"right",title:"\u8d26\u6237"},r.a.createElement(f.a,{type:"user"}))))))}}]),a}(n.Component)),O=t(151),v=t(648),j=t(106),w=t(64);function P(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?P(Object(t),!0).forEach((function(a){Object(j.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var D=t(369);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(Object(t),!0).forEach((function(a){Object(j.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N=function e(a){var t,n=(t=a.type,w[t]),c=a.props,l=[];if(a.children)for(var o=a.children.length,i=a.children,s=0;s<o;s++){var b=e(i[s]);l.push(b)}return r.a.createElement.apply(r.a,[n,T({},c)].concat(l))},x="box",B=(t(639),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement((function(){var e=Object(v.a)({accept:x,drop:function(e,a){var t=function(e){return{id:D(),type:e,props:C({},(a=e,w[a].defaultProps)),children:[]};var a}(e.name);return console.log(t),l.a.render(N(t),document.getElementById("stage")),{name:"Stage"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),a=Object(O.a)(e,2),t=a[0],n=t.canDrop,c=t.isOver,o=a[1],i=n&&c,s="#fff";return i?s="silver":n&&(s="darkkhaki"),r.a.createElement("div",{ref:o,style:{backgroundColor:s}},i?"Release to drop":"Drag a box here",r.a.createElement("div",{id:"stage",className:"stage"}))}),null))}}]),a}(n.Component)),A=t(121),R=function(){var e=Object.keys(w);console.log(e);var a=[];return e.map((function(e){var t;switch(e){case"Affix":t={tag:e,label:"\u56fa\u9489",icon:"pushpin"};break;case"Anchor":t={tag:e,label:"\u951a\u70b9",icon:"number"};break;case"AutoComplete":t={tag:e,label:"\u81ea\u52a8\u5b8c\u6210",icon:"check"};break;case"Alert":t={tag:"Alert",label:"\u63d0\u793a",icon:"exclamation"};break;case"Avatar":t={tag:"Avatar",label:"\u5934\u50cf",icon:"user"};break;case"BackTop":t={tag:"BackTop",label:"\u8fd4\u56de\u9996\u9875",icon:"to-top"};break;case"Badge":t={tag:"Badge",label:"\u5fbd\u6807",icon:"book"};break;case"Breadcrumb":t={tag:"Breadcrumb",label:"\u9762\u5305\u5c51",icon:"sort-ascending"};break;case"Button":t={tag:"Button",label:"\u6309\u94ae",icon:"border"};break;case"Calendar":t={tag:"Calendar",label:"\u65e5\u5386",icon:"calendar"};break;case"Card":t={tag:"Card",label:"\u5361\u7247",icon:"credit-card"};break;case"Collapse":t={tag:"Collapse",label:"\u6298\u53e0\u9762\u677f",icon:"menu-unfold"};break;case"Carousel":t={tag:"Carousel",label:"\u8f6e\u64ad\u56fe",icon:"swap"};break;case"Cascader":t={tag:"Cascader",label:"\u7ea7\u8054",icon:"fall"};break;case"Checkbox":t={tag:"Checkbox",label:"\u590d\u9009\u6846",icon:"check-square"};break;case"Col":t={tag:"Col",label:"\u6805\u683c\u5217",icon:"column-height"};break;case"Comment":t={tag:"Comment",label:"\u8bc4\u8bba",icon:"message"};break;case"DatePicker":t={tag:"DatePicker",label:"\u65f6\u95f4\u9009\u62e9",icon:"clock-circle"};break;case"Descriptions":t={tag:"Descriptions",label:"\u63cf\u8ff0\u5217\u8868",icon:"ordered-list"};break;case"Divider":t={tag:"Divider",label:"\u5206\u5272\u7ebf",icon:"line"};break;case"Dropdown":t={tag:"Dropdown",label:"\u4e0b\u62c9\u83dc\u5355",icon:"select"};break;case"Drawer":t={tag:"Drawer",label:"\u62bd\u5c49",icon:"switcher"};break;case"Empty":t={tag:"Empty",label:"\u7a7a\u72b6\u6001",icon:"stop"};break;case"Form":t={tag:"Form",label:"\u8868\u5355",icon:"form"};break;case"Icon":t={tag:"Icon",label:"\u56fe\u6807",icon:"global"};break;case"Input":t={tag:"Input",label:"\u8f93\u5165\u6846",icon:"edit"};break;case"InputNumber":t={tag:"InputNumber",label:"\u6570\u5b57\u8f93\u5165",icon:"plus"};break;case"Layout":t={tag:"Layout",label:"\u5e03\u5c40",icon:"pic-center"};break;case"List":t={tag:"List",label:"\u5217\u8868",icon:"unordered-list"};break;case"message":t={tag:"message",label:"\u5168\u5c40\u63d0\u793a",icon:"warning"};break;case"Menu":t={tag:"Menu",label:"\u83dc\u5355\u5bfc\u822a",icon:"menu"};break;case"Mentions":t={tag:"Mentions",label:"\u63d0\u53ca",icon:"share-alt"};break;case"Modal":t={tag:"Modal",label:"\u5bf9\u8bdd\u6846",icon:"block"};break;case"Statistic":t={tag:"Statistic",label:"\u7edf\u8ba1\u6570\u503c",icon:"bar-chart"};break;case"notification":t={tag:"notification",label:"\u901a\u77e5\u63d0\u9192",icon:"notification"};break;case"PageHeader":t={tag:"PageHeader",label:"\u9875\u5934",icon:"profile"};break;case"Pagination":t={tag:"Pagination",label:"\u5206\u9875",icon:"ellipsis"};break;case"Popconfirm":t={tag:"Popconfirm",label:"\u786e\u8ba4\u6c14\u6ce1",icon:"heart"};break;case"Popover":t={tag:"Popover",label:"\u6c14\u6ce1\u5361\u7247",icon:"snippets"};break;case"Progress":t={tag:"Progress",label:"\u8fdb\u5ea6\u6761",icon:"percentage"};break;case"Radio":t={tag:"Radio",label:"\u5355\u9009",icon:"instagram"};break;case"Rate":t={tag:"Rate",label:"\u8bc4\u5206",icon:"star"};break;case"Result":t={tag:"Result",label:"\u7ed3\u679c",icon:"check-circle"};break;case"Row":t={tag:"Row",label:"\u6805\u683c\u884c",icon:"column-width"};break;case"Select":t={tag:"Select",label:"\u9009\u62e9\u5668",icon:"more"};break;case"Skeleton":t={tag:"Skeleton",label:"\u9aa8\u67b6\u5c4f",icon:"pic-left"};break;case"Slider":t={tag:"Slider",label:"\u6ed1\u52a8\u8f93\u5165",icon:"sliders"};break;case"Spin":t={tag:"Spin",label:"\u52a0\u8f7d\u4e2d",icon:"loading"};break;case"Steps":t={tag:"Steps",label:"\u6b65\u9aa4\u6761",icon:"fast-forward"};break;case"Switch":t={tag:"Switch",label:"\u5f00\u5173",icon:"retweet"};break;case"Table":t={tag:"Table",label:"\u8868\u683c",icon:"table"};break;case"Transfer":t={tag:"Transfer",label:"\u7a7f\u68ad\u6846",icon:"swap"};break;case"Tree":t={tag:"Tree",label:"\u6811\u5f62",icon:"apartment"};break;case"TreeSelect":t={tag:"TreeSelect",label:"\u6811\u9009\u62e9",icon:"pull-request"};break;case"Tabs":t={tag:"Tabs",label:"\u6807\u7b7e\u9875",icon:"control"};break;case"Tag":t={tag:"Tag",label:"\u6807\u7b7e",icon:"tags"};break;case"TimePicker":t={tag:"TimePicker",label:"\u65f6\u95f4\u9009\u62e9",icon:"clock-circle"};break;case"Timeline":t={tag:"Timeline",label:"\u65f6\u95f4\u8f74",icon:"stock"};break;case"Tooltip":t={tag:"Tooltip",label:"\u6587\u5b57\u63d0\u793a",icon:"info-circle"};break;case"Typography":t={tag:"Typography",label:"\u6392\u7248",icon:"italic"};break;case"Upload":t={tag:"Upload",label:"\u6587\u4ef6\u4e0a\u4f20",icon:"cloud-upload"}}return t?a.push(t):console.log(e),t})),a},M=t(36),I=t(647);t(642);function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(Object(t),!0).forEach((function(a){Object(j.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var q=A.a.TabPane;console.log(M.a.defaultProps);var H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).callback=function(e){console.log(e)},t.state={components:[]},t}return Object(u.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.setState({components:R()})}},{key:"render",value:function(){var e=this.state.components,a=function(e){var a=e.option,t=a.tag,n=a.icon,c=a.label,l=Object(I.a)({item:{name:t,type:x},end:function(e,a){var n=a.getDropResult();e&&n&&alert("You dropped ".concat(t," into ").concat(n.name,"!"))},collect:function(e){return{isDragging:e.isDragging()}}}),o=Object(O.a)(l,2),i=o[0].isDragging,s=o[1],b=i?.4:1,m=i?{border:"1px dashed gray",backgroundColor:"white",cursor:"move"}:null;return r.a.createElement("div",{ref:s,style:F({},m,{opacity:b}),className:"component",tag:t},r.a.createElement("div",{className:"item"},r.a.createElement(f.a,{type:n}),r.a.createElement("br",null),c))};return r.a.createElement("div",{className:"tool"},r.a.createElement(A.a,{defaultActiveKey:"1",onChange:this.callback},r.a.createElement(q,{tab:r.a.createElement(f.a,{type:"appstore"}),key:"1"},r.a.createElement("div",{className:"alls"},e.map((function(e,t){return r.a.createElement(a,{option:e,key:t})})))),r.a.createElement(q,{tab:r.a.createElement(f.a,{type:"form"}),key:"2"},"\u5f53\u524d\u7ec4\u4ef6\u7f16\u8f91"),r.a.createElement(q,{tab:r.a.createElement(f.a,{type:"setting"}),key:"3"},"\u9875\u9762\u914d\u7f6e")))}}]),a}(n.Component);t(643);var J=function(){return r.a.createElement(o.a,{backend:i.a},r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"main"},r.a.createElement(y,null),r.a.createElement("div",{className:"canvas"},r.a.createElement(B,null)),r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[316,1,2]]]);
//# sourceMappingURL=main.f01eef1d.chunk.js.map