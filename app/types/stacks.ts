export enum StackCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVOPS = 'devops',
  DATABASE = 'database',
  MOBILE = 'mobile',
  TESTING = 'testing',
}

export interface Stack {
  id: string
  name: string
  experience: number
  category: StackCategory
}
