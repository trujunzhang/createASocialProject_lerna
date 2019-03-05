

import * as React from 'react'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
} from '@app/native-base'

export class NBDebugButton extends React.Component<any, any> {

    renderInfo() {
        return (
            <Text>{'nb: button debug'}</Text>
        )
    }

    renderIcon() {
        return (
            <Icon name="arrow-back" />
        )
    }

    renderButton() {
        return (
            <Icon name="arrow-back" />
        )
    }

    renderHeader() {
        return (
            <Header style={{
                width: 800,
                height: 44,
                backgroundColor: 'yellow'
            }
            }>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body >
                    <Title>Custom Size </Title>
                </Body>
                <Right />
            </Header>

        )
    }

    render() {
        /* const containerStyle = styles.container */
        const containerStyle = {
            backgroundColor: 'blue'
        }
        return (
            <Container style={[containerStyle]} >

                <Header style={{
                    backgroundColor: 'orange'
                }
                }>

            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body >
                <Title>Custom Size </Title>
            </Body>
            <Right />

                </Header>


            </Container>
        )
    }
}

