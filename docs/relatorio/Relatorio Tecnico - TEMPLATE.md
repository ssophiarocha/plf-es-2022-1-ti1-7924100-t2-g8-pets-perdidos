# Informações do Projeto
`FindMe`  

`Engenhria de Software` 


## Participantes
> Os membros do grupo são: 
>
> - Alice Rodrigues
> - Juliana Serra
> - Lucas Tabosa
> - Rafael Vitoretti
> - Sophia Rocha
> - Vinícius Gonzaga 

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
Mediante o portal  G1, o Brasil possui 170 mil animais abandonados sob cuidado de ONGs, sem contar com todos os animais que ainda estão nas ruas por terem se perdido de seus donos originais. 

## Problema

Sob essa ótica, o Brasil se encontra presente em dois grandes empecilhos ao se tratar de animais de estimação:
-> A dificuldade de donos de animais perdidos reencontrar os seus bichinhos.
-> O excesso de animais sem donos nas ruas e em ONGs.


## Objetivos

Assim, surge a necessidade de haver uma plataforma focada, em não só ajudar os animais de estimação perdidos a reencontrar os seus respectivos donos, mas também ajudar animais abandonados e encontrados nas ruas a terem um novo lar e direito à uma melhor qualidade de vida. 


## Justificativa

A Câmara Municipal de São Paulo tem em seu site: "A quantidade de animais soltos na capital é grande, mas desconhecida, e o abrigo do CCZ opera com capacidade máxima". Consequentemente, essa matéria representa uma questão problemática que abrange todo o Brasil, uma vez que não é somente o Estado de São Paulo que divulga publicamente resolução do problema que tanto os abrigos, quanto as ruas, são livres de animais de estimação em situações degradantes.


## Público-Alvo

-> Donos de Abrigos.
-> Pessoas que perderam seus animais de estimação.
-> Pessoas que encontraram pets perdidos e procuram por seus donos.

 
# Especificações do Projeto

A consolidação desse projeto e seus principais objetivos foram estruturados através da busca pelos integrantes do grupo através de entrevistas e questionários, dando origem às personas, que são pessoas que perderam o seu pet ou encontram um pet, o que seriam possíveis usuários da plataforma e dessa forma colaborou para o entendimento do grupo da importância desta plataforma. 

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia

**Patrícia**
-> Patrícia tem 46 anos, a mesma trabalha em um abrigo de animais. Possui uma personalidade muito forte e decisiva. Ela adora ler livros e jornais, ver filmes e séries, em seu tempo livre passa seu tempo navegando em suas redes sociais. O atual trabalho dela no abrigo, o principal meio de divulgação dos animais são através  do instagram e do facebook. Os objetivos chave, para ela, na utilização desse serviço seria ter uma plataforma única para divulgar pets encontrados por eles e divulgar também animais resgatados que estão disponíveis para adoção. Esse serviço facilitaria a disseminação dessas informações para mais pessoas com mais rapidez.

**Tatiane**
-> Tatiane tem 27 anos, a mesma trabalha como advogada e adora os seus pets. Ela tem uma personalidade intensa, decisiva, honesta e corre muito atrás das coisas que ama e deseja conquistar. A mesma gosta de se informar das últimas notícias e estar atualizada em suas redes sociais. Houve uma época em que ela perdeu sua cachorrinha e recorreu às redes sociais como uma forma de encontrá-la. Felizmente a sua ação teve êxito e ela conseguiu encontrar a sua pet, mas Tatiane afirma que se houvesse uma plataforma exclusiva para divulgar animais perdidos e encontrados seria um grande facilitador na ajuda dos mesmos. 

**Sandra**
-> Sandra tem 39 anos e trabalha como enfermeira. A mesma tem uma personalidade calma e apaziguante. Ela vive com animais de estimação ao seu redor. Sandra gosta de ver as notícias pelo seu smartphone e assiste aos jornais pela TV. A entrevistada  já perdeu sua pet e infelizmente não a encontrou novamente, e afirma que se houvesse uma plataforma exclusiva para esse tipo de busca, seria de grande ajuda para tentar encontrar sua animalzinha.

**Sandro**
-> Sandro tem 51 anos e trabalha como gerente de vendas. O mesmo tem uma personalidade “estourada” mas uma pessoa ao mesmo tempo amável com as pessoas à sua volta. Os pilares mais importantes de sua vida são seu trabalho, a sua família e seus pets. Sandro utiliza bastante o seu Smartphone para meios profissionais e para descontração. Ele encontrou um pet perdido na rua e decidiu ajudar o animal. De acordo com o entrevistado uma plataforma exclusiva para esse tipo de finalidade, ajudaria a encaminhar pets perdidos para as suas famílias ou até mesmo um novo lar. 


## Histórias de Usuários

