(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},5:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(21),i=c.n(s),a=c(9),o=c(3),j=c(2),l=Object(r.createContext)({allClassifications:[],allGatewayWords:[],gatewayWord:void 0,classification:void 0,projects:[]}),d=(c(5),c(0));function b(){var e=Object(r.useContext)(l),t=Object(r.useState)(e.gatewayWord),c=Object(j.a)(t,2),n=c[0],s=c[1];return Object(d.jsxs)("div",{className:"choose-gateway-word-title",children:["What ",Object(d.jsx)("br",{})," makes ",Object(d.jsx)("br",{}),"Calgary",Object(d.jsxs)("div",{className:"list-spacer",children:[Object(d.jsxs)("select",{className:"list-style",value:n,onChange:function(t){s(t.target.value),e.setGatewayWord(t.target.value)},children:[Object(d.jsx)("option",{value:""}),e.allGatewayWords.map((function(e){return Object(d.jsx)("option",{children:e},e)}))]}),"\xa0?",Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"button-spacer",children:n?Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"button-lets-go",children:Object(d.jsx)(a.b,{className:"button-styling",to:"/Category",children:"Let's Go"})})}):null})})]})]})}function u(){var e=Object(r.useContext)(l),t="";return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"header-container",children:Object(d.jsxs)("div",{className:"title-text",children:["What makes Calgary"," ",Object(d.jsx)("select",{className:"list-style",value:e.gatewayWord,onChange:function(c){t=c.target.value,e.setGatewayWord(t)},children:e.allGatewayWords.map((function(e){return Object(d.jsx)("option",{children:e},e)}))}),"\xa0?"]})})})})}function O(){var e=Object(r.useContext)(l);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"classification-container",children:[e.classification&&Object(d.jsx)("div",{className:"title-text",children:e.classification.classificationName}),e.classification&&Object(d.jsx)("div",{className:"description-text border-bottom",children:e.classification.shortDescription}),Object(d.jsx)("h2",{className:"title-text-padding",children:"EXPLORE PROJECTS"})]})})})}var p=function(e){var t=e.children,c=e.type,r=(e.onClick,e.linkProperty),n=e.imageUrl,s=r||"/ProjectPage";return Object(d.jsx)("div",{children:Object(d.jsx)(a.b,{to:s,className:"btn-text",children:Object(d.jsx)("button",{style:{backgroundImage:"url(".concat(n,")")},className:"btn-large",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},type:c,children:Object(d.jsx)("div",{className:"project-name-on-slider",children:t})})})})},x=c(24),h=function(e){var t=e.slides,c=e.selectedProjectIndex,r=e.setSelectedProjectIndex,n=Array.from(t),s=n.length;return!Array.isArray(n).length<=0?null:Object(d.jsxs)("div",{className:"slider-container",children:[Object(d.jsx)("div",{className:"slider-container-left",children:Object(d.jsx)(x.a,{className:"arrow",onClick:function(){r(0===c?s-1:c-1)}})}),Object(d.jsx)("section",{className:"slider",children:n.map((function(e,t){return Object(d.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(d.jsx)(p,{imageUrl:e.imageUrls.image1.image,linkProperty:"/ProjectPage/"+e._id,children:Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"project-name-align",children:Object(d.jsxs)("span",{children:[e.projectName," ",Object(d.jsxs)("div",{className:"count",children:[t+1," of ",s," "]})]})})})})},t)}))}),Object(d.jsx)("div",{className:"slider-container-right",children:Object(d.jsx)(x.b,{className:"arrow",onClick:function(){r(c===s-1?0:c+1)}})})]})};var f=function(e){var t=e.selectedProjectIndex,c=e.setSelectedProjectIndex,n=Object(r.useContext)(l);return Object(d.jsx)(h,{slides:n.projects,selectedProjectIndex:t,setSelectedProjectIndex:c})};function m(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"navbar-container border-top",children:[Object(d.jsx)(a.b,{to:"/",className:"nav-links",children:"Home"}),Object(d.jsx)(a.b,{to:"/Category",className:"nav-links",children:"Explore"}),Object(d.jsx)(a.b,{to:"/Map",className:"nav-links",children:"Map"})]})})})}function v(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"container-flex",children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(f,{selectedProjectIndex:c,setSelectedProjectIndex:n})}),Object(d.jsx)("div",{children:Object(d.jsx)(m,{})})]})}var g=c(14),y=c.n(g);c(25);y.a.accessToken="pk.eyJ1IjoiZmVtaWJvZGVnZW9yZ2VnIiwiYSI6ImNrcWJieTB4ODAxMWkydW1pc3dlYzQ1aHMifQ.kn7V2iHQXXuGXyqLmTjPgQ";var N=function(e){var t=e.setSelectedProjectIndex,c=e.selectedProjectIndex,n=Object(r.useRef)(null),s=Object(r.useContext)(l),i=Array.from(s.projects),a=Object(r.useState)(null),o=Object(j.a)(a,2),b=o[0],u=o[1];return Object(r.useEffect)((function(){var e=[];b&&i.forEach((function(r,n){var s=document.createElement("div");e.push(s),s.className=n===c?"red-marker":"markers",new y.a.Marker(s).setLngLat(r.location.coordinates).addTo(b),s.addEventListener("click",(function(){t(n)}))}));return function(){e.forEach((function(e){return e.remove()}))}}),[i,t,c,b]),Object(r.useEffect)((function(){var e=new y.a.Map({container:n.current,style:"mapbox://styles/femibodegeorgeg/cks6lqlra6vmv17p669fj7r46",center:[-114.066666,51.049999],zoom:10,attributionControl:!0});e.addControl(new y.a.NavigationControl({showZoom:!0,showCompass:!0})),e.addControl(new y.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,showAccuracyCircle:!0,showUserHeading:!0})),u(e)}),[s.projects]),Object(d.jsxs)("div",{className:"map-spacer-top",children:[Object(d.jsx)("div",{className:"map-container",ref:n}),Object(d.jsx)("div",{className:"map-spacer-bottom"})]})};function C(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(N,{setSelectedProjectIndex:n,selectedProjectIndex:c})}),Object(d.jsx)("div",{className:"slider-spacer",children:Object(d.jsx)(f,{selectedProjectIndex:c,setSelectedProjectIndex:n})}),Object(d.jsx)("div",{children:Object(d.jsx)(m,{})})]})}var w=c(10),S=c.n(w),T=c(12),I=function(e){var t=e.projectName,c=e.projectImageBackground,n=e.projectImageAlt,s=Object(r.useCallback)((function(e,t){var c=window.getComputedStyle(e).fontSize;e.style.fontSize=parseInt(c)-.1+"px",e.clientHeight>t&&s(e,t)}),[]);return Object(r.useEffect)((function(){var e=document.getElementById("outer").clientHeight,t=document.getElementById("title");t.clientHeight>e&&s(t,e)}),[t,s]),Object(d.jsx)("div",{className:"border-bottom",children:Object(d.jsxs)("div",{className:"project-header",children:[Object(d.jsxs)("div",{id:"outer",children:[Object(d.jsxs)("div",{className:"project-title",id:"title",children:[" ",t," "]}),Object(d.jsx)("img",{id:"pict",src:c,alt:n,style:{width:"75%",padding:"0vw 0vw 0vw 5vw",float:"right"}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})})};var P=function(e){var t=e.label,c=e.value;return function(e){return void 0!==e&&e.length>0}(c)&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:t}),c]})},E=function(e){var t=e.projectAddress,c=e.projectCity,r=e.projectProvince,n=e.projectPostalCode;return Object(d.jsxs)("div",{className:"border-right project-padding",children:[Object(d.jsx)(P,{label:"ADDRESS",value:t}),Object(d.jsx)("br",{}),Object(d.jsx)(P,{label:"CITY",value:c}),Object(d.jsx)("br",{}),Object(d.jsx)(P,{label:"PROVINCE",value:r}),Object(d.jsx)("br",{}),Object(d.jsx)(P,{label:"POSTAL CODE:",value:n})]})};var k=function(e){var t=e.label,c=e.value;return function(e){return void 0!==e&&e.length>0}(c)&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:t}),c]})},L=function(e){var t=e.projectName,c=e.projectTypology,r=e.projectNeighbourhood,n=e.projectCity,s=e.projectProvince,i=e.projectFirm,a=e.projectYear,o=e.projectClient;return Object(d.jsxs)("div",{className:"border project-description project-padding",children:["The ",t," is a ",c," located in the"," ",r," neighbourhood in ",n,",",s,Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"The project was"," ",Object(d.jsxs)(k,{value:i,children:[" ","designed by ",i," and"]})," ","completed in ",a," ",Object(d.jsx)(k,{value:o,children:"for the"})," ",o]})},D=function(e){var t=e.projectPrimaryName,c=e.projectSecondaryName,r=e.projectTertiaryName;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"border-top project-padding-left",children:Object(d.jsx)("h2",{children:"CLASSIFICATIONS"})}),Object(d.jsxs)("div",{className:"border-top project-padding-left",children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:r})]})]})},W=function(e){var t=e.featureWords;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"border-top project-padding-left",children:Object(d.jsx)("h2",{children:"FEATURES"})}),Object(d.jsx)("div",{className:"border-top project-padding-left",children:t.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:e})},e)}))})]})},A=c(16),F=Object(r.createContext)({allTerms:[],selectSelectedTerm:function(){},selectedDefinition:void 0}),G=(c(26),function(e,t,c){return t.indexOf(e,c)}),R=function(e){var t=e.text,c=e.term,n=Object(r.useContext)(F);return c?Object(d.jsxs)("span",{className:"glossary-word",onClick:function(){return n.setSelectedTerm(c)},children:[t," "]}):Object(d.jsx)("span",{children:t})},U=function(e){var t=e.text,c=Object(r.useContext)(F),n=Object(r.useState)([]),s=Object(j.a)(n,2),i=s[0],a=s[1];return Object(r.useEffect)((function(){var e=Object(A.a)(c.allTerms);e.sort((function(e,t){return t.length-e.length}));var r=[{text:t}];e.forEach((function(e){var t=[];r.forEach((function(c){c.term?t.push(c):t.push.apply(t,Object(A.a)(function(e,t){for(var c=[],r=0,n=e.toUpperCase(),s=t.text.toUpperCase(),i=G(n,s);-1!==i;)c.push({text:t.text.substr(r,i-r)}),c.push({text:t.text.substr(i,e.length),term:e}),r=i+e.length,i=G(n,s,i+1);return r<t.text.length&&c.push({text:t.text.substr(r)}),c}(e,c)))})),r=t})),a(r)}),[t,c]),Object(d.jsx)(d.Fragment,{children:i.map((function(e,t){return Object(d.jsx)(R,{text:e.text,term:e.term},t)}))})},B=function(e){var t=e.projectDescription,c=e.projectPrimaryName,r=e.projectPrimaryDescription,n=e.projectSecondaryName,s=e.projectSecondaryDescription,i=e.projectTertiaryName,a=e.projectTertiaryDescription;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"border-top project-padding-left",children:Object(d.jsx)("h2",{children:"PROJECT DESCRIPTION"})}),Object(d.jsx)("div",{className:"border-top project-padding-left",children:Object(d.jsx)("p",{className:"descriptionFormat",children:Object(d.jsx)(U,{text:t})})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"border-top projectclassification project-padding-left",children:Object(d.jsx)("h2",{children:"RELATED CLASSIFICATIONS"})}),Object(d.jsxs)("div",{className:"border-top projectclassification project-padding-left",children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"classificationName",children:c}),Object(d.jsx)("pre",{className:"descriptionFormat",children:Object(d.jsx)(U,{text:r})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"classificationName",children:n}),Object(d.jsx)("pre",{className:"descriptionFormat",children:Object(d.jsx)(U,{text:s})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"classificationName",children:i}),Object(d.jsx)("pre",{className:"descriptionFormat",children:Object(d.jsx)(U,{text:a})})]})]})]})},H=c(31),J=c.n(H),M={overlay:{backgroundColor:"#00000080"},content:{top:"20px",left:"20px",bottom:"20px",right:"20px",backgroundColor:"black",color:"white"}},V=function(e){var t=e.terms,c=e.selectedLetter,r=e.selectTerm,n=t.filter((function(e){return e.startsWith(c)})),s=Object(A.a)(n);return s.sort(),Object(d.jsx)("div",{className:"glossary-index",children:s.map((function(e,t){return Object(d.jsx)("div",{onClick:function(){return r(e)},children:e},"term"+t)}))})},Y=function(e){var t=e.selectedDefinition;return t?Object(d.jsxs)("div",{className:"glossary-entry",children:[Object(d.jsx)("div",{className:"glossary-entry-title",children:t.term}),Object(d.jsx)("div",{className:"glossary-entry-text",children:t.description})]}):null},Z=function(e){var t=e.letter,c=e.selectLetter;return Object(d.jsx)("div",{className:"glossary-letter",onClick:function(){return c(t)},children:t})},Q=function(e){var t=e.selectLetter;return Object(d.jsxs)("div",{className:"glossary-letters border-right",children:[Object(d.jsx)(Z,{letter:"A",selectLetter:t}),Object(d.jsx)(Z,{letter:"B",selectLetter:t}),Object(d.jsx)(Z,{letter:"C",selectLetter:t}),Object(d.jsx)(Z,{letter:"D",selectLetter:t}),Object(d.jsx)(Z,{letter:"E",selectLetter:t}),Object(d.jsx)(Z,{letter:"F",selectLetter:t}),Object(d.jsx)(Z,{letter:"G",selectLetter:t}),Object(d.jsx)(Z,{letter:"H",selectLetter:t}),Object(d.jsx)(Z,{letter:"I",selectLetter:t}),Object(d.jsx)(Z,{letter:"J",selectLetter:t}),Object(d.jsx)(Z,{letter:"K",selectLetter:t}),Object(d.jsx)(Z,{letter:"L",selectLetter:t}),Object(d.jsx)(Z,{letter:"M",selectLetter:t}),Object(d.jsx)(Z,{letter:"N",selectLetter:t}),Object(d.jsx)(Z,{letter:"O",selectLetter:t}),Object(d.jsx)(Z,{letter:"P",selectLetter:t}),Object(d.jsx)(Z,{letter:"Q",selectLetter:t}),Object(d.jsx)(Z,{letter:"R",selectLetter:t}),Object(d.jsx)(Z,{letter:"S",selectLetter:t}),Object(d.jsx)(Z,{letter:"T",selectLetter:t}),Object(d.jsx)(Z,{letter:"U",selectLetter:t}),Object(d.jsx)(Z,{letter:"V",selectLetter:t}),Object(d.jsx)(Z,{letter:"W",selectLetter:t}),Object(d.jsx)(Z,{letter:"X",selectLetter:t}),Object(d.jsx)(Z,{letter:"Y",selectLetter:t}),Object(d.jsx)(Z,{letter:"Z",selectLetter:t})]})},X=function(){var e=Object(r.useContext)(F),t=Object(r.useState)(!1),c=Object(j.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)(),a=Object(j.a)(i,2),o=a[0],l=a[1];Object(r.useEffect)((function(){e.selectedDefinition&&(l(e.selectedDefinition.term.charAt(0)),s(!0))}),[e]);return Object(d.jsx)(J.a,{isOpen:n,style:M,children:Object(d.jsxs)("div",{className:"glossary-fullscreen",children:[Object(d.jsxs)("div",{className:"glossary-header border-bottom",children:[Object(d.jsx)("div",{className:"glossary-button-container",children:Object(d.jsx)("div",{className:"glossary-cancel",onClick:function(){return e.setSelectedTerm(null),void s(!1)},children:"Cancel"})}),Object(d.jsx)("h1",{children:"Glossary"})]}),Object(d.jsxs)("div",{className:"glossary-body",children:[Object(d.jsx)(Q,{selectLetter:function(t){l(t),e.setSelectedTerm(null)}}),Object(d.jsx)("div",{className:"glossary-entry-def",children:e.selectedDefinition?Object(d.jsx)(Y,{selectedDefinition:e.selectedDefinition}):Object(d.jsx)(V,{terms:e.allTerms,selectedLetter:o,selectTerm:function(t){e.setSelectedTerm(t)}})})]})]})})},z=function(){var e=Object(o.f)().id,t=Object(r.useState)(),c=Object(j.a)(t,2),n=c[0],s=c[1],i=Object(r.useContext)(l),a=Object(r.useState)(0),b=Object(j.a)(a,2),u=b[0],O=b[1];return Object(r.useEffect)((function(){(function(){var t=Object(T.a)(S.a.mark((function t(){var c,r,n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:"GET",headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,fetch("/api/project/"+e,c);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Fetch for project ID failed");case 7:return t.next=9,r.json();case 9:n=t.sent,s(n),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log("Error on client-side.",t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),void 0!==n?Object(d.jsxs)("div",{className:"container-grid",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(I,{projectName:n.projectName,projectImageBackground:n.imageUrls.image1.image,projectImageAlt:n.imageUrls.image1.alt})}),Object(d.jsxs)("div",{className:"container-grid-two-in-the-row",children:[(n.location.address||n.location.city||n.location.province||n.location.postalCode)&&Object(d.jsx)(E,{projectAddress:n.location.address,projectCity:n.location.city,projectProvince:n.location.province,projectPostalCode:n.location.postalCode}),Object(d.jsx)(L,{projectName:n.projectName,projectTypology:n.projectTypology,projectNeighbourhood:n.Neighbourhood,projectCity:n.location.city,projectProvince:n.location.province,projectFirm:n.companyName,projectYear:n.dateOfCompletion,projectClient:n.projectOwnersAndClients})]}),Object(d.jsx)(D,{projectPrimaryName:n.innovationDescriptions.primaryTypeOfInnovation.classificationName,projectSecondaryName:n.innovationDescriptions.secondaryTypeOfInnovation.classificationName,projectTertiaryName:n.innovationDescriptions.tertiaryTypeOfInnovation.classificationName}),Object(d.jsx)(W,{featureWords:n.innovationDescriptions.featureWords}),Object(d.jsx)(B,{projectDescription:n.projectDescription,projectPrimaryName:n.innovationDescriptions.primaryTypeOfInnovation.classificationName,projectPrimaryDescription:n.innovationDescriptions.primaryTypeOfInnovation.projectDescription,projectSecondaryName:n.innovationDescriptions.secondaryTypeOfInnovation.classificationName,projectSecondaryDescription:n.innovationDescriptions.secondaryTypeOfInnovation.projectDescription,projectTertiaryName:n.innovationDescriptions.tertiaryTypeOfInnovation.classificationName,projectTertiaryDescription:n.innovationDescriptions.tertiaryTypeOfInnovation.projectDescription})]}),Object(d.jsx)("div",{className:"border-top project-padding-left",children:Object(d.jsx)("h2",{children:"RELATED PROJECTS"})}),Object(d.jsxs)("div",{className:"border-top",children:[Object(d.jsx)("br",{}),Object(d.jsx)(h,{className:"slider-on-project-page border-top border-bottom",slides:i.projects,selectedProjectIndex:u,setSelectedProjectIndex:O})]}),Object(d.jsx)("div",{className:"navbar-project-page",children:Object(d.jsx)(m,{})}),Object(d.jsx)(X,{})]}):null};function q(e){var t=e.children,c=Object(r.useState)([]),n=Object(j.a)(c,2),s=n[0],i=n[1],a=Object(r.useState)([]),o=Object(j.a)(a,2),b=o[0],u=o[1],O=Object(r.useState)(),p=Object(j.a)(O,2),x=p[0],h=p[1],f=Object(r.useState)(),m=Object(j.a)(f,2),v=m[0],g=m[1],y=Object(r.useState)([]),N=Object(j.a)(y,2),C=N[0],w=N[1];return Object(r.useEffect)((function(){(function(){var e=Object(T.a)(S.a.mark((function e(){var t,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/classification");case 3:if(200===(t=e.sent).status){e.next=6;break}throw new Error("Fetch for classifications failed");case 6:return e.next=8,t.json();case 8:c=e.sent,i(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error on Client-Side: Classifications",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=[];s.forEach((function(t){var c=t.gatewayWords;e=e.concat(c)})),u(e)}),[s]),Object(r.useEffect)((function(){if(x){var e=s.find((function(e){return e.gatewayWords.includes(x)}));g(e)}}),[x,s]),Object(r.useEffect)((function(){(function(){var e=Object(T.a)(S.a.mark((function e(){var t,c,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={method:"GET",headers:{"Content-Type":"application/json"}},!v){e.next=17;break}return e.prev=2,e.next=5,fetch("/api/project/findProjectsByClassification?classificationId="+v._id,t);case 5:if(200===(c=e.sent).status){e.next=8;break}throw new Error("Fetch for project summaries failed");case 8:return e.next=10,c.json();case 10:r=e.sent,w(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("Error on client-side.",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}})()()}),[x,v]),Object(d.jsx)(l.Provider,{value:{allGatewayWords:b,gatewayWord:x,setGatewayWord:h,classification:v,projects:C},children:t})}function _(e){return e.replace(/\u00A0/g," ")}function K(e){return{term:_(e.term),description:_(e.description)}}function $(e){var t=e.children,c=Object(r.useState)([]),n=Object(j.a)(c,2),s=n[0],i=n[1],a=Object(r.useState)([]),o=Object(j.a)(a,2),l=o[0],b=o[1],u=Object(r.useState)(),O=Object(j.a)(u,2),p=O[0],x=O[1];Object(r.useEffect)((function(){(function(){var e=Object(T.a)(S.a.mark((function e(){var t,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/glossary");case 3:if(200===(t=e.sent).status){e.next=6;break}throw new Error("Fetch for glossary words failed");case 6:return e.next=8,t.json();case 8:c=e.sent,i(c.map(K)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error on Client-Side: Glossary Defintions",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=s.map((function(e){return e.term}));b(e)}),[s]);return Object(d.jsx)(F.Provider,{value:{allTerms:l,setSelectedTerm:function(e){var t=s.find((function(t){return t.term===e}));x(t)},selectedDefinition:p},children:t})}var ee=function(){return Object(d.jsx)(q,{children:Object(d.jsx)($,{children:Object(d.jsx)(a.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,component:b}),Object(d.jsx)(o.a,{path:"/Category",component:v}),Object(d.jsx)(o.a,{path:"/Map",component:C}),Object(d.jsx)(o.a,{path:"/ProjectPage/:id",component:z})]})})})})},te=(c(55),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))});i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root")),te()}},[[56,1,2]]]);
//# sourceMappingURL=main.56a5908e.chunk.js.map