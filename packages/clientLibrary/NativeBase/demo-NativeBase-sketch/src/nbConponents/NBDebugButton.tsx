

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

const mb15 = {
    marginTop: 15,
    marginBottom: 20
}

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

    renderContent() {
        return (
            <Content padder>

                <Button light iconRight style={mb15}>
                    <Text>Next</Text>
                    <Icon active name="arrow-forward" />
                </Button>

                <Button success style={{}}>
                    <Icon name="arrow-back" />
                </Button>
            </Content>
        )
    }

    render() {
        /* const containerStyle = styles.container */
        const containerStyle = {
            backgroundColor: 'blue'
        }
        return (
            <Container style={[containerStyle]} >

                <Header style={{}}>

                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body >
                        <Title>Custom Size , button</Title>
                    </Body>
                    <Right />

                </Header>




            </Container>
        )
    }
}

