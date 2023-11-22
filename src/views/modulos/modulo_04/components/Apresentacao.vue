<template>
  <AulaTemplate
    :titulo="$store.state.modulos[3].titulo"
    :numero="$store.state.modulos[3].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Fornecer o embasamento necessário sobre os principais programas legais relacionados à área de Segurança e Saúde dos Trabalhadores, com base em diretrizes práticas e conceitos adotados por órgãos nacionais, além de abordar o impacto nos custos associados ao descumprimento de normas e legislações para as empresas, bem como as consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Este módulo abrange um conjunto de informações relacionadas aos direitos dos trabalhadores, bem como às responsabilidades institucionais e dos empregadores no que diz respeito à saúde e segurança dos trabalhadores (SST) empregados por empresas sob o regime da Consolidação das Leis do Trabalho (CLT) e segurados pela Previdência Social. Em 1999, a Organização Internacional do Trabalho (OIT) oficializou o conceito de "trabalho decente" como um resumo de sua missão histórica, que busca promover oportunidades para que homens e mulheres tenham acesso a empregos produtivos e de alta qualidade, garantindo liberdade, equidade, segurança e dignidade humana (ABRAMO, 2015).
      </Paragraph>

      <Paragraph>
        A garantia de trabalho em condições seguras, mediante ações de promoção e proteção da saúde dos trabalhadores nos ambientes e processos de trabalho, constitui uma das dimensões que compõem o conceito de trabalho decente.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>
        O direito a trabalhar em condições dignas e seguras é, no contexto brasileiro, um direito fundamental tanto para o indivíduo quanto para a sociedade como um todo. A promoção e a proteção da saúde dos trabalhadores devem ser garantidas por meio de um conjunto de políticas, abrangendo tanto o âmbito público como o privado. No setor público, isso envolve diversas áreas das políticas sociais, como Saúde, Previdência, Trabalho e Emprego, Meio Ambiente, Assistência Social, Educação e Justiça, além das políticas de desenvolvimento econômico, como Indústria, Mineração, Transporte, Serviços, Comércio e Agricultura, entre outras.
      </Paragraph>

      <Paragraph>
        No setor privado e nas organizações sociais, desempenham papéis essenciais às empresas, os estabelecimentos, as entidades representativas de empregadores, o setor produtivo, os trabalhadores e suas representações, incluindo os movimentos sociais.
      </Paragraph>

      <Paragraph>
        Os fatores de risco à saúde e as situações potencialmente prejudiciais nos ambientes e processos de trabalho podem ser reduzidos, controlados ou eliminados por meio da adoção de medidas de proteção e ajustes no ambiente, processo e organização do trabalho. Essas medidas visam melhorar as condições de trabalho e, consequentemente, prevenir acidentes, doenças ocupacionais e outros agravos relacionados ao trabalho.
      </Paragraph>

      <Paragraph>
        Então, vamos lá? Preparado (a)?
      </Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-04/topico-01"
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
