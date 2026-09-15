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
          --red:#b71c2a!important;
          --mint:#00a98f!important;
          --bg:#f7f7f8!important;
          --card:#ffffff!important;
          --line:#e6e7ea!important;
          --ink:#20242a!important;
          --muted:#667085!important;
          --soft:#98a2b3!important;
          --good:#16834b!important;
          --warn:#b7791f!important;
          --bad:#c51f31!important;
        }
        html,body{background:#f7f7f8!important;color:#20242a!important}
        .sidebar{background:#fff!important;color:#20242a!important;border-right:1px solid #e1e3e6!important;box-shadow:2px 0 10px rgba(20,20,20,.04)!important}
        .brand{border-bottom:1px solid #e1e3e6!important}
        .brandtop{color:#b71c2a!important}
        .brandname{color:#20242a!important}
        .brandsub{color:#7b8490!important}
        .navlabel,.nav-label{color:#8a929c!important}
        .nav a{color:#3f4650!important}
        .nav a:hover{background:#fff1f2!important;color:#b71c2a!important}
        .nav a.active{background:#b71c2a!important;color:#fff!important}
        .wrap{background:#f7f7f8!important}
        .header{background:#fff!important;border-bottom:1px solid #e1e3e6!important}
        .title h1{color:#20242a!important}
        .title p{color:#667085!important}
        .status,.refresh{background:#fff!important;border-color:#dfe2e6!important;color:#475467!important}
        .refresh:hover{border-color:#b71c2a!important;color:#b71c2a!important}
        .main{background:#f7f7f8!important}
        .toolbar,.card{background:#fff!important;border-color:#e1e3e6!important;box-shadow:0 2px 8px rgba(20,20,20,.05)!important}
        .toolbar select,.toolbar button,.input,.search,.selectline select,.selectline input{background:#fff!important;color:#344054!important;border-color:#d9dde2!important}
        .primary{background:#b71c2a!important;border-color:#b71c2a!important;color:#fff!important}
        .btn{background:#fff!important;color:#344054!important;border-color:#d9dde2!important}
        .btn:hover{border-color:#b71c2a!important;color:#b71c2a!important}
        .tabs .tab{background:#fff!important;color:#475467!important;border-color:#d9dde2!important}
        .tabs .tab.active{background:#fff0f1!important;color:#b71c2a!important;border-color:#e9aeb5!important}
        .kpi,.detail{background:#fff!important}
        .kvalue,.detail strong{color:#20242a!important}
        .klabel,.detail small{color:#667085!important}
        .section h2,.pagehead h2{color:#20242a!important}
        .pagehead p,.muted{color:#667085!important}
        th{background:#fafafa!important;color:#667085!important;border-bottom:2px solid #b71c2a!important}
        td{background:#fff!important;color:#344054!important;border-bottom:1px solid #e6e7ea!important}
        tbody tr:hover{background:#fff5f5!important}
        tbody tr:hover td{background:#fff5f5!important}
        .notice{background:#fff!important;border-color:#e1e3e6!important;color:#667085!important}
        .dangerbox{background:#fff5f5!important;border-color:#f0b5ba!important;color:#b42318!important}
        .success{background:#ecfdf3!important;border-color:#b7ebca!important;color:#167044!important}
        .drop{background:#fff8f8!important;border-color:#d9a0a6!important}
        .uploadbox{background:#fff!important;border-color:#e1e3e6!important}
        .chartcard{background:#fff!important}
        .pagination button{background:#fff!important;color:#344054!important;border-color:#d9dde2!important}
        .pagination button:hover{border-color:#b71c2a!important;color:#b71c2a!important}
        .badge{background:#f4f5f6!important}
        .upload-page-shell,.process-card,.meta-card{background:#fff!important;border-color:#e1e3e6!important}
      `;
    }catch(e){console.warn('red-white theme',e)}
  }
  iframe?.addEventListener('load',()=>setTimeout(apply,50));
  setTimeout(apply,100);
  setInterval(apply,1000);
})();
