import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { BlogMeta, BlogNav, BlogTags, TableOfContents } from '@/components/blog'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/Comments'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, date, title, tags, readingTime, toc } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          {/*START: Header*/}
          <header>
            <div className="dark:border-gray space-y-1 border-b border-gray-200 pb-10">
              <div className="space-y-6">
                <PageTitle>{title}</PageTitle>
                <BlogTags tags={tags} />
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <BlogMeta date={date} slug={slug} readingTime={readingTime} />
                  </div>
                </dl>
              </div>
            </div>
          </header>
          {/*END: Header*/}

          {/*START: Content*/}
          <main className="grid grid-cols-1 gap-12 pt-8 lg:grid-cols-12 lg:pt-10">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
              <div className="prose max-w-none dark:prose-invert lg:prose-lg lg:pb-8">
                {children}
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
              <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 lg:sticky lg:top-16">
                <TableOfContents toc={toc} />
              </div>
            </div>
          </main>
          {/*END: Content*/}

          {/*START: Footer*/}
          <footer>
            <BlogNav next={next} prev={prev} />

            {siteMetadata.comments && (
              <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments />
              </div>
            )}
          </footer>
          {/*END: Footer*/}
        </div>
      </article>
    </SectionContainer>
  )
}
