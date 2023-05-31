import{a as S,j as c}from"./jsx-runtime-91a467a5.js";import{I as j}from"./Icon-619a3c3a.js";/* empty css               */import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=({variant:n,content:I})=>{const _="flex flex-row items-center justify-left pl-4 pr-6 py-4 gap-3 rounded text-base font-manrope ",C={positive:"bg-[#EFFBF5]",info:"bg-[#EFF1FB]",warning:"bg-[#FBF7EF]",danger:"bg-[#FBEFEF]",announcement:"bg-white"},B={positive:"CheckCircleIcon",info:"InformationCircleIcon",warning:"XCircleIcon",danger:"XCircleIcon",announcement:"MegaphoneIcon"},E={positive:"text-[#219760]",info:"text-[#213597]",warning:"text-[#976F21]",danger:"text-[#972121]",announcement:"text-[#131314]"},i=B[n],N=C[n];return S("div",{className:`${_} ${N}`,children:[i&&c(j,{icon:i,size:"24",className:E[n]}),c("div",{className:"text-[#131314]",children:I})]})};try{o.displayName="Banner",o.__docgenInfo={description:"",displayName:"Banner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"announcement"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}const W={title:"Components/Banners",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["positive","info","warning","danger","announcement"]}}}},e={args:{variant:"positive",content:"This is a positive banner"}},a={args:{variant:"info",content:"This is an info banner"}},r={args:{variant:"warning",content:"This is a warning banner"}},t={args:{variant:"danger",content:"This is a danger banner"}},s={args:{variant:"announcement",content:"This is an announcement banner"}};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    content: "This is a positive banner"
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,d,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "info",
    content: "This is an info banner"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var v,f,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    content: "This is a warning banner"
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,F;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    content: "This is a danger banner"
  }
}`,...(F=(x=t.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var T,w,y;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "announcement",
    content: "This is an announcement banner"
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const X=["Positive","Info","Warning","Danger","Announcement"];export{s as Announcement,t as Danger,a as Info,e as Positive,r as Warning,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Banner.stories-8a07a0fb.js.map
