"use strict";require("../../../node_modules/react/jsx-runtime.js");var e=require("../../../_virtual/index2.js"),o=require("../Badge/index.js"),s=require("../../../node_modules/@chakra-ui/checkbox/dist/index.esm.js"),r=require("../../../node_modules/react-icons/bs/index.esm.js"),t=require("../../../_virtual/jsx-runtime.js"),x=require("../../../node_modules/@chakra-ui/layout/dist/index.esm.js");exports.ItemCard=i=>{const[d,n]=e.reactExports.useState(!1),[p,a]=e.reactExports.useState(!1),{checked:c=!1,children:u,coverImage:l,type:h,sizeCard:m}=i;e.reactExports.useEffect((()=>{a(c)}),[c]);const j=()=>{n(!0)},g=()=>{n(!1)};return t.exports.jsxs(x.Box,{overflow:"hidden",borderRadius:"8px",width:"md"==m?["140px","232px"]:"140px",height:"md"==m?["220px","364px"]:"220px",outline:p?"3px solid":"",outlineColor:p?"accent.500":"",boxShadow:"0px 3px 6px",color:"bgShadow",onMouseOver:j,onMouseOut:g,children:[t.exports.jsxs(x.Flex,{position:"relative",height:"md"==m?["109px","213px"]:"109px",overflow:"hidden",children:[t.exports.jsx(x.Box,{position:"absolute",opacity:d||p?"1":"0",left:"0",top:"0",width:"300px",onMouseOver:j,onMouseOut:g,children:t.exports.jsx(s.Checkbox,{position:"relative",margin:["3%","5%"],size:"lg",zIndex:2,defaultChecked:!0,icon:p?t.exports.jsx(r.BsCheck,{}):t.exports.jsx(t.exports.Fragment,{}),colorScheme:p?"accent":"",isChecked:p,onChange:()=>{a(!p)}})}),t.exports.jsx(x.Box,{transition:".2s ease-in-out",transform:d?"scale(1.04)":"",sx:{filter:"auto",brightness:d||p?"83%":"",height:"100%",boxSize:"full",background:`url(${l}) center/cover no-repeat`}}),t.exports.jsx(x.Flex,{zIndex:3,position:"absolute",cursor:"default",left:"md"==m?["10px","15px"]:"10px",bottom:"md"==m?["10px","15px"]:"10px",children:t.exports.jsx(x.Box,{children:t.exports.jsx(o.Badge,{type:h,size:"md",sizeCard:m})})})]}),t.exports.jsx(x.Box,{marginTop:"md"==m?["-1.5px","2px"]:"-1.5px",paddingX:"md"==m?["2","3.5"]:"2",children:u})]})};
//# sourceMappingURL=index.js.map
