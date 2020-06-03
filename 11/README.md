# Aplicação Be The Hero

### Ensimentos Aplicados na Semana Omnistack 11 - Rocketseat

## Back-End

Nesta parte estudei sobre as dependências foi ensinadas que prentendo aplicar em projetos futuros,  autenticação com celebrate, 
montagem de banco de dados com Knex, iniciação em desenvolvimento com TDD (Test-Driven-Development) com Jest, retorno de dados 
JSON com status code HTTP, uso de headers para autenticação e manter sessões. Banco de dados usado desta vez foi o MySQL - SQLite3

## Front-End

Nesta parte estudei o uso do react-router-dom para roteamento entre as paginas da aplicação, usar localStorage para armazenar dado de
de sessão, por mais que o usuário de refresh na página ou saia sem logout ele possa voltar novamente sem precisar fazer o login novamente,
aperfeiçoamento no uso de useState e useEffect.

Uso tambem da api Intl para formatação de valores em padrão 'BRL'.
> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}

## Mobile

Nesta parte estudei o uso de Roteamento assim como na parte web so que com @react-navigation/native e @react-navigation/stack, 
o uso de FlatList com rolagem infinita Intl, uso de api's para enviar mensagens por email com MailComposer e Linking.openURL para Whatsapp
