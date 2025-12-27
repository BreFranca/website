enum ContactType {
  EMAIL = 'email',
  PHONE = 'phone',
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
  TWITTER = 'twitter',
  WEBSITE = 'website',
}

interface Contact {
  type: ContactType
  icon: string
  label: string
  url: string
}

export type { Contact }
