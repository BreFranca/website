export type ExperiencePeriod = {
  start: string
  end: string | null
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl: string
  description: string
  period: ExperiencePeriod
  techStack: string[]
}

export interface ApiExperiencesResponse {
  experiences: Experience[]
}
