import { icons } from './utils/constants'
import { dirInit } from './convert/beforeConvert'

import { writeIconModule } from './convert/writeIconModule'

// logic

async function main() {
  try {
    await dirInit()
    for (const icon of icons) {
      // if (icon.id === 'fontAwesome') {
      await writeIconModule(icon)
      // }
    }
    console.log('done')
  } catch (e) {
    console.error(e)
  }
}

main()
