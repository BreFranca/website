import type { Experience } from './experience'
import type { Stack } from './stacks'

export interface ApiResponse {
  experiences: Experience[]
  stacks: Stack[]
}
