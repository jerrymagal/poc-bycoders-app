# Projeto referente ao desafio bycoders

Esse projeto tem como objetivo atender aos requisitos informados no desafio para leitura e extração de um arquivo CNAB.
Esse repositório representa o front-end do projeto. As tecnologias usadas foram Angular, Node, primeng e nginx

# Estrutura do Projeto

O projeto foi pensado para consumer as apis do banck-end e fornecer uma interface ao usuário. Foi criada uma tela com campo para seleção de arquivos txt no padrão CNAB e após o
processamento é exibida uma tabela no formado solicitado.

# Como rodar o projeto

O primeiro passo é clonar o repositório da branch master: git clone -b master https://github.com/jerrymagal/poc-bycoders-app.git

Para execução do projeto foi utilizado o docker para subir a aplicação rodando em um servidor nginx, para tal foram criados os arquivos Dockefile e docker-compose.yml.

Acessar a raiz do projeto e executar o comando: docker-compose up --build -d

Esse comando vai criar as imagens e subir ambos containers.

# Testar a aplicação

Para testar a aplicação utilizar o endereço http://localhost:4242
