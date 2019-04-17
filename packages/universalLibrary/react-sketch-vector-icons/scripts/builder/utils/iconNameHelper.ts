import camelcase from 'camelcase'

const fixPreName = (iconId: string, name: string) => {
  const nextName = name.substring(2)
  if (iconId === 'ionicons') {
    return nextName.replace('Ios', '').replace('Md', '')
  }
  return nextName
}

export const getIconName = (content: any, iconId: string, rawName: string) => {
  const pascalName = camelcase(rawName, { pascalCase: true })
  const name = (content.formatter && content.formatter(pascalName)) || pascalName

  const nextName = fixPreName(iconId, name)
  let firstLetter = 'other'
  try {
    firstLetter = nextName[0].toLowerCase()
  } catch (e) {
    // console.log("nextName: ", nextName )
    // debugger
  }

  if (firstLetter === '-') {
    // debugger
  }

  return {
    name,
    firstLetter,
    fileName: `${firstLetter}.tsx`
  }
}
