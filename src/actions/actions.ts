"use server"

import generateSlugByTitle from "@/helpers/generateSlugByTitle"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

/**
 * Creates a new post using the provided form data.
 * 
 * @param {FormData} formData - The form data containing the post details.
 * @returns {Promise<void>} A promise that resolves when the post is created.
 * 
 * @remarks
 * Not using any validation library using "As" type assertion we need to remove it later.
 */

export async function createPost(formData: FormData): Promise<void> {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            slug: generateSlugByTitle(formData.get("title") as string),
            author: {
                connectOrCreate: {
                    where: {
                        email: "mustafazuberi986@gmail.com"
                    },
                    create: {
                         email: "mustafazuberi986@gmail.com",
                         hashedPassword: "asdlaslfaslfnasnflas",
                    }
                }
            }
        }
    })

    revalidatePath('/posts')
}

export async function editPost(formData: FormData, postId:string): Promise<void> {
    await prisma.post.update({
        where: { id: postId },
        data: {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            slug: generateSlugByTitle(formData.get("title") as string)
        }
    })
}

export async function deletePost(postId: string): Promise<void> {
    await prisma.post.delete({
        where: { id: postId }
    })
}
