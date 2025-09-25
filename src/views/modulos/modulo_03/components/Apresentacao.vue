<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <BoxIcon tipo="objetivos_gerais">
      Promover o aprimoramento dos fundamentos em Saúde Suplementar, com base em orientações práticas e conceitos adotados pelo setor, bem como explorar o impacto nos custos das empresas e as consequências diretas e indiretas para funcionários e empregadores.
    </BoxIcon>

    <hr />

    <TextBlock topico="Apresentação">
      <Paragraph>
        Atualmente, no Brasil, ainda não se encontra disponível um sistema de saúde universal capaz de suprir integralmente as demandas de toda a população, no que se refere ao acesso a serviços de saúde que sejam eficientes, pontuais e igualitários. Diante dessa situação, diversas empresas e organizações optam por contratar os serviços da Saúde Suplementar, que se configura como um sistema de considerável complexidade, regido por inúmeras normativas e regulamentações. Diversos fatores exercem influência nos custos dos serviços de saúde em nível global, tais como o envelhecimento demográfico, a utilização inadequada dos serviços, a adoção de novas tecnologias e hábitos de vida pouco saudáveis, todos contribuindo para o aumento dos riscos de doenças crônicas não transmissíveis (DCNT).
      </Paragraph>

      <Paragraph>
        Contudo, é cada vez mais crucial que as empresas que contratam os serviços da Saúde Suplementar possuam um conhecimento abrangente a respeito desse sistema, compreendendo não somente suas bases normativas, mas também o funcionamento dos diversos setores envolvidos e as estratégias disponíveis para efetuar escolhas bem fundamentadas, sempre com o foco na oferta de cuidados de alta qualidade para seus colaboradores, ao mesmo tempo em que se buscam reduzir ao máximo os custos envolvidos. Este módulo foi desenvolvido com o intuito de oferecer informações capazes de auxiliar as empresas contratantes na tomada de decisões relacionadas à gestão da Saúde Suplementar.
      </Paragraph>
    </TextBlock>

    <hr />

    <TextBlock topico="Introdução">
      <Paragraph>Caro (a) cursista,</Paragraph>

      <Paragraph>
        No Brasil, além do sistema público de saúde que assegura cobertura universal por lei a todos os cidadãos, há espaço para a participação de empresas privadas no setor da Saúde. Isso significa que os indivíduos têm a opção de contratar assistência à saúde de empresas registradas para esse fim como uma complementação, sem prejuízo do seu direito ao atendimento pelo Sistema Público de Saúde.
      </Paragraph>

      <Paragraph>
        De acordo com a Lei 9.656/1998, as operadoras de planos de saúde são entidades que gerenciam, comercializam ou disponibilizam planos de assistência na área da Saúde Suplementar. Esses planos devem estar em conformidade com as diretrizes estabelecidas por essa legislação e por outras regulamentações da Agência Nacional de Saúde Suplementar (ANS)(BRASIL, 1988).
      </Paragraph>

      <Paragraph>
        A partir das informações fornecidas por este órgão, mais de 50 milhões de brasileiros, representando cerca de 23% da população, atualmente possuem algum tipo de plano de saúde. A distribuição desses planos varia de acordo com as diferentes regiões do país, com os planos coletivos correspondendo a aproximadamente 80% do total de planos no Brasil. Em 2022, o setor registrou mais de 264 milhões de consultas médicas, bem como outros atendimentos ambulatoriais, exames, terapias, internações e procedimentos odontológicos.
      </Paragraph>

      <Paragraph>
        Durante muitos anos, o modelo de Saúde Suplementar no país foi predominantemente voltado para o tratamento de doenças, com foco no diagnóstico e tratamento. No entanto, a ANS tem se esforçado para incentivar as operadoras de planos de saúde a repensarem essa abordagem, promovendo mudanças em direção a um modelo que gradualmente inclua ações voltadas para a promoção da saúde e a prevenção de riscos e doenças, de maneira integrada.
      </Paragraph>

      <Paragraph>Então, vamos lá? Preparado (a)?</Paragraph>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-03/topico-01"
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
