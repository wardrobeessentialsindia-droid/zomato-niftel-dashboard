(function(){
  const SUPABASE_URL='https://kvqxclmlpxqmefmmtodw.supabase.co';
  const SUPABASE_KEY='sb_publishable_p91PnYIaURogXDnkYbBijQ_Plb0-Ted';
  const DASHBOARD_API=SUPABASE_URL+'/functions/v1/dashboard-data-v2';
  const db=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY);
  const nativeFetch=window.fetch.bind(window);
  window.fetch=async function(input,init){
    try{
      const url=typeof input==='string'?input:(input?.url||'');
      const method=String(init?.method || input?.method || 'GET').toUpperCase();
      if(db && url.startsWith(DASHBOARD_API) && method==='POST'){
        const {data}=await db.auth.getSession();
        const token=data?.session?.access_token || window.__RBAC_SESSION?.access_token;
        if(token){
          const headers=new Headers(init?.headers || (input instanceof Request?input.headers:undefined));
          headers.set('Authorization','Bearer '+token);
          return nativeFetch(input,{...(init||{}),headers});
        }
      }
    }catch(e){console.warn('Dashboard auth bridge',e)}
    return nativeFetch(input,init);
  };
})();
