<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 01 - Doenças Crônicas Não Transmissíveis (DCNT)">
      <Paragraph>
        Neste tópico, iremos aprender sobre as doenças crônicas não
        transmissíveis (DCNT) e sua implicação na produtividade das empresas.
      </Paragraph>

      <Paragraph>
        Um dos fatores que influenciam diretamente as DCNT é o envelhecimento
        populacional, o qual apresenta desafios significativos para o sistema de
        saúde. Existe uma forte relação entre a parcela de idosos na população e
        os gastos com saúde, ou seja, quanto maior a proporção de idosos, maior
        tende a ser a fatia dos gastos com saúde em relação à renda. Além do
        envelhecimento, outros hábitos relacionados também impactam a qualidade
        de vida de pessoas mais jovens.
      </Paragraph>

      <Paragraph>
        Diante disso, as DCNT são um conjunto de patologias de múltiplas causas,
        de origem não infecciosa, com diversos fatores de risco e longos
        períodos de latência. Além de resultarem em incapacidades funcionais,
        são a principal causa do grande número de mortes prematuras e perda de
        qualidade de vida (FIGUEIREDO, 2021). A tabela a seguir oferece uma
        visão abrangente das principais DCNT no Brasil:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 1: Principais DCNT no Brasil"
      fonte="Fonte: (BRASIL, 2005; 2008)."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Tipo de DCNT
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Número de Óbitos
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Percentagem do Total de Óbitos
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Doenças Cardiovasculares</td>
          <td>243.233</td>
          <td>30,4%</td>
        </tr>
        <tr>
          <td>Neoplasias</td>
          <td>131.212</td>
          <td>16,4%</td>
        </tr>
        <tr>
          <td>Doenças Respiratórias</td>
          <td>48.060</td>
          <td>6,0%</td>
        </tr>
        <tr>
          <td>Diabetes</td>
          <td>42.425</td>
          <td>5,3%</td>
        </tr>
        <tr>
          <td>Outras DCNT (incluindo renais crônicas, autoimunes)</td>
          <td>117.188</td>
          <td>14,7%</td>
        </tr>
        <tr class="grey lighten-3 font-weight-bold text-uppercase">
          <td>Total</td>
          <td>800.118</td>
          <td>100%</td>
        </tr>
      </tbody>
    </Table>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem src="modulo_03/medica_dcnt-01.svg" />
      </v-col>
    </v-row>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>
        <p>
          Nesta aula, nós iremos disponibilizar informações que auxiliem líderes e suas equipes no enfrentamento dos índices crescentes de adoecimento mental associado ao trabalho, possibilitando, assim, ampliar o acolhimento e os encaminhamentos necessários ao cuidado biopsicossocial dos trabalhadores.
        </p>

        <p>
          Vamos lá?
        </p>
      </Paragraph>

      <Paragraph>
        <strong style="cursor: pointer" @click="dialog = true"
          ><u>Clique aqui</u></strong
        >
        para iniciar o vídeo.
      </Paragraph>
    </BoxIcon>

    <v-dialog v-model="dialog" max-width="800" @input="dialogInput">
      <v-responsive :aspect-ratio="16 / 9" class="pa-0 ma-0">
        <youtube
          ref="videoPlayer"
          video-id="sCraVqQqrwc"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Nesse contexto, os fatores de risco para o desenvolvimento das DCNT
        estão ligados, na grande maioria dos casos, às condições de vida do
        indivíduo, como por exemplo, o acesso a bens e serviços públicos,
        garantia de direitos, informação, emprego e renda, além de
        possibilidades de fazer escolhas favoráveis à saúde.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      De acordo com o relatório da Organização Mundial da Saúde (OMS), das 38
      milhões de vidas perdidas em 2012 por DCNT, 42% (16 milhões) eram
      prematuras e evitáveis.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Assim, existem duas categorias de fatores que contribuem para o
        desenvolvimento das principais DCNT: os fatores não modificáveis (sexo,
        idade e genética) e os modificáveis (elementos que podem ser alterados,
        controlados ou influenciados por escolhas individuais, intervenções
        médicas ou mudanças no estilo de vida). No quadro a seguir é possível
        perceber que os fatores de risco modificáveis são comuns nas DCNT:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 2 - Fatores de risco para Doenças Crônicas Não Transmissíveis"
      fonte="Fonte: SANTOS (2023)."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            FATORES DE RISCO MODIFICÁVEIS
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            FATORES DE RISCO NÃO MODIFICÁVEIS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tabagismo</td>
          <td>História familiar de doença arterial coronariana</td>
        </tr>
        <tr>
          <td>Gordura abdominal</td>
          <td>Homem com idade maior que 45 anos e mulher acima de 55 anos</td>
        </tr>
        <tr>
          <td>Dieta pobre em frutas e vegetais</td>
          <td>Hipercolesterolemia</td>
        </tr>
        <tr>
          <td>Sedentarismo</td>
          <td>Diabetes mellitus</td>
        </tr>
        <tr>
          <td>Estresse psicossocial</td>
          <td>Hipertensão Arterial Sistêmica</td>
        </tr>
        <tr>
          <td>Consumo excessivo de álcool</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>

    <TextBlock
      subTopico="1.1 O impacto negativo em uma empresa quando apresenta alta incidência de DCNT."
    >
      <Paragraph>
        As DCNT geram impacto considerável no ambiente de trabalho e na vida de
        uma pessoa, pois interferem na ergonomia e na produtividade. Além disso,
        a demanda física, a idade, a dor, a concentração e a memória são os
        principais preditores de necessidade de adequações no trabalho nesses
        indivíduos (HYEDA, 2017).
      </Paragraph>

      <Paragraph>
        Alguns estudos associam a obesidade à redução do desempenho funcional
        dos trabalhadores e influenciam na ergonomia, pois trazem implicações
        para o planejamento ergonômico dos mobiliários. Deve-se instituir ações
        de ergonomia não apenas para reduzir o risco, mas para melhorar a saúde
        e aumentar a capacidade funcional (HYEDA, 2017).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      As DCNT impactam negativamente na produtividade de uma organização, uma
      vez que geram faltas não programadas, elevando a taxa de absenteísmo, e
      aumentam as chances de presenteísmo, quando o colaborador não produz de
      maneira efetiva durante sua jornada de trabalho.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Nesse contexto, empresas com alta incidência de colaboradores com DCNT
        têm mais chances de perdas produtivas e financeiras, pois há uma alta
        taxa de absenteísmo por complicações das doenças e, consequentemente,
        rotatividade nos setores, aumentando a necessidade de mais ações de
        treinamento e adaptação dos colaboradores recém-admitidos.
      </Paragraph>

      <Paragraph>
        Assim, é importante conhecer o perfil dos funcionários de uma empresa e
        compreender os fatores que influenciam negativamente na produtividade
        das atividades laborais para que o gestor possa mapear ações
        direcionadas ao controle dos fatores de risco para DCNT. Além de ser uma
        ferramenta eficaz para reduzir o absenteísmo e melhorar o desempenho dos
        colaboradores, esta ação pode ajudar a empresa a traçar estratégias de
        prevenção e gerenciamento de doenças ocupacionais ou outras que possam
        estar afetando a saúde dos trabalhadores. Por meio dessa prática, é
        possível desenvolver programas de saúde e qualidade de vida, alinhados
        às necessidades específicas de cada indivíduo. Assim, a empresa pode
        contribuir para a melhoria da produtividade dos seus funcionários.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="1.2 Importância das ações preventivas focadas no controle dos fatores de risco das DCNT"
    >
      <v-row>
        <v-col cols="12" sm="5">
          <Imagem
            src="modulo_03/imagem1.jpg"
            legenda="Imagem 1: Importância da Promoção de Exercícios Laborais nas Empresas"
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="7">
          <Paragraph>
            Com o objetivo de reduzir o absenteísmo, as empresas devem focar não
            somente em ações voltadas à prevenção, mas também em atividades
            educativas e de conscientização relacionadas ao controle dos fatores
            de risco para o desenvolvimento de DCNT.
          </Paragraph>

          <Paragraph>
            Um exemplo de atividade educativa é o estímulo à atividade física,
            pois esta prática, além de diminuir os riscos para doença
            cardiovascular, favorece os aspectos ergonômicos, pois contribui
            para a diminuição do risco de surgimento de incapacidades e injúrias
            osteomusculares (MACIEL, 2006). Uma prática que também deve ser
            estimulada pela empresa é a realização contínua de consultas e
            exames periódicos, identificando em tempo oportuno possíveis
            fragilidades na saúde do trabalhador e implementando medidas
            efetivas para evitar a progressão de doenças ou distúrbios presentes
            na organização.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      É possível desenvolver programas de saúde e bem-estar personalizados,
      alinhados às necessidades específicas de cada indivíduo. Esses programas
      podem englobar ações de prevenção de doenças, promoção de hábitos
      saudáveis, gestão do estresse e cuidados com a alimentação e a atividade
      física. Assim, a empresa pode contribuir para a melhoria da qualidade de
      vida e da produtividade dos seus funcionários.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Até aqui, aprendemos sobre as DCNT e sua implicação na produtividade das
        empresas. No próximo tópico, vamos conhecer sobre o desenvolvimento dos
        programas de qualidade de vida no trabalho e de gerenciamento da saúde
        da população.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Até aqui, aprendemos sobre as DCNT e sua implicação na produtividade das
      empresas. No próximo tópico, vamos conhecer sobre o desenvolvimento dos
      programas de qualidade de vida no trabalho e de gerenciamento da saúde da
      população.
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-03"
      nextName="Tópico 02"
      nextLink="modulo-03/topico-02"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import Paragraph from "@/components/Paragraph.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import NavFooter from "@/components/NavFooter.vue";
import Table from "@/components/Table.vue";
import Imagem from "@/components/Imagem.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Table,
    Imagem,
  },
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    dialogInput(value) {
      if (!value) {
        // Acessa o player do vídeo através da referência ref
        const player = this.$refs.videoPlayer.player;

        if (player && typeof player.pauseVideo === "function") {
          player.pauseVideo();
        }
      }
    },
  },

};
</script>

<style scoped></style>
