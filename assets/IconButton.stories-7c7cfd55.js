import{a as c}from"./jsx-runtime-a888423b.js";import{L as N}from"./Loader-a6d957b0.js";/* empty css               */import{C as t}from"./CheckCircleIcon-8bde5bd0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const i=({variant:e,isDisabled:_,isLoading:l,Icon:x})=>{const k="inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]",d={primary:"text-white bg-[#3850c7] hover:bg-[#213597]",secondary:"text-neutral-900 bg-[#F0F2F5] hover:bg-[#E3E6EB]",ghost:"text-neutral-900 bg-transparent hover:bg-[#F0F2F5]",danger:"text-white bg-[#C73838] hover:bg-[#972121]"},w={disabled:"bg-[#F0F2F5] text-[#9A9FA6] hover:bg-[#F0F2F5] cursor-not-allowed",loading:`${d[e]} cursor-wait`},r=_?"disabled":l?"loading":null,D=r?w[r]:"",S=r?D:d[e],B=e==="primary"||e==="danger"?"light":"dark";return c("button",{disabled:r==="disabled"||r==="loading",className:`${k} ${S} `,children:l?c(N,{variant:B}):c(x,{className:"h-6 w-6"})})};try{i.displayName="IconButton",i.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"ComponentType<{ className?: string; }>"}}}}}catch{}const $={title:"Components/Icon Button",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["primary","secondary","ghost","danger"]}},isDisabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},Icon:{control:{type:"select",options:["CheckCircleIcon","ArrowRightIcon"]}}}},a={args:{variant:"primary",Icon:t}},o={args:{variant:"secondary",Icon:t}},n={args:{variant:"ghost",Icon:t}},s={args:{variant:"danger",Icon:t}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    Icon: CheckCircleIcon
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    Icon: CheckCircleIcon
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,I,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    Icon: CheckCircleIcon
  }
}`,...(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var C,f,F;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    Icon: CheckCircleIcon
  }
}`,...(F=(f=s.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const j=["Primary","Secondary","Ghost","Danger"];export{s as Danger,n as Ghost,a as Primary,o as Secondary,j as __namedExportsOrder,$ as default};
//# sourceMappingURL=IconButton.stories-7c7cfd55.js.map
