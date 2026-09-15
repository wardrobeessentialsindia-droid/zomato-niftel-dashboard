(function(){
  const iframe=document.getElementById('app');
  const RBAC_PATHS=['/user-login-hours','/login-hours-correction','/login-hours-approval','/access-management','/audit-log'];
  function isRbac(path){return RBAC_PATHS.some(p=>path===p||path.startsWith(p+'/'));}
  function install(){
    try{
      const w=iframe?.contentWindow;
      if(!w||typeof w.go!=='function'||w.go.__rbacNavPatched)return;
      const original=w.go;
      const wrapped=function(path){
        if(isRbac(String(path||'')))return;
        return original.apply(this,arguments);
      };
      wrapped.__rbacNavPatched=true;
      w.go=wrapped;
    }catch(e){console.warn('RBAC navigation patch',e)}
  }
  iframe?.addEventListener('load',()=>setTimeout(install,0));
  setTimeout(install,0);
})();
