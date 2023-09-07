export const ROUTES = Object.freeze({
  base: "/",
  characters : (page?: string) => page
    ? `character/?page=${page}`
    : "character",
  characterDetails: (id?: string) => id
    ? `character/${id}`
    : "character:id"
})