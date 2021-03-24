//@ts-ignore
const examples = import.meta.globEager('../example/components/*/index.js')

export const routes = Object.keys(examples).map(path => {
  const matcher = path.match(/.*\/(.*)\/index\.js$/)
  const name = matcher ? matcher[1] : 'unknown'

  return {
    name,
    path: `/${name}`,
    config: examples[path].default
  }
})
