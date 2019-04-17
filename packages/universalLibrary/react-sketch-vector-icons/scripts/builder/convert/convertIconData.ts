import cheerio from 'cheerio'
import camelcase from 'camelcase'

// filter/convert attributes
// 1. remove class attr
// 2. convert to camelcase ex: fill-opacity => fillOpacity
const attrConverter = (
  /** @type {{[key: string]: string}} */ attribs,
  /** @type string */ tagName
) =>
  attribs &&
  Object.keys(attribs)
    .filter(
      (name) =>
        ![
          'class',
          ...(tagName === 'svg' ? ['xmlns', 'width', 'height'] : []) // if tagName is svg remove size attributes
        ].includes(name)
    )
    .reduce((obj, name) => {
      const newName = camelcase(name)
      switch (newName) {
        case 'fill':
          if (attribs[name] === 'none') {
            obj[newName] = attribs[name]
          }
          break
        default:
          obj[newName] = attribs[name]
          break
      }
      return obj
    }, {})

// convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
const elementToTree = (/** @type {Cheerio} */ element) =>
  element
    .filter((_, e) => e.tagName && !['style'].includes(e.tagName))
    .map((_, e) => ({
      tag: e.tagName,
      attr: attrConverter(e.attribs, e.tagName),
      child: e.children && e.children.length ? elementToTree(cheerio(e.children)) : undefined
    }))
    .get()

export const convertIconData = async (svg) => {
  const $svg = cheerio.load(svg, { xmlMode: true })('svg')

  const tree = elementToTree($svg)
  return tree[0] // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}
