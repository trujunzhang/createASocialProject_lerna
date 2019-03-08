

import * as React from 'react'
import {
    View,
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

                <View name={'debug-button'} style={[
                    {
                        marginBottom: 80
                    },
                    {
                        backgroundColor: 'yellow',
                    },
                ]}>
                    <Button
                        style={
                            [
                                {
                                    backgroundColor: 'blue'
                                },
                                { alignSelf: 'center' },
                            ]
                        }
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name="arrow-back" />
                        <Text>Lets Go!</Text>
                    </Button>
                </View>

            </Content>
        )
    }

    render() {
        /* const containerStyle = styles.container */
        const containerStyle = {
            /* backgroundColor: 'blue' */
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


                {this.renderContent()}


            </Container>
        )
    }
}

