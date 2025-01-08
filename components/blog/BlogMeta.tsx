import { formatDate } from 'pliny/utils/formatDate'

import type { BlogMetaProps } from '@/types/Components'

import Twemoji from '@/components/ui/Twemoji'
import ViewCounter from '@/components/blog/ViewCounter'

const BlogMeta = ({ date, slug, readingTime }: BlogMetaProps) => {
  return (
    <dd className="flex-column flex gap-1 font-semibold text-gray-500 dark:text-gray-400">
      <time dateTime={date} className="flex items-center">
        <Twemoji emoji="calendar" />
        <span className="ml-1 md:ml-2">{formatDate(date, 'zh-CN')}</span>
      </time>

      <span className="mx-2">{' • '}</span>

      <div className="flex items-center">
        <Twemoji emoji="spiral-notepad" />
        <span className="ml-1.5 md:ml-2">{readingTime.words} 字</span>
      </div>

      <span className="mx-2">{' • '}</span>

      <div className="flex items-center">
        <Twemoji emoji="hourglass-not-done" />
        <span className="ml-1.5 md:ml-2">{Math.ceil(readingTime.minutes)} 分钟阅读</span>
      </div>

      <span className="mx-2">{' • '}</span>

      <div className="flex items-center">
        <Twemoji emoji="eye" />
        <ViewCounter className="ml-1.5 md:ml-2" slug={slug} type={'blog'} />
      </div>
    </dd>
  )
}

export default BlogMeta
