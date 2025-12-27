import experiencesData from '../data/experiences.json'
import techStacksData from '../data/tech-stacks.json'
import contactsData from '../data/contacts.json'

export default defineEventHandler(() => {
  return {
    experiences: experiencesData.experiences.slice(0, 3),
    stacks: techStacksData.stacks.sort((a, b) => b.experience - a.experience),
    contacts: contactsData.contacts,
  }
})
