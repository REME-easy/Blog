export function nonDraftPosts(posts: any[]) {
    return posts.filter((post) => !post.draft)
}