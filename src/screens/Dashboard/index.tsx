import React from 'react';
import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper ,
    Icon
} from './styles'

export function Dashboard() {
    return (
        <Container>
            
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/61507139?v=4' }}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>João</UserName>
                        </User>
                    </UserInfo>
                <Icon name="power" />
                </UserWrapper>
            </Header>
        </Container>
    )
}
