import { StyleProvider, connectStyle } from '@app/native-base-shoutem-theme'
import { LodashUtils as _ } from '@app/tools'
import Drawer from './basic/Drawer'
import { SwipeRow } from './basic/SwipeRow'
import { Text } from './basic/Text'
import { ViewNB as View } from './basic/View'
import { Button } from './basic/Button'
import { DatePicker } from './basic/DatePicker'
import { TabHeading } from './basic/TabHeading'
import { TabContainer } from './basic/TabContainer'
import { IconNB } from './basic/IconNB'
import { Icon } from './basic/Icon'
import { Header } from './basic/Header'
import { HeaderStatusBar } from './basic/HeaderStatusBar'
import { InputGroup } from './basic/InputGroup'
import { Input } from './basic/Input'
import { Title } from './basic/Title'
import { Fab } from './basic/Fab'
import { Left } from './basic/Left'
import { Right } from './basic/Right'
import { Body } from './basic/Body'
import { Badge } from './basic/Badge'
import { CheckBox } from './basic/Checkbox'
import { Radio } from './basic/Radio'
import { Thumbnail } from './basic/Thumbnail'
import { Card } from './basic/Card'
import { CardItem } from './basic/CardItem'
import { Li } from './basic/Li'
import { Ul } from './basic/Ul'
import { P } from './basic/P'
import { H1 } from './basic/H1'
import { H2 } from './basic/H2'
import { H3 } from './basic/H3'
import { Spinner } from './basic/Spinner'
import { Switch } from './basic/Switch'
import { Container } from './basic/Container'
import { Root } from './basic/Root'
import { Content } from './basic/Content'
import { Footer } from './basic/Footer'
import { FooterTab } from './basic/FooterTab'
import { Form } from './basic/Form'
import { ActionSheetContainer } from './basic/Actionsheet'
import { PickerNB } from './basic/Picker'
import { List } from './basic/List'
import { ListSwipeRow } from './basic/ListSwipeRow'
import { ListItem } from './basic/ListItem'
import { Separator } from './basic/Separator'
import { DeckSwiper } from './basic/DeckSwiper'
import { Item } from './basic/Item'
import { Segment } from './basic/Segment'
import { Label } from './basic/Label'
import { Textarea } from './basic/Textarea'
import { Tab } from './basic/Tab'
import ScrollableTabView from './basic/Tabs'
import { DefaultTabBar } from './basic/Tabs/DefaultTabBar'
import { ScrollableTab } from './basic/Tabs/ScrollableTabBar'
import { Subtitle } from './basic/Subtitle'
import { Accordion } from './basic/Accordion'


import { ToastContainer } from './basic/Toast/ToastContainer'

import { ScrollHeader } from './basic/custom/ScrollHeader'

import { FixLeft } from './basic/custom/FixLeft'

import { FixRight } from './basic/custom/FixRight'
import { HeaderLayout } from './basic/custom/HeaderLayout'

import { ListSwipeHelper } from './utils/listSwipeHelper'

import { platformVariables as variables } from '@app/native-base-variables'
import { setDefaultThemeStyle } from './init'
setDefaultThemeStyle()

// Theme
export {
  ListSwipeHelper,
  // Custom
  HeaderLayout,
  ScrollHeader,
  FixLeft,
  FixRight,
  // Common
  variables,
  StyleProvider,
  connectStyle,
  Drawer,
  Button,
  DatePicker,
  IconNB,
  Icon,
  Header,
  HeaderStatusBar,
  Form,
  InputGroup,
  Input,
  Title,
  Fab,
  Left,
  Right,
  Body,
  Badge,
  CheckBox,
  Radio,
  Thumbnail,
  Card,
  CardItem,
  Li,
  Ul,
  P,
  H1,
  H2,
  H3,
  Spinner,
  Switch,
  Container,
  Content,
  Footer,
  Tab,
  ScrollableTabView as Tabs,
  FooterTab,
  PickerNB as Picker,
  List,
  ListSwipeRow,
  ListItem,
  Separator,
  DeckSwiper,
  Item,
  Subtitle,
  Label,
  Textarea,
  Text,
  Content as TabContent,
  View,
  ToastContainer as Toast,
  ScrollableTab,
  ActionSheetContainer as ActionSheet,
  TabHeading,
  TabContainer,
  DefaultTabBar,
  Segment,
  Root,
  SwipeRow,
  Accordion
}

const mapPropsToStyleNames = (styleNames, props) => {
  return _.keys(props)
}

export { mapPropsToStyleNames }

export * from './iconTypeConstants'
