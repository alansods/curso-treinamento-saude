<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
  >
    <Card
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
        <span
          class="font-weight-bold voce_sabia cursor-pointer px-1"
          style="white-space: nowrap;"
          @click="glossario1 = !glossario1"
          ><v-icon class="mr-1" size="20" color="white">mdi-help-circle</v-icon>doenças psíquicas</span
        >
        foram a terceira maior causa de afastamento do trabalho, sendo
        responsáveis por uma redução significativa do potencial de oferta de
        trabalho e aumento do absenteísmo, ocasionando custos significativos,
        que envolvem desde o salário do colaborador, até gastos com afastamento
        e reabilitação.
      </Paragraph>

      <v-bottom-sheet inset v-model="glossario1">
        <v-sheet class="text-center rounded-t-lg py-5" height="auto">
          <div class="py-3 px-5">
            <h5 class="text-h5 font-weight-bold mb-2 orange--text">Glossário</h5>
            <Paragraph>
              <strong>Doenças psíquicas</strong> é um termo usado como sinônimo
            para doenças psicológicas, que engloba problemas e fenômenos
            psicológicos que afetam a mente e/ou o funcionamento psicológico.
            </Paragraph>
          </div>
        </v-sheet>
      </v-bottom-sheet>

      <Paragraph>
        Estimativas globais indicam que a economia perde cerca de 4% do Produto
        Interno Bruto (PIB) anualmente em razão de doenças e acidentes de
        trabalho. Entre os anos de 2007 a 2020, foram notificados no Brasil
        12.969 casos de transtornos mentais, conforme dados do observatório de
        segurança e saúde no trabalho do Ministério do Trabalho (2021).
      </Paragraph>
    </Card>

    <BoxIcon tipo="voce_sabia">
      Os transtornos mentais relacionados ao trabalho têm se tornado uma
      preocupação crescente nos últimos anos. A partir de 2010, foi observado um
      aumento considerável nesse tipo de transtorno, refletindo-se em um aumento
      de 24% na concessão de benefícios para a população trabalhadora que sofre
      com esse problema. Estima-se que as mulheres apresentaram um aumento de
      cerca de 650% em apenas 5 anos.
    </BoxIcon>

    <Card>
      <Paragraph>
        De acordo com os dados da Secretaria de Atenção à Saúde, em 2019, o
        perfil dos colaboradores afastados por transtornos mentais é composto,
        em sua grande maioria, por trabalhadores da produção de bens e serviços
        industriais, entre 19 a 39 anos de idade e com escolaridade média. As
        principais causas do desenvolvimento do transtorno estão relacionadas à
        reação ao estresse grave, episódios depressivos e transtorno de
        adaptação.
      </Paragraph>
    </Card>

    <Card>
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

      <Paragraph>
        Veja no quadro a seguir os principais transtornos mentais e do
        comportamento relacionados ao trabalho, juntamente com seus respectivos
        códigos da Classificação Internacional de Doenças (CID).
      </Paragraph>
    </Card>

    <Table
      legenda="Quadro 1: Lista de Doenças Relacionadas ao Trabalho.Fonte: (BRASIL, 2005; 2008)."
      fonte="Fonte: (BRASIL, 2005; 2008)."
    >
      <thead>
        <tr >
          <th class="primary white--text" style="border-radius: 8px 0 0 0">CID-10</th>
          <th class="primary white--text" style="border-radius: 0 8px 0 0">Doenças</th>
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

    <Card>
      <Paragraph>
        Além das informações apresentadas no quadro 1, temos ainda diversos
        modelos explicativos para o desenvolvimento de transtornos mentais em
        ambientes de trabalho, e compreender esses modelos pode ajudar as
        empresas a implementar medidas de prevenção e promoção da saúde mental
        dos colaboradores. Entre os modelos mais conhecidos, estão:
      </Paragraph>
    </Card>

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

    <Card>
      <Paragraph>
        Ao compreender os modelos explicativos dos transtornos mentais nas
        empresas, as organizações podem adotar medidas preventivas e estratégias
        de gestão que contribuam para a promoção da saúde mental dos
        colaboradores e o bem-estar do ambiente de trabalho. As ações de
        prevenção ou a implementação de medidas devem ser baseadas na
        multiplicidade de fatores envolvidos.
      </Paragraph>
    </Card>

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
import Card from "@/components/Card.vue";
import Paragraph from "@/components/Paragraph.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import Table from "@/components/Table.vue";
import FlipCard from "@/components/FlipCard.vue";
import NavFooter from "@/components/NavFooter.vue";

export default {
  components: {
    AulaTemplate,
    Card,
    Paragraph,
    BoxIcon,
    Imagem,
    Table,
    FlipCard,
    NavFooter,
  },
  data() {
    return {
      modelTranstornos: 0,
      glossario1: false,

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
