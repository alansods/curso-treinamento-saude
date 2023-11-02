<template>
  <AulaTemplate
    :titulo="$store.state.modulos[4].titulo"
    :numero="$store.state.modulos[4].numero"
    titleSize="4"
  >
    <TextBlock topico="Referêcias">
      <Paragraph>
        BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia e Insumos
        Estratégicos Departamento de Ciência e Tecnologia. Diretrizes
        metodológicas: estudos de avaliação econômica de tecnologias em saúde.
        Brasília, 2009.
      </Paragraph>

      <Paragraph>
        BRASIL. Ministério da Saúde. Secretaria-Executiva. Avaliação econômica
        em saúde: desafios para gestão no Sistema Único de Saúde. Brasília,
        2008.
      </Paragraph>

      <Paragraph>
        CANUTO, V. Avaliação econômica de tecnologias em saúde e limite de
        custo-efetividade, Brasília, 2012.
      </Paragraph>

      <Paragraph>
        HADDIX,A.C.; TEUTSCH,S.M.;CORSO,P.S. Prevention Effectiveness A Guide to
        Decision Analysis and Economic Evaluation. 2 edt. Oxford University
        Press. 2003. SILVA , Marcelo Gurgel Carlos da (Org.). Economia da saúde:
        aspectos conceituais e metodológicos. 7 ed. Fortaleza, 2001.
      </Paragraph>

      <Paragraph>
        WEDY, A.P.M. T. Análise do custo-benefício como procedimento de
        avaliação dos impactos das decisões públicas. Porto Alegre, f. 214.
        Dissertação (Direito) - Universidade Católica do Rio Grande do Sul. 2016
      </Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-05/topico-02"
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
