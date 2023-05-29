import{j as z,a as p}from"./jsx-runtime-a888423b.js";/* empty css               */import{C as M}from"./CheckCircleIcon-8bde5bd0.js";import{r as e}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function S({title:n,titleId:a,...r},t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":a},r),n?e.createElement("title",{id:a},n):null,e.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}const A=e.forwardRef(S),N=A;function L({title:n,titleId:a,...r},t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":a},r),n?e.createElement("title",{id:a},n):null,e.createElement("path",{d:"M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z"}))}const O=e.forwardRef(L),q=O;function D({title:n,titleId:a,...r},t){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":a},r),n?e.createElement("title",{id:a},n):null,e.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}const P=e.forwardRef(D),u=P,d=({variant:n,content:a})=>{const r="flex flex-row items-center justify-left pl-4 pr-6 py-4 gap-3 rounded text-base font-manrope ",t={positive:"bg-[#EFFBF5]",info:"bg-[#EFF1FB]",warning:"bg-[#FBF7EF]",danger:"bg-[#FBEFEF]",announcement:"bg-white"},_={positive:M,info:N,warning:u,danger:u,announcement:q},$={positive:"text-[#219760]",info:"text-[#213597]",warning:"text-[#976F21]",danger:"text-[#972121]",announcement:"text-[#131314]"},m=_[n],j=t[n];return z("div",{className:`${r} ${j}`,children:[m&&p(m,{className:`h-5 w-5 ${$[n]}`}),p("div",{className:"text-[#131314]",children:a})]})};try{d.displayName="Banner",d.__docgenInfo={description:"",displayName:"Banner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"announcement"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}const G={title:"Components/Banner",component:d,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["positive","info","warning","danger","announcement"]}}}},o={args:{variant:"positive",content:"This is a positive banner"}},s={args:{variant:"info",content:"This is an info banner"}},i={args:{variant:"warning",content:"This is a warning banner"}},c={args:{variant:"danger",content:"This is a danger banner"}},l={args:{variant:"announcement",content:"This is an announcement banner"}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    content: "This is a positive banner"
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,h,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "info",
    content: "This is an info banner"
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,E,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    content: "This is a warning banner"
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var y,C,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    content: "This is a danger banner"
  }
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var B,I,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "announcement",
    content: "This is an announcement banner"
  }
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const J=["Positive","Info","Warning","Danger","Announcement"];export{l as Announcement,c as Danger,s as Info,o as Positive,i as Warning,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Banner.stories-8e11eb77.js.map
