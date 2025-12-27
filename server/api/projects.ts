import projectsData from '../data/projects.json'

export default defineEventHandler(() => {
  return {
    projects: projectsData.projects,
  }
})
