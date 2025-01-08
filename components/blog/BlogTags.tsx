import { Tag } from '@/components/ui'

const BlogTags = ({ tags }: { tags: string[] }) => {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="!mt-1 flex flex-wrap">
      <span className="mr-3 text-sm font-bold uppercase">标签:</span>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  )
}

export default BlogTags
