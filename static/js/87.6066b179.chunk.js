(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1135:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),o=a.n(l),c=a(0),i=a.n(c),s=(a(1),a(3)),u=a(7),d=i.a.forwardRef(function(e,t){var a=e.classes,n=e.className,l=e.dividers,c=void 0!==l&&l,u=o()(e,["classes","className","dividers"]);return i.a.createElement("div",r()({className:Object(s.a)(a.root,n,c&&a.dividers),ref:t},u))});t.a=Object(u.a)(function(e){return{root:{flex:"1 1 auto",padding:"8px 24px",WebkitOverflowScrolling:"touch",overflowY:"auto"},dividers:{borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}},{name:"MuiDialogContent"})(d)},1147:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),o=a.n(l),c=a(0),i=a.n(c),s=(a(1),a(3)),u=a(7),d=i.a.forwardRef(function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,l=e.classes,c=e.className,u=o()(e,["disableSpacing","classes","className"]);return i.a.createElement("div",r()({className:Object(s.a)(l.root,c,!n&&l.spacing),ref:t},u))});t.a=Object(u.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiDialogActions"})(d)},2375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a(5),c=a(186),i=a(15),s=a(128),u=a(983),d=a(6),m=a(984),p=a(1064),f=a(978),b=a(1036),E=a(1061),O=a(108),v=a.n(O),h=a(350),y=a.n(h),g=a(3),D=a(9),j=a(40),T=a.n(j),N="[TODO APP] GET TODOS",x="[TODO APP] UPDATE TODOS",P="[TODO APP] TOGGLE STARRED",A="[TODO APP] TOGGLE COMPLETED",C="[TODO APP] TOGGLE IMPORTANT",w="[TODO APP] UPDATE TODO",k="[TODO APP] ADD TODO",S="[TODO APP] REMOVE TODO",L="[TODO APP] SET SEARCH TEXT",I="[TODO APP] OPEN NEW TODO DIALOG",R="[TODO APP] CLOSE NEW TODO DIALOG",G="[TODO APP] OPEN EDIT TODO DIALOG",B="[TODO APP] CLOSE EDIT TODO DIALOG",_="[TODO APP] TOGGLE ORDER DESCENDING",M="[TODO APP] CHANGE ORDER";function W(){return function(e,t){var a=t().todoApp.todos.routeParams;return T.a.get("/api/todo-app/todos",{params:a}).then(function(t){return e({type:x,payload:t.data})})}}function F(e){var t=T.a.post("/api/todo-app/update-todo",e);return function(e){return t.then(function(t){Promise.all([e({type:w,payload:t.data})]).then(function(){return e(W())})})}}var U="[TODO APP] GET FOLDERS";var H="[TODO APP] GET LABELS";var q="[TODO APP] GET FILTERS";var Y=Object(E.a)(function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}});var z=function(e){var t=Y();return r.a.createElement("div",{className:Object(g.a)(t.root,e.className)},r.a.createElement("div",{className:t.color,style:{backgroundColor:e.color}}),r.a.createElement("div",null,e.title))},J=Object(E.a)({todoItem:{"&.completed":{background:"rgba(0,0,0,0.03)","& .todo-title, & .todo-notes":{textDecoration:"line-through"}}}});var K=function(e){var t=Object(o.b)(),a=Object(o.c)(function(e){return e.todoApp.labels}),n=J(e);return r.a.createElement(m.a,{className:Object(g.a)(n.todoItem,{completed:e.todo.completed},"border-solid border-b-1 py-16  px-0 sm:px-8"),onClick:function(a){var n;a.preventDefault(),t((n=e.todo,{type:G,data:n}))},dense:!0,button:!0},r.a.createElement(p.a,{tabIndex:-1,disableRipple:!0,checked:e.todo.completed,onChange:function(){return t(function(e){var t=Object(D.a)({},e,{completed:!e.completed});return function(e){return Promise.all([e({type:A})]).then(function(){return e(F(t))})}}(e.todo))},onClick:function(e){return e.stopPropagation()}}),r.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden pl-8"},r.a.createElement(s.a,{variant:"subtitle1",className:"todo-title truncate",color:e.todo.completed?"textSecondary":"inherit"},e.todo.title),r.a.createElement(s.a,{color:"textSecondary",className:"todo-notes truncate"},d.a.truncate(e.todo.notes.replace(/<(?:.|\n)*?>/gm,""),{length:180})),r.a.createElement("div",{className:Object(g.a)(n.labels,"flex mt-8")},e.todo.labels.map(function(e){return r.a.createElement(z,{className:"mr-4",title:d.a.find(a,{id:e}).title,color:d.a.find(a,{id:e}).color,key:e})}))),r.a.createElement("div",{className:"px-8"},r.a.createElement(f.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(function(e){var t=Object(D.a)({},e,{important:!e.important});return function(e){return Promise.all([e({type:C})]).then(function(){return e(F(t))})}}(e.todo))}},e.todo.important?r.a.createElement(b.a,{style:{color:v.a[500]}},"error"):r.a.createElement(b.a,null,"error_outline")),r.a.createElement(f.a,{onClick:function(a){a.preventDefault(),a.stopPropagation(),t(function(e){var t=Object(D.a)({},e,{starred:!e.starred});return function(e){return Promise.all([e({type:P})]).then(function(){return e(F(t))})}}(e.todo))}},e.todo.starred?r.a.createElement(b.a,{style:{color:y.a[500]}},"star"):r.a.createElement(b.a,null,"star_outline"))))};var V=function(e){var t=Object(o.c)(function(e){return e.todoApp.todos.entities}),a=Object(o.c)(function(e){return e.todoApp.todos.searchText}),c=Object(o.c)(function(e){return e.todoApp.todos.orderBy}),m=Object(o.c)(function(e){return e.todoApp.todos.orderDescending}),p=Object(n.useState)(null),f=Object(i.a)(p,2),b=f[0],E=f[1];return Object(n.useEffect)(function(){t&&E(d.a.orderBy(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:l.B.filterArrayByString(a,t)}(t,a),[c],[m?"desc":"asc"]))},[t,a,c,m]),b?0===b.length?r.a.createElement(l.d,{delay:100},r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"There are no todos!"))):r.a.createElement(u.a,{className:"p-0"},r.a.createElement(l.e,{enter:{animation:"transition.slideUpBigIn"}},b.map(function(e){return r.a.createElement(K,{todo:e,key:e.id})}))):null},X=a(977),Q=a(994),Z=a(1037);var $=function(e){var t=Object(o.b)(),a=Object(o.c)(function(e){return e.todoApp.todos.orderBy}),n=Object(o.c)(function(e){return e.todoApp.todos.orderDescending});return r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement("div",{className:"flex"}),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(X.a,{className:""},r.a.createElement(Q.a,{value:a,onChange:function(e){var a;t((a=e.target.value,{type:M,orderBy:a}))},displayEmpty:!0,name:"filter",className:""},r.a.createElement(Z.a,{value:""},r.a.createElement("em",null,"Order by")),r.a.createElement(Z.a,{value:"startDate"},"Start Date"),r.a.createElement(Z.a,{value:"dueDate"},"Due Date"),r.a.createElement(Z.a,{value:"title"},"Title"))),r.a.createElement(f.a,{onClick:function(e){return t({type:_})}},r.a.createElement(b.a,{style:{transform:n?"scaleY(-1)":"scaleY(1)"}},"sort"))))},ee=a(162),te=a(1065),ae=a(511),ne=a(1038);var re=function(e){var t=Object(o.b)(),a=Object(o.c)(function(e){return e.todoApp.todos.searchText}),n=Object(o.c)(function(e){return e.fuse.settings.mainTheme});return r.a.createElement(ne.a,{theme:n},r.a.createElement("div",{className:"flex flex-1"},r.a.createElement(ee.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 ",elevation:1},r.a.createElement(te.a,{lgUp:!0},r.a.createElement(f.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},r.a.createElement(b.a,null,"menu"))),r.a.createElement(b.a,{color:"action"},"search"),r.a.createElement(ae.a,{placeholder:"Search",className:"pl-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t({type:L,searchText:e.target.value.toLowerCase()})}}))))},le=a(1052),oe={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"};var ce=function(){var e=Object(n.useState)("creapond"),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},r.a.createElement("div",{className:"flex items-center flex-1"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(b.a,{className:"text-32 mr-16"},"check_box")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement("span",{className:"text-24"},"To-Do"))),r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(le.a,{id:"account-selection",select:!0,label:a,value:a,onChange:function(e){o(e.target.value)},placeholder:"Select Account",margin:"normal"},Object.keys(oe).map(function(e,t){return r.a.createElement(Z.a,{key:e,value:e},oe[e])}))))},ie=a(1056),se=a(1040),ue=a(1042),de=Object(E.a)(function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}}}});var me=function(e){var t=Object(o.b)(),a=Object(o.c)(function(e){return e.todoApp.labels}),n=Object(o.c)(function(e){return e.todoApp.folders}),c=Object(o.c)(function(e){return e.todoApp.filters}),i=de(e);return r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:400},r.a.createElement("div",{className:"flex-auto border-l-1 border-solid"},r.a.createElement("div",{className:"p-24"},r.a.createElement(ie.a,{onClick:function(){t({type:I})},variant:"contained",color:"primary",className:"w-full"},"ADD TASK")),r.a.createElement("div",{className:i.listWrapper},r.a.createElement(u.a,null,n.length>0&&n.map(function(e){return r.a.createElement(m.a,{button:!0,component:l.C,to:"/apps/todo/"+e.handle,key:e.id,activeClassName:"active",className:i.listItem},r.a.createElement(b.a,{className:"list-item-icon",color:"action"},e.icon),r.a.createElement(se.a,{primary:e.title,disableTypography:!0}))})),r.a.createElement(u.a,null,r.a.createElement(ue.a,{className:i.listSubheader,disableSticky:!0},"FILTERS"),c.length>0&&c.map(function(e){return r.a.createElement(m.a,{button:!0,component:l.C,to:"/apps/todo/filter/"+e.handle,activeClassName:"active",className:i.listItem,key:e.id},r.a.createElement(b.a,{className:"list-item-icon",color:"action"},e.icon),r.a.createElement(se.a,{primary:e.title,disableTypography:!0}))})),r.a.createElement(u.a,null,r.a.createElement(ue.a,{className:"pr-24 pl-24",disableSticky:!0},"LABELS"),a.length>0&&a.map(function(e){return r.a.createElement(m.a,{button:!0,component:l.C,to:"/apps/todo/label/"+e.handle,key:e.id,className:i.listItem},r.a.createElement(b.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),r.a.createElement(se.a,{primary:e.title,disableTypography:!0}))})))))},pe=a(10),fe=a(1053),be=a(1048),Ee=a(1057),Oe=a(1135),ve=a(497),he=a(1050),ye=a(1043),ge=a(1067),De=a(873),je=a(1147),Te=a(130),Ne=a(66),xe=a.n(Ne),Pe={id:"",title:"",notes:"",startDate:new Date,dueDate:new Date,completed:!1,starred:!1,important:!1,deleted:!1,labels:[]};var Ae=function(e){var t=Object(o.b)(),a=Object(o.c)(function(e){return e.todoApp.todos.todoDialog}),c=Object(o.c)(function(e){return e.todoApp.labels}),u=Object(n.useState)(null),m=Object(i.a)(u,2),E=m[0],O=m[1],h=Object(Te.b)(Object(D.a)({},Pe)),g=h.form,j=h.handleChange,N=h.setForm,x=xe()(g.startDate).format(xe.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),P=xe()(g.dueDate).format(xe.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),A=Object(n.useCallback)(function(){"edit"===a.type&&a.data&&N(Object(D.a)({},a.data)),"new"===a.type&&N(Object(D.a)({},Pe,a.data,{id:l.B.generateGUID()}))},[a.data,a.type,N]);function C(){"edit"===a.type?t({type:B}):t({type:R})}function w(e,t){e.stopPropagation(),N(d.a.set(Object(D.a)({},g,{labels:g.labels.includes(t)?g.labels.filter(function(e){return e!==t}):[].concat(Object(pe.a)(g.labels),[t])})))}function L(){return g.title.length>0}return Object(n.useEffect)(function(){a.props.open&&A()},[a.props.open,A]),r.a.createElement(fe.a,Object.assign({},a.props,{onClose:C,fullWidth:!0,maxWidth:"sm"}),r.a.createElement(be.a,{position:"static",elevation:1},r.a.createElement(Ee.a,{className:"flex w-full"},r.a.createElement(s.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New Todo":"Edit Todo"))),r.a.createElement(Oe.a,{classes:{root:"p-0"}},r.a.createElement("div",{className:"mb-16"},r.a.createElement("div",{className:"flex items-center justify-between p-12"},r.a.createElement("div",{className:"flex"},r.a.createElement(p.a,{tabIndex:-1,checked:g.completed,onChange:function(){N(Object(D.a)({},g,{completed:!g.completed}))},onClick:function(e){return e.stopPropagation()}})),r.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},r.a.createElement(f.a,{onClick:function(){N(Object(D.a)({},g,{important:!g.important}))}},g.important?r.a.createElement(b.a,{style:{color:v.a[500]}},"error"):r.a.createElement(b.a,null,"error_outline")),r.a.createElement(f.a,{onClick:function(){N(Object(D.a)({},g,{starred:!g.starred}))}},g.starred?r.a.createElement(b.a,{style:{color:y.a[500]}},"star"):r.a.createElement(b.a,null,"star_outline")),r.a.createElement("div",null,r.a.createElement(f.a,{"aria-owns":E?"label-menu":null,"aria-haspopup":"true",onClick:function(e){O(e.currentTarget)}},r.a.createElement(b.a,null,"label")),r.a.createElement(ve.a,{id:"label-menu",anchorEl:E,open:Boolean(E),onClose:function(e){O(null)}},c.length>0&&c.map(function(e){return r.a.createElement(Z.a,{onClick:function(t){return w(t,e.id)},key:e.id},r.a.createElement(he.a,{className:"min-w-40"},r.a.createElement(b.a,{className:"mr-0",color:"action"},g.labels.includes(e.id)?"check_box":"check_box_outline_blank")),r.a.createElement(se.a,{primary:e.title,disableTypography:!0}),r.a.createElement(he.a,{className:"min-w-40"},r.a.createElement(b.a,{className:"mr-0",style:{color:e.color},color:"action"},"label")))}))))),r.a.createElement(ye.a,{className:"mx-24"})),g.labels.length>0&&r.a.createElement("div",{className:"flex flex-wrap  px-16 sm:px-24 mb-16"},g.labels.map(function(e){return r.a.createElement(ge.a,{avatar:r.a.createElement(De.a,{classes:{colorDefault:"bg-transparent"}},r.a.createElement(b.a,{className:"text-20",style:{color:d.a.find(c,{id:e}).color}},"label")),label:d.a.find(c,{id:e}).title,onDelete:function(t){return w(t,e)},className:"mr-8 my-8",classes:{label:"pl-4"},key:e})})),r.a.createElement("div",{className:"px-16 sm:px-24"},r.a.createElement(X.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0},r.a.createElement(le.a,{label:"Title",autoFocus:!0,name:"title",value:g.title,onChange:j,required:!0,variant:"outlined"})),r.a.createElement(X.a,{className:"mt-8 mb-16",required:!0,fullWidth:!0},r.a.createElement(le.a,{label:"Notes",name:"notes",multiline:!0,rows:"6",value:g.notes,onChange:j,variant:"outlined"})),r.a.createElement("div",{className:"flex"},r.a.createElement(le.a,{name:"startDate",label:"Start Date",type:"datetime-local",className:"mt-8 mb-16 mr-8",InputLabelProps:{shrink:!0},inputProps:{max:P},value:x,onChange:j,variant:"outlined"}),r.a.createElement(le.a,{name:"dueDate",label:"Due Date",type:"datetime-local",className:"mt-8 mb-16 ml-8",InputLabelProps:{shrink:!0},inputProps:{min:x},value:P,onChange:j,variant:"outlined"})))),"new"===a.type?r.a.createElement(je.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(ie.a,{variant:"contained",color:"primary",onClick:function(){t(function(e){var t=T.a.post("/api/todo-app/new-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:k})]).then(function(){return e(W())})})}}(g)),C()},disabled:!L()},"Add")):r.a.createElement(je.a,{className:"justify-between pl-8 sm:pl-16"},r.a.createElement(ie.a,{variant:"contained",color:"primary",onClick:function(){t(F(g)),C()},disabled:!L()},"Save"),r.a.createElement(f.a,{className:"min-w-auto",onClick:function(){t(function(e){var t=T.a.post("/api/todo-app/remove-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:S})]).then(function(){return e(W())})})}}(g.id)),C()}},r.a.createElement(b.a,null,"delete"))))},Ce=a(48),we=a(28),ke={entities:[],searchText:"",orderBy:"",orderDescending:!1,routeParams:{},todoDialog:{type:"new",props:{open:!1},data:null}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(D.a)({},e,{entities:d.a.keyBy(t.payload,"id"),searchText:"",routeParams:t.routeParams});case x:return Object(D.a)({},e,{entities:d.a.keyBy(t.payload,"id")});case I:return Object(D.a)({},e,{todoDialog:{type:"new",props:{open:!0},data:null}});case R:return Object(D.a)({},e,{todoDialog:{type:"new",props:{open:!1},data:null}});case G:return Object(D.a)({},e,{todoDialog:{type:"edit",props:{open:!0},data:t.data}});case B:return Object(D.a)({},e,{todoDialog:{type:"edit",props:{open:!1},data:null}});case w:var a=t.payload;return Object(D.a)({},e,{entities:Object(D.a)({},e.entities,Object(we.a)({},a.id,Object(D.a)({},a)))});case L:return Object(D.a)({},e,{searchText:t.searchText});case _:return Object(D.a)({},e,{orderDescending:!e.orderDescending});case M:return Object(D.a)({},e,{orderBy:t.orderBy});default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(pe.a)(t.payload);default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(pe.a)(t.payload);default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(pe.a)(t.payload);default:return e}},Ge=Object(Ce.d)({todos:Se,folders:Le,labels:Ie,filters:Re});t.default=Object(c.a)("todoApp",Ge)(function(e){var t=Object(o.b)(),a=Object(n.useRef)(null);return Object(n.useEffect)(function(){t(function(){var e=T.a.get("/api/todo-app/filters");return function(t){return e.then(function(e){return t({type:q,payload:e.data})})}}()),t(function(){var e=T.a.get("/api/todo-app/folders");return function(t){return e.then(function(e){return t({type:U,payload:e.data})})}}()),t(function(){var e=T.a.get("/api/todo-app/labels");return function(t){return e.then(function(e){return t({type:H,payload:e.data})})}}())},[t]),Object(n.useEffect)(function(){t(function(e){var t=T.a.get("/api/todo-app/todos",{params:e});return function(a){return t.then(function(t){return a({type:N,routeParams:e,payload:t.data})})}}(e.match.params))},[t,e.match.params]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.r,{classes:{root:"w-full",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(re,{pageLayout:a}),contentToolbar:r.a.createElement($,null),content:r.a.createElement(V,null),leftSidebarHeader:r.a.createElement(ce,null),leftSidebarContent:r.a.createElement(me,null),ref:a,innerScroll:!0}),r.a.createElement(Ae,null))})}}]);