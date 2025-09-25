<template>
  <AulaTemplate
    :titulo="$store.state.modulos[1].titulo"
    :numero="$store.state.modulos[1].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Proporcionar o desenvolvimento de conhecimentos fundamentais sobre Ergonomia e algumas doenças que podem estar associadas, além de abordar o impacto nos custos para a empresa e as consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Com os avanços evolutivos e tecnológicos, as atividades humanas têm sofrido mudanças. Jornadas longas de trabalho e estudo são fatores que influenciam a permanência por períodos prolongados na postura sentada, que, mantida por períodos extensos, ocasiona sobrecarga dos músculos e articulações, o que leva à fadiga muscular e, principalmente, da coluna vertebral.
      </Paragraph>

      <Paragraph>
        Conforme o Ministério do Trabalho e Previdência, a problemática relacionada à ergonomia se tornou um tema de contínua inquietação tanto para as organizações privadas quanto para as instituições governamentais. Essa preocupação emergiu devido à sua identificação como uma das principais razões para a ocorrência frequente de ausências no ambiente de trabalho (BRASIL, 2022). Desta forma, ao longo deste módulo, você irá adquirir uma compreensão abrangente sobre a importância da ergonomia, seus impactos cruciais e os riscos iminentes que tanto empresas quanto funcionários enfrentam na ausência de conformidade com os princípios ergonômicos.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        No ano de 1978, o Ministério do Trabalho, na época, emitiu a Portaria nº 3.214/1978, a qual estabeleceu os princípios de ergonomia contidos na Norma Regulamentadora nº 17 (NR17). Essa medida definiu orientações, padrões e critérios que possibilitam a adaptação das condições laborais às características psicofisiológicas dos trabalhadores, com o propósito de assegurar o mais elevado nível de conforto, segurança, bem-estar e eficiência no desempenho das atividades profissionais. Através da implementação da ergonomia no ambiente de trabalho, as organizações conseguem proporcionar ambientes mais seguros e saudáveis para seus colaboradores (BRASIL, 2022).
      </Paragraph>

      <Paragraph>Que tal explorar essas diretrizes conosco?</Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-02/topico-01"
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
