export default defineEventHandler(() => {
  return {
    tabs: [
      { id: 'home', label: 'menu.home' },
      { id: 'projects', label: 'menu.projects' },
      { id: 'experience', label: 'menu.experience' },
      { id: 'contact', label: 'menu.contact' },
    ],
  }
})
