import prisma from "@/lib/db";

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({
        where: { slug },
    });

    if (!post) return <div>Post not found</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};
