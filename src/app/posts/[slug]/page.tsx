import prisma from "@/lib/db";

interface PostPageProps {
    params: {
        slug: string;
    };
}

const PostPage = async ({ params }: PostPageProps) => {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
    });

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;
