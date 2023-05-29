import{j,a as c}from"./jsx-runtime-a888423b.js";/* empty css               */import{C as A}from"./CheckCircleIcon-8bde5bd0.js";import{I as $,X as p,M as q}from"./XCircleIcon-282939e2.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const o=({variant:n,content:_})=>{const C="flex flex-row items-center justify-left pl-4 pr-6 py-4 gap-3 rounded text-base font-manrope ",B={positive:"bg-[#EFFBF5]",info:"bg-[#EFF1FB]",warning:"bg-[#FBF7EF]",danger:"bg-[#FBEFEF]",announcement:"bg-white"},E={positive:A,info:$,warning:p,danger:p,announcement:q},N={positive:"text-[#219760]",info:"text-[#213597]",warning:"text-[#976F21]",danger:"text-[#972121]",announcement:"text-[#131314]"},i=E[n],S=B[n];return j("div",{className:`${C} ${S}`,children:[i&&c(i,{className:`h-5 w-5 ${N[n]}`}),c("div",{className:"text-[#131314]",children:_})]})};try{o.displayName="Banner",o.__docgenInfo={description:"",displayName:"Banner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"positive"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"announcement"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}}}catch{}const k={title:"Components/Banners",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["positive","info","warning","danger","announcement"]}}}},e={args:{variant:"positive",content:"This is a positive banner"}},a={args:{variant:"info",content:"This is an info banner"}},r={args:{variant:"warning",content:"This is a warning banner"}},t={args:{variant:"danger",content:"This is a danger banner"}},s={args:{variant:"announcement",content:"This is an announcement banner"}};var m,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    content: "This is a positive banner"
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,l,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "info",
    content: "This is an info banner"
  }
}`,...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var f,b,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    content: "This is a warning banner"
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,F,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    content: "This is a danger banner"
  }
}`,...(w=(F=t.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var T,y,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "announcement",
    content: "This is an announcement banner"
  }
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const O=["Positive","Info","Warning","Danger","Announcement"];export{s as Announcement,t as Danger,a as Info,e as Positive,r as Warning,O as __namedExportsOrder,k as default};
//# sourceMappingURL=Banner.stories-f7057bd0.js.map
