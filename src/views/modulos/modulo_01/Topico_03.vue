<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
  >
    <TextBlock topico="Tópico 03 - Assédio no Ambiente de Trabalho">
      <Paragraph>
        Neste tópico, trataremos de um assunto de extrema importância: o assédio
        moral e sexual no ambiente de trabalho. Essas situações constrangedoras
        são mais comuns do que se imagina e, na maioria das vezes, são
        praticadas pelos chefes diretos das vítimas, por pessoas que possuem
        cargos mais altos dentro da hierarquia das empresas ou até mesmo por
        colegas de trabalho.
      </Paragraph>

      <Paragraph>
        Diante do exposto, discutir a violência no local de trabalho necessita
        compreender todo o contexto e cenário em que esse ato ocorre. Ao
        explorar esse tema, buscamos identificar as causas e desenvolver
        estratégias de prevenção e combate.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>
        Nessa vídeoaula nós iremos explicar como assédio moral e sexual no
        ambiente de trabalho pode desenvolver adoecimento mental do trabalhador.
        Discutir a violência no local de trabalho necessita compreender todo o
        contexto e cenário que se ocorre
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
          video-id="MwTTEtIbJ-U"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock subTopico="3.1 Assédio Moral">
      <v-row>
        <v-col cols="12" sm="4">
          <Imagem
            src="modulo_01/imagem4.png"
            legenda="Imagem 4: Impactos negativos causados pelo assédio moral."
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="8">
          <Paragraph>
            Assédio moral é a exposição de pessoas a situações humilhantes e
            constrangedoras no ambiente de trabalho, de forma repetitiva e
            prolongada, durante o exercício de suas atividades. É uma conduta
            que traz danos à dignidade e à integridade do indivíduo, colocando a
            saúde em risco e prejudicando o ambiente de trabalho.
          </Paragraph>

          <Paragraph>
            É também conceituado como toda e qualquer conduta abusiva,
            manifestando-se por comportamentos, palavras, atos, gestos ou
            escritos que possam trazer danos à personalidade, à dignidade ou à
            integridade física e psíquica de uma pessoa, pondo em perigo o seu
            emprego ou degradando o ambiente de trabalho.(DE ALMEIDA, 2016;
            CODO, 2002).
          </Paragraph>

          <Paragraph>
            É uma forma de violência que tem como objetivo desestabilizar
            emocional e profissionalmente o indivíduo, podendo ocorrer por meio
            de ações diretas (acusações, insultos, gritos, humilhações públicas)
            e indiretas (propagação de boatos, isolamento, recusa na
            comunicação, fofocas e exclusão social).
          </Paragraph>
        </v-col>
      </v-row>

      <Paragraph>
        A humilhação repetitiva e de longa duração interfere na vida do
        profissional, comprometendo a identidade, a dignidade e as relações
        afetivas e sociais. Isso resulta em danos à saúde física e mental, que
        podem evoluir para a incapacidade de trabalhar, para o desemprego ou
        mesmo para a morte.
      </Paragraph>

      <Paragraph>
        Você sabia que existem leis que abordam especificamente o assédio moral
        no ambiente de trabalho? A seguir, vamos conhecer a legislação
        pertinente sobre esse tema, que visa proteger os trabalhadores contra
        essa forma de violência.
      </Paragraph>
    </TextBlock>

    <Subtopico
      titulo="Legislação pertinente sobre assédio moral:"
      style="margin-bottom: 0 !important"
    />

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Constituição da República</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          A República Federativa do Brasil tem como fundamento: a dignidade da
          pessoa humana e o valor social do trabalho (art. 1º, III e IV). É
          assegurado o direito à saúde, ao trabalho e à honra (art. 5º, X, e
          6º).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Código Civil</v-expansion-panel-header>
        <v-expansion-panel-content>
          Aquele que, por ação ou omissão voluntária, negligência ou
          imprudência, violar direito e causar dano a outrem, ainda que
          exclusivamente moral, comete ato ilícito (art. 186).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Lei 8.112/1990</v-expansion-panel-header>
        <v-expansion-panel-content>
          São deveres do servidor público, entre outros, manter conduta
          compatível com a moralidade administrativa, tratar as pessoas com
          urbanidade e ser leal às instituições a que servir (art. 116, inciso.
          II, IX e XI, da Lei nº 8.112/1990).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Portaria MTP 4.219, de 20 de dezembro de
          2022</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          A empresa com mais de 20 empregados precisa construir mecanismos de
          prevenção do assédio.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Além da legislação, vamos identificar como se classificam os diferentes
        tipos de comportamentos abusivos presentes nessa prática.
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>INTERPESSOAL</v-expansion-panel-header>
        <v-expansion-panel-content>
          Ocorre de maneira individual, direta e pessoal, com a finalidade de
          prejudicar ou eliminar o profissional na relação com a equipe.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>INSTITUCIONAL</v-expansion-panel-header>
        <v-expansion-panel-content>
          Ocorre quando a própria organização incentiva ou tolera atos de
          assédio.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>VERTICAL</v-expansion-panel-header>
        <v-expansion-panel-content>
          Ocorre entre pessoas de nível hierárquico diferentes, chefes e
          subordinados
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>HORIZONTAL</v-expansion-panel-header>
        <v-expansion-panel-content>
          Ocorre entre pessoas que pertencem ao mesmo nível de hierarquia. O
          assediador promove liderança negativa perante ao colega.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>MISTO</v-expansion-panel-header>
        <v-expansion-panel-content>
          Consiste na acumulação do assédio moral vertical e horizontal. A
          pessoa é assediada por superiores hierárquicos e também por colegas de
          trabalho.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Você já parou para refletir sobre as atitudes que caracterizam o assédio
        moral no ambiente de trabalho? É fundamental estarmos cientes dessas
        condutas que são prejudiciais e inaceitáveis. No entanto, tão importante
        quanto identificar o assédio moral é compreender o que não se enquadra
        nessa categoria. Vejamos a seguir:
      </Paragraph>
    </TextBlock>

    <FlipCardRandom />

    <TextBlock>
      <Paragraph>
        O assédio moral no ambiente de trabalho traz consigo uma série de
        consequências, que afetam tanto o indivíduo que sofre quanto a empresa
        como um todo. Vejamos a seguir:
      </Paragraph>
    </TextBlock>

    <v-card class="rounded-lg elevation-0" style="border: solid 1px #ddd">
      <v-card-title class="text-center justify-center py-4 primary white--text">
        <h1
          class="font-weight-bold text-uppercase text-h6 basil--text"
          style="word-break: break-word"
        >
          Consequências do assédio moral
        </h1>
      </v-card-title>

      <v-tabs
        v-model="itemsConsequencias.tab"
        background-color="transparent"
        color="primary"
        grow
      >
        <v-tab> Para o indivíduo </v-tab>

        <v-tab> Para a empresa </v-tab>
      </v-tabs>

      <v-tabs-items v-model="itemsConsequencias.tab">
        <v-tab-item>
          <div class="pa-5">
            <v-row dense>
              <v-col
                cols="12"
                sm="4"
                v-for="(item, index) in itemsConsequencias.tab1.items"
                :key="index"
              >
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="success">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="text-body-1">
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-tab-item>

        <v-tab-item>
          <v-card class="pa-5">
            <v-row dense>
              <v-col
                cols="12"
                sm="4"
                v-for="(item, index) in itemsConsequencias.tab2.items"
                :key="index"
              >
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="success">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    {{ item }}
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <TextBlock subTopico="3.2 Assédio Sexual">
      <Paragraph>
        Assédio sexual é toda conduta indesejada de natureza sexual que
        restrinja a liberdade sexual da vítima.
      </Paragraph>

      <Paragraph>
        A reiteração da conduta não é imprescindível para a caracterização do
        assédio sexual. Um único ato pode ser suficientemente grave para atingir
        a honra, a dignidade e a moral da vítima.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Fique atento, pois existe uma distição entre o assédio moral e o assédio
      sexual. O assédio moral atenta contra a dignidade psíquica da pessoa, já o
      assédio sexual atenta contra a liberdade sexual da pessoa. No entanto, não
      é raro que as vítimas sofram ambos os tipos de assédio: elas podem ser
      assediadas sexualmente e, como consequência da rejeição das investidas do
      agressor, também serem assediadas moralmente. Além disso, diferentemente
      do assédio moral, que exige a reiteração da conduta, no caso do assédio
      sexual, um único ato pode ser suficiente para configurá-lo.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Outro ponto importante a ser destacado é a classificação do assédio
        sexual, que nos permite compreender as diferentes formas em que esse
        comportamento abusivo pode se manifestar. Neste texto, vamos explorar
        duas categorias específicas: o assédio vertical e o assédio horizontal.
        Essas classificações nos ajudam a entender melhor as dinâmicas e os
        impactos dessas condutas no ambiente de trabalho. Vejamos a seguir:
      </Paragraph>
    </TextBlock>

    <v-card
      class="mb-4 rounded-lg rounded-lg elevation-0"
      style="border: solid 1px #ddd"
    >
      <v-card-title class="text-center justify-center py-4 primary white--text">
        <h1
          class="font-weight-bold text-uppercase text-h6 basil--text"
          style="word-break: break-word"
        >
          Classificação de assédio sexual
        </h1>
      </v-card-title>

      <v-tabs
        v-model="itemsAssedioSexual.tab"
        background-color="transparent"
        color="primary"
        grow
      >
        <v-tab> Vertical </v-tab>

        <v-tab> Horizontal </v-tab>
      </v-tabs>

      <v-tabs-items v-model="itemsAssedioSexual.tab">
        <v-tab-item>
          <div class="pa-5">
            Também conhecido como assédio por chantagem, ocorre quando a
            aceitação ou a rejeição de uma investida sexual é determinante para
            que o assediador tome uma decisão favorável ou prejudicial para a
            situação de trabalho da pessoa assediada.
          </div>
        </v-tab-item>

        <v-tab-item>
          <v-card class="pa-5">
            Também conhecido como assédio ambiental. Neste caso, o poder
            hierárquico é irrelevante, podendo o assédio ocorrer entre colegas
            de trabalho, na mesma posição hierárquica na instituição. Por isso,
            é também chamado de horizontal. Ele abrange todas as condutas que
            resultam num ambiente de trabalho hostil, intimidativo ou
            humilhante. Essas condutas podem não necessariamente se dirigir a
            uma pessoa ou a um grupo de pessoas em particular, podendo ocorrer
            de forma generalizada.
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <BoxIcon tipo="voce_sabia">
      <Paragraph
        >Você sabia que o Código Penal art. 216-A dispõe sobre a criminalização
        da prática de assédio sexual no ambiente de trabalho?
        <strong>A pena prevista é de detenção de um a dois anos.</strong>
      </Paragraph>
    </BoxIcon>

    <v-row align="center">
      <v-col cols="10">
        <TextBlock>
          <Paragraph>
            É essencial compreendermos as implicações do assédio sexual para a
            vítima, para o agressor e para a empresa, a fim de combater esse
            crime no ambiente de trabalho, garantindo um ambiente saudável,
            respeitoso e livre de abusos. Vejamos a seguir as possíveis
            consequências para esse ato:
          </Paragraph>
        </TextBlock>
      </v-col>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-col cols="auto" @click="dialogTeste = true">
        <div class="teste-container elevation-1">
          <v-icon size="70" color="white">mdi-help-circle-outline</v-icon>
        </div>
      </v-col>-->
    </v-row>

    <!-- <v-dialog v-model="dialogTeste" width="600">
      <v-card class="rounded-lg">
        <div class="px-6 py-5 voce_sabia white--text">
          <v-row align="center">
            <v-col cols="2">
            <v-icon size="70" color="white">mdi-help-circle-outline</v-icon>
          </v-col>
          <v-col cols="10">
            <Paragraph class="font-weight-bold text-h5 mb-5">Você Sabia?</Paragraph>

            <Paragraph>
              Você sabia que o Código Penal art. 216-A dispõe sobre a
              criminalização da prática de assédio sexual no ambiente de
              trabalho?
              <strong>A pena prevista é de detenção de um a dois anos.</strong>
            </Paragraph>
          </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog> -->

    <v-row justify="space-between">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >
      <v-col cols="12" sm="auto">
        <FlipCardImg bgImg="modulo_01/vitima.svg">
          <template #front>Para a vítima</template>

          <template #back>
            Pode gerar graves sequelas físicas e psicológicas, em decorrência
            das violações à intimidade, à liberdade sexual e à dignidade,
            podendo se manifestar como tensão, ansiedade, cansaço, depressão,
            diminuição da produtividade, significativa redução da autoestima,
            afastamento por doenças, entre outras formas.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="12" sm="auto">
        <FlipCardImg bgImg="modulo_01/agressor.svg">
          <template #front>Para o agressor</template>

          <template #back>
            O assédio sexual cometido no ambiente de trabalho é considerado uma
            falta grave e pode ensejar a abertura de processo administrativo
            disciplinar, com a aplicação das penalidades previstas na Lei nº
            8.112/90 no caso de órgãos públicos. Além disso, o agressor pode
            responder nas esferas cível e criminal.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="12" sm="auto">
        <FlipCardImg bgImg="modulo_01/empresa.svg">
          <template #front>Para a empresa</template>

          <template #back>
            Conviver com esse tipo de conduta pode gerar um ambiente de trabalho
            altamente tóxico, com queda de produtividade, alta rotatividade de
            mão de obra, elevada taxa de absenteísmo, desgaste da imagem
            institucional, além da possibilidade de responsabilização
            patrimonial.
          </template>
        </FlipCardImg>
      </v-col>
    </v-row>

    <BoxIcon tipo="recapitulando"
      >Neste tópico, abordamos o assédio moral e sexual no ambiente de trabalho,
      discutindo suas definições, causas e consequências. No próximo tópico,
      iremos explorar algumas políticas de saúde mental no trabalho, visando
      promover um ambiente saudável e acolhedor para os colaboradores.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 02"
      prevLink="modulo-01/topico-02"
      nextName="Tópico 04"
      nextLink="modulo-01/topico-04"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import FlipCardImg from "@/components/FlipCardImg.vue";
import FlipCardRandom from "@/components/FlipCardRandom.vue";
import Subtopico from "@/components/Subtopico.vue";
import Accordion from "@/components/Accordion.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    Imagem,
    FlipCardImg,
    FlipCardRandom,
    Subtopico,
    Accordion,
    NavFooter,
    Paragraph,
  },
  data() {
    return {
      dialogTeste: false,
      dialog: false,

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

  methods: {
    dialogInput(value) {
      this.$store.state.progresso_modulo_01.items.video_02 = true;
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
    this.$store.state.progresso_modulo_01.items.topico_03 = true;
    this.$store.commit("SALVAR_PROGRESSO");
  },
};
</script>

<style scoped>
.teste-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  background: #f07e27;
  color: #fff;
  font-weight: bold;
  width: 100px;
  padding: 10px 0;
  cursor: pointer;
  animation: tilt-shaking 1.5s ease infinite;
}

@keyframes tilt-shaking {
  0% {
    transform: translateX(0px);
  }
  15% {
    transform: translateX(3px);
  }
  30% {
    transform: translateX(0px);
  }
  45% {
    transform: translateX(3px);
  }
  60% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
