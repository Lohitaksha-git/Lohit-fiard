// Simple JS for nav active link, basic form validation, and schedule filter
(function(){
  const setActive = () => {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a=>{
      const href = a.getAttribute('href');
      if(href && href.endsWith(path)){ a.style.textDecoration='underline'; a.style.opacity='1'; }
    });
  };
  setActive();

  // Contact form handler (no backend) -> mailto fallback
  const form = document.querySelector('form[data-form="contact"]');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const message = form.querySelector('[name=message]').value.trim();
      if(!name || !email || !message){ alert('Please complete all fields.'); return; }
      const subject = encodeURIComponent('Fiard Coaching Inquiry from ' + name);
      const body = encodeURIComponent(message + '\n\n' + 'From: ' + name + ' <' + email + '>');
      window.location.href = `mailto:info@fiard.com?subject=${subject}&body=${body}`;
    });
  }

  // Schedule filtering by type (if controls exist)
  const filter = document.querySelector('[data-filter="type"]');
  if(filter){
    filter.addEventListener('change', ()=>{
      const val = filter.value;
      document.querySelectorAll('tbody tr').forEach(tr=>{
        const type = tr.getAttribute('data-type');
        tr.style.display = (!val || val===type) ? '' : 'none';
      });
    });
  }
})();
