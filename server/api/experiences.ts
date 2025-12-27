import experiencesData from '../data/experiences.json'

export default defineEventHandler(() => {
  return {
    experiences: experiencesData.experiences,
  }
})
