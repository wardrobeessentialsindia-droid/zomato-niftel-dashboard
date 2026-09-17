(function(){
  const SUPABASE_URL='https://kvqxclmlpxqmefmmtodw.supabase.co';
  const SUPABASE_KEY='sb_publishable_p91PnYIaURogXDnkYbBijQ_Plb0-Ted';
  const db=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY);
  const iframe=document.getElementById('app');
  const STYLE_ID='niftel-theme-toggle-style';
  const BTN_ID='niftel-theme-controls';
  function install(){
    const doc=iframe?.contentWindow?.document;
    if(!doc||!doc.body)return;
    if(!doc.getElementById(STYLE_ID)){
      const s=doc.createElement('style');s.id=STYLE_ID;
      s.textContent=`
:root{color-scheme:light}
body.niftel-dark{background:#0b0d0f!important;color:#f5f7fa!important}
body.niftel-dark #app{background:#0b0d0f!important;color:#f5f7fa!important}
body.niftel-dark .card,body.niftel-dark .section,body.niftel-dark .uploadbox,body.niftel-dark .upload,body.niftel-dark .table,body.niftel-dark .tablewrap{background:#14171a!important;color:#f5f7fa!important;border-color:#2b3036!important}
body.niftel-dark h1,body.niftel-dark h2,body.niftel-dark h3,body.niftel-dark p,body.niftel-dark small,body.niftel-dark label,body.niftel-dark .muted,body.niftel-dark td{color:#e9edf2!important}
body.niftel-dark th{background:#1d2228!important;color:#fff!important;border-color:#30363d!important}
body.niftel-dark input,body.niftel-dark select,body.niftel-dark textarea{background:#101317!important;color:#fff!important;border-color:#363c44!important}
body.niftel-dark .pagehead{color:#fff!important}
body.niftel-dark .detail strong{color:#fff!important}
body.niftel-dark .detail small{color:#aeb7c2!important}
body.niftel-dark .tablewrap{box-shadow:none!important}
body.niftel-dark a{color:#f1f3f5!important}
body.niftel-dark .nav a,body.niftel-dark #nav a{color:#dce1e7!important}
body.niftel-dark .nav a:hover,body.niftel-dark #nav a:hover{background:#20252b!important}
body.niftel-dark .btn:not(.primary){background:#1b2026!important;color:#fff!important;border-color:#343b43!important}
#${BTN_ID}{position:fixed;top:12px;right:16px;z-index:99998;display:flex;gap:8px;align-items:center;font-family:Inter,system-ui,sans-serif}
#${BTN_ID} button{border:1px solid #d0d5dd;border-radius:999px;padding:7px 12px;background:#fff;color:#101828;font-size:11px;font-weight:800;cursor:pointer;box-shadow:0 2px 8px rgba(16,24,40,.08)}
#${BTN_ID} .logout{background:#e23744;color:#fff;border-color:#e23744}
body.niftel-dark #${BTN_ID} button{background:#181c21;color:#fff;border-color:#39414b}
body.niftel-dark #${BTN_ID} .logout{background:#e23744;border-color:#e23744}
`;
      doc.head.appendChild(s);
    }
    let box=doc.getElementById(BTN_ID);
    if(!box){
      box=doc.createElement('div');box.id=BTN_ID;
      box.innerHTML='<button id="niftelThemeBtn" type="button">☀️ Light</button><button id="niftelLogoutBtn" class="logout" type="button">Logout</button>';
      doc.body.appendChild(box);
      doc.getElementById('niftelThemeBtn').onclick=toggle;
      doc.getElementById('niftelLogoutBtn').onclick=logout;
    }
    const saved=localStorage.getItem('niftel-theme')||'dark';
    apply(saved);
  }
  function apply(mode){
    const doc=iframe?.contentWindow?.document;if(!doc)return;
    doc.body.classList.toggle('niftel-dark',mode==='dark');
    const b=doc.getElementById('niftelThemeBtn');if(b)b.textContent=mode==='dark'?'☀️ Light':'🌙 Dark';
  }
  function toggle(){const next=(localStorage.getItem('niftel-theme')||'dark')==='dark'?'light':'dark';localStorage.setItem('niftel-theme',next);apply(next)}
  async function logout(){
    const b=iframe?.contentWindow?.document?.getElementById('niftelLogoutBtn');if(b){b.disabled=true;b.textContent='Logging out…'}
    try{if(db)await db.auth.signOut()}catch(e){console.warn('Logout',e)}
    localStorage.removeItem('niftel-theme');
    window.location.reload();
  }
  iframe?.addEventListener('load',()=>setTimeout(install,50));
  setTimeout(install,200);setInterval(install,1000);
})();
