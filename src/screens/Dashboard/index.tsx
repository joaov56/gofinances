import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper ,
    Icon,
    HighlightCards
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
            <HighlightCards>
                <HighlightCard 
                    type= "up"
                    title="Entradas"
                    amount="R$17.400,00"
                    lastTransaction="Última entrada dia 13 de julho"
                />   
                <HighlightCard
                    type= "down"
                    title="Saídas"
                    amount="R$1.200,00"
                    lastTransaction="Última saída dia 12 de julho"
                /> 
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$16.400,00"
                    lastTransaction="01 a 16 de abril"
                /> 
            </HighlightCards>
            
        </Container>
    )
}
