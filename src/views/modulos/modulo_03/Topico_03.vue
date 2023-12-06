<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 03 - Plano de Saúde na Empresa ">
      <Paragraph>
        Neste tópico, vamos aprender sobre a importância do uso racional do
        plano de saúde empresarial, que é uma modalidade de assistência à saúde
        voltada para os sócios e colaboradores de uma empresa. Esse tipo de
        plano oferece acesso a uma variedade de coberturas e procedimentos
        médicos, que podem ser realizados em uma rede de profissionais médicos,
        clínicas, hospitais e laboratórios credenciados ou próprios, mediante o
        pagamento de uma mensalidade.
      </Paragraph>

      <Paragraph>
        Além disso, a gestão dos planos de saúde é uma questão de grande
        importância para as empresas, visto que eles podem representar uma parte
        significativa das despesas com folha de pagamento, com variações que
        geralmente oscilam entre 12% a 15%. Por esse motivo, é fundamental
        conduzir negociações de taxas e reajustes de forma técnica e
        estratégica, buscando equilibrar os custos e contribuir para o
        planejamento orçamentário e a manutenção do benefício.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="3">
      <Paragraph>
        Olá, nesta aula, discorreremos sobre a importância dos investimentos em saúde mental nas empresas.
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
          video-id="MCeTz1LFl-o"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        É relevante observar que as despesas assistenciais associadas aos planos
        de saúde têm apresentado um crescimento constante, frequentemente acima
        da taxa de inflação. Isso está diretamente relacionado ao aumento da
        utilização dos serviços de saúde, ao envelhecimento da população e à
        maior incidência de DCNT, que resultam em um volume maior e
        procedimentos mais complexos. A diferença entre a receita total
        proveniente das mensalidades e o somatório de todas as despesas
        (assistenciais e administrativas) constitui o resultado financeiro da
        operação.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A <strong>Sinistralidade</strong> é um dos principais fatores que
      influenciam os reajustes dos planos de saúde. Cada vez que um beneficiário
      utiliza o plano de saúde para consultas, exames, cirurgias ou outros
      procedimentos médicos, ocorre <strong>um sinistro</strong>. A
      sinistralidade é a relação entre os custos incorridos com sinistros e a
      receita obtida pela operadora do plano de saúde por meio das mensalidades.
      Geralmente, é considerada aceitável uma taxa de sinistralidade em torno de
      70% da receita.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        No que diz respeito às regras para o reajuste dos planos de saúde
        individuais e coletivos (contratados pela empresa para seus
        colaboradores), estas são distintas. Os reajustes dos planos coletivos
        não são regulados pela ANS e podem ser determinados com base no
        critérios descritos a seguir:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 3: Critérios para reajuste de planos de saúde coletivos."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Critérios de Reajuste
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Descrição
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inflação Médica</td>
          <td>
            O reajuste pode ser baseado na inflação médica (Variação de Custos
            Médico-Hospitalares - VCMH).
          </td>
        </tr>
        <tr>
          <td>Taxa de Sinistralidade</td>
          <td>
            Pode ser determinado com base na taxa de sinistralidade, que avalia
            as despesas médicas dos segurados.
          </td>
        </tr>
        <tr>
          <td>Outros Parâmetros</td>
          <td>
            Os reajustes também podem ser definidos com base em outros
            parâmetros acordados entre a operadora e a empresa contratante
          </td>
        </tr>
      </tbody>
    </Table>

    <TextBlock>
      <Paragraph>
        Lembrando que os planos de saúde coletivos não são regulados pela ANS da
        mesma forma que os planos individuais, mas devem seguir as diretrizes
        estabelecidas por este órgão.
      </Paragraph>

      <Paragraph>
        No caso dos planos individuais, os reajustes são regulamentados pela ANS
        e geralmente entram em vigor a partir de maio de cada ano. Vejamos a
        seguir:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Planos Individuais Regulamentados</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ul>
            <li>Regulados pela ANS (Agência Nacional de Saúde Suplementar).</li>
            <li>Geralmente, entram em vigor a partir de maio de cada ano.</li>
            <li>
              O índice máximo de reajuste é calculado com base em:
              <ul>
                <li>80% da variação das despesas assistenciais.</li>
                <li>20% do Índice de Preços ao Consumidor Amplo (IPCA).</li>
              </ul>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Planos Coletivos</v-expansion-panel-header>
        <v-expansion-panel-content>
          O reajuste é calculado de acordo com as cláusulas contratuais.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Assim, é importante destacar que a VCMH é a base de cálculo que reflete
        as despesas médico-hospitalares por beneficiário em um grupo, durante um
        período específico. Ela busca demonstrar a variação dos custos
        médico-hospitalares entre dois períodos consecutivos para o mesmo grupo
        de beneficiários. Portanto, o uso responsável e sustentável do benefício
        de saúde é uma ferramenta crucial para manter os índices de
        sinistralidade dentro do planejamento inicial (limite técnico).
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.1 Uso racional dos planos de saúde">
      <Paragraph>
        Quando falamos sobre uso racional no sistema de saúde, é importante
        esclarecer que não estamos falando de racionamento, mas sim de
        racionalização. Ou seja, não se trata apenas de economizar, mas sim de
        usar os recursos de forma consciente. O uso racional implica em fazer
        escolhas sábias e conscientes, evitando desperdícios e garantindo que os
        recursos sejam usados com sabedoria.
      </Paragraph>

      <Paragraph>
        Além disso, o foco apenas na redução de custos e índices econômicos
        tira, muitas vezes, o olhar do principal ator dentro da Saúde
        Suplementar: o beneficiário/paciente. Para os empregados usarem o
        benefício do plano de saúde empresarial de forma racional é preciso
        desenvolver programas que estimulem hábitos saudáveis e orientem sobre a
        utilização do benefício, como por exemplo:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Uso racional</v-expansion-panel-header>
        <v-expansion-panel-content>
          A educação com relação à saúde é o primeiro procedimento para eliminar
          os riscos desnecessários, como a utilização inadequada do plano de
          saúde.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Prevenção</v-expansion-panel-header>
        <v-expansion-panel-content>
          Exames preventivos devem ser incentivados, principalmente para homens
          e mulheres depois dos 40 anos de idade.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Acompanhamento de pacientes crônicos</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Identificar, apoiar e orientar corretamente sua população de
          portadores de doenças crônicas.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Monitoramento</v-expansion-panel-header>
        <v-expansion-panel-content>
          Conhecer, acompanhar e auditar os casos isolados de alto custo
          garantirá que a melhor relação de custo-benefício esteja sendo
          praticada.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <v-row>
        <v-col cols="12" sm="5">
          <Imagem
            src="modulo_03/imagem3.jpg"
            legenda="Imagem 3: O bem-estar dos trabalhadores é fundamental"
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="7">
          <Paragraph>
            O bem-estar dos colaboradores deve ser uma das prioridades de
            qualquer empresa, e o plano de saúde é uma ótima maneira de
            garanti-lo. É comprovado que colaboradores mais saudáveis são mais
            produtivos. Quando a empresa oferece um plano de saúde e executa
            ações preventivas, isso mostra como ela se importa com seus
            funcionários, consequentemente tornando-os mais fiéis ao propósito
            da empresa e com maiores chances de permanecerem na corporação por
            mais tempo.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <BoxIcon tipo="recapitulando"
      >Chegamos ao final de mais um módulo. Neste período, abordamos temas
      ligados ao vasto universo da Saúde Suplementar e às burocracias envolvidas
      nos processos de contratação de operadoras de saúde. Por meio de um
      panorama do sistema de saúde brasileiro, foi possível dar uma visão geral
      a respeito das doenças crônicas não transmissíveis e como sua incidência
      impacta negativamente uma empresa. Mostrou-se, ainda, o desenvolvimento de
      programa de qualidade de vida e de gerenciamento de saúde populacional nas
      empresas, como funcionam e seus benefícios. Por fim, de maneira objetiva,
      foi possível esclarecer como são calculados os reajustes dentro do plano
      de saúde.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 02"
      prevLink="modulo-03/topico-02"
      nextName="Módulo 04"
      nextLink="modulo-04"
      :lastTopico="true"
      referenciasLink="modulo-03/referencias"
      atividadeLink="modulo-03/atividade"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";
import Table from "@/components/Table.vue";
import Accordion from "@/components/Accordion.vue";
import Imagem from "@/components/Imagem.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Table,
    Accordion,
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
