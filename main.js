const API_BASE="https://tqnn-anyengine-api-914075492772.northamerica-northeast1.run.app";
  function getSignupEmail(){
    const emailInput=document.getElementById("checkout-email");
    const email=(emailInput.value||"").trim();
    if(!email){showCheckoutStatus("Enter your email to continue.","error");emailInput.focus();return null;}
    if(!/^\S+@\S+\.\S+$/.test(email)){showCheckoutStatus("Enter a valid email address.","error");emailInput.focus();return null;}
    return email;
  }
  function showCheckoutStatus(message,type="error"){
    const box=document.getElementById("checkout-error");
    box.textContent=message;
    box.style.display="block";
    if(type==="success"){
      box.style.borderColor="rgba(124,246,167,.28)";
      box.style.background="rgba(124,246,167,.07)";
      box.style.color="#bfffd2";
    }else if(type==="info"){
      box.style.borderColor="rgba(95,232,255,.28)";
      box.style.background="rgba(95,232,255,.07)";
      box.style.color="#c9f9ff";
    }else{
      box.style.borderColor="rgba(255,128,151,.25)";
      box.style.background="rgba(255,128,151,.07)";
      box.style.color="#ffc1cc";
    }
  }
  async function startExplorer(){
    const email=getSignupEmail();
    if(!email)return;
    const button=document.getElementById("explorer-button");
    const originalText=button.textContent;
    button.disabled=true;
    button.textContent="Creating key…";
    showCheckoutStatus("Creating your Explorer key and preparing the email…","info");
    try{
      const response=await fetch(API_BASE+"/signup/explorer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({customer_email:email})
      });
      let data={};
      try{data=await response.json();}catch(_error){}
      if(!response.ok){
        const detail=data.detail;
        const message=typeof detail==="string"?detail:(detail&&detail.message)||"Explorer signup could not be completed.";
        throw new Error(message);
      }
      showCheckoutStatus("Success — your Explorer API key has been emailed to you. Check your inbox and spam folder.","success");
      button.textContent="Key Sent";
    }catch(error){
      showCheckoutStatus(error.message||"Explorer signup could not be completed. Please try again.","error");
      button.disabled=false;
      button.textContent=originalText;
    }
  }
  function startCheckout(tier){
    const email=getSignupEmail();
    if(!email)return;
    showCheckoutStatus("Opening secure Stripe Checkout…","info");
    window.location.href=API_BASE+"/billing/checkout/"+encodeURIComponent(tier)+"?customer_email="+encodeURIComponent(email);
  }
  const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
