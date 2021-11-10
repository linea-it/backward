import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Programa() {
  const classes = styles();
  // Change dynamically the page title:
  document.title = 'Curso Git Básico | Programa';

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Programa
            </Typography>
            <br />
            <br />

            <Typography variant="h5" color="primary">
              <strong>Objetivo:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              Introduzir o participante a conceitos básicos de versionamento de
              código utilizando as principais ferramentas do mercado Git. O
              curso vai apresentar os principais comandos utilizados no dia a
              dia.
            </Typography>
            <br />
            <Typography variant="h5" color="primary">
              <strong>Pré-requisitos:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <ul>
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ter uma conta no GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ter previamente instalado o Git
                  </a>
                </li>
                <li>
                  <a
                    href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ter configurado usuário e senha do GitHub no seu Git
                  </a>
                </li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>ATENÇÃO:</strong> Curso será ministrado no sistema Linux e
              todos os comandos serão para esta plataforma.
            </Typography>
            <br />
            <Typography variant="h5" color="primary">
              <strong>Conceitos:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <ol>
                <li>O que é Versionamento</li>
                <li>O que é Git</li>
                <li>Repositórios, Branchs e Commits</li>
                <li>Repositório Local x Remoto</li>
                <li>Merge</li>
                <li>GitHub</li>
              </ol>
            </Typography>
            <Typography variant="h5" color="primary">
              <strong>Prática:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <ol>
                <li>Comandos básicos do Git</li>
                <li>Criação de repositório</li>
                <li>Branches e Commits</li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Programa;
