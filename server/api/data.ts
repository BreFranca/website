import experiencesData from '../data/experiences.json'
import techStacksData from '../data/tech-stacks.json'

export default defineEventHandler(event => {
  const query = getQuery(event)
  const locale = (query.locale as string) || 'pt'

  return {
    experiences: experiencesData[locale as keyof typeof experiencesData] || experiencesData.pt,
    stacks: techStacksData.stacks,
  }
})
