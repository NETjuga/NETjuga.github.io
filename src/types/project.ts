export type ProjectAction = 'internal' | 'external' | 'none'

export type Project = {
  slug: string
  title: string
  type: string
  year: string
  description: string
  longDescription?: string
  tags: string[]
  status: string
  statusColor: string
  features?: string[]
  action: ProjectAction
  url?: string
}
