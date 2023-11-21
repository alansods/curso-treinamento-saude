<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
    titleSize="3"
  >
    <TextBlock
      topico="Tópico 01 - As Principais Causas de Afastamento e os Custos Diretos e Indiretos Relacionados a Transtornos Mentais"
    >
      <Paragraph>
        Neste tópico, vamos abordar a importância dos cuidados com a saúde
        mental dos colaboradores e como essa falta de atenção pode afetar a
        saúde financeira de uma organização.
      </Paragraph>

      <Paragraph>
        No Brasil, segundo o boletim epidemiológico de transtornos mentais
        relacionados ao trabalho, no período de 2006 a 2017, as
        <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')">doenças psíquicas</GlossarioButton> foram a terceira maior causa de afastamento do trabalho, sendo
        responsáveis por uma redução significativa do potencial de oferta de
        trabalho e aumento do absenteísmo, ocasionando custos significativos,
        que envolvem desde o salário do colaborador, até gastos com afastamento
        e reabilitação.
      </Paragraph>

      <GlossarioDialog title="Auxílio-Doença">
        <Paragraph>
              <strong>Doenças psíquicas</strong> é um termo usado como sinônimo
              para doenças psicológicas, que engloba problemas e fenômenos
              psicológicos que afetam a mente e/ou o funcionamento psicológico.
            </Paragraph>
      </GlossarioDialog>

      <Paragraph>
        Estimativas globais indicam que a economia perde cerca de 4% do Produto
        Interno Bruto (PIB) anualmente em razão de doenças e acidentes de
        trabalho. Entre os anos de 2007 a 2020, foram notificados no Brasil
        12.969 casos de transtornos mentais, conforme dados do observatório de
        segurança e saúde no trabalho do Ministério do Trabalho (2021).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Os transtornos mentais relacionados ao trabalho têm se tornado uma
      preocupação crescente nos últimos anos. A partir de 2010, foi observado um
      aumento considerável nesse tipo de transtorno, refletindo-se em um aumento
      de 24% na concessão de benefícios para a população trabalhadora que sofre
      com esse problema. Estima-se que as mulheres apresentaram um aumento de
      cerca de 650% em apenas 5 anos.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        De acordo com os dados da Secretaria de Atenção à Saúde, em 2019, o
        perfil dos colaboradores afastados por transtornos mentais é composto,
        em sua grande maioria, por trabalhadores da produção de bens e serviços
        industriais, entre 19 a 39 anos de idade e com escolaridade média. As
        principais causas do desenvolvimento do transtorno estão relacionadas à
        reação ao estresse grave, episódios depressivos e transtorno de
        adaptação.
      </Paragraph>
    </TextBlock>

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
          <th class="primary white--text text-body-2 text-uppercase font-weight-bold">
            CID-10
          </th>
          <th class="primary white--text text-body-2 text-uppercase font-weight-bold">
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
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import Table from "@/components/Table.vue";
import FlipCard from "@/components/FlipCard.vue";
import NavFooter from "@/components/NavFooter.vue";
import GlossarioButton from "@/components/GlossarioButton.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    Imagem,
    Table,
    FlipCard,
    NavFooter,
    GlossarioButton,
    GlossarioDialog,
  },
  data() {
    return {
      aluno: "",
      glossario1: false,
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
