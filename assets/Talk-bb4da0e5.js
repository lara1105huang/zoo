import{E as N,a as T,c as M,b as B}from"./el-input-86bdbab0.js";import{E as K}from"./el-overlay-55444f5e.js";import{d as S,C as c,r as o,g as H,o as U,a as r,c as n,e as a,t as u,w as $,F as j,G as q,l as z,bE as G,bF as b,b as i,k as m,bD as L,ap as O,ao as g,H as y,I as A}from"./index-d6aabc30.js";import{h as J}from"./moment-fbc5633a.js";import"./firebaseConfig-215217af.js";import"./focus-trap-a630e220.js";const P={class:"teacherItem"},Q={class:"pic"},W=["src"],X={class:"name"},Y=a("div",{class:"headline"},"觀賞影片",-1),Z={class:"video"},ee=["src"],se=a("i",{class:"fa-solid fa-rotate-left"},null,-1),ae=[se],te={class:"talk_area"},oe={class:"subject"},le={ref:"chatBody",class:"chat-body"},re={class:"message-name"},ne=["src"],ie=["src"],de={key:2,class:"message-text"},ce={class:"build_time"},ue={class:"footer_form"},me={class:"talk_textarea"},_e=a("div",{class:"footer_form"},[a("div",{class:"text"},"即時聊天室")],-1),ve={class:"delDialog"},fe={class:"btn_area"},we=S({__name:"Talk",setup(pe){A();const x=L();c.database().ref("teachers/"),c.database().ref("messages/");const f=o(x.params.id),_=o(!0),d=o({name:""}),w=H({name:[{required:!0,message:"課程主題不能為空！",trigger:"change"},{min:2,max:30,message:"長度2~30個字符之間",trigger:"blur"}]}),l=o({}),V=()=>{c.database().ref("teachers/"+f.value).once("value",s=>{l.value=s.val(),console.log("teacherItem.value",l.value)})},h=t=>{if(t.shiftKey||t.keyCode===229)return!1;_.value=!1},p=o({}),v=o(),C=t=>{if(t.shiftKey||t.keyCode===229)return!1;c.database().ref("messages/"+f.value).push({userName:d.value.name,type:"text",message:v.value,timeStamp:J(new Date).format("HH:mm")}),v.value="",t.preventDefault()};o(!0),o(!1),o();const D=()=>{c.database().ref("messages/"+f.value).on("value",s=>{p.value=s.val(),console.log(p.value)})};return U(()=>{V(),D()}),(t,s)=>{const E=N,R=T,k=M,F=B,I=K;return r(),n("div",P,[a("div",Q,[a("img",{src:l.value.picture},null,8,W)]),a("div",X,u(l.value.name),1),Y,a("div",Z,[a("iframe",{src:l.value.video,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ee)]),a("span",{class:"loginout_icon",onClick:s[0]||(s[0]=$(e=>t.$router.push("/onetoone"),["prevent"]))},ae),a("div",te,[a("div",oe,u(l.value.name)+"問答區 ",1),a("div",le,[(r(!0),n(j,null,q(p.value,e=>(r(),n("div",{key:e.id,class:O([{"is-selfuser":e.userName===d.value.name},"message-box"])},[a("div",re,u(e.userName),1),e.type==="sticker"?(r(),n("img",{key:0,src:e.url,class:"message-sticker"},null,8,ne)):g("",!0),e.type==="image"?(r(),n("img",{key:1,src:e.url,class:"message-image"},null,8,ie)):g("",!0),e.type==="text"?(r(),n("div",de,u(e.message),1)):g("",!0),a("span",ce,u(e.timeStamp),1)],2))),128))],512),a("div",ue,[a("div",me,[z(a("textarea",{"onUpdate:modelValue":s[1]||(s[1]=e=>v.value=e),onKeypress:s[2]||(s[2]=b(e=>C(e),["enter"])),rows:"1"},null,544),[[G,v.value,void 0,{trim:!0}]])])]),_e]),i(I,{class:"openTalkDialog",modelValue:_.value,"onUpdate:modelValue":s[7]||(s[7]=e=>_.value=e),title:"進入線上問答區"},{default:m(()=>[a("div",ve,[i(F,{ref:"ruleOrderFormRef",model:d.value,rules:w},{default:m(()=>[i(R,{label:"訂課人姓名",prop:"name"},{default:m(()=>[i(E,{modelValue:d.value.name,"onUpdate:modelValue":s[3]||(s[3]=e=>d.value.name=e),modelModifiers:{trim:!0},placeholder:"請輸入你的姓名",onKeydown:s[4]||(s[4]=b(e=>h(e),["enter"]))},null,8,["modelValue"])]),_:1}),a("div",fe,[i(k,{class:"btn_cancel",onClick:s[5]||(s[5]=e=>_.value=!1)},{default:m(()=>[y("取消")]),_:1}),i(k,{onClick:s[6]||(s[6]=e=>h(e)),class:"addSave"},{default:m(()=>[y("確定")]),_:1})])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])}}});export{we as default};