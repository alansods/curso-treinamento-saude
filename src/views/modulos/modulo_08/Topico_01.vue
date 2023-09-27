<template>
  <AulaTemplate
    :titulo="$store.state.modulos[7].titulo"
    :numero="$store.state.modulos[7].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 01 - Contexto Histórico do ESG">
      <Paragraph>
        Neste tópico, exploraremos as origens e o contexto histórico do ESG,
        traçando as raízes que deram origem a esse importante conjunto de
        princípios e práticas empresariais.
      </Paragraph>

      <Paragraph>
        O propósito do ESG está intimamente ligado à maximização da
        rentabilidade que uma empresa pode alcançar, abrangendo uma perspectiva
        de 360° que envolve uma análise de dentro para fora, de fora para dentro
        e de dentro para dentro. Para ilustrar essa importância, consideremos a
        Conferência das Nações Unidas sobre Mudanças Climáticas - COP 26,
        realizada em outubro de 2021, a maior e mais significativa reunião
        mundial sobre essa temática, onde nações de todo o mundo concordaram em
        buscar a "estabilização das concentrações de gases de efeito estufa na
        atmosfera" a fim de evitar impactos prejudiciais decorrentes da
        atividade humana.
      </Paragraph>

      <Paragraph>
        É relevante notar que atualmente o acordo conta com 197 signatários, mas
        a presença do Brasil na conferência foi relativamente modesta. Isso
        ressalta a necessidade premente de parcerias estratégicas entre o setor
        privado e o Estado brasileiro para promover o desenvolvimento
        sustentável e reduzir as emissões de gases de efeito estufa. Em um país
        que não possui uma mentalidade empreendedora de “berço”, isso se torna
        uma conquista lenta e muitas vezes negligenciada.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      O termo ESG surgiu em 2004 durante uma conferência financeira que reuniu
      os principais grupos de investimento do mundo. O título provocativo do
      evento, "WHO CARES WINS" (traduzido como "Quem se importa, vence!"), foi
      uma chamada à reflexão feita pelo então Secretário-Geral da ONU, Kofi
      Annan, às instituições financeiras. Ele enfatizou a importância de
      considerar fatores ambientais, sociais e de governança (ESG) em suas
      decisões de investimento nos mercados de capitais. Esse momento histórico
      marcou o início da conscientização sobre a necessidade de integrar o ESG
      como uma abordagem essencial para investimentos responsáveis e
      sustentáveis em todo o mundo.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Nossa exploração sobre o ESG é uma jornada multidisciplinar e
        abrangente. Para apreciar plenamente sua origem e significado, devemos
        mergulhar na relação entre duas disciplinas essenciais que fundamentam o
        ESG: o Capitalismo e a Sustentabilidade. Vejamos, a seguir, como esses
        conceitos interagem e se entrelaçam com essa temática:
      </Paragraph>
    </TextBlock>

    <Subtopico
      titulo="Evolução do Capitalismo e da Sustentabilidade: Uma Linha do Tempo"
    />

    <h4 class="primary--text text-h4 font-weight-bold text-center">
      Capitalismo
    </h4>
    <Timeline :years="years_1" />

    <h4 class="primary--text text-h4 font-weight-bold text-center">
      Sustentabilidade
    </h4>
    <Timeline :years="years_2" />

    <TextBlock>
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <Imagem
            src="modulo_01/imagem1.jpg"
            legenda="Imagem 1: Transtornos mentais relacionados ao trabalho"
            fonte="freepik.com"
          />
        </v-col>
      </v-row>

      <Paragraph>
        Partindo do princípio de que a identificação dos fatores de risco
        ambiental nos processos de trabalho é uma ação para promover a saúde do
        trabalhador, as empresas necessitam entender o perfil de seus liderados
        para então promover a saúde adequada aos seus trabalhadores. Nesse
        contexto, reflita: quais as principais causas de afastamento
        relacionadas a transtornos mentais e quais os custos para uma empresa?
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>
        Nessa vídeoaulas nós iremos disponibilizar informações que auxiliem
        líderes e suas equipes no enfrentamento dos índices crescentes de
        adoecimento mental associado ao trabalho, possibilitando, assim, ampliar
        o acolhimento e os encaminhamentos necessários ao cuidado
        biopsicossocial dos trabalhadores
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
          video-id="hhw26SJYU_c"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Veja no quadro a seguir os principais transtornos mentais e do
        comportamento relacionados ao trabalho, juntamente com seus respectivos
        códigos da Classificação Internacional de Doenças (CID).
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 1: Lista de Doenças Relacionadas ao Trabalho.Fonte: (BRASIL, 2005; 2008)."
      fonte="Fonte: (BRASIL, 2005; 2008)."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
            style="border-radius: 8px 0 0 0"
          >
            CID-10
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
            style="border-radius: 0 8px 0 0"
          >
            Doenças
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>F02.8</td>
          <td>
            Demência em outras doenças específicas classificadas em outros
            locais
          </td>
        </tr>
        <tr>
          <td>159</td>
          <td>159</td>
        </tr>
        <tr>
          <td>159</td>
          <td>159</td>
        </tr>
        <tr>
          <td>159</td>
          <td>159</td>
        </tr>
        <tr>
          <td>159</td>
          <td>159</td>
        </tr>
        <tr>
          <td>159</td>
          <td>159</td>
        </tr>
      </tbody>
    </Table>

    <TextBlock>
      <Paragraph>
        Além das informações apresentadas no quadro 1, temos ainda diversos
        modelos explicativos para o desenvolvimento de transtornos mentais em
        ambientes de trabalho, e compreender esses modelos pode ajudar as
        empresas a implementar medidas de prevenção e promoção da saúde mental
        dos colaboradores. Entre os modelos mais conhecidos, estão:
      </Paragraph>
    </TextBlock>

    <v-row justify="space-between">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front> Modelo estressor-trabalho </template>

          <template #back>
            Este modelo sugere que o ambiente de trabalho e as demandas
            profissionais são fontes de estresse que podem afetar a saúde mental
            dos colaboradores.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front> Modelo demanda-controle-suporte </template>

          <template #back>
            Este modelo destaca a importância da combinação entre altas demandas
            e baixo controle na geração de estresse ocupacional. Além disso,
            sugere que o suporte social da empresa pode ajudar a reduzir os
            efeitos negativos do estresse.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>
            Modelo do desequilíbrio esforço-recompensa
          </template>

          <template #back>
            Este modelo considera que a percepção de desequilíbrio entre o
            esforço investido e as recompensas recebidas podem levar ao
            desenvolvimento de estresse ocupacional e transtornos mentais.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front> Modelo de assédio moral </template>

          <template #back>
            Este modelo sugere que o assédio moral no ambiente de trabalho pode
            afetar negativamente a saúde mental dos colaboradores, além de gerar
            outros impactos no ambiente organizacional.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Ao compreender os modelos explicativos dos transtornos mentais nas
        empresas, as organizações podem adotar medidas preventivas e estratégias
        de gestão que contribuam para a promoção da saúde mental dos
        colaboradores e o bem-estar do ambiente de trabalho. As ações de
        prevenção ou a implementação de medidas devem ser baseadas na
        multiplicidade de fatores envolvidos.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando"
      >Chegamos ao fim deste tópico. Você percebeu que a falta de cuidados com a
      saúde mental dos colaboradores pode impactar diretamente na saúde
      financeira de uma organização? Portanto, é fundamental que as organizações
      adotem medidas preventivas, promovam um ambiente de trabalho saudável e
      valorizem o bem-estar dos colaboradores. No próximo tópico, conheceremos
      alguns transtornos mentais relacionados ao trabalho.
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-01"
      nextName="Tópico 02"
      nextLink="modulo-01/topico-02"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import Paragraph from "@/components/Paragraph.vue";
