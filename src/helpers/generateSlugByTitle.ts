/**
 * Generates a slug from the given title.
 * 
 * @param {string} title - The title to generate the slug from.
 * @returns {string} The generated slug.
 */

export default function generateSlugByTitle(title: string): string {
    return title.replace(/\s+/g, "-").toLowerCase();
}
