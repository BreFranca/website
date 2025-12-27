import projectsData from '../data/projects.json'

export default defineEventHandler(event => {
  return {
    projects: projectsData.projects,
  }
})
