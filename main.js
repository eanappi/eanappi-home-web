// Router
m.route( document.body, '/', {
  '/': Home
})

// Init external components
document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()
})