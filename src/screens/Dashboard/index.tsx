import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
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
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
    id: string;
}
export function Dashboard() {
    const data:DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$12.000,00",
        category: {
                name: 'Vendas',
            icon: 'dollar-sign',
        },
        date: "13/04/2021"
    },
    {   
        id: '2',
        type: 'negative',
        title: "Varietá",
        amount: "R$150,00",
        category: {
            name: 'Alimentação',
            icon: 'coffee',
        },
        date: "13/07/2021"
    },
    {   
        id: '3',
        type: 'negative',
        title: "Alugel",
        amount: "R$1.200,00",
        category: {
            name: 'Casa',
            icon: 'shopping-bag',
        },
        date: "13/07/2021"
    }
    ]   
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
            
            <Transactions>
                <Title>Listagem</Title>
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}
