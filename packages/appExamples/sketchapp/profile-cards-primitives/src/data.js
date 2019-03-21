
import path from 'path'

// const rootDir = path.join(__dirname, '..')
const rootDir =
  '/Users/djzhang/Desktop/upwork-projects/CURRENT/ADOBEXDTutorials/createASocialProject_lerna/packages/appExamples/sketchapp/profile-cards-primitives'

const localImageUrl = `file://${rootDir}/assets/6frGyDyA_400x400.jpg`

export default [
  {
    screen_name: 'mxstbr',
    name: 'Max Stoiber',
    description:
      '⚛️ Makes styled-components, react-boilerplate, @KeystoneJS and CarteBlanche. ✌ Open source developer @thethinkmill. ☕ Speciality coffee geek, skier, traveller.',
    location: 'Vienna, Austria',
    url: 'mxstbr.com',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
  },
  {
    name: '- ̗̀Jackie ̖́-',
    screen_name: 'jackiesaik',
    description:
      'Graphic designer, never won a spelling be. Toronto on weekdays. Go Home Lake on weekends. ╮ (. ● ᴗ ●.) ╭',
    location: 'Toronto, ON',
    url: 'cargocollective.com/jackiesaik',
    profile_image_url:
      'https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg'
  },
  {
    screen_name: 'jongold',
    name: 'kerning man',
    description: localImageUrl,
    // 'an equal command of technology and form • functional programming (oc)cultist • design tools @airbnbdesign',
    location: 'California',
    url: 'weirdwideweb.jon.gold',
    profile_image_url: localImageUrl
    // profile_image_url:
    // 'file:///Users/djzhang/Desktop/upwork-projects/CURRENT/ADOBEXDTutorials/createASocialProject_lerna/packages/appExamples/sketchapp/profile-cards-primitives/assets/6frGyDyA_400x400.jpg'
  }
]
