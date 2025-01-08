import type readingTime from 'reading-time'

export type ReadingTime = ReturnType<typeof readingTime>

export interface ViewCounterProps {
  slug: string
  type: string
  className?: string
}

export interface BlogMetaProps {
  date: string
  slug: string
  readingTime: ReadingTime
}
