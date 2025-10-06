<template>
  <AulaTemplate
    :titulo="$store.state.modulos[4].titulo"
    :numero="$store.state.modulos[4].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Fornecer uma base sólida para o entendimento da Economia da Saúde e
      Segurança, com base em orientações práticas e conceitos estabelecidos por
      organizações internacionalmente reconhecidas, como o NIOSH e o CDC, com o
      objetivo de capacitar profissionais a aplicar esses princípios de forma
      eficaz em diversas situações e contextos relacionados à saúde e segurança
      no ambiente de trabalho.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        As perdas para a sociedade decorrentes de acidentes e doenças
        relacionadas ao trabalho são significativas, mas compreendemos que
        nenhuma sociedade pode eliminar completamente essas ocorrências. Devido
        à escassez de recursos, precisamos direcionar com cuidado os
        investimentos limitados para obter o "maior retorno possível".
        Simplesmente custear as doenças ocupacionais não é suficiente para tomar
        decisões estratégicas de investimento. É aqui que entra a importância de
        uma avaliação econômica bem planejada e executada.
      </Paragraph>

      <Paragraph>
        Uma avaliação econômica adequada pode ser uma ferramenta valiosa se
        conduzida de maneira apropriada. Os resultados dessa avaliação podem
        fornecer informações essenciais, desde que sejam interpretados com uma
        análise crítica da prática de avaliação. No entanto, é fundamental
        entender que a avaliação econômica não deve, e nem pode, ser a única
        determinante das decisões de investimento. Essas decisões são moldadas
        por uma interseção complexa de valores econômicos, políticos e sociais.
      </Paragraph>

      <Paragraph>
        Assim, o objetivo deste módulo é facilitar a identificação do nível de
        eficiência nos investimentos em saúde e segurança do trabalhador. Vamos
        explorar de forma mais detalhada os conceitos fundamentais dos estudos
        de eficiência, amplamente conhecidos como estudos de custo-efetividade,
        custo-benefício e custo-utilidade. Isso nos permitirá tomar decisões
        informadas, considerando não apenas os aspectos econômicos, mas também
        os valores e necessidades sociais que orientam as escolhas de
        investimento em saúde e segurança no trabalho.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph> Caro (a) cursista, </Paragraph>

      <Paragraph>
        Aqueles que lidam com a saúde e segurança dos trabalhadores enfrentam
        uma série de questões que precisam ser abordadas, seja para o
        planejamento, promoção, assistência ou financiamento desses serviços.
        Questões como a frequência das avaliações periódicas de saúde no
        trabalhador, a necessidade de coletar exames laboratoriais em avaliações
        de rotina e o investimento em equipamentos de proteção individual são
        elementares nesse processo.
      </Paragraph>

      <Paragraph>
        Tradicionalmente, as respostas para essas perguntas eram moldadas pela
        experiência individual, opiniões de especialistas ou até mesmo decisões
        baseadas em sentimentos subjetivos. Com o tempo, ficou claro que tais
        práticas nem sempre refletiam as melhores abordagens para a saúde
        ocupacional. Desta forma, para tomar decisões informadas, profissionais
        de saúde, prestadores de serviços e gestores devem considerar uma série
        de questões-chave, coletadas e organizadas sistematicamente, para
        orientar suas ações, tais como:
      </Paragraph>

      <ul>
        <li>
          O investimento em saúde e segurança do trabalhador é eficaz e efetivo?
        </li>
        <li>Qual é a disponibilidade e a viabilidade?</li>
        <li>Qual é o custo envolvido?</li>
      </ul>

      <Paragraph>
        A resposta à primeira pergunta é fundamentada no modelo da Medicina
        Baseada em Evidências, que analisa ensaios clínicos randomizados,
        revisões sistemáticas, estudos de coorte e registros locais. As duas
        últimas perguntas são formalmente consideradas em análises econômicas
        aplicadas à saúde. Determinar se os benefícios justificam os custos
        associados é uma questão crítica para uma tomada de decisão racional.
        Sem uma análise cuidadosa de todos os aspectos envolvidos em uma
        intervenção, incluindo custos e suas consequências, decisões equivocadas
        podem ser tomadas na prática. Portanto, a abordagem baseada em
        evidências e análises econômicas desempenham um papel crucial na
        promoção da saúde e segurança no ambiente de trabalho.
      </Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-05/topico-01"
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
