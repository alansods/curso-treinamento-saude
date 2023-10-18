<template>
  <AulaTemplate
    :titulo="$store.state.modulos[1].titulo"
    :numero="$store.state.modulos[1].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 01 - Ergonomia">
      <Paragraph>
        Neste tópico, vamos propor a construção de uma base sólida em relação à ergonomia, juntamente com a análise dos impactos financeiros para as empresas, bem como as consequências tanto diretas quanto indiretas para os funcionários e empregadores.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>
        falta texto
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
        A ergonomia possibilita que os colaboradores aproveitem ao máximo o ambiente e os recursos disponíveis no local de trabalho, levando em consideração as características individuais dos trabalhadores e as condições laborais específicas da empresa. Esse enfoque personalizado é fundamental, uma vez que cada organização possui suas particularidades. Como resultado, os colaboradores enfrentam menos riscos no ambiente de trabalho e desfrutam de maior conforto durante a realização de suas tarefas. Isso contribui significativamente para a redução das chances de desenvolvimento de doenças ocupacionais, que são distúrbios de natureza física ou mental relacionados ao trabalho.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A etimologia da palavra "ergonomia" deriva da junção de duas raízes gregas: "ergon" (trabalho) e "nomos" (normas). Em sua essência, a ergonomia é uma disciplina científica que busca compreender a interação entre indivíduos e máquinas, equipamentos, bem como as condições de trabalho em geral (ABERGO, 2023).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para efetuar o planejamento e a análise de tarefas, postos de trabalho, produtos, ambientes e sistemas, com o objetivo de adaptá-los às necessidades, capacidades e restrições das pessoas, é essencial realizar uma avaliação completa do trabalho, considerando diversos aspectos da ergonomia. Segundo Abergo (2023), cada um desses domínios é voltado para proporcionar condições apropriadas aos colaboradores de acordo com as particularidades de suas funções, de acordo com o que podemos observar a seguir:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia Física</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Garante a postura no ambiente de trabalho.
            </li>
            <li>
              Reduz movimentos repetitivos.
            </li>
            <li>
              Adequa o ambiente às necessidades individuais dos colaboradores.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia Organizacional</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Estimula o trabalho em grupos.
            </li>
            <li>
              Melhora os processos comunicativos.
            </li>
            <li>
              Implementa projetos participativos.
            </li>
            <li>
              Atenta ao tempo de trabalho.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia Cognitiva</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Impacta fatores como confiabilidade humana.
            </li>
            <li>
              Melhora as tomadas de decisão.
            </li>
            <li>
              Facilita interações entre pessoas e máquinas.
            </li>
            <li>
              Reduz estresse profissional e carga mental.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia de Correção</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Adequa o ambiente às necessidades dos colaboradores.
            </li>
            <li>
              Soluciona desconfortos e dores no ambiente de trabalho.
            </li>
            <li>
              Garante funcionalidade no local de trabalho.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia de Conscientização</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Enfoca o engajamento dos colaboradores com a Ergonomia.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ergonomia Participativa</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>
              Criada para conscientizar e fiscalizar a aplicação da Ergonomia.
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>


    </Accordion>

    <TextBlock>
      <Paragraph>
        Esses princípios da ergonomia são fundamentais para a promoção de ambientes de trabalho mais seguros, saudáveis e produtivos, garantindo o bem-estar tanto dos colaboradores quanto das organizações.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="Norma Regulamentadora nº 17 (NR17)">
      <Paragraph>
        A Norma Regulamentadora nº 17 (NR 17) representa um requisito legal essencial que visa garantir a qualidade de vida, saúde e segurança dos colaboradores. A não conformidade com suas diretrizes pode impactar diretamente o bem-estar dos trabalhadores. A NR17 desempenha um papel crucial no apoio tanto aos empregados quanto aos empregadores, uma vez que proporciona um ambiente de trabalho mais seguro, abordando tanto aspectos físicos quanto psicológicos. Isso, por sua vez, influencia positivamente a produtividade da empresa, um fator de grande relevância para os empregadores.
      </Paragraph>

      <Paragraph>
        Em termos gerais, a NR17 busca estabelecer padrões que permitam a adaptação das condições de trabalho às características psicofisiológicas dos colaboradores, com o intuito de garantir o máximo de conforto, segurança e eficiência no desempenho, conforme explicitado no parágrafo inicial da norma. É importante ressaltar que o descumprimento da NR17 pode acarretar em problemas tanto para os empregados quanto para os empregadores (BRASIL, 2020).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      As organizações que optarem por não adotar essa ferramenta receberão notificações para que efetuem as devidas alterações. Um período de 60 (sessenta) dias é concedido para a realização das correções necessárias. No entanto, a falta de ação resultará em multas para a empresa, podendo até mesmo levar a processos judiciais relacionados ao ocorrido. Quanto aos colaboradores, aqueles que não estiverem em conformidade com as normas estabelecidas pela NR17 enfrentam o risco de serem demitidos por justa causa (BRASIL, 2020).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        A NR17 estipula que os próprios colaboradores desempenhem a tarefa de realizar a Análise Ergonômica no Trabalho (AET). Com base nos dados coletados e nas informações obtidas, a empresa receberá um laudo que servirá como subsídio para a eliminação ou redução dos riscos no ambiente de trabalho (BRASIL, 2020).
      </Paragraph>

      <Paragraph>
        Uma vez implementadas todas as medidas e registradas nas próprias análises ergonômicas, a empresa estará em posição de compreender as interações entre acidentes ocupacionais e o ambiente em que ocorrem. Esse monitoramento deve ser conduzido de forma regular, visando a minimização das taxas de doenças ocupacionais e a garantia de um ambiente seguro para os funcionários (BRASIL, 2020).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Chegamos ao final deste tópico. No próximo tópico, vamos conhecer sobre as Lesões por Esforços Repetitivos (LER) e os Distúrbios Osteomusculares Relacionados ao Trabalho (DORT).
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-02"
      nextName="Tópico 02"
      nextLink="modulo-02/topico-02"
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
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Accordion
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
