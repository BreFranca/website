import experiencesData from '../data/experiences.json'
import stackData from '../data/tech-stacks.json'

export default defineEventHandler(() => {
  return {
    experiences: experiencesData.experiences,
    stacks: stackData.stacks,
  }
})
