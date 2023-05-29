import{a as o,j,F as E}from"./jsx-runtime-a888423b.js";/* empty css               */import{L as T}from"./Loader-a6d957b0.js";import{A as l,I as c}from"./InboxArrowDownIcon-b97a7a55.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const i=({variant:e,isDisabled:L,isLoading:d,LeftIcon:u,RightIcon:p,label:B,fullWidth:D})=>{const _="inline-flex items-center justify-center px-3 py-2 gap-3 rounded text-base font-manrope font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]",g={primary:"text-white bg-[#3850c7] hover:bg-[#213597]",secondary:"text-[#131314] bg-[#F0F2F5] hover:bg-[#E3E6EB]",ghost:"text-[#131314] bg-transparent hover:bg-[#F0F2F5]",danger:"text-white bg-[#C73838] hover:bg-[#972121]"},C={disabled:"bg-[#F0F2F5] text-[#9A9FA6] hover:bg-[#F0F2F5] cursor-not-allowed",loading:`${g[e]} cursor-wait`},V=D?"w-full":"",n=L?"disabled":d?"loading":null,q=n?C[n]:"",N=n?q:g[e],S=e==="primary"||e==="danger"?"light":"dark";return o("button",{disabled:n==="disabled"||n==="loading",className:`${_} ${N} ${V}`,children:d?o("div",{children:o(T,{variant:S})}):j(E,{children:[u&&o(u,{className:"h-6 w-6"}),B,p&&o(p,{className:"h-6 w-6"})]})})};try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ComponentType<{ className?: string; }>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ComponentType<{ className?: string; }>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Components/Button",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["primary","secondary","ghost","danger"]}},isDisabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},LeftIcon:{control:{type:"boolean"}},RightIcon:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}}}},a={args:{variant:"primary",label:"Button",RightIcon:l,LeftIcon:c}},t={args:{variant:"secondary",label:"Button",RightIcon:l,LeftIcon:c}},r={args:{variant:"ghost",label:"Button",RightIcon:l,LeftIcon:c}},s={args:{variant:"danger",label:"Button",RightIcon:l,LeftIcon:c}};var m,b,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var w,v,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var F,R,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(A=(R=s.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const H=["Primary","Secondary","Ghost","Danger"];export{s as Danger,r as Ghost,a as Primary,t as Secondary,H as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories-706dc273.js.map
