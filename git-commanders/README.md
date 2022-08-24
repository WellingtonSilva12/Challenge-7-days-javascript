# Estudo sobre comandos básicos do git e github

#### Comando de Ajuda

***git help***
***git help add***

#### Iniciar novo repositório

***git init***

#### verificar status do diretório

 ***git status***

#### Adicionar arquivo

 ***git add nome_do_arquivo.txt***
 ***git add nome_diretorio***

 > ***git add .*** (Adiciona todos os itens na pasta)

#### Comitar arquivo

 ***git commit nome_do_arquivo.txt***
 > ***git commit nome_do_arquivo.txt outro_arquivo.txt*** (Faz **commit** de mais de um arquivo)

 > ***git commit nome_do_arquivo.txt -a -m "Nota sobre o arquivo aqui"

#### Remover arquivo

 ***git rm nome_do_arquivo.txt***
 > ***git rm -r diretorio*** (Remove o diretorio inteiro)

#### Ver Histórico

 ***git log***
 > ***git log --<caminho_do_arquivo>***

## Repositório Remoto (Github)

#### Ver repositórios

 ***git remote***

#### Vincular repositório Local com Remoto

 ***git remote add origin <nome_do_repositório>***

#### Mostra informações do repositório

 ***git remote show origin***

#### Renomeia um repositório

 ***git remote rename origin novo_nome***

#### Enviar arquivos para o repositório remoto

 > ***git push -u origin master*** (O primeiro push de um repositório deve conter o nome do repositório remoto e o branch)

 ***git push***

#### Sincronizar repositório local com o repositório remoto

 ***git pull***

#### Clonar um repositório remoto existente

 ***git clone <nome_do_repositório_github>***
