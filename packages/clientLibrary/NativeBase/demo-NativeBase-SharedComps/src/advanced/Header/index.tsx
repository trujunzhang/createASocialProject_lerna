import { Platform } from 'react-primitives'

import { HeaderNBAndroid } from './indexAndroid'
import { HeaderNBIos } from './indexIos'

const Header = Platform.OS === 'ios' ? HeaderNBIos : HeaderNBAndroid

import { Header1 } from './1'
import { Header2 } from './2'
import { Header3 } from './3'
import { Header4 } from './4'
import { Header5 } from './5'
import { Header6 } from './6'
import { Header7 } from './7'
import { Header8 } from './8'
import { HeaderSpan } from './header-span'
import { HeaderNoLeft } from './header-noLeft'
import { HeaderNoShadow } from './header-no-shadow'
import { HeaderTransparent } from './header-transparent'

export {
  Header,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Header7,
  Header8,
  HeaderSpan,
  HeaderNoLeft,
  HeaderNoShadow,
  HeaderTransparent
}
