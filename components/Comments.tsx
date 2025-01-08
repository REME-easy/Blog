'use client'

import { useTheme } from 'next-themes'
import GiscusComponent, { BooleanString, InputPosition, Mapping } from '@giscus/react'
import siteMetadata from '@/data/siteMetadata'

interface GiscusConfigs {
  themeURL: string
  theme: string
  darkTheme: string
  mapping: Mapping
  repo: `${string}/${string}`
  repositoryId: string
  category: string
  categoryId: string
  reactions: BooleanString
  metadata: BooleanString
  inputPosition: InputPosition
  lang: string
}

interface CommentsProps {
  className?: string
  configs?: Partial<GiscusConfigs>
}

export default function Comments(props: CommentsProps) {
  const { configs, className } = props

  const defaultConfigs = siteMetadata.comments.giscusConfig as GiscusConfigs
  const {
    themeURL,
    theme,
    darkTheme,
    repo,
    repositoryId,
    category,
    categoryId,
    reactions,
    metadata,
    inputPosition,
    lang,
    mapping,
  } = { ...defaultConfigs, ...configs }

  const { theme: siteTheme, resolvedTheme } = useTheme()
  const commentsTheme =
    themeURL === ''
      ? siteTheme === 'dark' || resolvedTheme === 'dark'
        ? darkTheme
        : theme
      : themeURL

  return (
    <div id="comments" className={className}>
      <GiscusComponent
        id="comments-container"
        repo={repo}
        repoId={repositoryId}
        category={category}
        categoryId={categoryId}
        mapping={mapping}
        reactionsEnabled={reactions}
        emitMetadata={metadata}
        inputPosition={inputPosition}
        theme={commentsTheme}
        lang={lang}
        loading="lazy"
      />
    </div>
  )
}
