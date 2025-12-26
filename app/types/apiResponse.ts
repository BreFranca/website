export interface ApiResponse {
  experiences: Array<{
    id: string
    role: string
    company: string
    companyUrl: string
    period: string
    techStack: Array<{
      expName: string
      expYears: number
    }>
  }>
}
