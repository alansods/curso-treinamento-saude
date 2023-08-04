<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
  >

    <Card topico="Tópico 4 - Políticas de Saúde Mental no Trabalho">
      <Paragraph>
        Neste tópico, abordamos o assédio moral e sexual no ambiente de
        trabalho, discutindo suas definições, causas e consequências. No próximo
        tópico, iremos explorar algumas políticas de saúde mental no trabalho,
        visando promover um ambiente saudável e acolhedor para os colaboradores.
      </Paragraph>

      <Paragraph>
        O trabalho ocupa posição central na sociedade e na vida das pessoas, tem
        grande importância para o trabalhador, podendo ser fonte de realizações
        e lazer. No entanto, a depender das condições de trabalho, ele pode
        causar estresse emocional, levando ao desenvolvimento de medo, tensão e
        ansiedade.
      </Paragraph>
    </Card>

    <BoxIcon tipo="voce_sabia">
      A Política Nacional de Saúde do Trabalhador e Trabalhadora (PNSTT), criada
      no ano de 2012 pela Portaria Nº 1.823, tem como finalidade definir os
      princípios, as diretrizes e as estratégias para o desenvolvimento da
      atenção integral à saúde do trabalhador. Tem como um dos objetivos
      principais promover a saúde e ambientes e processos de trabalhos
      saudáveis, por meio de ações como estabelecer parâmetros protetores da
      saúde dos trabalhadores nos ambientes e processos de trabalho e o
      fortalecimento e articulação das ações de vigilância em saúde,
      identificando os fatores de risco ambientais e intervindo tanto nos
      ambientes e processos de trabalho quanto em seu entorno.
    </BoxIcon>

    <Card>
      <Paragraph>
        A identificação de rede de Atenção à Saúde local é essencial para a
        articulação de ações de prevenção e de intervenção, envolvendo diversos
        atores institucionais e cuidados integrais ao sujeito. Nessa
        perspectiva, compreende-se que a investigação é processual e deve se
        constituir em diversas etapas, de modo a abranger, inicialmente, o
        reconhecimento do caso suspeito a partir da apresentação do trabalhador,
        a coleta de informações sobre o histórico de adoecimento, a
        caracterização clínica realizada por profissionais competentes e exames
        complementares na rede assistencial.
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
    </Card>

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
import Card from "@/components/Card.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    Card,
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
