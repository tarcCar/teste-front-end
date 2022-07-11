![pokemon](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/300px-International_Pok%C3%A9mon_logo.svg.png)

# **Teste Front-End ReactJS**

Escolhi o projeto com sass para realizar os testes  

## **Fluxo de trabalho**
Fui criando branches conforme as issuies porem algumas issuies já foram feitas dentro de outras.  
Utilizei o [convensional commits](https://www.conventionalcommits.org/en/v1.0.0/) para garantir uma formatação das mensagens dos commits.  
E com o Husky e lint-staged eu conseguia garantir a cadas commit que o lint estava correto antes de fazer o commit.  

## **Como foi feito o desenvolvimento**

Utilizei o vite para criar o projeto por acreditar que e muito mais rápido para subir o projeto, pois ele faz algumas otimizações nas importações dos arquivos.  
Depois eu fui criando os aquivos configurações dos pacotes de configurações, lint para aí sim, começar a criar a aplicação em si.  
Como já dito eu utilizei o projeto de sass como exemplo, mas não copei tudo logo de cara eu fui copiando os arquivos de exemplos assim que foram necessários.
Tentei deixar mais componetizado possível, porem algumas partes podiam ficar melhor componetizados como, por exemplo a validação do form de novo pokemon customizável.  
O redux também poderia ter sido feito de melhor forma principalmente a parte de update de pokemon.  
Algumas coisas em css eu tive que cópia e adaptar para usar no projeto como, por exemplo, o css do Componente SectionTitle que nada mais e que um hr com texto no meio, mas não consegui fazer sozinho por isso eu copiei e adaptei.  

## **Obervações**

No arquivo PokemonApiService onde fica os métodos que busca os pokemon aleatórios eu coloquei um sleep de 4 segundos somente para fins de visualizar a animação do personagem enquanto ele ta procurando o pokemon, tive que fazer, pois, a api e muito rapida ia acabar nem visualizando essa animação.  

##  **Itens feitos**
- [x] Landing page com um botão para iniciar a aplicação (qualquer url inexistente deve redirecionar o usuário para essa landing page).
- [x] Personagem no centro da página.
- [x] Barra na esquerda indicando quantos Pokemons ele já capturou (limite de 6) + botão de criação.
- [x] Ao passar o mouse no personagem e exibido o tooltip correspondente.
- [x] Ao clicar no personagem e feita uma busca por um Pokemon aleatório (id de 1 a 807).
- [x] Com o resultado da busca e aberto um modal mostrando os detalhes do Pokemon.
- [x] Usuário tem a opção de capturá-lo, clicando na pokebola, ou fechar o modal.
- [x] Se ele capturar o Pokemon, esse Pokemon e exibido na SideBar e o modal de captura desaparece.
- [x] Usurário pode capturar até 6 Pokemons.
- [x] Selecionando qualquer Pokemon na SideBar o usuário pode ver os detalhes do Pokemon.
- [ ] O(s) tipo(s) do Pokemon deve ser traduzido (ex: water => Ãgua).
- [x] Usuário pode editar SOMENTE o nome de um Pokemon que foi capturado.
- [x] Na SideBar o usuário tem a possibilidade de criar um Pokemon (um Pokemon pode ter no máximo 2 "tipos").
- [x] O formulário de criação de Pokemon deve conter validações em todos os campos.
- [x] Caso algum campo não esteja preenchido, o botão de criação deve ficar bloqueado.
- [x] Para um Pokemon criado o usuário pode editar qualquer informação ou libera-lo.
- [x] Sempre que liberar um Pokemon e possível capturar outro através da busca ou criar um customizado.
- [x] Caso as 6 posições estejam ocupadas o usuário não pode mais buscar nem criar novos Pokemons.
- [x] Responsividade para resoluções desktop e mobile. (Ex: 1280 x 720, 360 x 740)
- [ ] Testes

## **Tecnologias Usadas**

- react-redux
- redux
- fetch
- eslint
- node-sass
- prettier
- typescript
- formik
- uuid
- vite
- husky
- lint-staged

