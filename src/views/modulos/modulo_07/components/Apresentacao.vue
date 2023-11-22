<template>
  <AulaTemplate
    :titulo="$store.state.modulos[6].titulo"
    :numero="$store.state.modulos[6].numero"
    titleSize="5"
  >
    <BoxIcon tipo="objetivos_gerais">
      Propiciar o desenvolvimento de fundamentos sobre afastamentos de curto,
      longo prazo, retorno ao trabalho, readaptação e reabilitação, absenteísmo
      e presenteísmo, bem como o impacto nos custos para a empresa e as
      consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Atualmente, a configuração do mundo do trabalho apresenta um alto grau
        de complexidade, devido, especialmente, à centralidade ocupada pelo
        trabalho na vida das pessoas, à exigência da sociedade voltada para o
        desenvolvimento profissional e os limites, cada vez menos perceptíveis,
        entre o espaço de trabalho e o espaço total de vida. Ao mesmo tempo, os
        trabalhadores também passam a ser mais valorizados e compreendidos como
        o grande diferencial competitivo das organizações, sendo responsáveis
        pelo sucesso ou fracasso destas.
      </Paragraph>

      <Paragraph>
        Neste sentido, acentuam-se as discussões voltadas à compreensão de como
        a experiência de trabalho pode ser mais positiva e de como essa
        experiência pode trazer resultados benéficos tanto para o trabalhador
        quanto para a organização. Acompanhando essa perspectiva, neste módulo
        serão disponibilizadas informações que contemplam as temáticas que
        integram os temas: afastamentos de curto e longo prazo, retorno ao
        trabalho, readaptação e reabilitação.
      </Paragraph>

      <Paragraph>
        Essa preocupação tem se manifestado tanto por parte dos trabalhadores
        como também por parte das organizações privadas e públicas, que têm
        investido na concepção e implantação de políticas de gestão voltadas
        para a saúde do trabalhador. Assim, a partir do conhecimento acerca
        destes assuntos, espera-se contribuir para a construção de um corpo de
        conhecimentos sobre gestão de pessoas no setor privado, pautados em uma
        posição crítica e questionadora sobre a saúde e qualidade de vida do
        trabalhador.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        Considerando a relevância do trabalho na vida das pessoas e tudo o que
        ele representa – meio de sobrevivência, de realização, de identificação,
        de contribuição social, entre tantos outros – e o quanto um bom ambiente
        organizacional impacta a gestão das pessoas, o seu engajamento, a
        melhora do desempenho e da produtividade, a atenção às questões voltadas
        à saúde e à qualidade de vida no trabalho é crescente.
      </Paragraph>

      <Paragraph>
        Independente do segmento de atuação ou porte, as empresas estão sujeitas
        a um problema em comum: o absenteísmo. A ausência de funcionários
        durante o expediente resulta em consequências prejudiciais para o local
        de trabalho. Além dos impactos imediatos, como atrasos em entregas, a
        falta prolongada de um colaborador acarreta problemas de desempenho na
        equipe, como perda de qualidade do trabalho entregue, comprometimento
        dos resultados e, é claro, prejuízos para a companhia. Compreender as
        razões para a sua recorrência e estabelecer práticas para combatê-lo
        tornou-se, portanto, uma preocupação constante para a maioria das
        organizações.
      </Paragraph>

      <Paragraph>Bons estudos!</Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-07/topico-01"
          name="Iniciar"
          color="primary"
          icon="mdi-arrow-right-bold-circle"
          :right="true"
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
import BoxIcon from "@/components/BoxIcon.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    NavButton,
    BoxIcon,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped></style>
