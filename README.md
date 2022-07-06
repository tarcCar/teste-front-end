![pokemon](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/300px-International_Pok%C3%A9mon_logo.svg.png)

# **Teste Front-End ReactJS**

## ðŸ’» **O desafio**

Desenvolver uma aplicaÃ§Ã£o web com o objetivo de avaliarmos o seu domÃ­nio em front-end, ou seja, sua organizaÃ§Ã£o, estilo e boas prÃ¡ticas com o cÃ³digo, conhecimento dos frameworks e tecnologias utilizadas.

#
## ðŸ”— **Links**
#### **Segue links uteis para resoluÃ§Ã£o do desafio:**
- [PokÃ©Api](https://pokeapi.co/)
- [Layout Desktop](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=13%3A13571&scaling=min-zoom)
- [Layout Mobile](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=41%3A18782&scaling=min-zoom)
- [Style Guide](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=36%3A2135&scaling=min-zoom)
- [Componentes](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=27%3A18584&scaling=min-zoom)
- [Issues](https://bitbucket.org/fdtedsd/teste-frontend/issues)

#
## ðŸ“ **Fluxo e Funcionalidades da aplicaÃ§Ã£o**
- [ ] Landing page com um botÃ£o para iniciar a aplicaÃ§Ã£o (qualquer url inexistente deve redirecionar o usuÃ¡rio para essa landing page).
- [ ] Personagem no centro da pÃ¡gina.
- [ ] Barra na esquerda indicando quantos PokÃ©mons ele jÃ¡ capturou (limite de 6) + botÃ£o de criaÃ§Ã£o.
- [ ] Ao passar o mouse no personagem Ã© exibido o tooltip correspondente.
- [ ] Ao clicar no personagem Ã© feita uma busca por um PokÃ©mon aleatÃ³rio (id de 1 a 807).
- [ ] Com o resultado da busca Ã© aberto um modal mostrando os detalhes do PokÃ©mon.
- [ ] UsuÃ¡rio tem a opÃ§Ã£o de capturÃ¡-lo, clicando na pokÃ©bola, ou fechar o modal.
- [ ] Se ele capturar o PokÃ©mon, esse PokÃ©mon Ã© exibido na SideBar e o modal de captura desaparece.
- [ ] UsuÃ¡rio pode capturar atÃ© 6 PokÃ©mons.
- [ ] Selecionando qualquer PokÃ©mon na SideBar o usuÃ¡rio pode ver os detalhes do PokÃ©mon.
- [ ] O(s) tipo(s) do PokÃ©mon deve ser traduzido (ex: water => Ãgua).
- [ ] UsuÃ¡rio pode editar SOMENTE o nome de um PokÃ©mon que foi capturado.
- [ ] Na SideBar o usuÃ¡rio tem a possibilidade de criar um PokÃ©mon (um PokÃ©mon pode ter no mÃ¡ximo 2 "tipos").
- [ ] O formulÃ¡rio de criaÃ§Ã£o de PokÃ©mon deve conter validaÃ§Ãµes em todos os campos.
- [ ] Caso algum campo nÃ£o esteja preenchido, o botÃ£o de criaÃ§Ã£o deve ficar bloqueado.
- [ ] Para um PokÃ©mon criado o usuÃ¡rio pode editar qualquer informaÃ§Ã£o ou liberÃ¡-lo.
- [ ] Sempre que liberar um PokÃ©mon Ã© possÃ­vel capturar outro atravÃ©s da busca ou criar um customizado.
- [ ] Caso as 6 posiÃ§Ãµes estejam ocupadas o usuÃ¡rio nÃ£o pode mais buscar nem criar novos PokÃ©mons.
- [ ] Responsividade para resoluÃ§Ãµes desktop e mobile. (Ex: 1280 x 720, 360 x 740)
#

## ðŸ“– **Regras**
- Todo o seu cÃ³digo deve ser disponibilizado em um repositÃ³rio pÃºblico ou privado em seu Github ou Bitbucket pessoal;
- Envie o link para [FDTE RH](mailto:vanessa.bruno@fdte.io?subject=Teste_Front-End_ReactJS);
- Escolha uma das duas versÃµes abaixo para realizar o teste:
  * VersÃ£o [com sass](https://bitbucket.org/fdtedsd/teste-frontend/src/master/examples/with-sass/); 
  * VersÃ£o [com styled-components](https://bitbucket.org/fdtedsd/teste-frontend/src/master/examples/with-styled-components/);
- Utilizar a [PokÃ©Api](https://pokeapi.co/) para interagir com a aplicaÃ§Ã£o;
- Usar componentes funcionais e hooks;
- NÃ£o usar componentes de Class;
#
## ðŸš€ **Tecnologias** 
#### **Para a resoluÃ§Ã£o do desafio, fique a vontade para utilizar as tecnologias citadas abaixo:** 

- react-redux
- redux
- redux-thunk
- redux-sagas
- axios
- storybook
- eslint
- node-sass
- styled-components
- prettier
- prop-types
- typescript
- react-hook-form
- formik
- yup

#
## âš ï¸ **ObservaÃ§Ãµes**
- Fique a vontade para mudar a estrutura de como estÃ£o os exemplos;
- Muita atenÃ§Ã£o ao link das issues por que lÃ¡ estÃ£o descritas as tarefas para serem executadas.
- VocÃª pode implementar a aplicaÃ§Ã£o usando typescript, assim como o uso de PropTypes.
- Mesmo a aplicaÃ§Ã£o sendo pequena, o uso do redux estÃ¡ liberado.
- Os componentes devem ser responsivos.

#
## âž• **Opcional**
#### **Esperamos que vocÃª tenha curiosidade em criar testes para aplicaÃ§Ã£o, mas nÃ£o se preocupe, isso Ã© opcional** 
 - Teste unitÃ¡rio
 - Teste de integraÃ§Ã£o
 - Teste de interface

#
## ðŸ“ **License**
**FDTE Copyright Â© 2020**