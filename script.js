
document.getElementById('lang-toggle').addEventListener('click',()=>{
 const body=document.body;
 const ar=body.getAttribute('dir')==='rtl';
 body.setAttribute('dir', ar?'ltr':'rtl');
 document.querySelectorAll('[id$="-ar"]').forEach(e=>e.classList.toggle('hide'));
 document.querySelectorAll('[id$="-en"]').forEach(e=>e.classList.toggle('hide'));
 document.getElementById('lang-toggle').textContent = ar?'العربية':'EN';
});
