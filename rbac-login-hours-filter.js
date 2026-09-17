(function(){
  const iframe=document.getElementById('app');
  function install(){
    const w=iframe?.contentWindow;
    const doc=w?.document;
    if(!doc||doc.__loginHoursFilterInstalled)return;
    doc.__loginHoursFilterInstalled=true;
    doc.addEventListener('click',function(e){
      const button=e.target?.closest?.('#lhFilter');
      if(!button)return;
      const search=(doc.getElementById('lhSearch')?.value||'').trim().toLowerCase();
      const from=doc.getElementById('lhFrom')?.value||'';
      const to=doc.getElementById('lhTo')?.value||'';
      const tbody=doc.querySelector('.table table tbody');
      if(!tbody)return;
      e.preventDefault();
      e.stopImmediatePropagation();
      let visible=0;
      tbody.querySelectorAll('tr').forEach(tr=>{
        const cells=tr.children;
        const agent=(cells[0]?.textContent||'').toLowerCase();
        const email=(cells[1]?.textContent||'').toLowerCase();
        const rowDate=(cells[4]?.textContent||'').trim();
        const matchSearch=!search||agent.includes(search)||email.includes(search);
        const matchFrom=!from||rowDate>=from;
        const matchTo=!to||rowDate<=to;
        const show=matchSearch&&matchFrom&&matchTo;
        tr.style.display=show?'':'none';
        if(show)visible++;
      });
      const stats=doc.querySelectorAll('.detailgrid .detail strong');
      if(stats[0])stats[0].textContent=String(visible);
    },true);
  }
  iframe?.addEventListener('load',()=>setTimeout(install,0));
  setTimeout(install,0);
  setInterval(install,500);
})();