|PERSONA:|QUERO/PRECISO:|MOTIVO/VALOR:|
|--------------------|------------------------------------|----------------------------------------|
|Patría|De uma plataforma, conectada com as redes sociais para divulgar animais disponíveis para a adoção|Para garantir a difusão de informação para o maior número de pessoas possível|
|Sandra|De algo que me direcione para os melhores lugares para procurar o animal que perdi, pela localização|Para melhorar as minhas chances de encontrar o animal no menor tempo possível|
|Tatiane|De uma plataforma que me ajude nas buscas pela minha cachorrinha considerando as características dela|Para facilitar a minha busca|
|Sandro|De uma plataforma que me ajude a divulgar que encontrei um animal e que estou procurando um dono para ele|Para conseguir um lar seguro para os pets que encontro|


## Requisitos

A funcionalidade do projeto é mediada através de requisitos feitos pelo cliente entrevistado. Os requisitos funcionais descrevem o que o software deve fazer, já os requisitos não-funcionais quantificam determinados aspectos do comportamento do sistema.


### Requisitos Funcionais

|ID    | Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastrar usuários mediante suas necessidades | ALTA | 
|RF-002| Mostrar os pets perdidos que estão próximos | MÉDIA |
|RF-003| Cadastrar o pet com suas características| ALTA |
|RF-004| Quando o animal for encontrado, o anúncio deve ser removido | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Ambos os cadastros não devem demorar mais de 5 minutos | MÉDIA | 
|RNF-002| Deve haver interação com algumas ferramentas (ex: gmail) para facilitar o login |  ALTA | 
|RNF-003| O carregamento de qualquer informação deve demorar até três segundos | MÉDIA |

## Restrições

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser finalizado e entregue no final do semestre letivo (07/07/2022). |
|02| Não será permitido o uso de outras tecnologias que vão além do básico do desenvolvimento Web FrontEnd. |
|03| Não será permitido a terceirização na construção do projeto, além dos integrantes do grupo. |


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow



> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
> 
> [](images/Userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Durante a etapa de idealização do nosso projeto, utilizamos o método de
“Design Thinking” , que foi organizado pela plataforma “Miro”. Com ele, entender os fatores que definem o nosso problema, e, com isso, pensar nas melhores soluções para a pauta em questão “os pets perdidos”. Na etapa de desenvolvimento, dentro dos moldes do Scrum, no qual o trabalho é organizado por sprints, reuniões com periodicidade semanal e liberação de resultados incrementais ao longo do tempo. Nesse processo, organizamos nossas pendências e afazeres pelo quadro do Kanban, na plataforma “Trello".

*Ambiente de Trabalho:*
-> Repositório de código fonte: https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7924100-t2-g8-pets-perdidos
-> Documentos do Projeto: https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7924100-t2-g8-pets-perdidos/tree/master/docs
-> Projetos de Wireframe: "link"
-> Gerenciamento do Projeto: https://trello.com/b/4O1ZILQt/kanban-tiaw-pets-perdidos

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

*Gerenciamento do Projeto*
-> Foi utilizado o método ágil Scrum para o desenvolvimento desse projeto.
Equipe:
Scrum Master: Rommel Vieira Carneiro
Equipe de desenvolvimento: 
Alice Rodrigues
Juliana Serra
Lucas Tabosa
Rafael Vitoretti
Sophia Rocha
Vinícius Gonzaga 

A organização do projeto foi dividida em categorias sendo elas:

-> Backlog: Nesse quadro é mantido todas as tarefas que devem ser feitas até o final da sprint, onde cada integrante da equipe de desenvolvimento seleciona no máximo dois itens por vez para ser feito.
-> Para Fazer: Nesse quadro fica os itens selecionados pelo integrante que ainda deve ser feito.
-> Fazendo: Nesse quadro fica a tarefa que está feita pelo integrante que a selecionou.
-> Checagem de Qualidade: Nesse quadro fica as tarefas que já foram concluídas mas antes devem ser conferidas por outro desenvolvedor para corrigir erros se necessário que não foram observados anteriormente.
-> Feito: Nesse quadro fica todas as tarefas que já foram feitas pela equipe de desenvolvimento.

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Documentos do Projeto|GitHub|https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7924100-t2-g8-pets-perdidos/tree/master/docs|
|Repositório de código|GitHub|https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7924100-t2-g8-pets-perdidos| 
|Projetos de Wireframe:||| 
|Gerenciamento do Projeto:|Trello|https://trello.com/b/4O1ZILQt/kanban-tiaw-pets-perdidos| 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

-> Brasil tem mais de 170 mil animais abandonados sob cuidado de ONGs, aponta instituto: https://g1.globo.com/sp/sao-paulo/noticia/2019/08/18/brasil-tem-mais-de-170-mil-animais-abandonados-sob-cuidado-de-ongs-aponta-instituto.ghtml

-> Entrevistados: Patrícia, Sandra, Sandro e Tatiane. 

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
