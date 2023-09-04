<template>
  <AulaTemplate
    :titulo="$store.state.modulos[6].titulo"
    :numero="$store.state.modulos[6].numero"
    titleSize="5"
  >
    <TextBlock
      topico="Tópico 01 - Gerenciando o Absenteísmo: Estratégias para Lidar com Afastamentos de Curto e Longo Prazo"
    >
      <Paragraph>
        Neste tópico, disponibilizaremos informações que auxiliam líderes e suas
        equipes no enfrentamento de absenteísmo, afastamentos de curto, longo
        prazo e impacto nos custos para empresa, além de discutir as
        consequências diretas e indiretas para funcionários e empregadores.
        Vamos lá?
      </Paragraph>

      <Paragraph>
        O trabalho desempenha um papel fundamental como elemento organizador na
        sociedade, pois é por meio dele que os indivíduos se reconhecem e são
        reconhecidos em suas atividades profissionais. Desta forma, podemos
        afirmar que há uma grande influência das atividades laborais no processo
        de saúde e adoecimento, tornando- se- necessário mapear estratégias e
        implementar políticas que possam impactar de maneira positiva nos
        processos de saúde e doença do trabalhador.
      </Paragraph>

      <Paragraph>
        Devido ao seu papel como organizador social e sua relevância na vida de
        um indivíduo, qualquer fator que possa causar desequilíbrio nessa
        dimensão pode influenciar na produtividade das atividades laborais de um
        colaborador e, consequentemente, impactando no absenteísmo no trabalho.
        O profissional que não está em equilíbrio entre suas dimensões não está
        disposto a produzir de maneira efetiva e acaba se ausentando de suas
        atividades.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      O termo “absenteísmo” tem origem na palavra latina e está relacionado à
      quantidade de horas perdidas de trabalho, seja pela ausência no ambiente
      profissional ou por atrasos. Em contrapartida, temos o conceito de
      “presenteísmo”, que se refere à situação em que um funcionário está
      presente no trabalho, mas realiza suas atividades de maneira improdutiva.
      Embora sejam distintos, esses conceitos causam o mesmo efeito prejudicial
      às empresas, pois indivíduos com qualquer uma dessas características não
      desempenham suas funções de forma adequada, ocasionando prejuízos ao
      sistema organizacional.
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

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph> Não tem texto no roteiro. </Paragraph>

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

    <TextBlock subTopico="1.1 Tipos de absenteísmo">
      <Paragraph>
        A compreensão das causas do absenteísmo é complexa, pois envolve
        questões de postura e comprometimento dos colaboradores. Suas causas
        podem ser conhecidas ou ignoradas, dependendo, muitas vezes, da
        comunicação entre o empregado e o empregador, e estão ambas amparadas
        pelas leis. Dessa forma, podemos classificar os tipos de absenteísmo da
        seguinte maneira :
      </Paragraph>
    </TextBlock>

    <v-card class="rounded-lg elevation-0 pb-1" style="border: solid 1px #ccc">
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Tipos de absenteísmo </v-toolbar-title>
      </v-toolbar>

      <v-tabs vertical>
        <div style="max-width: 180px; white-space: normal">
          <v-tab class="justify-start text-left py-8"> Voluntário </v-tab>
          <v-tab class="justify-start text-left py-8"> Por doença </v-tab>
          <v-tab class="justify-start text-left py-8">
            Por patologia profissional
          </v-tab>
          <v-tab class="justify-start text-left py-8"> Legal </v-tab>
          <v-tab class="justify-start text-left py-8"> Compulsório </v-tab>
        </div>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="mb-0">
                Neste tipo de absenteísmo, é possível identificar a ausência não
                justificada do colaborador, por razões particulares.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="mb-0">
                É o mais importante entre os tipos, pois acarreta em um alto
                volume de ausências. É diagnosticado através de avaliação
                médica.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="mb-0">
                Refere-se às ausências por doença profissional ou acidente de
                trabalho.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="mb-0">
                As ausências do serviço que são amparadas por lei são
                classificadas do tipo legal de absenteísmo, como por exemplo
                licença maternidade e doação de sangue.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p class="mb-0">
                Esse tipo de absenteísmo pode ser exemplificado quando há
                episódios de suspensão imposta pela chefia, ou seja, quando há
                uma ordem legal que justifica a falta ao trabalho.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>

    <TextBlock>
      <Paragraph>
        Haja vista os tipos de absenteísmo, cabe destacar as principais causas
        de afastamentos de curto e longo prazo:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Afastamento de curto prazo</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Quando o tempo da ausência das atividades profissionais for igual ou
          inferior a 15 dias.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Afastamento de longo prazo</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Quando for superior a 15 dias, sendo contabilizado como afastamento
          pelo Instituto Nacional do Seguro Social (INSS).
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Em suma, conhecer os tipos de absenteísmo é essencial para o
        gerenciamento efetivo das ausências no ambiente de trabalho.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="1.2 Principais causas de absenteísmo por motivo de doença, segundo a previdência social"
    >
      <Paragraph>
        As doenças ocupacionais e as afecções musculoesqueléticas estão entre as
        principais causas de afastamento no Brasil, conforme podemos observar no
        quadro a seguir:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 1: Principais causas de afastamento no Brasil"
      fonte="(BRASIL,2021)."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
            style="border-radius: 8px 0 0 0"
          >
            Causa de afastamentos no período de 2012 a 2021
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
            style="border-radius: 0 8px 0 0"
          >
            Percentual
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Doenças</td>
          <td>73%</td>
        </tr>
        <tr>
          <td>Tecido osteomuscular e conjuntivo</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Fraturas</td>
          <td>17%</td>
        </tr>
        <tr>
          <td>Doenças mentais e comportamentais</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>Doenças do aparelho digestivo</td>
          <td>9%</td>
        </tr>
        <tr>
          <td>Síndromes circulatórias</td>
          <td>7%</td>
        </tr>
        <tr>
          <td>Outros agravos</td>
          <td>&lt; 5%</td>
        </tr>
      </tbody>
    </Table>

    <TextBlock>
      <Paragraph>
        Em relação às atividades econômicas com maior incidência de afastamentos
        registrados pelo INSS, no campo da administração, entre os anos de 2012
        a 2021, 5% correspondem a funcionários da administração pública em
        geral, 3% a pessoas envolvidas em atividades de consultoria em gestão
        empresarial e 2% estão associados a funcionários de escritório e apoio
        administrativo. Outros cargos também estão associados às ausências
        registradas pelo INSS, distribuídas proporcionalmente.(BRASIL,2021).
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="1.3 O absenteísmo como fator advindo de variáveis gerenciais, da ausência de controle dos riscos ambientais e de fatores externos"
    >
      <Paragraph>
        Um processo gerencial ineficiente contribui para o absenteísmo e, em
        alguns casos, para uma alta rotatividade de profissionais. Quando há
        desequilíbrio no clima organizacional, os processos de comunicação e
        interação entre gestores e funcionários também são prejudicados,
        tornando ainda mais difícil identificar possíveis fatores de
        absenteísmo. Diálogos bem estruturados permitem identificar futuras
        ausências e, se forem administrados adequadamente, podem servir de
        ferramentas para prevenir o absenteísmo.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      <Paragraph>
        O conhecimento do perfil dos colaboradores e das principais causas de
        absenteísmo na empresa permite que os líderes tracem estratégias para
        melhorar as atividades de promoção da saúde e prevenção de doenças
        oriundas da atividade laboral. No entanto, essa abordagem é válida
        apenas para o absenteísmo por doença.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Diante do exposto, fica evidente a relevância do gestor em identificar
        as necessidades da organização frente aos seus colaboradores. Mapear os
        anseios e expectativas dos profissionais em relação às atividades
        desempenhadas na empresa pode facilitar a visualização de possíveis
        casos de absenteísmo no futuro.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1.4 Absenteísmo legal">
      <Paragraph>
        No caso de absenteísmo legal, o colaborador tem sua falta respaldada
        pela lei, não sendo prejudicada a estabilidade do profissional, a
        remuneração e a contagem de tempo para a aposentadoria. Apesar disso,
        esse tipo de ausência pode ter uma perspectiva diferente por parte do
        funcionário, que pode utilizá-la para manifestar questões individuais em
        relação à empresa, seja por situações cotidianas ou por fatos
        inesperados.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <Paragraph>
        As situações cotidianas de absenteísmo legal abrangem exemplos como
        doações de sangue, participação em congressos e engajamento em campanhas
        eleitorais. Por outro lado, as situações inesperadas envolvem eventos
        como o falecimento de um familiar ou a gestação, por exemplo. Estudos
        revelam que uma parte significativa dos funcionários utiliza as
        situações cotidianas de absenteísmo legal como uma forma de "escapar" da
        insatisfação no trabalho, justificando-se devido à sobrecarga de
        trabalho. Essa tendência reflete a percepção desses colaboradores de que
        o absenteísmo legal é uma maneira válida de lidar com a carga excessiva
        de responsabilidades no ambiente de trabalho.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <v-row align="center">
        <v-col cols="12" sm="5">
          <Imagem
            src="modulo_07/imagem1.jpg"
            legenda="Imagem 1: O absenteísmo legal reduz a produtividade e aumenta os custos para as empresas"
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="7">
          <Paragraph>
            Nesse contexto, as organizações precisam estar atentas às condições
            do ambiente de trabalho e, além disso, devem fortalecer a cultura do
            conhecimento sobre as leis relacionadas ao absenteísmo e sua forma
            de utilização. Desta forma, o maior conhecimento das leis e outras
            formas de divulgação de direitos e deveres do colaborador pode
            auxiliar na redução da utilização incorreta do absenteísmo legal.
          </Paragraph>
        </v-col>
      </v-row>

      <Paragraph>
        O absenteísmo legal é um evento que faz parte da realidade
        organizacional, as condições do trabalho e conhecimento da legislação
        podem influenciar nas ocorrências desse evento. Trata-se de uma variável
        significativa para as empresas, pois implica na redução da produtividade
        e aumento dos custos. A substituição do colega ausente, que implica em
        pagamento em dobro pelo mesmo trabalho, a redução da produtividade, e
        influência no clima organizacional são alguns dos impactos observados.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="1.5 Impacto do absenteísmo nos custos de saúde da empresa"
    >
      <Paragraph>
        No Brasil, existem poucos estudos sobre o real impacto financeiro do
        absenteísmo, apesar de muitos autores acreditarem que os custos são
        elevados. Nos Estados Unidos, o absenteísmo é responsável por um custo
        de mais de US$40 bilhões para as organizações. No ano de 2021, foram
        perdidos 295,4 milhões de dias de trabalho devido a
        <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')">auxílio-doença</GlossarioButton> no Brasil, o que
        resulta em perdas econômicas, em matéria de produtividade para os
        empregadores e para a economia em geral.
      </Paragraph>

      <GlossarioDialog title="Auxílio-Doença">
        <Paragraph>
        O <strong>auxílio-doença</strong> também é chamado de benefício por incapacidade temporária.
        </Paragraph>
      </GlossarioDialog>

      <Paragraph>
        Uma análise do absenteísmo pelos líderes da organização pode auxiliar na
        investigação e adoção de políticas visando a redução deste evento. Nessa
        análise, podemos citar: a elaboração de planos para avaliar as faltas
        que são justificadas por doenças, separar cada motivo de falta e
        classificá-las; e criar uma política disciplinar que os empregados devem
        respeitar, conhecendo as consequências de punição ao faltar do trabalho.
      </Paragraph>

      <Paragraph>
        Neste tópico, estudamos o absenteísmo e tratamos dos afastamentos de
        curto e longo prazo no contexto organizacional. A seguir, vamos
        direcionar nossa atenção para a reabilitação do trabalhador.
      </Paragraph>

      <Paragraph> Continue aprendendo conosco!</Paragraph>
    </TextBlock>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-07"
      nextName="Tópico 02"
      nextLink="modulo-07/topico-02"
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
import Table from "@/components/Table.vue";
import Imagem from "@/components/Imagem.vue";
import GlossarioButton from "@/components/GlossarioButton.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Accordion,
    Table,
    Imagem,
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

  created() {},
};
</script>

<style scoped></style>
