(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1069:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var n=l.default.memo(l.default.forwardRef(function(a,n){return l.default.createElement(i.default,(0,o.default)({},a,{ref:n}),e)}));0;return n.muiName=i.default.muiName,n};var o=t(n(2)),l=t(n(0)),i=t(n(996))},1073:function(e,a,n){"use strict";var t=n(2),o=n.n(t),l=n(1060),i=n(129);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)(e,o()({defaultTheme:i.a},a))}},1114:function(e,a,n){"use strict";var t=n(337);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),l=(0,t(n(1069)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");a.default=l},1169:function(e,a,n){var t=n(519),o=n(522),l=n(520);e.exports=function(e){return t(e)||o(e)||l()}},1376:function(e,a,n){"use strict";var t=n(2),o=n.n(t),l=n(1169),i=n.n(l),s=n(24),r=n.n(s),c=n(4),p=n.n(c),m=n(0),d=n.n(m),u=(n(1),n(3)),x=n(1041),h=n(162),g=n(7),E=d.a.forwardRef(function(e,a){var n=e.children,t=e.classes,l=e.className,s=e.defaultExpanded,c=void 0!==s&&s,m=e.disabled,g=void 0!==m&&m,E=e.expanded,y=e.onChange,f=e.square,b=void 0!==f&&f,v=e.TransitionComponent,P=void 0===v?x.a:v,S=e.TransitionProps,N=p()(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=d.a.useRef(null!=E).current,C=d.a.useState(c),D=r()(C,2),I=D[0],w=D[1],R=T?E:I,M=d.a.Children.toArray(n),B=i()(M),k=B[0],j=B.slice(1);return d.a.createElement(h.a,o()({className:Object(u.a)(t.root,l,R&&t.expanded,g&&t.disabled,!b&&t.rounded),ref:a,square:b},N),d.a.cloneElement(k,{disabled:g,expanded:R,onChange:function(e){T||w(!R),y&&y(e,!R)}}),d.a.createElement(P,o()({in:R,timeout:"auto"},S),d.a.createElement("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region"},j)))});a.a=Object(g.a)(function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},{name:"MuiExpansionPanel"})(E)},1377:function(e,a,n){"use strict";var t=n(2),o=n.n(t),l=n(24),i=n.n(l),s=n(4),r=n.n(s),c=n(0),p=n.n(c),m=(n(1),n(3)),d=n(185),u=n(978),x=n(7),h=p.a.forwardRef(function(e,a){var n=e.children,t=e.classes,l=e.className,s=e.disabled,c=void 0!==s&&s,x=e.expanded,h=e.expandIcon,g=e.IconButtonProps,E=e.onBlur,y=e.onChange,f=e.onClick,b=e.onFocusVisible,v=r()(e,["children","classes","className","disabled","expanded","expandIcon","IconButtonProps","onBlur","onChange","onClick","onFocusVisible"]),P=p.a.useState(!1),S=i()(P,2),N=S[0],T=S[1];return p.a.createElement(d.a,o()({focusRipple:!1,disableRipple:!0,disabled:c,component:"div","aria-expanded":x,className:Object(m.a)(t.root,l,c&&t.disabled,x&&t.expanded,N&&t.focused),onFocusVisible:function(e){T(!0),b&&b(e)},onBlur:function(e){T(!1),E&&E(e)},onClick:function(e){y&&y(e),f&&f(e)},ref:a},v),p.a.createElement("div",{className:Object(m.a)(t.content,x&&t.expanded)},n),h&&p.a.createElement(u.a,o()({disabled:c,className:Object(m.a)(t.expandIcon,x&&t.expanded),edge:"end",component:"div",tabIndex:-1,"aria-hidden":!0},g),h))});a.a=Object(x.a)(function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},{name:"MuiExpansionPanelSummary"})(h)},1378:function(e,a,n){"use strict";var t=n(2),o=n.n(t),l=n(4),i=n.n(l),s=n(0),r=n.n(s),c=(n(1),n(3)),p=n(7),m=r.a.forwardRef(function(e,a){var n=e.classes,t=e.className,l=i()(e,["classes","className"]);return r.a.createElement("div",o()({className:Object(c.a)(n.root,t),ref:a},l))});a.a=Object(p.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(m)},1749:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return u});var t=n(0),o=n.n(t),l=n(1073),i=n(1376),s=n(1377),r=n(1378),c=n(128),p=n(1114),m=n.n(p),d=Object(l.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}});function u(){var e=d();return o.a.createElement("div",{className:e.root},o.a.createElement(i.a,null,o.a.createElement(s.a,{expandIcon:o.a.createElement(m.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(c.a,{className:e.heading},"Expansion Panel 1")),o.a.createElement(r.a,null,o.a.createElement(c.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),o.a.createElement(i.a,null,o.a.createElement(s.a,{expandIcon:o.a.createElement(m.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},o.a.createElement(c.a,{className:e.heading},"Expansion Panel 2")),o.a.createElement(r.a,null,o.a.createElement(c.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),o.a.createElement(i.a,{disabled:!0},o.a.createElement(s.a,{expandIcon:o.a.createElement(m.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},o.a.createElement(c.a,{className:e.heading},"Disabled Expansion Panel"))))}},1750:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ExpansionPanel from '@material-ui/core/ExpansionPanel';\nimport ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';\nimport ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    fontWeight: theme.typography.fontWeightRegular,\n  },\n}));\n\nexport default function SimpleExpansionPanel() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ExpansionPanel>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1a-content\"\n          id=\"panel1a-header\"\n        >\n          <Typography className={classes.heading}>Expansion Panel 1</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2a-content\"\n          id=\"panel2a-header\"\n        >\n          <Typography className={classes.heading}>Expansion Panel 2</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel disabled>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3a-content\"\n          id=\"panel3a-header\"\n        >\n          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>\n        </ExpansionPanelSummary>\n      </ExpansionPanel>\n    </div>\n  );\n}\n"},1751:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return x});var t=n(15),o=n(0),l=n.n(o),i=n(1073),s=n(1376),r=n(1378),c=n(1377),p=n(128),m=n(1114),d=n.n(m),u=Object(i.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}});function x(){var e=u(),a=l.a.useState(!1),n=Object(t.a)(a,2),o=n[0],i=n[1],m=function(e){return function(a,n){i(!!n&&e)}};return l.a.createElement("div",{className:e.root},l.a.createElement(s.a,{expanded:"panel1"===o,onChange:m("panel1")},l.a.createElement(c.a,{expandIcon:l.a.createElement(d.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.a.createElement(p.a,{className:e.heading},"General settings"),l.a.createElement(p.a,{className:e.secondaryHeading},"I am an expansion panel")),l.a.createElement(r.a,null,l.a.createElement(p.a,null,"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))),l.a.createElement(s.a,{expanded:"panel2"===o,onChange:m("panel2")},l.a.createElement(c.a,{expandIcon:l.a.createElement(d.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},l.a.createElement(p.a,{className:e.heading},"Users"),l.a.createElement(p.a,{className:e.secondaryHeading},"You are currently not an owner")),l.a.createElement(r.a,null,l.a.createElement(p.a,null,"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))),l.a.createElement(s.a,{expanded:"panel3"===o,onChange:m("panel3")},l.a.createElement(c.a,{expandIcon:l.a.createElement(d.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},l.a.createElement(p.a,{className:e.heading},"Advanced settings"),l.a.createElement(p.a,{className:e.secondaryHeading},"Filtering has been entirely disabled for whole web server")),l.a.createElement(r.a,null,l.a.createElement(p.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))),l.a.createElement(s.a,{expanded:"panel4"===o,onChange:m("panel4")},l.a.createElement(c.a,{expandIcon:l.a.createElement(d.a,null),"aria-controls":"panel4bh-content",id:"panel4bh-header"},l.a.createElement(p.a,{className:e.heading},"Personal data")),l.a.createElement(r.a,null,l.a.createElement(p.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))))}},1752:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ExpansionPanel from '@material-ui/core/ExpansionPanel';\nimport ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';\nimport ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    flexBasis: '33.33%',\n    flexShrink: 0,\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n}));\n\nexport default function ControlledExpansionPanels() {\n  const classes = useStyles();\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = panel => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <div className={classes.root}>\n      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1bh-content\"\n          id=\"panel1bh-header\"\n        >\n          <Typography className={classes.heading}>General settings</Typography>\n          <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget\n            maximus est, id dignissim quam.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel2bh-content\"\n          id=\"panel2bh-header\"\n        >\n          <Typography className={classes.heading}>Users</Typography>\n          <Typography className={classes.secondaryHeading}>\n            You are currently not an owner\n          </Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar\n            diam eros in elit. Pellentesque convallis laoreet laoreet.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel3bh-content\"\n          id=\"panel3bh-header\"\n        >\n          <Typography className={classes.heading}>Advanced settings</Typography>\n          <Typography className={classes.secondaryHeading}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,\n            vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel4bh-content\"\n          id=\"panel4bh-header\"\n        >\n          <Typography className={classes.heading}>Personal data</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,\n            vitae egestas augue. Duis vel est augue.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n    </div>\n  );\n}\n"},1753:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport clsx from 'clsx';\nimport ExpansionPanel from '@material-ui/core/ExpansionPanel';\nimport ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';\nimport ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';\nimport ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport Chip from '@material-ui/core/Chip';\nimport Button from '@material-ui/core/Button';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n  icon: {\n    verticalAlign: 'bottom',\n    height: 20,\n    width: 20,\n  },\n  details: {\n    alignItems: 'center',\n  },\n  column: {\n    flexBasis: '33.33%',\n  },\n  helper: {\n    borderLeft: `2px solid ${theme.palette.divider}`,\n    padding: theme.spacing(1, 2),\n  },\n  link: {\n    color: theme.palette.primary.main,\n    textDecoration: 'none',\n    '&:hover': {\n      textDecoration: 'underline',\n    },\n  },\n}));\n\nexport default function DetailedExpansionPanel() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <ExpansionPanel defaultExpanded>\n        <ExpansionPanelSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-controls=\"panel1c-content\"\n          id=\"panel1c-header\"\n        >\n          <div className={classes.column}>\n            <Typography className={classes.heading}>Location</Typography>\n          </div>\n          <div className={classes.column}>\n            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>\n          </div>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails className={classes.details}>\n          <div className={classes.column} />\n          <div className={classes.column}>\n            <Chip label=\"Barbados\" onDelete={() => {}} />\n          </div>\n          <div className={clsx(classes.column, classes.helper)}>\n            <Typography variant=\"caption\">\n              Select your destination of choice\n              <br />\n              <a href=\"#sub-labels-and-columns\" className={classes.link}>\n                Learn more\n              </a>\n            </Typography>\n          </div>\n        </ExpansionPanelDetails>\n        <Divider />\n        <ExpansionPanelActions>\n          <Button size=\"small\">Cancel</Button>\n          <Button size=\"small\" color=\"primary\">\n            Save\n          </Button>\n        </ExpansionPanelActions>\n      </ExpansionPanel>\n    </div>\n  );\n}\n"},1754:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return x});var t=n(15),o=n(0),l=n.n(o),i=n(7),s=n(1376),r=n(1377),c=n(1378),p=n(128),m=Object(i.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(s.a),d=Object(i.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(r.a),u=Object(i.a)(function(e){return{root:{padding:e.spacing(2)}}})(c.a);function x(){var e=l.a.useState("panel1"),a=Object(t.a)(e,2),n=a[0],o=a[1],i=function(e){return function(a,n){o(!!n&&e)}};return l.a.createElement("div",null,l.a.createElement(m,{square:!0,expanded:"panel1"===n,onChange:i("panel1")},l.a.createElement(d,{"aria-controls":"panel1d-content",id:"panel1d-header"},l.a.createElement(p.a,null,"Collapsible Group Item #1")),l.a.createElement(u,null,l.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(m,{square:!0,expanded:"panel2"===n,onChange:i("panel2")},l.a.createElement(d,{"aria-controls":"panel2d-content",id:"panel2d-header"},l.a.createElement(p.a,null,"Collapsible Group Item #2")),l.a.createElement(u,null,l.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(m,{square:!0,expanded:"panel3"===n,onChange:i("panel3")},l.a.createElement(d,{"aria-controls":"panel3d-content",id:"panel3d-header"},l.a.createElement(p.a,null,"Collapsible Group Item #3")),l.a.createElement(u,null,l.a.createElement(p.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}},1755:function(e,a){e.exports="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport MuiExpansionPanel from '@material-ui/core/ExpansionPanel';\nimport MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';\nimport MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';\nimport Typography from '@material-ui/core/Typography';\n\nconst ExpansionPanel = withStyles({\n  root: {\n    border: '1px solid rgba(0, 0, 0, .125)',\n    boxShadow: 'none',\n    '&:not(:last-child)': {\n      borderBottom: 0,\n    },\n    '&:before': {\n      display: 'none',\n    },\n    '&$expanded': {\n      margin: 'auto',\n    },\n  },\n  expanded: {},\n})(MuiExpansionPanel);\n\nconst ExpansionPanelSummary = withStyles({\n  root: {\n    backgroundColor: 'rgba(0, 0, 0, .03)',\n    borderBottom: '1px solid rgba(0, 0, 0, .125)',\n    marginBottom: -1,\n    minHeight: 56,\n    '&$expanded': {\n      minHeight: 56,\n    },\n  },\n  content: {\n    '&$expanded': {\n      margin: '12px 0',\n    },\n  },\n  expanded: {},\n})(MuiExpansionPanelSummary);\n\nconst ExpansionPanelDetails = withStyles(theme => ({\n  root: {\n    padding: theme.spacing(2),\n  },\n}))(MuiExpansionPanelDetails);\n\nexport default function CustomizedExpansionPanels() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = panel => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <div>\n      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <ExpansionPanelSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography>Collapsible Group Item #1</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <ExpansionPanelSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography>Collapsible Group Item #2</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <ExpansionPanelSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography>Collapsible Group Item #3</Typography>\n        </ExpansionPanelSummary>\n        <ExpansionPanelDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,\n            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.\n          </Typography>\n        </ExpansionPanelDetails>\n      </ExpansionPanel>\n    </div>\n  );\n}\n"},2214:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),l=n(1073),i=n(3),s=n(1376),r=n(1378),c=n(1377),p=n(2),m=n.n(p),d=n(4),u=n.n(d),x=(n(1),n(7)),h=o.a.forwardRef(function(e,a){var n=e.classes,t=e.className,l=e.disableSpacing,s=void 0!==l&&l,r=u()(e,["classes","className","disableSpacing"]);return o.a.createElement("div",m()({className:Object(i.a)(n.root,t,!s&&n.spacing),ref:a},r))}),g=Object(x.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiExpansionPanelActions"})(h),E=n(128),y=n(1114),f=n.n(y),b=n(1067),v=n(1056),P=n(1043);n.d(a,"default",function(){return N});var S=Object(l.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}});function N(){var e=S();return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{defaultExpanded:!0},o.a.createElement(c.a,{expandIcon:o.a.createElement(f.a,null),"aria-controls":"panel1c-content",id:"panel1c-header"},o.a.createElement("div",{className:e.column},o.a.createElement(E.a,{className:e.heading},"Location")),o.a.createElement("div",{className:e.column},o.a.createElement(E.a,{className:e.secondaryHeading},"Select trip destination"))),o.a.createElement(r.a,{className:e.details},o.a.createElement("div",{className:e.column}),o.a.createElement("div",{className:e.column},o.a.createElement(b.a,{label:"Barbados",onDelete:function(){}})),o.a.createElement("div",{className:Object(i.a)(e.column,e.helper)},o.a.createElement(E.a,{variant:"caption"},"Select your destination of choice",o.a.createElement("br",null),o.a.createElement("a",{href:"#sub-labels-and-columns",className:e.link},"Learn more")))),o.a.createElement(P.a,null),o.a.createElement(g,null,o.a.createElement(v.a,{size:"small"},"Cancel"),o.a.createElement(v.a,{size:"small",color:"primary"},"Save"))))}},2318:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),l=n(13),i=n(1036),s=n(128),r=n(1056),c=n(1061),p=Object(c.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=p();return o.a.createElement(l.s,{classes:{root:a.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(s.a,{variant:"h6"},"Expansion Panels")),o.a.createElement(r.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/expansion-panels",target:"_blank"},o.a.createElement(i.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(s.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Expansion Panels"),o.a.createElement(s.a,{className:"description"},"Expansion panels contain creation flows and allow lightweight editing of an element."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/archive/guidelines/components/expansion-panels.html"},"An expansion panel")," is a lightweight container that may either stand alone or be connected to a larger surface, such as a card."),o.a.createElement("blockquote",null,o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement("strong",null,"Note:")," Expansion panels are no longer documented in the Material Design documentation.")),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"For optimal accessibility we recommend setting ",o.a.createElement("code",null,"id")," and ",o.a.createElement("code",null,"aria-controls")," on the",o.a.createElement("code",null,"ExpansionPanelSummary"),". The ",o.a.createElement("code",null,"ExpansionPanel")," will derive the necessary ",o.a.createElement("code",null,"aria-labelledby"),"and ",o.a.createElement("code",null,"id")," for the content region of the panel."),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Expansion Panel"),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1749).default,raw:n(1750)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Controlled Accordion"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Extend the default panel behavior to create an accordion with the ",o.a.createElement("code",null,"ExpansionPanel")," component."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1751).default,raw:n(1752)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Secondary heading and Columns"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the user."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(2214).default,raw:n(1753)})),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Performance"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"The content of ExpansionPanels is mounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the",o.a.createElement("code",null,"unmountOnExit")," in ",o.a.createElement("code",null,"TransitionProps"),": ",o.a.createElement("code",null,"&lt;ExpansionPanel TransitionProps={{ unmountOnExit: true }} /&gt;"),". As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."),o.a.createElement(s.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized expansion panels"),o.a.createElement(s.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(s.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1754).default,raw:n(1755)})))})}},996:function(e,a,n){"use strict";n.r(a);var t=n(338);n.d(a,"default",function(){return t.a})}}]);