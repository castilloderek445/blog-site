import {defineCollection, z} from "astro:content";

// define a type and schema 
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        date: z.string().transform((str) => new Date(str)),
        // image: z.object({
        //     url: z.string(),
        //     alt: z.string(),
        // }),
        image: z.string(),
        title: z.string(),
        tags: z.array(z.string())
    }),
})

// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection // key: value
}