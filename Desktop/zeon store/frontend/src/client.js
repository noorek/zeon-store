import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'x4m4qews',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skD7nQvYfLW2hUDjp7oKG2JBVFbpl6mhD13GuMakvZsO7M6014WUEQ2wdkfnQIqPrYRkJptfr8Gbbue86dJc56R9a50XIsyby8JRaXOBgVU8rZSZB8Zj6BYnIcaEuypUCpzeBf4mAvl2zd16b8eIoBX9zx1jGjOjsl0iVHq8O26ZXOxHwIKC',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)