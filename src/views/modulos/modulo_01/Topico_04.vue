<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
    titleSize="3"
  >

    <TextBlock topico="Tópico 04 - Políticas de Saúde Mental no Trabalho">
      <Paragraph>
        O trabalho ocupa posição central na sociedade e na vida das pessoas, tem
        grande importância para o trabalhador, podendo ser fonte de realizações
        e lazer. No entanto, a depender das condições de trabalho, ele pode
        causar estresse emocional, levando ao desenvolvimento de medo, tensão e
        ansiedade.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A Política Nacional de Saúde do Trabalhador e Trabalhadora (PNSTT), instituída em 2012 pela Portaria Nº 1.823, tem como propósito definir os princípios, diretrizes e estratégias para o desenvolvimento da atenção integral à saúde do trabalhador. Um de seus objetivos primordiais é promover a saúde em ambientes e processos de trabalho, estabelecendo parâmetros de proteção para a saúde dos trabalhadores e fortalecendo a articulação das ações de vigilância em saúde. Isso inclui a identificação de fatores de risco ambientais e intervenções tanto nos ambientes e processos de trabalho quanto em seu entorno.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        A identificação da Rede de Atenção à Saúde local é essencial para articular ações de prevenção e intervenção, envolvendo diversos atores institucionais e garantindo cuidados integrais ao sujeito. Nessa perspectiva, compreende-se que a investigação é um processo que deve se desdobrar em várias etapas. Inicialmente, abrange o reconhecimento do caso suspeito a partir da apresentação do trabalhador, seguido pela coleta de informações sobre o histórico de adoecimento, caracterização clínica realizada por profissionais competentes e exames complementares na rede assistencial.
      </Paragraph>

      <Paragraph>
        Posteriormente, admite-se a investigação institucional, por intermédio
        da atuação de diversos setores em busca da coleta de informações sobre o
        ambiente de trabalho e psicossocial do trabalhador, as condições de
        trabalho e os agravos que podem contribuir para o adoecimento. Essa
        investigação considera a percepção do próprio trabalhador, bem como as
        avaliações realizadas pelas equipes de saúde e segurança da instituição.
      </Paragraph>

      <Paragraph>
        É importante ressaltar que a instituição de trabalho deve acolher a
        demanda, a notificação e o registro do adoecimento, orientando o
        trabalhador acerca dos procedimentos cabíveis e dos encaminhamentos
        necessários. Logo, pode-se sugerir um fluxo que compreenda as seguintes
        etapas:
      </Paragraph>
    </TextBlock>

    <Imagem
      src="modulo_01/fluxo-adoecimento.svg"
      legenda="Imagem 6: Fluxo de cuidados para garantir a saúde mental dos trabalhadores. "
      fonte="Equipe Senai Ceará / freepik.com"
    />

    <BoxIcon tipo="recapitulando"
      >Neste tópico, abordamos a Política Nacional de Saúde do Trabalhador e
        Trabalhadora (PNSTT), que tem como objetivo promover ambientes de
        trabalho saudáveis e intervir nos fatores de risco. No próximo tópico,
        iremos discutir a importância dos investimentos em saúde mental nas
        empresas, visando o bem-estar dos colaboradores e o desempenho
        organizacional.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 03"
      prevLink="modulo-01/topico-03"
      nextName="Tópico 05"
      nextLink="modulo-01/topico-05"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    Imagem,
    NavFooter,
    Paragraph,
  },
  data() {
    return {
      modelTranstornos: 0,

      itemsConsequencias: {
        tab: 0,

        tab1: {
          titulo: "Para o indivíduo",
          items: [
            "Dores generalizadas",
            "Palpitações",
            "Distúrbios digestivos",
            "Dores de cabeça",
            "Hipertensão arterial",
            "Alteração do sono",
            "Irritabilidade",
            "Crises de choro",
            "Abandono de relações pessoais",
            "Problemas familiares",
            "Isolamento",
            "Depressão",
            "Síndrome do pânico",
            "Estresse",
            "Suicídio",
          ],
        },

        tab2: {
          titulo: "Para a empresa",
          items: [
            "Redução da produtividade",
            "Rotatividade de pessoal",
            "Aumento de erros e acidentes",
            "Absenteísmo (faltas)",
            "Licenças médicas ",
            "Exposição negativa da marca",
            "Indenizações trabalhistas",
            "Multas administrativas",
          ],
        },
      },

      itemsAssedioSexual: {
        tab: 0,
      },
    };
  },

  methods: {},

};
</script>

<style scoped></style>
