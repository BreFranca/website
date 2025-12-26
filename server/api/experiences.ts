import experiencesData from '../data/experiences.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const locale = (query.locale as string) || 'pt'

  return {
    experiences: experiencesData[locale as keyof typeof experiencesData] || experiencesData.pt,
  }
})
