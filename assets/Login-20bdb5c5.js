import{E as C,a as x,c as E,b as F}from"./el-input-b549b1f1.js";import{d as I,r as m,g as R,bA as T,o as $,a as q,c as B,b as s,e as t,k as r,l as _,v as g,H as d,I as U,bG as A,J as u,f as N}from"./index-837c2d33.js";import{_ as S}from"./Navbar.vue_vue_type_style_index_0_lang-82352c55.js";const L=""+new URL("66593-8ecc076b.png",import.meta.url).href,M={class:"register_page"},P=t("img",{src:L},null,-1),z=t("div",{class:"headline"},"登入",-1),D=["value"],G={class:"btn_area"},H={class:"a_area"},O=I({__name:"Login",setup(J){const p=m(),k=U();m("");const l=m({email:"lara1105huang@gmail.com",password:"1qaz1234",checkin:null}),b=R({email:[{required:!0,message:"電子郵件不能為空",trigger:"change"},{type:"email",required:!0,message:"電子郵件格式不正確",trigger:"blur"}],password:[{required:!0,message:"密碼不能為空",trigger:"blur"},{mim:6,max:30,message:"長度6~30個字符之間",trigger:"blur"}]}),h=T(),w=async n=>{n&&await n.validate((e,c)=>{e?A(h,l.value.email,l.value.password).then(a=>{a.user.accessToken.length>0&&(localStorage.setItem("token",a.user.accessToken),k.push("/admin/schedules"),console.log(a.user.accessToken,a.user.accessToken.length>0),u({message:"登入成功！",type:"success"}))}).catch(a=>{switch(a.code){case"auth/invalid-email":u.error("電子郵件規則不符");break;case"auth/user-not-found":u.error("找不到該電子郵件的帳戶");break;case"auth/wrong-password":u.error("密碼錯誤");break;default:u.error("電子郵件或密碼不正確");break}}):u.error(c)})},i=m(!1),V=n=>{n&&n.resetFields()};return $(()=>{}),(n,e)=>{const c=C,a=x,v=E,f=N("router-link"),y=F;return q(),B("div",null,[s(S),t("div",M,[P,z,s(y,{ref_key:"ruleFormRef",ref:p,model:l.value,rules:b,class:"register_in"},{default:r(()=>[s(a,{label:"帳號",prop:"email"},{default:r(()=>[s(c,{modelValue:l.value.email,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.email=o)},null,8,["modelValue"])]),_:1}),s(a,{label:"密碼",prop:"password"},{default:r(()=>[s(c,{class:"addmin_pad",type:"password",modelValue:l.value.password,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.password=o)},null,8,["modelValue"]),_(t("i",{class:"fa-solid fa-eye-slash",onClick:e[2]||(e[2]=o=>i.value=!0)},null,512),[[g,!i.value]]),_(t("i",{class:"fa-solid fa-eye",onClick:e[3]||(e[3]=o=>i.value=!1)},null,512),[[g,i.value]]),_(t("input",{type:"text",class:"see_pad",value:l.value.password},null,8,D),[[g,i.value]])]),_:1}),t("div",G,[s(v,{class:"btn_cancel",onClick:e[4]||(e[4]=o=>V(p.value))},{default:r(()=>[d("取消")]),_:1}),s(v,{onClick:e[5]||(e[5]=o=>w(p.value)),class:"addSave"},{default:r(()=>[d("登入")]),_:1})]),t("div",H,[s(f,{to:"/register"},{default:r(()=>[d("還沒有註冊")]),_:1}),d("| "),s(f,{to:"/"},{default:r(()=>[d("回首頁")]),_:1})])]),_:1},8,["model","rules"])])])}}});export{O as default};
