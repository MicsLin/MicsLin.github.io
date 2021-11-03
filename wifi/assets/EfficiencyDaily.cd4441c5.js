import{L as e,m as t,P as a,r as l,o as s,a as n,b as i,c as r,d as o,F as d,w as u}from"./vendor.6f924201.js";import{e as c}from"./exporting.c3e4ea55.js";import{_ as p}from"./index.fde7526d.js";c(e);var m=p({props:{data:Number,color:String},setup(e){const l=t(e.data);a(e,(()=>{s.value.plotOptions.pie.endAngle=e.data/100*360,s.value.title.text=e.data+"%"}));const s=t({chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:l.value+"%",align:"center",verticalAlign:"middle"},tooltip:{pointFormat:l.value+"%"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{dataLabels:{enabled:!1,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:0,endAngle:e.data/100*360,center:["50%","50%"],size:"50%",colors:[e.color]}},series:[{type:"pie",name:"Browser share",innerSize:"50%",data:[l.value]}],exporting:{enabled:!1},credits:{enabled:!1}});return{chartOptions:s}}},[["render",function(e,t,a,r,o,d){const u=l("highcharts");return s(),n("div",null,[i(u,{options:r.chartOptions},null,8,["options"])])}]]);c(e);const v={components:{HighchartsCircle:m},setup(){const e=[{name:"123",use:87,default:90},{name:"ddd",use:77,default:93},{name:"niek",use:85,default:92},{name:"pan",use:89,default:90},{name:"123pan",use:90,default:92},{name:"bbc",use:85,default:91},{name:"acc",use:82,default:90},{name:"pan",use:89,default:90},{name:"123pan",use:90,default:92},{name:"bbc",use:85,default:91},{name:"acc",use:82,default:90},{name:"pan",use:89,default:90},{name:"123pan",use:90,default:92},{name:"bbc",use:85,default:91},{name:"acc",use:82,default:90}],a=r((()=>e.map((function(e,t,a){return e.name})))),l=r((()=>e.map((function(e,t,a){return e.use})))),s=r((()=>e.map((function(e,t,a){return e.default})))),n=r((()=>l.value.map((function(e,t,a){return Math.round(e/s.value[t]*100)})))),i=t(l.value[0]),o=t(s.value[0]),d=t(n.value[0]),u=t(90);return{chartOptions:{chart:{type:"column"},title:{text:""},subtitle:{text:""},xAxis:{categories:a.value,crosshair:!0},yAxis:{min:0,max:100,title:{text:"百分比"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"使用效率",data:l.value,point:{events:{click:function(){i.value=l.value[this.index],o.value=s.value[this.index],d.value=n.value[this.index],u.value=92}}}},{name:"性能效率",data:s.value,point:{events:{click:function(){i.value=l.value[this.index],o.value=s.value[this.index],d.value=n.value[this.index],u.value=92}}}},{name:"達成率",data:n.value,point:{events:{click:function(){i.value=l.value[this.index],o.value=s.value[this.index],d.value=n.value[this.index],u.value=92}}}}],credits:{enabled:!1}},getCurrencyUse:i,getCurrencyDefault:o,getCurrencyGot:d,getCurrencyTotal:u}}},h={class:"flex flex-wrap items-center"},f={class:"w-1/4 md:w-1/2 md:mb-5 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow"},x={class:"w-11/12"},b=o("div",{class:"py-2 relative top-0 text-center z-20 bg-blue-400"},"使用效率",-1),g={class:"relative left-2 -top-28 md:-top-28 sm:-top-32 z-1"},w={class:"w-1/4 md:w-1/2 md:mb-5 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow"},y={class:"w-11/12"},z=o("div",{class:"py-2 relative top-0 text-center z-20 bg-blue-400"},"性能效率",-1),C={class:"relative left-2 -top-28 md:-top-28 sm:-top-32 z-1"},k={class:"w-1/4 md:w-1/2 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow"},A={class:"w-11/12"},O=o("div",{class:"py-2 relative top-0 text-center z-20 bg-blue-400"},"設備綜合效率",-1),F={class:"relative left-2 -top-28 md:-top-28 sm:-top-32 z-1"},j={class:"w-1/4 md:w-1/2 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow"},S={class:"w-11/12"},B=o("div",{class:"py-2 relative top-0 text-center z-20 bg-blue-400"},"達成率",-1),H={class:"relative left-2 -top-28 md:-top-28 sm:-top-32 z-1"};var L=p(v,[["render",function(e,t,a,r,u,c){const p=l("highcharts"),m=l("HighchartsCircle");return s(),n(d,null,[o("div",null,[i(p,{options:r.chartOptions},null,8,["options"])]),o("div",h,[o("div",f,[o("div",x,[b,o("div",g,[i(m,{data:r.getCurrencyUse,color:"blue"},null,8,["data"])])])]),o("div",w,[o("div",y,[z,o("div",C,[i(m,{data:r.getCurrencyDefault,color:"#383838"},null,8,["data"])])])]),o("div",k,[o("div",A,[O,o("div",F,[i(m,{data:r.getCurrencyGot,color:"green"},null,8,["data"])])])]),o("div",j,[o("div",S,[B,o("div",H,[i(m,{data:r.getCurrencyTotal,color:"purple"},null,8,["data"])])])])])],64)}]]);const T=o("h1",{class:"flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600"},"產線效率表",-1),W={class:"w-full shadow"},D={class:"flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},G={class:"flex items-center"},M=o("div",{class:"flex items-center mr-5 sm:mr-2 text-xl"},[o("span",{class:"sm:hidden"},[o("i",{class:"pe-7s-target pe-lg pe-va"})]),o("span",{class:"ml-3 sm:ml-0"},"產線效率")],-1),P=o("button",{class:"btn bg-blue-basic text-white"},"回上頁",-1),U={class:"py-6 sm:py-4 text-gray-500 text-sm"},_={props:{filterResult:Array},setup:e=>(e,t)=>{const a=l("router-link");return s(),n(d,null,[T,o("div",W,[o("div",D,[o("div",G,[M,i(a,{to:"/efficiency"},{default:u((()=>[P])),_:1})])]),o("div",U,[i(L)])])],64)}};export{_ as default};