import Subtopico from "@/components/Subtopico.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import Table from "@/components/Table.vue";
import FlipCard from "@/components/FlipCard.vue";
import NavFooter from "@/components/NavFooter.vue";
import Timeline from "@/components/Timeline.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    Subtopico,
    BoxIcon,
    Imagem,
    Table,
    FlipCard,
    NavFooter,
    Timeline,
  },
  data() {
    return {
      aluno: "",
      glossario1: false,
      dialog: false,

      years_1: [
        {
          color: "cyan",
          year: "Século XVI",
          text: "O capitalismo começa a ganhar força à medida que a sociedade percebe a possibilidade de crescimento econômico e lucro através da gestão da escassez.",
        },
        {
          color: "green",
          year: "1776",
          text: 'Adam Smith, em sua obra "A Riqueza das Nações", introduz o conceito de reinvestimento de lucros excedentes, destacando uma abordagem baseada no mercado em oposição à ordem social religiosa.',
        },
        {
          color: "pink",
          year: "Século XX",
          text: 'Milton Friedman, renomado economista da Universidade de Chicago e laureado com o Prêmio Nobel de Economia em 1976, publica o artigo "A Responsabilidade Social das Empresas é aumentar seus lucros," enfatizando que a única responsabilidade social de um negócio é aumentar seus lucros desde que isso seja feito dentro das regras do jogo, ou seja, em concorrência justa e livre de enganos ou fraudes.',
        },
        {
          color: "amber",
          year: "2018",
          text: 'Surge o conceito de "Capitalismo Consciente," marcando uma virada de chave. Essa abordagem redefine o capitalismo de livre-iniciativa, valorizando a cooperação e um enfoque mais humano nos negócios. Nesse contexto, as empresas deixam de ser meros agentes de promoção econômica e passam a desempenhar um papel importante na promoção do bem-estar social.',
        },
      ],

      years_2: [
        {
          color: "cyan",
          year: "Século XVI a XX",
          text: "O crescimento populacional desordenado e a urbanização acelerada demonstram os primeiros sinais de degradação ambiental. Leis sobre o uso racional das florestas datam de 1560.",
        },
        {
          color: "green",
          year: "1939-1945",
          text: 'A Segunda Guerra Mundial e as primeiras explosões nucleares motivaram o início de movimentos e ações relacionados à sustentabilidade.',
        },
        {
          color: "pink",
          year: "1972",
          text: 'Conferência da ONU sobre o Meio Ambiente e a Declaração de Estocolmo marcam o início da cooperação global em questões ambientais.',
        },
        {
          color: "amber",
          year: "1992",
          text: 'A ECO-92, a Cúpula da Terra no Rio de Janeiro, reúne líderes globais e destaca questões ambientais em nível mundial.',
        },
        {
          color: "purple",
          year: "1997",
          text: 'Assinatura do Protocolo de Quioto para redução das emissões de gases poluentes, embora sem a participação dos EUA e Canadá.',
        },
        {
          color: "blue",
          year: "2012",
          text: 'A RIO +20, a Conferência da ONU sobre Desenvolvimento Sustentável, discute desenvolvimento sustentável e economia verde.',
        },
        {
          color: "brown",
          year: "Década de 70",
          text: 'Surge a Economia Circular, baseada no repensar, reduzir, recusar, reutilizar e reciclar para promover o uso inteligente dos recursos naturais.',
        },
        {
          color: "orange",
          year: "Década de 2000",
          text: 'Livros como "Firms of Endearment" (2003) e "Conscious Capitalism" (2009) introduzem o conceito de Capitalismo Consciente.',
        },
        {
          color: "teal",
          year: "1988",
          text: 'A Constituição Brasileira incorpora a preocupação com a função social das empresas e o meio ambiente.',
        },
        {
          color: "indigo",
          year: "2015-2020",
          text: 'A participação de investidores estrangeiros no Brasil cai cerca de 19%, refletindo uma crescente preocupação com o socioambiental. O ESG ganha força globalmente, levando as empresas a priorizarem o impacto socioambiental como estratégia para alavancar a competitividade e criar valor compartilhado.',
        },
      ],
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
