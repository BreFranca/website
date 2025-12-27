export enum ContactType {
  EMAIL = 'email',
  PHONE = 'phone',
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
  TWITTER = 'twitter',
  WEBSITE = 'website',
}

export interface Contact {
  type: ContactType
  icon: string
  label: string
  description: string
  url: string
}

export interface ApiContactResponse {
  contacts: Contact[]
}
