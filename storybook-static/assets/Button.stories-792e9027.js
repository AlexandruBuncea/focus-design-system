import{a as l,j,F as H}from"./jsx-runtime-a888423b.js";/* empty css               */import{L as S}from"./Loader-99e41244.js";import{r as a}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function T({title:e,titleId:n,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},o),e?a.createElement("title",{id:n},e):null,a.createElement("path",{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z",clipRule:"evenodd"}))}const W=a.forwardRef(T),u=W;function z({title:e,titleId:n,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":n},o),e?a.createElement("title",{id:n},e):null,a.createElement("path",{fillRule:"evenodd",d:"M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z",clipRule:"evenodd"}),a.createElement("path",{fillRule:"evenodd",d:"M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z",clipRule:"evenodd"}))}const M=a.forwardRef(z),p=M,g=({variant:e,isDisabled:n,isLoading:o,LeftIcon:r,RightIcon:m,label:D,fullWidth:E})=>{const C="inline-flex items-center justify-center px-3 py-2 gap-3 rounded text-base font-manrope font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5469D4]",f={primary:"text-white bg-[#3850c7] hover:bg-[#213597]",secondary:"text-[#131314] bg-[#F0F2F5] hover:bg-[#E3E6EB]",ghost:"text-[#131314] bg-transparent hover:bg-[#F0F2F5]",danger:"text-white bg-[#C73838] hover:bg-[#972121]"},V={disabled:"bg-[#F0F2F5] text-[#9A9FA6] hover:bg-[#F0F2F5] cursor-not-allowed",loading:`${f[e]} cursor-wait`},_=E?"w-full":"",t=n?"disabled":o?"loading":null,q=t?V[t]:"",N=t?q:f[e],$=e==="primary"||e==="danger"?"light":"dark";return l("button",{disabled:t==="disabled"||t==="loading",className:`${C} ${N} ${_}`,children:o?l("div",{children:l(S,{variant:$})}):j(H,{children:[r&&l(r,{className:"h-6 w-6"}),D,m&&l(m,{className:"h-6 w-6"})]})})};try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},LeftIcon:{defaultValue:null,description:"",name:"LeftIcon",required:!1,type:{name:"ComponentType<{ className?: string; }>"}},RightIcon:{defaultValue:null,description:"",name:"RightIcon",required:!1,type:{name:"ComponentType<{ className?: string; }>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Components/Button",component:g,tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["primary","secondary","ghost","danger"]}},isDisabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},LeftIcon:{control:{type:"boolean"}},RightIcon:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}}}},s={args:{variant:"primary",label:"Button",RightIcon:u,LeftIcon:p}},c={args:{variant:"secondary",label:"Button",RightIcon:u,LeftIcon:p}},i={args:{variant:"ghost",label:"Button",RightIcon:u,LeftIcon:p}},d={args:{variant:"danger",label:"Button",RightIcon:u,LeftIcon:p}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,I,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var R,x,A;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var F,B,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    label: "Button",
    RightIcon: ArrowRightIcon,
    LeftIcon: InboxArrowDownIcon
  }
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Q=["Primary","Secondary","Ghost","Danger"];export{d as Danger,i as Ghost,s as Primary,c as Secondary,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Button.stories-792e9027.js.map
