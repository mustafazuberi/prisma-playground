import prisma from "@/lib/db";
import Link from "next/link";

const PostsPage = async () => {
  const posts = await prisma.post.findMany({ take: 10 });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-25 text-center">
      <h1 className='text-3xl font-semibold'>All Posts {`(${posts.length})`}</h1>
      {posts.map((post) => (
        <li key={post.id} className="flex items-center justify-between px-5">
         <Link href={`/posts/${post.slug}`}>
         {post.title}
         </Link>
        </li>
      ))}
      <ul className='border-t border-b border-black/10 py-5 leading-8'></ul>
    </main>
  )
}

export default PostsPage
