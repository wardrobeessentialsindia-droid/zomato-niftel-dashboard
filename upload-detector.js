(function(){
const iframe=document.getElementById('app');
const norm=s=>String(s??'').toLowerCase().replace(/[^a-z0-9]+/g,'');
function headers(ws){return (XLSX.utils.sheet_to_json(ws,{header:1,defval:null,raw:true})[0]||[]).map(norm)}
function hasAny(h,a){return a.some(x=>h.includes(norm(x)))}
iframe.addEventListener('load',()=>{const W=iframe.contentWindow;if(!W||W.__uploadDetectorInstalled)return;W.__uploadDetectorInstalled=true;const originalCustomer=W.parseCustomer,originalLogin=W.parseLogin;
 W.parseCustomer=function(wb){const interactionSheets=wb.SheetNames.filter(n=>{const h=headers(wb.Sheets[n]);return hasAny(h,['tab_id','session_id'])||hasAny(h,['agent_frt','ht'])&&hasAny(h,['agent_email','node'])});if(!interactionSheets.length)return{C:[],names:{}};const rawName=interactionSheets.find(n=>norm(n)==='raw')||interactionSheets[0];const tmp={...wb,SheetNames:[rawName],Sheets:{[rawName]:wb.Sheets[rawName]}};const em=wb.SheetNames.find(n=>norm(n)==='emailid');if(em){tmp.SheetNames.push(em);tmp.Sheets[em]=wb.Sheets[em]}return originalCustomer(tmp)};
 W.parseLogin=function(wb){const workforceSheets=wb.SheetNames.filter(n=>{const h=headers(wb.Sheets[n]);return hasAny(h,['date'])&&hasAny(h,['slotstarttime','slotendtime'])&&hasAny(h,['agentemail'])&&hasAny(h,['onlinetime','breaktime'])});if(!workforceSheets.length)return[];const tmp={...wb,SheetNames:[workforceSheets[0]],Sheets:{[workforceSheets[0]]:wb.Sheets[workforceSheets[0]]}};try{return originalLogin(tmp)||[]}catch(e){console.warn('Workforce parse failed',e);return[]}};
});
})();