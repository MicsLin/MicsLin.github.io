import{L as t,u as e,r as s,o as a,k as n,m as i,M as o,a as l,t as r,d as u,b as m,F as c,f as p}from"./vendor.6f924201.js";import{e as b}from"./exporting.c3e4ea55.js";import{_ as d}from"./index.fde7526d.js";b(t);var h=d({name:"HighCharts",setup(){const t=e();return{chartOptions:{chart:{type:"column"},title:{text:""},subtitle:{text:"按下長條圖可進入個別產線資料"},xAxis:{type:"category",labels:{rotation:-45,style:{fontSize:"13px",fontFamily:"Verdana, sans-serif"}}},yAxis:{min:0,title:{text:"Population (millions)"}},tooltip:{pointFormat:"Population in 2017: <b>{point.y:.1f} millions</b>"},series:[{name:"Population",data:[["Shanghai",24.2],["Beijing",20.8],["Karachi",14.9],["Shenzhen",13.7],["Guangzhou",13.1],["Istanbul",12.7],["Mumbai",12.4],["Moscow",12.2],["São Paulo",12],["Delhi",11.7],["Kinshasa",11.5],["Tianjin",11.2],["Lahore",11.1],["Jakarta",10.6],["Dongguan",10.6],["Lagos",10.6],["Bengaluru",10.3],["Seoul",9.8],["Foshan",9.3],["Tokyo",9.3]],point:{events:{click:function(){t.push({path:"/line_balance",query:{data:this.name}})}}}}],exporting:{enabled:!0},credits:{enabled:!1}}}}},[["render",function(t,e,i,o,l,r){const u=s("highcharts");return a(),n(u,{options:o.chartOptions},null,8,["options"])}]]);var g=d({setup(){const t=i();function e(){const e=new Date,s=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),a=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();t.value=s+" "+a}return setInterval((()=>{e()}),1e3),o((()=>{clearInterval(e())})),{dateTime:t}}},[["render",function(t,e,s,n,i,o){return a(),l("span",null,r(n.dateTime),1)}]]);const f={class:"flex sm:block pt-8 mb-8 sm:mb-4 text-3xl text-gray-600"},x=u("p",{class:"mr-4"},"即時資訊:",-1),v={class:"font-semibold sm:text-base"},y={class:"w-full shadow"},w=p('<div class="flex sm:block sm:relative items-center justify-between h-16 sm:h-28 pl-8 sm:pl-4 pr-10 sm:pr-4 sm:pt-3 bg-blue-title text-lg text-blue-title-text"><div class="flex sm:block"><span class="flex items-center mr-10 sm:mr-1 sm:mb-5">生產線資訊</span><div class="md:relative"><input type="search" class="form-control myInput w-80 md:w-72 sm:w-full" placeholder="輸入機台名稱或生產線名稱" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><button type="button" id="button-addon2" class="btn bg-blue-basic text-white md:absolute md:right-0">搜尋</button></div></div><button type="button" class="btn bg-blue-basic text-white sm:absolute sm:top-2 sm:right-4">顯示全部</button></div>',1),k={class:"table_padding"},j={setup:t=>(t,e)=>(a(),l(c,null,[u("h1",f,[x,u("p",v,[m(g)])]),u("div",y,[w,u("div",k,[m(h)])])],64))};export{j as default};