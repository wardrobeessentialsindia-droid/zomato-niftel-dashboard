(function(){
  const iframe=document.getElementById('app');
  const RBAC_PATHS=['/user-login-hours','/login-hours-correction','/login-hours-approval','/access-management','/audit-log'];
  const isRbac=path=>RBAC_PATHS.some(p=>path===p||path.startsWith(p+'/'));
  let rbacClick=null;
  let patchedNav=null;
  function patch(){
    try{
      const w=iframe?.contentWindow,doc=w?.document,nav=doc?.getElementById('nav');
      if(!w||!doc||!nav)return;
      if(nav!==patchedNav){
        patchedNav=nav;
        const originalAdd=nav.addEventListener;
        nav.addEventListener=function(type,listener,options){
          if(type==='click'&&typeof listener==='function'&&!((options&&options.capture)===true))rbacClick=listener;
          return originalAdd.call(this,type,listener,options);
        };
        doc.addEventListener('click',e=>{
          const a=e.target?.closest?.('a');
          if(!a||!rbacClick)return;
          const p=new URL(a.href,w.location.href).pathname;
          if(!isRbac(p))return;
          e.preventDefault();
          e.stopPropagation();
          try{rbacClick(e)}catch(err){console.warn('RBAC route bridge',err)}
        },true);
      }
    }catch(e){console.warn('RBAC route bridge install',e)}
  }
  iframe?.addEventListener('load',()=>{patch();setTimeout(patch,25);setTimeout(patch,100);});
  setInterval(patch,250);
})();
