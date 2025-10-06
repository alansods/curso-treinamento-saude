<template>
  <AulaTemplate
    :titulo="$store.state.modulos[7].titulo"
    :numero="$store.state.modulos[7].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Fornecer aos cursistas uma compreensão sólida dos conceitos fundamentais
      ligados à abordagem ESG (Ambiental, Social e Governança) e demonstrar como
      esses princípios estão sendo efetivamente implementados no cenário
      empresarial.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Neste módulo, trataremos do conceito ESG (sigla em inglês para
        <i>Environment, Social e Governance</i>). Vamos explorar a evolução do
        capitalismo, desde sua busca inicial pelo lucro até a transição para um
        modelo mais consciente, onde o compromisso com questões ambientais,
        sociais e de governança se torna essencial. Ao longo desta jornada,
        examinaremos o contexto histórico que levou ao surgimento do ESG, sua
        crescente importância para as empresas e o mercado financeiro, além de
        destacar os riscos e oportunidades que esse movimento oferece. Por fim,
        exploraremos as práticas ESG e como as empresas podem implementá-las em
        suas operações para construir um futuro mais sustentável e responsável.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        Nesta aula, exploraremos o mundo do ESG. Você já ouviu falar dessa
        sigla? A sigla em inglês que, na tradução livre para o português,
        significa Ambiental, Social e Governança Corporativa, representa a
        evolução do capitalismo do lucro a qualquer custo para um capitalismo
        consciente. Esse é um caminho sem volta para a sociedade contemporânea,
        principalmente devido às questões climáticas que afetam nosso planeta. É
        a forma como o mercado avalia o modelo de gestão da sua empresa. Uma
        leitura sobre como a alta gestão pensa sobre temas como: meio ambiente,
        colaboradores, aspectos sociais e na forma como as relações entre o
        público e o privado são conduzidas. Não é de hoje que o tema é
        trabalhado, tivemos por toda a história do capitalismo iniciativas que
        buscavam soluções sustentáveis. No entanto, agora vemos um crescimento
        orientado para que as empresas de fato assumam compromissos públicos e
        que possam fazer daquilo que ora era apenas discurso, uma prática real,
        objetiva e que gera impacto não só no seu público interno, mas em toda
        sociedade.
      </Paragraph>

      <Paragraph>
        O ESG engloba práticas de gestão visando à sustentabilidade e
        longevidade das empresas, destacando a importância de considerar fatores
        econômicos e enxergar o lucro como resultado de uma gestão responsável.
        Isso requer dos líderes uma abordagem multidisciplinar que abraça
        aspectos sociais, ambientais e seus impactos, incentivando a integração
        de propósito através da missão e valores da organização. A crescente
        relevância do ESG tem atraído profissionais e empresas comprometidos com
        o meio ambiente, responsabilidade social e boas práticas de governança,
        refletindo a priorização desses fatores na última década. Além disso, a
        influência da Geração Z, que busca o ativismo, cooperativismo e um
        sentido mais profundo na vida, torna o desenvolvimento sustentável um
        desafio significativo. Nossos estudos se baseiam no documento da
        Confederação das Indústrias (CNI) sobre o ESG na indústria brasileira,
        complementados por videoaulas para aprofundar o conhecimento no decorrer
        deste módulo.
      </Paragraph>

      <Paragraph
        >Preparado(a) para iniciar esta jornada de conhecimento? Então, vamos
        lá!</Paragraph
      >
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-08/topico-01"
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
