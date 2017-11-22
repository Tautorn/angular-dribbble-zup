## Consumindo API Publica do Dribbble com AngularJS


#### Pré-requisitos

Para a execução da aplicação em máquina local os seguintes programas devem estar devidamente instalados:

 * [NodeJs](https://nodejs.org/en/)
 * [GitHub](https://git-scm.com/downloads)
 
>**Nota:** Pode-se seguir a instalação padrão para ambos

#### Download dos Arquivos

Faça o download dos arquivos, se desejar, seguindo os passos abaixo

```
git clone https://github.com/gustavo15ro/angular-dribbble-zup.git
cd angular-dribbble-zup
```

_Bom se você chegou ate aqui quer disse que esta indo bem. :)_ 

#### Instalação

Dentro do diretório da aplicação execute, caso não possua globalmente instalado o [**Bower**](https://bower.io/) e [**Grunt**](https://gruntjs.com/), os passos abaixo

```
npm install gulp -g
npm install bower -g
```

Após a conclusão, execute os comandos a seguir para baixar as dependências

```
npm install
bower install
```

> **Nota:** A conclusão do comando _npm install_ poderá demorar algum tempo

### Executando a aplicação

Para iniciar o servidor local utilize o seguinte comando

```
grunt serve-dev
```
> **Nota:** Apos a conclusão do comando _grunt serve-dev_ seu navegador iniciará automaticamente.Caso não ocorra, o link da aplicação será.

```
http://localhost:3000
```