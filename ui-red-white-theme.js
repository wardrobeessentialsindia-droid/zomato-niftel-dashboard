(function(){
  const iframe=document.getElementById('app');
  function apply(){
    try{
      const d=iframe?.contentDocument;
      if(!d?.head)return;
      let s=d.getElementById('niftelRedWhiteTheme');
      if(!s){s=d.createElement('style');s.id='niftelRedWhiteTheme';d.head.appendChild(s);}
      s.textContent=`
        :root{
          --red:#e23744!important;--mint:#19c6a5!important;--bg:#0d0f11!important;
          --card:#15181b!important;--line:#272b30!important;--ink:#f7f8fa!important;
          --muted:#9aa3ad!important;--soft:#69727d!important;--good:#28d17c!important;
          --warn:#f2b84b!important;--bad:#ff5a67!important;
        }
        html,body{background:#0d0f11!important;color:#f7f8fa!important}
        .sidebar{background:#111315!important;color:#f5f7fa!important;border-right:1px solid #262a2e!important;box-shadow:4px 0 18px rgba(0,0,0,.28)!important}
        .brand{border-bottom:1px solid #2a2e33!important}
        .brandtop{color:#e23744!important}
        .brandname{color:#fff!important}
        .brandsub,.navlabel,.nav-label{color:#737c86!important}
        .nav a{color:#c7ccd2!important;border-radius:7px!important}
        .nav a:hover{background:#211417!important;color:#fff!important}
        .nav a.active{background:#e23744!important;color:#fff!important;box-shadow:none!important}
        .wrap,.main{background:#0d0f11!important}
        .header{background:#111315!important;border-bottom:1px solid #262a2e!important}
        .title h1{color:#fff!important}.title p{color:#8f98a2!important}
        .status,.refresh{background:#15181b!important;border-color:#30353a!important;color:#d7dbe0!important}
        .refresh:hover{border-color:#e23744!important;color:#fff!important;background:#1b1517!important}
        .toolbar,.card{background:#15181b!important;border-color:#292e33!important;box-shadow:0 8px 24px rgba(0,0,0,.16)!important}
        .toolbar select,.toolbar button,.input,.search,.selectline select,.selectline input{background:#101214!important;color:#f3f5f7!important;border-color:#30353a!important}
        .toolbar select:focus,.input:focus,.search:focus,.selectline input:focus{border-color:#e23744!important;outline:none!important}
        .primary{background:#e23744!important;border-color:#e23744!important;color:#fff!important}
        .btn{background:#191c20!important;color:#eef1f4!important;border-color:#30353a!important}.btn:hover{border-color:#e23744!important;color:#fff!important}
        .tabs .tab{background:#15181b!important;color:#bfc5cb!important;border-color:#30353a!important}.tabs .tab.active{background:#e23744!important;color:#fff!important;border-color:#e23744!important}
        .kpi,.detail{background:#15181b!important;border-color:#292e33!important}.kvalue,.detail strong{color:#fff!important}.klabel,.detail small{color:#89929d!important}
        .kpi{position:relative;overflow:hidden}.kpi:after{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:#e23744}.kpi:nth-child(2):after{background:#7c5cff}.kpi:nth-child(3):after{background:#19c6a5}.kpi:nth-child(4):after{background:#f2b84b}.kpi:nth-child(5):after{background:#ff5a67}.kpi:nth-child(6):after{background:#ff7b54}.kpi:nth-child(7):after{background:#4da3ff}.kpi:nth-child(8):after{background:#28d17c}
        .section h2,.pagehead h2{color:#f5f7fa!important}.section span,.pagehead p,.muted{color:#8f98a2!important}
        th{background:#101214!important;color:#8e97a1!important;border-bottom:1px solid #33383e!important}td{background:#15181b!important;color:#dce0e4!important;border-bottom:1px solid #252a2f!important}tbody tr:hover td{background:#211719!important}
        .notice{background:#15181b!important;border-color:#30353a!important;color:#aeb6bf!important}.dangerbox{background:#2a171a!important;border-color:#713238!important;color:#ffb8be!important}.success{background:#10261e!important;border-color:#1e654b!important;color:#9be9c8!important}
        .drop{background:#111315!important;border-color:#5c3035!important}.uploadbox{background:#15181b!important;border-color:#292e33!important}.chartcard{background:#15181b!important;border-color:#292e33!important}
        .pagination button{background:#191c20!important;color:#dce0e4!important;border-color:#30353a!important}.pagination button:hover{border-color:#e23744!important}
        .badge{background:#252a2f!important;color:#e9edf0!important}.upload-page-shell,.process-card,.meta-card{background:#15181b!important;border-color:#292e33!important}
        .tablewrap{scrollbar-color:#444b52 #111315}.tablewrap::-webkit-scrollbar{height:8px;width:8px}.tablewrap::-webkit-scrollbar-track{background:#111315}.tablewrap::-webkit-scrollbar-thumb{background:#3b4249;border-radius:8px}
        .chart{border-radius:8px;overflow:hidden}
        @media(max-width:850px){.sidebar{background:#111315!important}}
      `;
    }catch(e){console.warn('reference UI theme',e)}
  }
  iframe?.addEventListener('load',()=>setTimeout(apply,50));
  setTimeout(apply,100);setInterval(apply,1000);
})();
