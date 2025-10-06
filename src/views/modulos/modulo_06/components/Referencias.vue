<template>
  <AulaTemplate
    :titulo="$store.state.modulos[5].titulo"
    :numero="$store.state.modulos[5].numero"
    titleSize="4"
  >
    <v-row style="word-break: break-word">
      <v-col cols="12" sm="6">
        <TextBlock topico="Referêcias">
          <Paragraph>
            BRASIL. Lei nº 8.213, de 24 de Julho de 1991. Dispõe sobre os Planos
            de Benefícios da Previdência Social e dá outras providências.
          </Paragraph>

          <Paragraph>
            BRASIL. Lei nº 6.367, de 19 de Outubro de 1976. Dispõe sobre o
            seguro de acidentes do trabalho a cargo do INPS e dá outras
            providências.
          </Paragraph>

          <Paragraph>
            BRASIL. Presidência da República. Decreto nº 6.042. Altera o
            Regulamento da Previdência Social, disciplina a aplicação,
            acompanhamento e avaliação do Fator Acidentário de Prevenção – FAP e
            do Nexo Técnico Epidemiológico. Brasília, 12 de fevereiro de 2007.
          </Paragraph>

          <Paragraph>
            BRASIL. Presidência da República. Decreto nº 6.957. Altera o
            Regulamento da Previdência Social aprovado pelo Decreto no 3.048, de
            6 de maio de 1999, no tocante à aplicação, acompanhamento e
            avaliação do Fator Acidentário de Prevenção – FAP. Brasília, 9 de
            setembro de 2009.
          </Paragraph>

          <Paragraph>
            EYERKAUFER, Marino Luiz. Simulador de custos para gestão de riscos
            de acidentes de trabalho. Revista Catarinense da Ciência Contábil,
            Santa Catarina, v. 18. 16 p.
          </Paragraph>
        </TextBlock>
      </v-col>

      <v-col cols="12" sm="6">
        <TextBlock>
          <Paragraph>
            FEDERAÇÃO DAS INDÚSTRIAS DO ESTADO DE SÃO PAULO – FIESP.
            FAP-RAT-NTEP: Efeitos na Gestão Empresarial. 2º Edição. São Paulo,
            2015. 52 p.
          </Paragraph>

          <Paragraph>
            JUNIOR, Waldemar Ramos. Acidente do trabalho: características e
            direitos do trabalhador. Jusbrasil.
          </Paragraph>

          <Paragraph>
            LOPES, José Nicodemos Pereira. A relação entre os custos segurado e
            não segurado dos acidentes do trabalho. 2009. 96 f. Dissertação
            (Mestrado em Engenharia Elétrica) - Centro Universitário da Fei, São
            Bernardo do Campo, 2009
          </Paragraph>

          <Paragraph>
            SHIMAZAKI, YUKI. Master class: Economics and OHS. Master in
            Occupational Safety and Health. Turin, 2018.
          </Paragraph>

          <Paragraph>
            SmartLab. Observatório de Segurança e Saúde no Trabalho. Promoção do
            Meio Ambiente do Trabalho Guiado por Dados. 2022. Acesso em:
            https://smartlabbr.org/sst
          </Paragraph>

          <Paragraph>
            SOARES, Luiz de Jesus Peres . Os impactos financeiros dos acidentes
            do trabalho no orçamento brasileiro: uma alternativa política e
            pedagógica para redução dos gastos. Brasília, 2008 Monografia
            (Orçamento Público.) - Instituto Serzedello Corrêa.
          </Paragraph>
        </TextBlock>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-06/topico-02"
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
