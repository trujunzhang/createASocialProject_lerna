import * as React from 'react'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Text,
    Left,
    Body,
    Right,
    ListItem,
    IconVectorTypeFeather
} from '@app/native-base'
import styles from './styles'

export class FeatherIcons extends React.Component<any, any> {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Feather Icons</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <ListItem>
                        <Text numberOfLines={1} style={styles.iconText}>
                            {'arrow-left'}
                        </Text>
                        <Icon type={IconVectorTypeFeather} name="arrow-left" style={{ color: '#999' }} />
                    </ListItem>
                    <ListItem>
                        <Text numberOfLines={1} style={styles.iconText}>
                            {'book'}
                        </Text>
                        <Icon type={IconVectorTypeFeather} name="book" style={{ color: '#ffc125' }} />
                    </ListItem>
                    <ListItem>
                        <Text numberOfLines={1} style={styles.iconText}>
                            {'check'}
                        </Text>
                        <Icon type={IconVectorTypeFeather} active name="check" style={{ color: '#387ef5' }} />
                    </ListItem>
                </Content>
            </Container>
        )
    }
}
