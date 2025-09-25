<template>
  <AulaTemplate
    :titulo="$store.state.modulos[6].titulo"
    :numero="$store.state.modulos[6].numero"
    titleSize="5"
  >
    <BoxIcon tipo="objetivos_gerais">
      Proporcionar o desenvolvimento de fundamentos sobre afastamentos de curto e longo prazo, retorno ao trabalho, readaptação e reabilitação, absenteísmo e presenteísmo, bem como compreender o impacto nos custos para a empresa e as consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Atualmente, a configuração do mundo do trabalho apresenta um alto grau de complexidade, devido, especialmente, à centralidade ocupada pelo trabalho na vida das pessoas, à exigência da sociedade voltada para o desenvolvimento profissional e os limites, cada vez menos perceptíveis, entre o espaço de trabalho e o espaço total de vida. Ao mesmo tempo, os trabalhadores também passam a ser mais valorizados e compreendidos como o grande diferencial competitivo das organizações, sendo responsáveis pelo sucesso ou fracasso destas.
      </Paragraph>

      <Paragraph>
        Neste contexto, intensificam-se as discussões voltadas para a compreensão de como a experiência de trabalho pode ser mais positiva e como essa vivência pode resultar em benefícios tanto para o trabalhador quanto para a organização. Este módulo oferecerá informações abrangentes sobre temas que englobam afastamentos de curto e longo prazo, retorno ao trabalho, readaptação e reabilitação.
      </Paragraph>

      <Paragraph>
        Essa preocupação tem se manifestado tanto por parte dos trabalhadores quanto das organizações privadas e públicas, as quais têm investido na concepção e implementação de políticas de gestão voltadas para a saúde do trabalhador. Assim, ao adquirir conhecimento sobre esses assuntos, busca-se contribuir para a construção de um corpo de conhecimento sobre gestão de pessoas no setor privado, fundamentado em uma abordagem crítica e questionadora sobre a saúde e qualidade de vida do trabalhador.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        Considerando a importância do trabalho na vida das pessoas e todos os seus significados - meio de sobrevivência, realização, identificação, contribuição social, entre outros - e o impacto de um bom ambiente organizacional na gestão das pessoas, no engajamento, na melhoria do desempenho e na produtividade, a atenção às questões relacionadas à saúde e à qualidade de vida no trabalho tem aumentado.
      </Paragraph>

      <Paragraph>
        Independentemente do segmento de atuação ou porte, as empresas enfrentam um problema comum: o absenteísmo. A ausência de funcionários durante o expediente acarreta consequências prejudiciais para o ambiente de trabalho. Além dos impactos imediatos, como atrasos em entregas, a prolongada falta de um colaborador resulta em problemas de desempenho na equipe, como perda de qualidade no trabalho entregue, comprometimento dos resultados e, evidentemente, prejuízos para a companhia. Compreender as razões para sua recorrência e estabelecer práticas para combatê-lo tornou-se, portanto, uma preocupação constante para a maioria das organizações.
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
