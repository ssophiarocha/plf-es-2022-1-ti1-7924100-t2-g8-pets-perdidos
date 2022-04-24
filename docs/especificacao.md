# Especificações Do Projeto
Nessa seção, será apresentada uma visão um pouco mais aprofundada do projeto, através da elaboração das Personas, Histórias de Usuários, Requisitos e Restrições do projeto.

## Persona
1. **Patrícia:** Patrícia tem 46 anos e trabalha em um abrigo de animais. Possui uma personalidade
muito forte e decisiva. Adora ler livros e jornais, ver filmes e séries, em seu tempo
livre passa seu tempo navegando nas redes sociais. O atual trabalho dela no abrigo,
o principal meio de divulgação dos animais são o instagram e o facebook. Os
objetivos chave, para ela, na utilização desse serviço seria ter uma plataforma única
para divulgar pets encontrados por eles e divulgar também animais resgatados que
estão disponíveis para adoção. Esse serviço facilitaria a disseminação dessas
informações para mais pessoas.

2. **Tatiane:** Tatiene tem 27 anos e trabalha como advogada e adora seus pets. Tem uma
personalidade intensa e decisiva, honesta e batalhadora pelas coisas que ama.
Gosta de ficar sabendo das últimas notícias e estar atualizada em suas redes
sociais. Houve uma época que perdeu sua cachorrinha, e recorreu às redes sociais
para encontrá-la. Felizmente a encontrou, mas Tatiane diz que se houvesse uma
plataforma exclusiva para divulgar animais perdidos e encontrados seria de grande
ajuda para ele e outras pessoas.

3. **Sandra:** Sandra tem 39 anos e é enfermeira. Tem uma personalidade calma e apaziguante e
vive com animais de estimação ao seu redor. Gosta de ver as notícias pelo seu
smartphone e assiste jornais na TV. Sandra já perdeu seu pet e não o encontrou
novamente, e afirma que se houvesse uma plataforma exclusiva para esse tipo de
busca, seria de grande ajuda para tentar encontrar seu animalzinho.

4. **Sandro:** Sandro tem 51 anos é gerente de venda e gosta de assitir documentários no seu tempo livre. Tem uma personalidade pouco paciente , mas amável . Houve uma época em que abrigou um animal perdido em sua residência até encontrar o dono , admitindo que se houvesse uma plataforma que divulgasse sua necessidade para um público amante de animais , ele encontraria um novo lar para o animal mais cedo. 

## Histórias de usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| COMO... `PERSONA`   | QUERO/PRECISO...  `FUNCIONALIDADE` | PARA... `MOTIVO/VALOR`                 |
|---------------------|------------------------------------|----------------------------------------|
| Patrícia | De uma plataforma, conectada com as redes sociais para divulgar animais disponíveis para a adoção| Para garantir a difusão de informação para o maior número de pessoas possível. |
| Sandra | De algo que me direcione para os melhores lugares para procurar o animal que perdi, pela localização| Para melhorar as minhas chances de encontrar o animal no menor tempo possível |
| Tatiane | De uma plataforma que me ajude nas buscas pela minha cachorrinha | Para facilitar a minha busca |
| Sandro | De uma plataforma que me ajude a divulgar que encontrei um animal e que estou procurando um dono para ele | Para conseguir um lar seguro para os pets que encontrou


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do requisito  | Prioridade |
|--------|-------------------------|------------|
| RF-001 | Cadastrar usuários mediante suas necessidades | ALTA |
| RF-002 | Mostrar os pets perdidos que estão próximos | MÉDIA |
| RF-003 | Cadastrar o pet com suas características| ALTA |
| RF-004 | Quando o animal for encontrado, o anúncio deve ser removido | MÉDIA |

### Requisitos não Funcionais

| ID      | Descrição do Requisito  | Prioridade |
|---------|-------------------------|------------|
| RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA |
| RNF-002 | O usuário deve ser capaz de utilizar a plataforma sem nenhum treinamento | ALTA |
| RNF-003 | Ambos os cadastros não devem demorar mais de 5 minutos | MÉDIA |
| RNF-004 |Deve haver interação com algumas ferramentas (ex: gmail) para facilitar o login | ALTA |
| RNF-005 | O carregamento de qualquer informação deve demorar até dois segundos | MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O desenvolvimento da plataforma não poderá ser delegado/terceirizado|
