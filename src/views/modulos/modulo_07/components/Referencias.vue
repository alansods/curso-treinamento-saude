<template>
  <AulaTemplate
    :titulo="$store.state.modulos[6].titulo"
    :numero="$store.state.modulos[6].numero"
    titleSize="5"
  >
    <TextBlock topico="Referêcias">
      <v-row style="word-break: break-word">
        <v-col cols="12" sm="6">
          <Paragraph>
            BATISTA, Aline Aparecida Gava. Absenteísmo: Fatores determinantes e
            consequências. Assis, 2012. 56 p. Trabalho de Conclusão de Curso
            (Graduação em Administração) - Instituto Municipal de Ensino
            Superior de Assis.
          </Paragraph>

          <Paragraph>
            BAPTISTA, M.C. Estudo do Programa de Apoio para o Retorno ao
            Trabalho e Reabilitação Profissional de uma Grande Instituição
            Financeira Privada Nacional.In: In book: Os mais relevantes projetos
            de conclusão dos cursos MBAs 2009. Editora FGV. 2010.
          </Paragraph>

          <Paragraph>
            BAPTISTA, M.C. Estudo do Programa de Apoio para o Retorno ao
            Trabalho e Reabilitação Profissional de uma Grande Instituição
            Financeira Privada. In: Os mais relevantes projetos de conclusão dos
            cursos MBAs 2009. Editora FGV, 2010.
          </Paragraph>

          <Paragraph>
            BONITA, R.; BEAGLEHOLE, R.KJELLSTRÖM, T. Epidemiologia básica. 2.ed.
            São Paulo: Santos, 2010.
          </Paragraph>

          <Paragraph>
            BRASIL. Presidência da República. Decreto No 3.048, de 6 de maio de
            1999. Aprova o Regulamento da Previdência Social e dá outras
            providências. Disponível em:
            http://www.planalto.gov.br/ccivil_03/decreto/D3048.htm. Acesso em:
            10/06/2023.
          </Paragraph>

          <Paragraph>
            BRASIL. Portaria Nº 6.730 de 9 de Março de 2020. Aprova a nova
            redação da Norma Regulamentadora nº 01 – Disposições Gerais e
            Gerenciamento de Riscos Ocupacionais. (Processo nº
            19966.100073/2020-72).
          </Paragraph>

          <Paragraph>
            BRASIL. Portaria Nº 6.734 de 9 de Março de 2020. Aprova a nova
            redação da Norma Regulamentadora nº 07 – Programa de Controle Médico
            de Saúde Ocupacional – PCMSO. (Processo nº 19966.100069/2020-12).
          </Paragraph>

          <Paragraph>
            BRASIL. Portaria/MTP Nº 423, de 7 de outubro de 2021. Aprova a nova
            redação da Norma Regulamentadora nº 17 – Ergonomia.
          </Paragraph>

          <Paragraph>
            CESTARI, Elisabete; CARLOTTO, Mary Sandra. Reabilitação
            profissional: o que pensa o trabalhador sobre sua reinserção. Estud.
            pesqui. psicol., Rio de Janeiro, v.12, n.1, p. 93-115, abr. 2012 .
          </Paragraph>

          <Paragraph>
            DE MIRANDA, Pedro Henrique Moreira. Principais causas do absenteísmo
            no ambiente de trabalho em Curitiba. Curitiba, 2019. 70 p.
            Monografia (MBA em Gestão Empresarial) - Universidade Tecnológica
            Federal do Paraná .
          </Paragraph>
        </v-col>

        <v-col cols="12" sm="6">
          <Paragraph>
            MARQUES, Solange Vianna Dall’Orto. Saúde, trabalho e subjetividade:
            absenteísmo-doença de trabalhadores em uma universidade pública.
            CADERNOS EBAPE.BR, Rio de Janeiro, v. 9. 12 p., Julho 2011.
          </Paragraph>

          <Paragraph>
            MINISTÉRIO DO TRABALHO E PREVIDÊNCIA (Brasil). Observatório de
            Segurança e Saúde no Trabalho. Perfil Casos Afastamentos. [S. l.],
            2021.
          </Paragraph>

          <Paragraph>
            NETO, Alonso Dias Marques. Absenteísmo nas empresas. Brasília, 2006.
            42 p Monografia (Administração) - Centro Universitário de Brasília.
          </Paragraph>

          <Paragraph>
            NOUGA, Nilo de Jesus. Fatores que geram absenteísmo nos
            colaboradores em laboratórios multidisciplinares de uma IES.
            Brasília, 2017. 33 p Trabalho de Conclusão de Curso (Administração)
            - Centro Universitário de Brasília.
          </Paragraph>

          <Paragraph>
            ORGANIZAÇÃO PARA A COOPERAÇÃO E DESENVOLVIMENTO ECONÔMICO.
            Relatórios Econômicos da OCDE: Brasil 2018. 2018.
          </Paragraph>

          <Paragraph>
            ORGANIZAÇÃO PAN-AMERICANA DE SAÚDE. Doenças crônicas não
            transmissíveis: Estratégias de controle e desafios e para os
            sistemas de saúde. 2011
          </Paragraph>

          <Paragraph>
            PENATTI, Izidro; ZAGO, José Sebastião; QUELHAS, Oswaldo.
            Absenteísmo: As consequências na gestão de pessoas. In: SIMPÓSIO DE
            EXCELÊNCIA EM GESTÃO E TECNOLOGIA, n. 3. 2006, Rio de Janeiro. 11 p.
          </Paragraph>

          <Paragraph>
            REIS, PAULO; DA SILVA, HELENA PEREIRA. A Gestão Estratégica da
            Informação de Saúde do Trabalhador no Contexto de Inteligência
            Organizacional das Empresas. 2005
          </Paragraph>

          <Paragraph>
            SOUZA, André Portela; FIRPO, Sérgio P.; PONCZEK, Vladimir P.;
            ZYLBERSTAJN, Eduardo; RIBEIRO, Felipe Garcia. Custo do Trabalho no
            Brasil: proposta de uma nova metodologia de mensuração. Proposta de
            uma nova metodologia de mensuração. 2012.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-07/topico-02"
          name="Voltar"
          color="primary"
          icon="mdi-arrow-left-bold-circle"
          :left="true"
          :block="true"
          height="50"
        ></NavButton>
      </v-col>
    </v-row>
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import NavButton from "@/components/NavButton.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    NavButton,
    Paragraph,
  },
};
</script>

<style></style>
