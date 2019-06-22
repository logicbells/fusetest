(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1069:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var n=o.default.memo(o.default.forwardRef(function(a,n){return o.default.createElement(l.default,(0,r.default)({},a,{ref:n}),e)}));0;return n.muiName=l.default.muiName,n};var r=t(n(2)),o=t(n(0)),l=t(n(996))},1073:function(e,a,n){"use strict";var t=n(2),r=n.n(t),o=n(1060),l=n(129);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,r()({defaultTheme:l.a},a))}},1114:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");a.default=o},1293:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandLess");a.default=o},1386:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Home");a.default=o},1606:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return p});var t=n(0),r=n.n(t),o=n(1073),l=n(162),i=n(128),c=n(2383),s=n(1607),m=Object(o.a)(function(e){return{root:{justifyContent:"center",flexWrap:"wrap"},paper:{padding:e.spacing(1,2)}}});function u(e){e.preventDefault(),alert("You clicked a breadcrumb.")}function p(){var e=m();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(c.a,{"aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:u},"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:u},"Core"),r.a.createElement(i.a,{color:"textPrimary"},"Breadcrumb"))),r.a.createElement("br",null),r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(c.a,{"aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:u},"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:u},"Core"),r.a.createElement(s.a,{color:"textPrimary",href:"/components/breadcrumbs/",onClick:u,"aria-current":"page"},"Breadcrumb"))))}},1607:function(e,a,n){"use strict";var t=n(2),r=n.n(t),o=n(24),l=n.n(o),i=n(4),c=n.n(i),s=n(0),m=n.n(s),u=(n(1),n(3)),p=n(11),d=n(7),f=n(198),h=n(20),b=n(128),k=m.a.forwardRef(function(e,a){var n=e.classes,t=e.className,o=e.color,i=void 0===o?"primary":o,s=e.component,d=void 0===s?"a":s,k=e.onBlur,g=e.onFocus,y=e.TypographyClasses,v=e.underline,E=void 0===v?"hover":v,C=e.variant,x=void 0===C?"inherit":C,N=c()(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),L=Object(f.a)(),B=L.isFocusVisible,P=L.onBlurVisible,M=L.ref,j=m.a.useState(!1),I=l()(j,2),w=I[0],S=I[1],T=Object(h.c)(a,M);return m.a.createElement(b.a,r()({className:Object(u.a)(n.root,n["underline".concat(Object(p.a)(E))],t,"button"===d&&n.button,w&&n.focusVisible),classes:y,color:i,component:d,onBlur:function(e){w&&(P(),S(!1)),k&&k(e)},onFocus:function(e){B(e)&&S(!0),g&&g(e)},ref:T,variant:x},N))});a.a=Object(d.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:"none",border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(k)},1608:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Paper from \'@material-ui/core/Paper\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Link from \'@material-ui/core/Link\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n  },\n  paper: {\n    padding: theme.spacing(1, 2),\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  alert(\'You clicked a breadcrumb.\');\n}\n\nexport default function SimpleBreadcrumbs() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Paper elevation={0} className={classes.paper}>\n        <Breadcrumbs aria-label="Breadcrumb">\n          <Link color="inherit" href="/" onClick={handleClick}>\n            Material-UI\n          </Link>\n          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n            Core\n          </Link>\n          <Typography color="textPrimary">Breadcrumb</Typography>\n        </Breadcrumbs>\n      </Paper>\n      <br />\n      <Paper elevation={0} className={classes.paper}>\n        <Breadcrumbs aria-label="Breadcrumb">\n          <Link color="inherit" href="/" onClick={handleClick}>\n            Material-UI\n          </Link>\n          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n            Core\n          </Link>\n          <Link\n            color="textPrimary"\n            href="/components/breadcrumbs/"\n            onClick={handleClick}\n            aria-current="page"\n          >\n            Breadcrumb\n          </Link>\n        </Breadcrumbs>\n      </Paper>\n    </div>\n  );\n}\n'},1609:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return f});var t=n(0),r=n.n(t),o=n(1073),l=n(162),i=n(2383),c=n(128),s=n(1607),m=n(1610),u=n.n(m),p=Object(o.a)(function(e){return{root:{justifyContent:"center",flexWrap:"wrap"},paper:{padding:e.spacing(1,2)}}});function d(e){e.preventDefault(),alert("You clicked a breadcrumb.")}function f(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(i.a,{separator:"\u203a","aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb"))),r.a.createElement("br",null),r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(i.a,{separator:"-","aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb"))),r.a.createElement("br",null),r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(i.a,{separator:r.a.createElement(u.a,{fontSize:"small"}),"aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:d},"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:d},"Core"),r.a.createElement(c.a,{color:"textPrimary"},"Breadcrumb"))))}},1610:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"NavigateNext");a.default=o},1611:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Paper from \'@material-ui/core/Paper\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Link from \'@material-ui/core/Link\';\nimport NavigateNextIcon from \'@material-ui/icons/NavigateNext\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n  },\n  paper: {\n    padding: theme.spacing(1, 2),\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  alert(\'You clicked a breadcrumb.\');\n}\n\nexport default function CustomSeparator() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Paper elevation={0} className={classes.paper}>\n        <Breadcrumbs separator="\u203a" aria-label="Breadcrumb">\n          <Link color="inherit" href="/" onClick={handleClick}>\n            Material-UI\n          </Link>\n          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n            Core\n          </Link>\n          <Typography color="textPrimary">Breadcrumb</Typography>\n        </Breadcrumbs>\n      </Paper>\n      <br />\n      <Paper elevation={0} className={classes.paper}>\n        <Breadcrumbs separator="-" aria-label="Breadcrumb">\n          <Link color="inherit" href="/" onClick={handleClick}>\n            Material-UI\n          </Link>\n          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n            Core\n          </Link>\n          <Typography color="textPrimary">Breadcrumb</Typography>\n        </Breadcrumbs>\n      </Paper>\n      <br />\n      <Paper elevation={0} className={classes.paper}>\n        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">\n          <Link color="inherit" href="/" onClick={handleClick}>\n            Material-UI\n          </Link>\n          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>\n            Core\n          </Link>\n          <Typography color="textPrimary">Breadcrumb</Typography>\n        </Breadcrumbs>\n      </Paper>\n    </div>\n  );\n}\n'},1612:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g});var t=n(0),r=n.n(t),o=n(1073),l=n(162),i=n(128),c=n(2383),s=n(1607),m=n(1386),u=n.n(m),p=n(1613),d=n.n(p),f=n(1614),h=n.n(f),b=Object(o.a)(function(e){return{root:{padding:e.spacing(1,2)},link:{display:"flex"},icon:{marginRight:e.spacing(.5),width:20,height:20}}});function k(e){e.preventDefault(),alert("You clicked a breadcrumb.")}function g(){var e=b();return r.a.createElement(l.a,{elevation:0,className:e.root},r.a.createElement(c.a,{"aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"/",onClick:k,className:e.link},r.a.createElement(u.a,{className:e.icon}),"Material-UI"),r.a.createElement(s.a,{color:"inherit",href:"/getting-started/installation/",onClick:k,className:e.link},r.a.createElement(d.a,{className:e.icon}),"Core"),r.a.createElement(i.a,{color:"textPrimary",className:e.link},r.a.createElement(h.a,{className:e.icon}),"Breadcrumb")))}},1613:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Whatshot");a.default=o},1614:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1069)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),"Grain");a.default=o},1615:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Typography from '@material-ui/core/Typography';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport Link from '@material-ui/core/Link';\nimport HomeIcon from '@material-ui/icons/Home';\nimport WhatshotIcon from '@material-ui/icons/Whatshot';\nimport GrainIcon from '@material-ui/icons/Grain';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    padding: theme.spacing(1, 2),\n  },\n  link: {\n    display: 'flex',\n  },\n  icon: {\n    marginRight: theme.spacing(0.5),\n    width: 20,\n    height: 20,\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  alert('You clicked a breadcrumb.');\n}\n\nexport default function IconBreadcrumbs() {\n  const classes = useStyles();\n\n  return (\n    <Paper elevation={0} className={classes.root}>\n      <Breadcrumbs aria-label=\"Breadcrumb\">\n        <Link color=\"inherit\" href=\"/\" onClick={handleClick} className={classes.link}>\n          <HomeIcon className={classes.icon} />\n          Material-UI\n        </Link>\n        <Link\n          color=\"inherit\"\n          href=\"/getting-started/installation/\"\n          onClick={handleClick}\n          className={classes.link}\n        >\n          <WhatshotIcon className={classes.icon} />\n          Core\n        </Link>\n        <Typography color=\"textPrimary\" className={classes.link}>\n          <GrainIcon className={classes.icon} />\n          Breadcrumb\n        </Typography>\n      </Breadcrumbs>\n    </Paper>\n  );\n}\n"},1616:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return p});var t=n(0),r=n.n(t),o=n(1073),l=n(162),i=n(2383),c=n(128),s=n(1607),m=Object(o.a)(function(e){return{root:{justifyContent:"center",flexWrap:"wrap"},paper:{padding:e.spacing(1,2)}}});function u(e){e.preventDefault(),alert("You clicked a breadcrumb.")}function p(){var e=m();return r.a.createElement(l.a,{elevation:0,className:e.paper},r.a.createElement(i.a,{maxItems:2,"aria-label":"Breadcrumb"},r.a.createElement(s.a,{color:"inherit",href:"#",onClick:u},"Home"),r.a.createElement(s.a,{color:"inherit",href:"#",onClick:u},"Catalog"),r.a.createElement(s.a,{color:"inherit",href:"#",onClick:u},"Accessories"),r.a.createElement(s.a,{color:"inherit",href:"#",onClick:u},"New Collection"),r.a.createElement(c.a,{color:"textPrimary"},"Belts")))}},1617:function(e,a){e.exports='/* eslint-disable jsx-a11y/anchor-is-valid */\n\nimport React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Paper from \'@material-ui/core/Paper\';\nimport Breadcrumbs from \'@material-ui/core/Breadcrumbs\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Link from \'@material-ui/core/Link\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    justifyContent: \'center\',\n    flexWrap: \'wrap\',\n  },\n  paper: {\n    padding: theme.spacing(1, 2),\n  },\n}));\n\nfunction handleClick(event) {\n  event.preventDefault();\n  alert(\'You clicked a breadcrumb.\');\n}\n\nexport default function CollapsedBreadcrumbs() {\n  const classes = useStyles();\n\n  return (\n    <Paper elevation={0} className={classes.paper}>\n      <Breadcrumbs maxItems={2} aria-label="Breadcrumb">\n        <Link color="inherit" href="#" onClick={handleClick}>\n          Home\n        </Link>\n        <Link color="inherit" href="#" onClick={handleClick}>\n          Catalog\n        </Link>\n        <Link color="inherit" href="#" onClick={handleClick}>\n          Accessories\n        </Link>\n        <Link color="inherit" href="#" onClick={handleClick}>\n          New Collection\n        </Link>\n        <Typography color="textPrimary">Belts</Typography>\n      </Breadcrumbs>\n    </Paper>\n  );\n}\n'},1618:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return y});var t=n(0),r=n.n(t),o=n(7),l=n(14),i=n(1073),c=n(162),s=n(2383),m=n(1067),u=n(873),p=n(1386),d=n.n(p),f=n(1114),h=n.n(f),b=Object(o.a)(function(e){return{root:{backgroundColor:e.palette.grey[100],height:24,color:e.palette.grey[800],fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.grey[300]},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(l.c)(e.palette.grey[300],.12)}}}})(m.a);function k(e){e.preventDefault(),alert("You clicked a breadcrumb.")}var g=Object(i.a)(function(e){return{root:{padding:e.spacing(1)},avatar:{background:"none",marginRight:-e.spacing(1.5)}}});function y(){var e=g();return r.a.createElement(c.a,{elevation:0,className:e.root},r.a.createElement(s.a,{"aria-label":"Breadcrumb"},r.a.createElement(b,{component:"a",href:"#",label:"Home",avatar:r.a.createElement(u.a,{className:e.avatar},r.a.createElement(d.a,null)),onClick:k}),r.a.createElement(b,{component:"a",href:"#",label:"Catalog",onClick:k}),r.a.createElement(b,{label:"Accessories",deleteIcon:r.a.createElement(h.a,null),onClick:k,onDelete:k})))}},1619:function(e,a){e.exports="import React from 'react';\nimport { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport Chip from '@material-ui/core/Chip';\nimport Avatar from '@material-ui/core/Avatar';\nimport HomeIcon from '@material-ui/icons/Home';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst StyledBreadcrumb = withStyles(theme => ({\n  root: {\n    backgroundColor: theme.palette.grey[100],\n    height: 24,\n    color: theme.palette.grey[800],\n    fontWeight: theme.typography.fontWeightRegular,\n    '&:hover, &:focus': {\n      backgroundColor: theme.palette.grey[300],\n    },\n    '&:active': {\n      boxShadow: theme.shadows[1],\n      backgroundColor: emphasize(theme.palette.grey[300], 0.12),\n    },\n  },\n}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591\n\nfunction handleClick(event) {\n  event.preventDefault();\n  alert('You clicked a breadcrumb.');\n}\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    padding: theme.spacing(1),\n  },\n  avatar: {\n    background: 'none',\n    marginRight: -theme.spacing(1.5),\n  },\n}));\n\nexport default function CustomizedBreadcrumbs() {\n  const classes = useStyles();\n\n  return (\n    <Paper elevation={0} className={classes.root}>\n      <Breadcrumbs aria-label=\"Breadcrumb\">\n        <StyledBreadcrumb\n          component=\"a\"\n          href=\"#\"\n          label=\"Home\"\n          avatar={\n            <Avatar className={classes.avatar}>\n              <HomeIcon />\n            </Avatar>\n          }\n          onClick={handleClick}\n        />\n        <StyledBreadcrumb component=\"a\" href=\"#\" label=\"Catalog\" onClick={handleClick} />\n        <StyledBreadcrumb\n          label=\"Accessories\"\n          deleteIcon={<ExpandMoreIcon />}\n          onClick={handleClick}\n          onDelete={handleClick}\n        />\n      </Breadcrumbs>\n    </Paper>\n  );\n}\n"},1620:function(e,a,n){"use strict";n.r(a);var t=n(44),r=n(45),o=n(75),l=n(74),i=n(76),c=n(187),s=n(0),m=n.n(s),u=n(7),p=n(983),d=n(1607),f=n(984),h=n(1041),b=n(1040),k=n(128),g=n(1293),y=n.n(g),v=n(1114),E=n.n(v),C=n(2383),x=n(71),N=n(31),L={"/inbox":"Inbox","/inbox/important":"Important","/trash":"Trash","/spam":"Spam","/drafts":"Drafts"};function B(e){var a=e.to,n=e.open,t=Object(c.a)(e,["to","open"]),r=L[a];return m.a.createElement("li",null,m.a.createElement(f.a,Object.assign({button:!0,component:N.a,to:a},t),m.a.createElement(b.a,{primary:r}),null!=n?n?m.a.createElement(y.a,null):m.a.createElement(E.a,null):null))}var P=function(e){return m.a.createElement(d.a,Object.assign({},e,{component:N.a}))},M=function(e){function a(){var e,n;Object(t.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={open:!0},n.handleClick=function(){n.setState(function(e){return{open:!e.open}})},n}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.classes;return m.a.createElement(x.a,{initialEntries:["/inbox"],initialIndex:0},m.a.createElement("div",{className:e.root},m.a.createElement(x.c,null,function(e){var a=e.location.pathname.split("/").filter(function(e){return e});return m.a.createElement(C.a,{"aria-label":"Breadcrumb"},m.a.createElement(P,{color:"inherit",to:"/"},"Home"),a.map(function(e,n){var t=n===a.length-1,r="/".concat(a.slice(0,n+1).join("/"));return t?m.a.createElement(k.a,{color:"textPrimary",key:r},L[r]):m.a.createElement(P,{color:"inherit",to:r,key:r},L[r])}))}),m.a.createElement("nav",{className:e.lists,"aria-label":"Mailbox folders"},m.a.createElement(p.a,null,m.a.createElement(B,{to:"/inbox",open:this.state.open,onClick:this.handleClick}),m.a.createElement(h.a,{component:"li",in:this.state.open,timeout:"auto",unmountOnExit:!0},m.a.createElement(p.a,{disablePadding:!0},m.a.createElement(B,{to:"/inbox/important",className:e.nested}))),m.a.createElement(B,{to:"/trash"}),m.a.createElement(B,{to:"/spam"})))))}}]),a}(m.a.Component);a.default=Object(u.a)(function(e){return{root:{display:"flex",flexDirection:"column",width:360},lists:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(1)},nested:{paddingLeft:e.spacing(4)}}})(M)},1621:function(e,a){e.exports="/* eslint-disable no-nested-ternary */\n\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport Link from '@material-ui/core/Link';\nimport ListItem from '@material-ui/core/ListItem';\nimport Collapse from '@material-ui/core/Collapse';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandLess from '@material-ui/icons/ExpandLess';\nimport ExpandMore from '@material-ui/icons/ExpandMore';\nimport Breadcrumbs from '@material-ui/core/Breadcrumbs';\nimport { Route, MemoryRouter } from 'react-router';\nimport { Link as RouterLink } from 'react-router-dom';\n\nconst breadcrumbNameMap = {\n  '/inbox': 'Inbox',\n  '/inbox/important': 'Important',\n  '/trash': 'Trash',\n  '/spam': 'Spam',\n  '/drafts': 'Drafts',\n};\n\nfunction ListItemLink(props) {\n  const { to, open, ...other } = props;\n  const primary = breadcrumbNameMap[to];\n\n  return (\n    <li>\n      <ListItem button component={RouterLink} to={to} {...other}>\n        <ListItemText primary={primary} />\n        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}\n      </ListItem>\n    </li>\n  );\n}\n\nListItemLink.propTypes = {\n  open: PropTypes.bool,\n  to: PropTypes.string.isRequired,\n};\n\nconst styles = theme => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    width: 360,\n  },\n  lists: {\n    backgroundColor: theme.palette.background.paper,\n    marginTop: theme.spacing(1),\n  },\n  nested: {\n    paddingLeft: theme.spacing(4),\n  },\n});\n\nconst LinkRouter = props => <Link {...props} component={RouterLink} />;\n\nclass RouterBreadcrumbs extends React.Component {\n  state = {\n    open: true,\n  };\n\n  handleClick = () => {\n    this.setState(state => ({ open: !state.open }));\n  };\n\n  render() {\n    const { classes } = this.props;\n\n    return (\n      <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>\n        <div className={classes.root}>\n          <Route>\n            {({ location }) => {\n              const pathnames = location.pathname.split('/').filter(x => x);\n\n              return (\n                <Breadcrumbs aria-label=\"Breadcrumb\">\n                  <LinkRouter color=\"inherit\" to=\"/\">\n                    Home\n                  </LinkRouter>\n                  {pathnames.map((value, index) => {\n                    const last = index === pathnames.length - 1;\n                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;\n\n                    return last ? (\n                      <Typography color=\"textPrimary\" key={to}>\n                        {breadcrumbNameMap[to]}\n                      </Typography>\n                    ) : (\n                      <LinkRouter color=\"inherit\" to={to} key={to}>\n                        {breadcrumbNameMap[to]}\n                      </LinkRouter>\n                    );\n                  })}\n                </Breadcrumbs>\n              );\n            }}\n          </Route>\n          <nav className={classes.lists} aria-label=\"Mailbox folders\">\n            <List>\n              <ListItemLink to=\"/inbox\" open={this.state.open} onClick={this.handleClick} />\n              <Collapse component=\"li\" in={this.state.open} timeout=\"auto\" unmountOnExit>\n                <List disablePadding>\n                  <ListItemLink to=\"/inbox/important\" className={classes.nested} />\n                </List>\n              </Collapse>\n              <ListItemLink to=\"/trash\" />\n              <ListItemLink to=\"/spam\" />\n            </List>\n          </nav>\n        </div>\n      </MemoryRouter>\n    );\n  }\n}\n\nRouterBreadcrumbs.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(RouterBreadcrumbs);\n"},2303:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(13),l=n(1036),i=n(128),c=n(1056),s=n(1061),m=Object(s.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=m();return r.a.createElement(o.s,{classes:{root:a.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(i.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(i.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(i.a,{variant:"h6"},"Breadcrumbs")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/breadcrumbs",target:"_blank"},r.a.createElement(l.a,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Breadcrumbs"),r.a.createElement(i.a,{className:"description"},"Breadcrumbs allow users to make selections from a range of values."),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple breadcrumbs"),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1606).default,raw:n(1608)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Custom separator"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"In the following examples, we are using two string separators, and an SVG icon."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1609).default,raw:n(1611)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breadcrumbs with icons"),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1612).default,raw:n(1615)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Collapsed breadcrumbs"),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1616).default,raw:n(1617)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized breadcrumbs"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",r.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1618).default,raw:n(1619)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"Be sure to add a ",r.a.createElement("code",null,"aria-label")," description on the ",r.a.createElement("code",null,"Breadcrumbs")," component."),r.a.createElement(i.a,{className:"mb-16",component:"div"},"The accessibility of this component relies on:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The set of links is structured using an ordered list (",r.a.createElement("code",null,"&lt;ol&gt;")," element)."),r.a.createElement("li",null,"To prevent screen reader announcement of the visual separators between links, they are hidden with ",r.a.createElement("code",null,"aria-hidden"),"."),r.a.createElement("li",null,"A nav element labeled with ",r.a.createElement("code",null,"aria-label")," identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.")),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Integration with react-router"),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1620).default,raw:n(1621)})))})}},2383:function(e,a,n){"use strict";var t=n(2),r=n.n(t),o=n(132),l=n.n(o),i=n(24),c=n.n(i),s=n(4),m=n.n(s),u=n(0),p=n.n(u),d=(n(30),n(1),n(3)),f=n(7),h=n(128),b=n(14),k=n(51),g=Object(k.a)(p.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var y=Object(f.a)(function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(b.c)(e.palette.grey[200],.12)}}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var a=e.classes,n=m()(e,["classes"]);return p.a.createElement("li",r()({className:a.root},n),p.a.createElement(g,{className:a.icon}))});var v=Object(f.a)({root:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"PrivateBreadcrumbSeparator"})(function(e){var a=e.classes,n=e.className,t=m()(e,["classes","className"]);return p.a.createElement("li",r()({"aria-hidden":!0,className:Object(d.a)(a.root,n)},t))});var E=p.a.forwardRef(function(e,a){var n=e.children,t=e.classes,o=e.className,i=e.component,s=void 0===i?"nav":i,u=e.itemsAfterCollapse,f=void 0===u?1:u,b=e.itemsBeforeCollapse,k=void 0===b?1:b,g=e.maxItems,E=void 0===g?8:g,C=e.separator,x=void 0===C?"/":C,N=m()(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),L=p.a.useState(!1),B=c()(L,2),P=B[0],M=B[1],j=p.a.Children.toArray(n).filter(function(e){return p.a.isValidElement(e)}).map(function(e,a){return p.a.createElement("li",{className:t.li,key:"child-".concat(a)},e)});return p.a.createElement(h.a,r()({ref:a,component:s,color:"textSecondary",className:Object(d.a)(t.root,o)},N),p.a.createElement("ol",{className:t.ol},function(e,a,n){return e.reduce(function(t,r,o){return o<e.length-1?t=t.concat(r,p.a.createElement(v,{key:"separator-".concat(o),className:a},n)):t.push(r),t},[])}(P||E&&j.length<=E?j:function(e){return k+f>=e.length?e:[].concat(l()(e.slice(0,k)),[p.a.createElement(y,{key:"ellipsis",onClick:function(){M(!0)}})],l()(e.slice(e.length-f,e.length)))}(j),t.separator,x)))});a.a=Object(f.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0},li:{listStyle:"none"},separator:{}},{name:"MuiBreadcrumbs"})(E)},996:function(e,a,n){"use strict";n.r(a);var t=n(338);n.d(a,"default",function(){return t.a})}}]);