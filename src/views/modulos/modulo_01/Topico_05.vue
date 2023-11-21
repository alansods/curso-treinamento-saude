<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
    titleSize="3"
  >
    <TextBlock
      topico="Tópico 05 - A Importância dos Investimentos de Saúde Mental nas Empresas"
    >
      <Paragraph>
        Você sabia que a saúde mental dos colaboradores tem um impacto direto na
        produtividade das empresas e na economia como um todo? Quando os
        colaboradores enfrentam transtornos mentais, eles têm dificuldade em
        manter a rotina e executar as tarefas, tanto na vida pessoal quanto no
        trabalho.
      </Paragraph>

      <Paragraph>
        Consequentemente, quando alguém precisa se afastar ou mesmo sair da
        empresa por motivos de saúde mental, uma reação em cadeia se inicia. Um
        colaborador que deixa de trabalhar precisa ser substituído ou o time é
        sobrecarregado. Por essa razão, ter estratégias, programas e protocolos
        para lidar com a saúde mental dos colaboradores não é luxo, mas uma
        necessidade estratégica. Afinal, o bem-estar das pessoas é um recurso
        tão precioso quanto a tecnologia, o patrimônio ou os métodos de gestão.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="3">
      <Paragraph>
        Nesta vídeoaula, nós iremos discorrer sobre a importância dos
        investimentos de saúde mental nas empresas.
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
          video-id="mLnhP8sRht4"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <BoxIcon tipo="voce_sabia">
      Você sabia que os investimentos em saúde mental podem ter um impacto
      significativo na economia mundial? Estimativas mostram que se tratamentos
      para depressão e ansiedade forem oferecidos de forma ampla à população, a
      economia global poderia se beneficiar com um valor anual de até US$925
      bilhões. Isso significa que um investimento modesto de apenas 5% para
      melhorar a capacidade de trabalho das pessoas com depressão pode gerar
      retornos surpreendentes.
    </BoxIcon>

    <Subtopico
      titulo="Como investir em saúde mental nas Empresas:"
      style="margin-bottom: 0 !important"
    />

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Apoio aos colaboradores</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          É preciso manter uma relação de troca eficiente.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Benefícios voltados à saúde mental</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Contratar um profissional para conversar com os colaboradores
          mensalmente.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Ofereça exercícios físicos</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Existem educadores físicos que oferecem serviços como exercícios
          laborais e atividades recreativas.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Treine as lideranças</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Alguns erros comuns dos gestores podem prejudicar a saúde mental dos
          trabalhadores.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Feedback eficiente</v-expansion-panel-header>
        <v-expansion-panel-content>
          Se usado da forma correta, é uma ferramenta essencial para impulsionar
          o desenvolvimento dos colaboradores.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Melhora do clima organizacional</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Quando os colaboradores estão com a saúde mental em dia também há
          melhora do ambiente de trabalho.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <v-row>
        <v-col cols="12" sm="4">
          <Imagem
            src="modulo_01/imagem7.jpg"
            maxHeight="300"
            legenda="Imagem 7: É importante priorizar o bem-estar dos colaboradores"
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="8">
          <Paragraph>
            Ambientes com altos níveis de estresse são propícios ao surgimento
            de ansiedade, depressão e outros transtornos, que afetam também a
            saúde física dos indivíduos. Por isso, é importante que as empresas
            ofereçam um ambiente acolhedor e produtivo, no qual a conversa seja
            incentivada em todos os níveis hierárquicos, especialmente na
            liderança.
          </Paragraph>

          <Paragraph>
            Desta forma, cuidar da saúde mental dos colaboradores não deve ser
            apenas uma frase de efeito, mas uma prática cotidiana. Cuidar do
            bem-estar emocional é um investimento para qualquer negócio que
            almeja ter sucesso hoje e no futuro.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <BoxIcon tipo="recapitulando"
      >Chegamos ao final do módulo 1. Durante esse percurso foram
      disponibilizadas informações sobre as principais causas de afastamento e
      os custos diretos e indiretos relacionados a transtornos mentais, modelos
      explicativos para transtornos mentais no trabalho, transtornos mentais
      mais comuns relacionados ao trabalho, assédio moral e sexual, políticas de
      saúde mental no trabalho e a importância de investimentos em saúde mental
      nas empresas com o objetivo de auxiliar no enfrentamento dos índices
      crescentes de adoecimento mental associado ao trabalho. Continue se
      dedicando e aproveitando ao máximo o curso!
    </BoxIcon>

    <NavFooter
      prevName="Tópico 04"
      prevLink="modulo-01/topico-04"
      nextName="Módulo 02"
      nextLink="modulo-02/topico-01"
      :lastTopico="true"
      referenciasLink="modulo-01/referencias"
      atividadeLink="modulo-01/atividade"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import Accordion from "@/components/Accordion.vue";
import NavFooter from "@/components/NavFooter.vue";
import Subtopico from "@/components/Subtopico.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    Imagem,
    Accordion,
    NavFooter,
    Subtopico,
    Paragraph,
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

  watch: {},
};
</script>

<style scoped></style>
