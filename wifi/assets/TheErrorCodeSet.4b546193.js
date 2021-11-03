import{m as e,r,a as t,d as l,t as o,n as s,j as a,v as n,F as c,l as d,y as u,b,w as p,o as y}from"./vendor.6f924201.js";const i=l("h1",{class:"flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600"},"錯誤碼設定",-1),x=[l("i",{class:"pe-7s-close pe-lg pe-va"},null,-1)],v={class:"w-full shadow"},g={class:"flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},m=l("div",null,[l("span",{class:"flex items-center text-xl"},[l("i",{class:"pe-7s-close-circle pe-lg pe-va"}),l("span",{class:"ml-3 mr-1"},"錯誤碼清單")])],-1),f={class:"w-96 md:w-7/12 sm:w-3/12"},h=l("div",null,null,-1),w={class:"px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm"},k={key:0,class:"table-fixed w-full"},E=l("thead",null,[l("tr",null,[l("th",{class:"border border-gray-300 py-3 w-4/12"},"錯誤碼"),l("th",{class:"border border-gray-300"},"內容")])],-1),C={key:0},j=[l("tr",{class:"bg-red-300"},[l("td"),l("td",{class:"py-1 pl-20 sm:pl-0"},"無任何資料")],-1)],I={key:1},_={class:"border border-gray-300 px-2 py-3"},B={class:"border border-gray-300 px-2 py-3"},D=["value"],F={key:1,class:"table-fixed w-full"},M=l("thead",null,[l("tr",null,[l("th",{class:"border border-gray-300 py-3 w-4/12"},"错误码"),l("th",{class:"border border-gray-300"},"內容")])],-1),N={key:0},U=[l("tr",{class:"bg-red-300"},[l("td"),l("td",{class:"py-1 pl-20 sm:pl-0"},"无任何资料")],-1)],V={key:1},q={class:"border border-gray-300 px-2 py-3"},z={class:"border border-gray-300 px-2 py-3"},A=["value"],G={key:2,class:"table-fixed w-full"},H=l("thead",null,[l("tr",null,[l("th",{class:"border border-gray-300 py-3 w-4/12"},"ErrorCode"),l("th",{class:"border border-gray-300"},"Content")])],-1),J={key:0},K=[l("tr",{class:"bg-red-300"},[l("td"),l("td",{class:"py-1 pl-20 sm:pl-0"},"No Data")],-1)],L={key:1},O={class:"border border-gray-300 px-2 py-3"},P={class:"border border-gray-300 px-2 py-3"},Q=["value"],R={key:3,class:"table-fixed w-full"},S=l("thead",null,[l("tr",null,[l("th",{class:"border border-gray-300 py-3 w-4/12"},"エラーコード"),l("th",{class:"border border-gray-300"},"コンテンツ")])],-1),T={key:0},W=[l("tr",{class:"bg-red-300"},[l("td"),l("td",{class:"py-1 pl-20 sm:pl-0"},"情報なし")],-1)],X={key:1},Y={class:"border border-gray-300 px-2 py-3"},Z={class:"border border-gray-300 px-2 py-3"},$=["value"],ee={class:"mt-2"},re={setup(re){const te=e([{title:"",description:"繁體中文"},{title:"",description:"English"},{title:"",description:"简体中文"},{title:"",description:"日本語"}]),le=e(te.value[0].description),oe=e([{errorcode:"Eh-1",errorcontent:"材料短缺"},{errorcode:"Eh-2",errorcontent:"斷針"},{errorcode:"Eh-3",errorcontent:"錯誤碼測試03"},{errorcode:"Eh-4",errorcontent:"錯誤碼測試04"},{errorcode:"Eh-5",errorcontent:"錯誤碼測試05"}]),se=e([{errorcode:"Eh-1",errorcontent:"材料短缺"},{errorcode:"Eh-2",errorcontent:"断针"}]),ae=e([{errorcode:"Eh-1",errorcontent:"Material shortage"},{errorcode:"Eh-2",errorcontent:"Broken needle"}]),ne=e([{errorcode:"Eh-1",errorcontent:"資材不足"}]);e(!1);const ce=e(!1),de=e(""),ue=function(){ce.value=!0,de.value="新增成功"},be=function(){ce.value=!1,de.value=""};return(e,re)=>{const pe=r("router-link");return y(),t(c,null,[i,l("div",{class:s(["flex items-center justify-between mb-8 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow",{hidden:!ce.value}])},[l("span",null,o(de.value),1),l("span",{class:"flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900",onClick:be},x)],2),l("div",v,[l("div",g,[m,l("div",f,[a(l("select",{class:"custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic","onUpdate:modelValue":re[0]||(re[0]=e=>le.value=e)},[(y(!0),t(c,null,d(te.value,((e,r)=>(y(),t("option",{key:r},o(e.description),1)))),128))],512),[[n,le.value]])]),h]),l("div",w,["繁體中文"==le.value?(y(),t("table",k,[E,""==oe.value[0].errorcode?(y(),t("tbody",C,j)):(y(),t("tbody",I,[(y(!0),t(c,null,d(oe.value,((e,r)=>(y(),t("tr",{key:r},[l("td",_,o(e.errorcode),1),l("td",B,[l("input",{type:"text",class:"form-control myInput w-full",value:e.errorcontent},null,8,D)])])))),128))]))])):u("",!0),"简体中文"==le.value?(y(),t("table",F,[M,""==se.value[0].errorcode?(y(),t("tbody",N,U)):(y(),t("tbody",V,[(y(!0),t(c,null,d(se.value,((e,r)=>(y(),t("tr",{key:r},[l("td",q,o(e.errorcode),1),l("td",z,[l("input",{type:"text",class:"form-control myInput w-full",value:e.errorcontent},null,8,A)])])))),128))]))])):u("",!0),"English"==le.value?(y(),t("table",G,[H,""==ae.value[0].errorcode?(y(),t("tbody",J,K)):(y(),t("tbody",L,[(y(!0),t(c,null,d(ae.value,((e,r)=>(y(),t("tr",{key:r},[l("td",O,o(e.errorcode),1),l("td",P,[l("input",{type:"text",class:"form-control myInput w-full",value:e.errorcontent},null,8,Q)])])))),128))]))])):u("",!0),"日本語"==le.value?(y(),t("table",R,[S,""==ne.value[0].errorcode?(y(),t("tbody",T,W)):(y(),t("tbody",X,[(y(!0),t(c,null,d(ne.value,((e,r)=>(y(),t("tr",{key:r},[l("td",Y,o(e.errorcode),1),l("td",Z,[l("input",{type:"text",class:"form-control myInput w-full",value:e.errorcontent},null,8,$)])])))),128))]))])):u("",!0),l("div",ee,[l("button",{type:"button",class:"mr-2 btn bg-blue-basic text-white",onClick:ue},"儲存"),b(pe,{to:"/factory_settings"},{default:p((()=>[l("button",{type:"button",class:"btn bg-blue-basic text-white",onClick:ue},"回上一頁")])),_:1})])])])],64)}}};export{re as default};