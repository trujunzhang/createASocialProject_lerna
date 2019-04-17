export const generateIconRow = (icon, formattedName, iconData, type = 'module') => {
  switch (type) {
    case 'module':
      const props = JSON.stringify(iconData)
      return (
        `export var ${formattedName} = function (props) {\n` +
        `  return GenIcon(${JSON.stringify(iconData)})(props);\n` +
        `};\n`
        // + `${formattedName}.displayName = "${formattedName}";\n`
      )
    case 'dts':
      return `export declare const ${formattedName}: Icon Type;\n`
  }
}
