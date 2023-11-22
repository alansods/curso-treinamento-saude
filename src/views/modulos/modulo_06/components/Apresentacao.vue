<template>
  <AulaTemplate
    :titulo="$store.state.modulos[5].titulo"
    :numero="$store.state.modulos[5].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Apresentar as bases conceituais e metodológicas necessárias para a compreensão de acidentes de trabalho e eventos adversos, além de abordar a prevenção e gestão de segurança e saúde no trabalho.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Grande parte dos eventos adversos é passível de previsão e prevenção, apesar de a terminologia "acidente" muitas vezes sugerir o contrário. Esses incidentes estão, na realidade, enraizados em determinantes sociais e relacionados aos riscos presentes nos sistemas de produção. A análise aprofundada desses eventos oferece valiosas oportunidades de aprimoramento das estratégias de prevenção.
      </Paragraph>

      <Paragraph>
        No Brasil, é comum encontrar uma mentalidade cultural em relação à Segurança e Saúde no Trabalho (SST) que se baseia na ideia de que o sistema técnico é confiável, enquanto o ser humano é frequentemente percebido como o elo frágil dessa equação. As falhas humanas são muitas vezes associadas a fatores individuais e ao não cumprimento das normas prescritas, decorrentes de decisões "conscientes" tomadas pelos trabalhadores.
      </Paragraph>

      <Paragraph>
        A realidade da SST no Brasil é extremamente diversificada, pois engloba desde eventos adversos de diagnóstico claro até situações complexas que exigem estudos aprofundados. Quando há alta incidência de acidentes de trabalho, geralmente os problemas são identificados com relativa facilidade. Nessas situações, o não cumprimento da legislação é evidente, e as medidas de prevenção são óbvias. No entanto, em sistemas com baixa incidência de acidentes, sua ocorrência depende da combinação de vários fatores. Esses fatores geralmente não são explicitamente visíveis na rotina de trabalho e, portanto, são difíceis de identificar por meio das avaliações de segurança convencionais.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>
        Caro (a) cursista,
      </Paragraph>

      <Paragraph>
        Neste módulo, mergulharemos no universo da análise de acidentes de trabalho e eventos adversos, um tema de extrema importância para a saúde e segurança no ambiente de trabalho. É fundamental destacar que compreender o que ocorre em um sistema produtivo e antecipar o que pode acontecer desempenha um papel vital na prevenção de incidentes. Essa análise nos permite identificar riscos, solucionar problemas e, acima de tudo, proteger a saúde e a integridade das pessoas.
      </Paragraph>

      <Paragraph>
        Imagine a capacidade de aprimorar normas de segurança, sistemas de gestão e condições de trabalho, tudo com base na aprendizagem com acidentes passados. Estamos prestes a embarcar nessa jornada de conhecimento e aprimoramento, porque compreender esses conceitos é o primeiro passo para criar ambientes de trabalho mais seguros e saudáveis. Você está pronto para iniciar essa jornada de aprendizado?
      </Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-06/topico-01"
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
    return {
      glossario1: false,
    };
  },

  methods: {},
};
</script>

<style scoped></style>
