// Init external components
document.addEventListener('DOMContentLoaded', () => {
  M.AutoInit()
})

m.route( document.body, '/', {
  '/': Home
})