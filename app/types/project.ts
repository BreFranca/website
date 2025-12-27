export interface Project {
  name: string
  description: string
  link: string
  technologies: string[]
  image?: string
}

export interface ApiProjectResponse {
  projects: Project[]
}
