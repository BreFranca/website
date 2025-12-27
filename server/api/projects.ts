import projectsData from '../data/projects.json'

export default defineEventHandler(event => {
  const query = getQuery(event)
  const locale = (query.locale as string) || 'pt'

  return {
    projects: projectsData.projects,
  }
})
