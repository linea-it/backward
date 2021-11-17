import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Home() {
  // Change dynamically the page title:
  document.title = 'Curso Git Básico | Início';

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Curso Git Básico
            </Typography>
            <br />
            <Typography variant="h4" align="center" color="primary">
              <strong>Conceitos básicos de versionamento de código</strong>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" align="center" color="primary">
              Responsável: Glauber Vila-Verde (Arquiteto de Software - LIneA)
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Duração: Um encontro de aproximadamente 2 horas
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Dia: 03 de novembro
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Hora: 17h às 19h
            </Typography>
          </Grid>

          <Grid xs={12}>
            <br />
            <Typography variant="h5" align="center" color="primary">
              Público alvo: Livre
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Curso online e gratuito
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Inscrições até 02 de novembro de 2021
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
