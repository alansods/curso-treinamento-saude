<template>
  <AulaTemplate
    :titulo="$store.state.modulos[8].titulo"
    :numero="$store.state.modulos[8].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Promover a implementação de uma cultura de Segurança e Saúde no Trabalho e
      Promoção da Saúde nas empresas, fornecendo orientações práticas e
      conceitos fundamentais, além de considerar o impacto nos custos e
      consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        A ausência de investimentos em Segurança do Trabalho é apontada como a
        principal razão por trás das estatísticas elevadas de acidentes de
        trabalho (OIT, 2022). Nesse contexto, o aumento das taxas de acidentes
        de trabalho, fatalidades e concessão de benefícios tem se tornado um
        fator motivador para a intensificação da fiscalização do ambiente de
        trabalho por várias entidades (BRASIL, 2020).
      </Paragraph>

      <Paragraph>
        Diante desse cenário desafiador, a implementação de uma cultura de
        Segurança e Saúde no Trabalho (SST) e Promoção da Saúde (PS) nas
        empresas assegura que os funcionários sigam procedimentos apropriados e
        seguros durante a realização de suas atividades. Portanto, o propósito
        deste módulo é apresentar tanto os conhecimentos teóricos quanto
        práticos relativos à cultura de SST no ambiente de trabalho, visando,
        assim, à redução da probabilidade de ocorrência de acidentes de
        trabalho.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        O termo
        <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')"
          >safety culture</GlossarioButton
        >
        surgiu pela primeira vez em 1987, no contexto do acidente na Usina
        Nuclear de Chernobyl, na Ucrânia, considerado um dos piores desastres em
        termos de fatalidades entre trabalhadores e custos operacionais. Mais de
        30 anos após o ocorrido, os impactos desse desastre ainda são
        contabilizados e associados a ele (OIT, 2022).
      </Paragraph>

      <GlossarioDialog title="Safety Culture">
        <Paragraph>
          <strong>Safety Culture</strong>: a cultura de segurança se refere à
          maneira como uma organização valoriza e promove a segurança no local
          de trabalho, envolvendo crenças, atitudes e comportamentos
          compartilhados para prevenir acidentes e lesões.
        </Paragraph>
      </GlossarioDialog>

      <Paragraph>
        Desde então, inúmeras agências e pesquisadores têm contribuído com
        estudos para definir e caracterizar a cultura de segurança em ambientes
        organizacionais. Assim, a SST está intrinsecamente relacionada ao
        bem-estar dos trabalhadores e ao vínculo estabelecido com a empresa. De
        acordo com a Organização Internacional do Trabalho (OIT), essa área
        representa um elemento crucial da justiça social, visando à proteção dos
        trabalhadores contra doenças ocupacionais e acidentes de trabalho (OIT,
        2022).
      </Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-09/topico-01"
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

import GlossarioButton from "@/components/GlossarioButton.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    NavButton,
    BoxIcon,
    GlossarioButton,
    GlossarioDialog
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
