<template>
  <AulaTemplate
    :titulo="$store.state.modulos[3].titulo"
    :numero="$store.state.modulos[3].numero"
    titleSize="4"
  >
    <TextBlock
      topico="Tópico 01 - Principais programas e eventos ligados à Saúde e Segurança no Trabalho nas empresas "
    >
      <Paragraph>
        Neste tópico, aprenderemos sobre os direitos dos trabalhadores, bem como
        as responsabilidades das instituições e dos empregadores em relação à
        saúde e segurança dos funcionários de empresas sujeitas ao regime da
        Consolidação das Leis do Trabalho (CLT) e segurados pela Previdência
        Social (PS).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>Este vídeo apresenta um conjunto de informações sobre direitos dos trabalhadores e responsabilidades institucionais e empregadores em relação à saúde e segurança de empregados de empresas sob regime da Consolidação das Leis do Trabalho e segurados pela Previdência Social. Vamos lá?</Paragraph>

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
          video-id="O2lN8aUr9-E"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        A importância da saúde ocupacional é inegável, pois ela assegura o
        bem-estar dos trabalhadores e tem um impacto positivo na produtividade,
        na qualidade dos produtos, na motivação e na satisfação (BRASIL,1996).
        Segundo a Organização Mundial da Saúde (OMS),
        <i
          >"A saúde do trabalhador e um ambiente de trabalho saudável são
          valiosos bens individuais, comunitários e dos países”</i
        >
        (OPAS,2015).
      </Paragraph>

      <Paragraph>
        Todas as empresas, independentemente de serem privadas ou públicas, têm
        a obrigação legal de adotar medidas de segurança que priorizem a saúde e
        as condições de trabalho dos seus funcionários. Isso inclui orientar os
        colaboradores sobre a importância do uso de equipamentos de proteção
        individual (EPI), explicar quando e como utilizá-los, fornecer reposição
        gratuita e regular, bem como implementar programas de segurança no
        trabalho (BRASIL,1996).
      </Paragraph>

      <Paragraph>
        Para auxiliar as empresas, na CLT existem alguns programas de segurança
        do trabalho que propõem diferentes metodologias de abordagem, mas todos
        têm em comum a priorização da saúde dos trabalhadores, independentemente
        da tarefa a ser desempenhada. A seguir, vamos conhecer alguns desses
        programas.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1. 1 Programa de Gerenciamento de Riscos - PGR">
      <Paragraph>
        O Gerenciamento de Riscos Ocupacionais (GRO), abrange um conjunto de
        ações coordenadas de prevenção regulamentadas pelo Ministério do
        Trabalho e da Previdência. Seu propósito principal é assegurar que os
        trabalhadores desfrutem de ambientes de trabalho seguros e saudáveis. É
        importante destacar que o GRO deve se manifestar por meio do Programa de
        Gerenciamento de Riscos (PGR), que se tornou obrigatório a partir de 3
        de janeiro de 2022, com a entrada em vigor da nova Norma Regulamentadora
        nº 01, conhecida como Gerenciamento de Riscos Ocupacionais (BRASIL,
        2020).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      O PGR é a materialização do processo de Gerenciamento de Riscos
      Ocupacionais (por meio de documentos físicos ou por sistema eletrônico),
      visando à melhoria contínua das condições da exposição dos trabalhadores
      por meio de ações multidisciplinares e sistematizadas (BRASIL,2020).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        O PGR deve ser composto, no mínimo, por dois documentos:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Inventário de Riscos Ocupacionais</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Abrange as etapas de Identificação de Perigos e Avaliação de Riscos,
          com o objetivo de determinar a necessidade de medidas de prevenção.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Plano de Ação</v-expansion-panel-header>
        <v-expansion-panel-content>
          São definidas as ações de prevenção a serem implementadas, aprimoradas
          ou mantidas, visando a eliminação, redução ou controle dos riscos
          ocupacionais (BRASIL, 2020).
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Todos os empregadores que mantenham trabalhadores sob o regime da CLT
        (Consolidação das Leis do Trabalho) devem providenciar a elaboração do
        Programa de Gerenciamento de Riscos (PGR), de acordo com a norma
        brasileira (BRASIL, 2020). No entanto, a NR1 (Norma Regulamentadora nº
        01) estabelece algumas exceções para as quais a elaboração do PGR não é
        obrigatória.
      </Paragraph>
    </TextBlock>

    <v-row>
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >

      <v-col cols="12" sm="12">
        <FlipCard>
          <template #front>Não precisam elaborar o PGR</template>

          <template #back>
            <ul>
              <li>
                1.8.1 O Microempreendedor Individual - MEI está dispensado de elaborar o PGR.
              </li>
              <li>
                1.8.4 As microempresas e empresas de pequeno porte, graus de risco 1 e 2, que no levantamento preliminar de perigos não identificarem exposições ocupacionais a agentes físicos, químicos e biológicos, em conformidade com a NR9, e declararem as informações digitais na forma do subitem 1.6.1, ficam dispensadas da elaboração do PGR (BRASIL,2020).
              </li>
            </ul>

            <p>- Prevenção de acidentes e doenças.</p>
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        O PGR precisa acompanhar de forma contínua as atividades da empresa,
        assegurando a execução das medidas estipuladas no plano de ação. Além
        disso, deve estar atento a eventuais mudanças no ambiente de trabalho
        que possam afetar as características dos riscos ocupacionais (BRASIL,
        2020).
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 1: O PGR: Acompanhando de perto a segurança no trabalho."
          fonte="Fonte: Freepick.com"
          src="modulo_04/imagem1.jpg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A avaliação de riscos, uma das etapas essenciais desse programa, deve
        ser revisada no máximo a cada dois anos, salvo no caso de organizações
        detentoras de certificações em sistemas de gestão de SST, onde esse
        prazo pode ser estendido para até três anos (BRASIL, 2020). A revisão
        deve ocorrer quando se deparar com as situações descritas a seguir:
      </Paragraph>
    </TextBlock>

    <h1>RECURSO BG AZUL LINHAS</h1>

    <TextBlock>
      <Paragraph>
        A organização tem a flexibilidade de escolher se deseja manter o
        Relatório do PGR em meio físico ou digital. É fundamental que o
        empregador assegure um acesso amplo e irrestrito a esses documentos para
        fins de fiscalização, bem como para os trabalhadores e seus
        representantes, conforme estabelecido na NR-01 (BRASIL, 2020).
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="1.2 Programa de Controle Médico de Saúde Ocupacional (PCMSO)"
    >
      <Paragraph>
        O
        <strong
          >Programa de Controle Médico de Saúde Ocupacional (PCMSO)</strong
        >
        tem como principal objetivo promover e preservar a saúde dos
        trabalhadores, garantindo segurança tanto para os colaboradores quanto
        para a empresa (BRASIL, 1996). Para alcançar essa meta, o PCMSO é
        cuidadosamente planejado e implementado com base nos riscos
        identificados, especialmente aqueles que foram apontados na avaliação do
        Programa de Gerenciamento de Riscos (PGR).
      </Paragraph>

      <Paragraph>
        Após uma análise abrangente do ambiente de trabalho, são definidos os
        procedimentos iniciais e conduzidos os exames clínicos e complementares
        dos trabalhadores (BRASIL, 1996). Isso assegura que o programa seja
        adaptado às necessidades específicas da empresa e de seus colaboradores,
        proporcionando uma abordagem personalizada para a promoção da saúde
        ocupacional e a prevenção de riscos à saúde.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 2: PCMSO: Garantindo a saúde dos colaboradores através de exames médicos e laboratoriais."
          fonte="Fonte: Freepick.com"
          src="modulo_04/imagem2.jpg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        O PCMSO deve incluir a realização obrigatória dos exames médicos e
        laboratoriais com avaliação clínica, abrangendo também exames
        complementares, realizados de acordo com os termos específicos da Norma
        Regulamentadora n° 07 (Gerenciamento de Riscos Ocupacionais) (BRASIL,
        1996).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Acesse o link e conheça a Norma Regulamentadora n° 07 (Gerenciamento de
      Riscos Ocupacionais) :
      https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-7-nr-7
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Essa norma desempenha um papel fundamental ao estabelecer diretrizes
        específicas que as empresas devem seguir para preservar a saúde e o
        bem-estar de seus colaboradores, especialmente no que diz respeito aos
        possíveis problemas relacionados às atividades laborais. Seu principal
        objetivo é fornecer orientações tanto para empregadores quanto para
        empregados, visando à prevenção de doenças ocupacionais e ao
        desenvolvimento de métodos para evitar sua ocorrência (BRASIL, 1996).
      </Paragraph>

      <Paragraph>
        De acordo com o que está previsto na NR-7, as organizações são
        responsáveis por elaborar e implementar o Programa de Controle Médico de
        Saúde Ocupacional (PCMSO). Esse programa estabelece critérios essenciais
        para a preservação da saúde dos funcionários. Como parte desse processo,
        são definidos cinco exames que os trabalhadores devem obrigatoriamente
        realizar (BRASIL, 1996).
      </Paragraph>

      <Paragraph>
        Esses exames compreendem uma avaliação clínica abrangente, que inclui a
        avaliação tanto da parte física quanto da mental/psicológica, além de
        exames complementares, cuja natureza varia de acordo com o que é
        especificado na NR 07. São eles (BRASIL,1996):
      </Paragraph>

      <h1>RECURSO BG AZUL LINHAS</h1>
      <Paragraph>
        <ul>
          <li>Admissional;</li>
          <li>Periódico;</li>
          <li>De retorno ao trabalho;</li>
          <li>De mudança de cargo;</li>
          <li>Demissional.</li>
        </ul>
      </Paragraph>
    </TextBlock>

    <TextBlock>
      <Paragraph>
        Em todos os exames realizados, o médico responsável deverá emitir um
        Atestado de Saúde Ocupacional (ASO) em duas vias. Esse documento precisa
        conter as seguintes informações (BRASIL,1996):
      </Paragraph>

      <h1>RECURSO BG AZUL LINHAS</h1>
      <Paragraph>
        <ul>
          <li>Nome completo do funcionário;</li>
          <li>Número do RG e função exercida;</li>
          <li>Riscos ocupacionais ou a ausência deles;</li>
          <li>Procedimentos médicos pelos quais o funcionário passou;</li>
          <li>Nome do médico coordenador e seu CRM;</li>
          <li>Definição de “apto” ou “inapto” para a função que vai exercer, exerce ou exerceu;</li>
          <li>Nome e contato do médico responsável pelo exame;</li>
          <li>Data, assinatura e carimbo do médico responsável, com o CRM.</li>
        </ul>
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      A responsabilidade pela elaboração do PCMSO é da empresa e quem elabora é o médico do trabalho, que é um membro do setor de saúde ocupacional da empresa (BRASIL,1996).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        É fundamental que as empresas compreendam que o PCMSO é um requisito obrigatório, independentemente do tamanho da organização. Este programa, de caráter preventivo, requer um planejamento que inclua ações destinadas a garantir a saúde dos colaboradores ao longo do ano. Todas essas informações devem ser documentadas em um relatório anual, que deve conter detalhes sobre a quantidade e os tipos de exames obrigatórios e complementares que os funcionários deverão realizar ao longo desse período, bem como as avaliações clínicas (BRASIL, 1996).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Até este ponto, abordamos dois programas de segurança no trabalho e é importante entender as diferenças entre eles. Enquanto o PCMSO concentra-se na saúde física e mental dos colaboradores, o PGR tem um escopo mais amplo e visa garantir a segurança do ambiente de trabalho como um todo, englobando equipamentos, processos, estruturas e outros fatores que possam representar riscos para os trabalhadores. No próximo tópico, abordaremos outros programas. Até lá!
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-04"
      nextName="Tópico 02"
      nextLink="modulo-04/topico-02"
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
import Imagem from "@/components/Imagem.vue";
import Accordion from "@/components/Accordion.vue";
import FlipCard from "@/components/FlipCard.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Imagem,
    Accordion,
    FlipCard
  },
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    dialogInput(value) {
      this.$store.state.progresso_modulo_01.items.video_01 = true;
      this.$store.commit("SALVAR_PROGRESSO");

      if (!value) {
        // Acessa o player do vídeo através da referência ref
        const player = this.$refs.videoPlayer.player;

        if (player && typeof player.pauseVideo === "function") {
          player.pauseVideo();
        }
      }
    },
  },

  created() {
    this.$store.state.progresso_modulo_01.items.topico_01 = true;
    this.$store.commit("SALVAR_PROGRESSO");
  },
};
</script>

<style scoped></style>
