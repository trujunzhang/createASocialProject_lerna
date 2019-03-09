
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
    IconVectorTypeFeather
} from '@app/native-base'
import styles from './styles'

import { Grid, Row, Col } from 'react-native-easy-grid'

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
                    <Grid>
                        <Row style={styles.row}>
                            <Col style={styles.col}>
                                <Icon
                                    type={IconVectorTypeFeather}
                                    name="arrow-left" style={{ color: '#999' }} />
                                <Text numberOfLines={1} style={styles.iconText}>
                                    {'arrow-left'}
                                </Text>
                            </Col>
                            <Col style={styles.col}>
                                <Icon type={IconVectorTypeFeather} name="book" style={{ color: '#ffc125' }} />
                                <Text numberOfLines={1} style={styles.iconText}>
                                    {'book'}
                                </Text>
                            </Col>
                            <Col style={styles.col}>
                                <Icon type={IconVectorTypeFeather} active name="check" style={{ color: '#387ef5' }} />
                                <Text numberOfLines={1} style={styles.iconText}>
                                    {'check'}
                                </Text>
                            </Col>
                            <Col style={styles.col}>
                                <Icon type={IconVectorTypeFeather} name="beer" style={{ color: '#000' }} />
                                <Text numberOfLines={1} style={styles.iconText}>
                                    beer
                                </Text>
                            </Col>
                            <Col style={styles.col}>
                                <Icon type={IconVectorTypeFeather} name="bicycle" style={{ color: '#663399' }} />
                                <Text numberOfLines={1} style={styles.iconText}>
                                    bicycle
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
