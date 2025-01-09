import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { nonDraftPosts } from 'utils'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = nonDraftPosts(allCoreContent(sortedPosts))
  return <Main posts={posts} />
}
