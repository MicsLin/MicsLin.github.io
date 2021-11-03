import{h as e,m as t,o as l,a as s,d as a,t as n,f as o,r as d,b as c,w as i,F as u,l as p}from"./vendor.6f924201.js";const r={class:"flex items-center justify-between p-4 mb-2.5 w-full rounded-t bg-blue-300 bg-opacity-50 text-lg"},f={class:"text-blue-800 text-opacity-70 font-bold"},b=[a("i",{class:"pe-7s-plugin pe-lg pe-va"},null,-1)],x=o('<div class="px-4 pt-2 flex-wrap text-gray-600 font-bold text-opacity-80"><table class="mb-2 w-full table-fixed"><tbody><tr class="border-t"><td class="pl-2 py-1 w-4/12">開機時間</td><td class="w-5/12">163小時40分</td></tr><tr class="border-t"><td class="pl-2 py-1">運行時間</td><td>0分0秒</td></tr><tr class="border-t"><td class="pl-2 py-1">總針數</td><td>2991005</td></tr><tr class="border-t border-b"><td class="pl-2 py-1">稼動率</td><td>50%</td></tr></tbody></table><div class="flex items-center justify-center ml-2 bg-gray-200 w-8 h-8 rounded-full"><div class="bg-red-400 w-5 h-5 rounded-full"></div></div></div>',1),v={setup(o){const d=e(),c=t("aa007-0"),i=function(e){d.commit("onPopupOtherData",c.value),d.commit("onPopupForm",e)};return(e,t)=>(l(),s("div",null,[a("div",r,[a("span",f,n(c.value),1),a("div",null,[a("button",{class:"px-3 py-1.5 bg-blue-400 hover:bg-opacity-70 text-sm rounded focus:outline-none",onClick:t[0]||(t[0]=e=>i("machineError"))},"0"),a("button",{class:"ml-2 px-3 py-1.5 bg-blue-600 hover:bg-opacity-70 text-sm rounded focus:outline-none",onClick:t[1]||(t[1]=e=>i("machineMaintain"))},b)])]),x]))}},m={class:"shadow"},g={class:"flex items-center h-16 pl-8 sm:pl-4 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},w=a("span",{class:"mr-5"},"機器狀態",-1),y=a("button",{class:"btn bg-blue-basic text-white"},"返回產線狀態",-1),h={class:"flex flex-wrap w-full pt-5 text-sm text-white"},_={class:"px-8 xl:px-4 w-full"},k={class:"flex items-center justify-between p-4 mb-2.5 md:mb-0 w-full h-16 rounded-t bg-blue-500 text-lg"},j=a("div",{class:"flex items-center"},[a("span",{class:"font-bold"},"14Test "),a("span",{class:"ml-2 w-8 h-5 leading-5 bg-white text-blue-400 text-sm text-center rounded-2xl font-bold"},"29")],-1),C={class:"flex items-center md:hidden"},F=a("button",{class:"flex items-center px-8 py-1 rounded focus:outline-none bg-green-btn hover:bg-opacity-70"},[a("i",{class:"pe-7s-cloud-upload pe-lg pe-fw pe-va"}),a("span",null,"0")],-1),P={class:"mx-2"},D=a("button",{class:"flex items-center px-8 py-1 rounded text-gray-600 focus:outline-none bg-gray-300 hover:bg-opacity-70"},[a("i",{class:"pe-7s-cloud-download pe-lg pe-fw pe-va"}),a("span",null,"19")],-1),E={class:"mr-2"},M=a("button",{class:"flex items-center px-8 py-1 rounded text-white focus:outline-none bg-red-600 hover:bg-opacity-70"},[a("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"}),a("span",null,"50")],-1),O=a("button",{class:"flex items-center px-8 py-1 rounded focus:outline-none bg-yellow-400 hover:bg-opacity-70"},[a("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"}),a("span",null,"20")],-1),T={class:"hidden md:flex"},q={class:"w-1/4"},z=a("div",{class:"py-1.5 w-full text-center bg-green-btn focus:outline-none hover:bg-opacity-70"},[a("i",{class:"pe-7s-cloud-upload pe-lg pe-fw pe-va"}),a("span",null,"0")],-1),A={class:"w-1/4"},B=a("div",{class:"py-1.5 w-full text-center bg-gray-300 text-black focus:outline-none hover:bg-opacity-70"},[a("i",{class:"pe-7s-cloud-download pe-lg pe-fw pe-va"}),a("span",null,"19")],-1),G={class:"w-1/4"},H=a("div",{class:"py-1.5 w-full text-center bg-red-600 focus:outline-none hover:bg-opacity-70"},[a("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"}),a("span",null,"50")],-1),I={class:"w-1/4"},J=a("div",{class:"py-1.5 w-full text-center bg-yellow-400 focus:outline-none hover:bg-opacity-70"},[a("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"}),a("span",null,"20")],-1),K={class:"flex flex-wrap w-full pt-5 text-sm"},L={class:"pb-5 w-72 md:w-64 sm:w-10/12 m-auto round bg-white shadow"},N={setup(e){const n=t([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);return(e,t)=>{const o=d("router-link");return l(),s("div",m,[a("div",g,[w,c(o,{to:"machine_status"},{default:i((()=>[y])),_:1})]),a("div",h,[a("div",_,[a("div",k,[j,a("div",C,[a("div",null,[c(o,{to:"/machine_online"},{default:i((()=>[F])),_:1})]),a("div",P,[c(o,{to:"/machine_offline"},{default:i((()=>[D])),_:1})]),a("div",E,[c(o,{to:"/machine_out_of_order"},{default:i((()=>[M])),_:1})]),a("div",null,[c(o,{to:"/machine_warning"},{default:i((()=>[O])),_:1})])])]),a("div",T,[a("div",q,[c(o,{to:"/machine_online"},{default:i((()=>[z])),_:1})]),a("div",A,[c(o,{to:"/machine_offline"},{default:i((()=>[B])),_:1})]),a("div",G,[c(o,{to:"/machine_out_of_order"},{default:i((()=>[H])),_:1})]),a("div",I,[c(o,{to:"/machine_warning"},{default:i((()=>[J])),_:1})])]),a("div",K,[(l(!0),s(u,null,p(n.value,((e,t)=>(l(),s("div",{class:"w-3/12 xl:w-4/12 lg:w-6/12 sm:w-full mb-7",key:t},[a("div",L,[c(v)])])))),128))])])])])}}};export{N as default};