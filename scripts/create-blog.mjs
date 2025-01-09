import path from 'path'
import fs from 'fs-extra'

const getArgs = () => {
  const args = process.argv.slice(2)

  return {
    title: args[0] || '',
    date: new Date(Date.now()).toLocaleDateString('en-CA'),
    tags: args[1] || '',
  }
}

const { title, date, tags } = getArgs()

// 构建文件内容
const mdxContent = `---
title: "${title}"
date: "${date}"
draft: false
tags: [${tags
  .split(',')
  .map((tag) => `"${tag.trim()}"`)
  .join(', ')}]
summary: "${title}"
---

`

console.log(mdxContent)

const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.mdx`
const filePath = path.join(process.cwd(), 'data', 'blog', fileName)
await fs.ensureDir(path.dirname(filePath))
await fs.writeFile(filePath, mdxContent)