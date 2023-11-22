<template>
    <AulaTemplate :titulo="$store.state.modulos[0].titulo" :numero="$store.state.modulos[0].numero" titleSize="3">
      <BoxIcon tipo="objetivos_gerais">
        Proporcionar o desenvolvimento de fundamentos sobre saúde mental para a
        empresa e analisar suas consequências diretas e indiretas para os
        funcionários e empregadores.
      </BoxIcon>

      <hr/>

      <TextBlock topico="Apresentação">
        <Paragraph>
          O manejo das situações de transtornos mentais e de adoecimento no
          ambiente de trabalho exige o conhecimento e a operacionalização de
          ferramentas que possam ser úteis no âmbito institucional.
        </Paragraph>

        <Paragraph>
          Neste módulo, serão disponibilizadas informações que auxiliam líderes
          e suas equipes no enfrentamento dos crescentes índices de adoecimento
          relacionados ao trabalho, as quais possibilitam ampliar o acolhimento
          e os encaminhamentos necessários ao cuidado biopsicossocial.
        </Paragraph>

        <Paragraph>
          Dessa forma, ao adquirir conhecimento sobre os processos de
          adoecimento, é possível desenvolver ações de apoio ao trabalhador,
          orientando a prevenção e a intervenção no ambiente de trabalho.
        </Paragraph>
      </TextBlock>

      <hr/>

      <TextBlock topico="Introdução">
        <Paragraph>Caro (a) cursista,</Paragraph>

        <Paragraph>
          Certamente, você sabe que a maior parte do nosso tempo é dedicada ao
          ofício. No entanto, quando uma pessoa precisa lidar com transtornos
          mentais no ambiente profissional, torna-se extremamente desafiador
          executar suas funções de maneira eficiente durante o horário de
          trabalho.
        </Paragraph>

        <Paragraph>
          As frustrações no ambiente de trabalho são comuns e ocorrem
          frequentemente, seja devido à ameaça de perda do emprego, falta de
          reconhecimento pelo desempenho, falhas cotidianas, relacionamentos
          complicados, insatisfação com o serviço ou pressões de produtividade.
        </Paragraph>

        <Paragraph>
          Embora o trabalho em si possa ser benéfico para a saúde mental, um
          ambiente de trabalho negativo pode levar a sérias complicações.
          Portanto, é importante que a empresa ofereça um ambiente acolhedor e
          produtivo, no qual a comunicação seja incentivada em todos os níveis
          hierárquicos, especialmente na liderança.
        </Paragraph>

        <Paragraph>
          Assim, cuidar da saúde mental dos colaboradores não deve ser apenas
          uma frase de efeito, mas uma prática cotidiana. Cuidar do bem-estar
          emocional é um investimento para qualquer negócio que almeja ter
          sucesso, tanto no presente quanto no futuro.
        </Paragraph>

        <Paragraph>Então, vamos lá? Preparado (a)?</Paragraph>
      </TextBlock>

      <v-row justify="center" class="mt-5">
        <v-col cols="12" sm="6">
          <NavButton
            link="modulo-01/topico-01"
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
    };
  },

  methods: {},

};
</script>

<style scoped></style>
