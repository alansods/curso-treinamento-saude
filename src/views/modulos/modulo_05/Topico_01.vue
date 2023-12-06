<template>
  <AulaTemplate
    :titulo="$store.state.modulos[4].titulo"
    :numero="$store.state.modulos[4].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 01  - Elaborando uma análise econômica - Parte 1">
      <Paragraph>
        Neste tópico, vamos explorar alguns conceitos fundamentais da economia
        aplicada à saúde e segurança, com o intuito de proporcionar um
        entendimento mais claro das distinções entre diversos tipos de análises
        e como elas podem ser aplicadas. Para fazer escolhas informadas entre
        diferentes abordagens, podemos recorrer a uma variedade de métodos
        analíticos, que incluem:
      </Paragraph>

      <div class="mt-10">
        <v-alert border="left" color="blue" dark> Análise de decisão;</v-alert>
        <v-alert border="left" color="blue" dark> Análise de custo;</v-alert>
        <v-alert border="left" color="blue" dark>
          Análise de custo-benefício;</v-alert
        >
        <v-alert border="left" color="blue" dark>
          Análise de custo-efetividade;</v-alert
        >
        <v-alert border="left" color="blue" dark>
          Análise de custo-utilidade;</v-alert
        >
        <v-alert border="left" color="blue" dark>
          Retorno sobre o investimento (ROI) e valor sobre o investimento
          (VOI).</v-alert
        >
      </div>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>Você sabia que existem ferramentas valiosas que auxiliam as empresas na análise econômica das ações de saúde? Quando falamos em saúde e segurança, é importante considerar a eficácia e os custos das medidas adotadas. Nesta aula, vamos aprender alguns conceitos de economia aplicados à saúde e segurança. Ao final, você entenderá melhor as diferenças entre os diversos tipos de análise e compreenderá suas aplicabilidades. </Paragraph>

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
          video-id="_-aD9_CzQH0"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Introduzindo o assunto, é fundamental compreender que eficiência implica
        que os custos para aumentar a segurança no ambiente de trabalho, ou
        seja, o custo marginal, sejam equivalentes aos benefícios, que
        representam os retornos marginais em termos de melhorias na saúde e no
        bem-estar decorrentes da redução de riscos.
      </Paragraph>

      <Paragraph>
        No contexto da saúde e segurança no trabalho, os aspectos econômicos
        desempenham um papel fundamental na tomada de decisões em todos os
        níveis. O principal objetivo dos estudos de custo-efetividade é comparar
        o valor relativo de diferentes intervenções voltadas para a promoção da
        saúde ou o prolongamento da vida, fornecendo informações sólidas para
        uma alocação eficaz de recursos (BRASIL, 2008).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Vale notar que a expressão "estudo de custo-efetividade" é frequentemente
      usada de forma genérica por muitos especialistas para descrever todos os
      tipos de análises, como custo-efetividade, custo-benefício,
      custo-utilidade ou custo-preferência. Contudo, essas análises possuem
      abordagens metodológicas intrínsecas diferentes e apresentam
      interpretações práticas distintas. A escolha da metodologia adequada é
      influenciada pela disponibilidade de dados, pelo contexto dos objetivos do
      estudo e pela demanda do público-alvo por informações (BRASIL, 2008).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Dependendo do tipo de análise realizada, os benefícios em saúde podem
        ser expressos de várias maneiras, como em anos de vida salvos ou
        expectativa de vida, onde são calculadas as 'razões de
        custo-efetividade'. Se a unidade de medida usada para avaliar o desfecho
        clínico ou a efetividade é a preferência do paciente ou a qualidade de
        vida, o estudo se concentra em 'razões de custo-utilidade ou
        custo-preferência'. Como mencionado anteriormente, se o estudo converte
        o desfecho clínico em valores monetários, a relação resultante é
        expressa como 'custo-benefício'. A escolha entre custo-benefício,
        custo-efetividade e custo-utilidade deve ser feita considerando as
        circunstâncias específicas a fim de definir a metodologia mais
        apropriada, conforme podemos ver no quadro 1:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 1.  Tipos de análises econômicas em saúde, de acordo com a medida de desfecho e unidade de medida de cada estudo."
      fonte="Tipos de análises econômicas em saúde (BRASIL, 2008)"
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Tipo
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Unidade de Efetividade
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Unidade de Custo
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Unidade Final
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Custo- efetividade</td>
          <td>Anos de vida salvos Complicações prevenidas.</td>
          <td>Unidade monetária ($)</td>
          <td>$/ano de vida salvo</td>
        </tr>

        <tr>
          <td>Custo-utilidade</td>
          <td>Anos de vida ajustados para qualidade (QALYs).</td>
          <td>$</td>
          <td>$/QALY</td>
        </tr>

        <tr>
          <td>Custo- minimização</td>
          <td>-</td>
          <td>$</td>
          <td>$</td>
        </tr>

        <tr>
          <td>Custo-benefício</td>
          <td>Conversão para unidade monetária ($).</td>
          <td>$</td>
          <td>$</td>
        </tr>
      </tbody>
    </Table>

    <TextBlock>
      <Paragraph>
        A seguir, vamos examinar três tipos de análises: Análise de decisão,
        Análise de custos e Análise de custo-benefício.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1.1 Análise de decisão ">
      <Paragraph>
        A análise de decisão é uma abordagem sistemática e quantitativa para
        tomar decisões em situações de incerteza. Ela engloba uma variedade de
        métodos projetados para lidar com os desafios de encontrar soluções para
        problemas complexos.
      </Paragraph>

      <Paragraph>
        Os principais elementos de uma análise de decisão podem ser
        categorizados em valores e objetivos, decisões, eventos incertos e
        consequências. Esses elementos são incorporados de forma quantitativa em
        um modelo que ajuda a estruturar o problema ao longo do tempo.
      </Paragraph>

      <Paragraph>
        Diversos tipos de modelos podem ser escolhidos para acomodar a
        complexidade do problema de decisão de maneira adequada. No entanto,
        independentemente do modelo escolhido, a análise de decisão consiste em
        seis componentes essenciais que constituem os alicerces das análises de
        prevenção-eficácia:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front
            >Especificar o problema de decisão e os objetivos</template
          >

          <template #back>
            Definir claramente o problema a ser resolvido e os objetivos a serem
            alcançados.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front
            >Desenvolver um modelo para estruturar o problema de decisão ao
            longo do tempo</template
          >

          <template #back>
            Criar um modelo que represente o problema e a maneira como as
            decisões afetam o desenrolar dos eventos ao longo do tempo.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Estimar probabilidades</template>

          <template #back>
            Avaliar as probabilidades associadas aos diferentes resultados
            possíveis, levando em conta a incerteza.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Avaliar as consequências dos custos</template>

          <template #back>
            Analisar os impactos financeiros e não financeiros das diferentes
            decisões em termos de custos e benefícios.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Analisar o caso base</template>

          <template #back>
            Examinar como o problema se desenvolveria sob diferentes cenários,
            considerando as informações disponíveis.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Avaliar a incerteza</template>

          <template #back>
            Levar em consideração a incerteza associada às estimativas e
            probabilidades, aplicando técnicas para avaliar o grau de confiança
            nas conclusões.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock subTopico="1.2 Análise de custos">
      <Paragraph>
        A análise de custos desempenha um papel fundamental na identificação,
        medição e avaliação das implicações financeiras dos acidentes de
        trabalho e problemas de saúde relacionados aos recursos. Embora essas
        análises forneçam uma visão clara da magnitude do problema, elas não
        necessariamente orientam os tomadores de decisão na escolha da
        intervenção mais eficaz dentre as diversas opções disponíveis, sob a
        governança e regulamentação do ambiente de trabalho.
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Custos Financeiros e Econômicos</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Os custos financeiros são os desembolsos em dinheiro real para os
          recursos necessários para produzir um programa ou intervenção e
          gerenciar o resultado de saúde de um paciente (por exemplo, salários,
          aluguel, suprimentos médicos). Os custos econômicos de uma intervenção
          são os custos contábil mais os custos de oportunidade dos recursos
          usados para implementar a intervenção (ou seja, o valor dos recursos
          se tivessem sido utilizados para outra finalidade produtiva (BRASIL,
          2008)
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Custos médicos</v-expansion-panel-header>
        <v-expansion-panel-content>
          São aqueles gastos diretos relacionados à obtenção de tratamento
          médico ou despesas que são absorvidas pelo sistema de saúde. Exemplos
          de custos médicos incluem despesas com triagem, aconselhamento,
          hospitalização, exames de diagnóstico, medicamentos prescritos e
          consultas médicas com clínicos.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Custos não médicos</v-expansion-panel-header>
        <v-expansion-panel-content>
          São os custos diretos relacionados à atividade de prevenção ou ao
          desfecho de saúde em questão, mas que não são normalmente
          classificados como despesas médicas ou de saúde. Exemplos de custos
          não médicos englobam despesas como o transporte de um paciente ou
          cuidador para consultas com profissionais de saúde, custos associados
          ao cuidado infantil e os gastos com a aquisição de equipamentos não
          médicos vinculados a uma intervenção (como a compra de um capacete de
          bicicleta como resultado de um programa de educação em segurança) ou a
          um desfecho (por exemplo, a aquisição de um sistema doméstico de
          filtragem de ar para reduzir os efeitos de partículas suspensas no ar
          em indivíduos com asma).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Perdas de produtividade</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          São a medida dos recursos perdidos para participar de uma intervenção,
          buscar atendimento para uma condição de saúde, para cuidar e como
          resultado de morbidade ou mortalidade prematura.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Custos intangíveis</v-expansion-panel-header>
        <v-expansion-panel-content>
          São os custos associados a uma atividade de prevenção ou saúde para a
          qual é extremamente difícil atribuir um valor monetário. Podem
          incluir, por exemplo, os custos de dor e sofrimento, perda emocional e
          estigmatização social.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Custos operacionais e de capital</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Os custos operacionais se referem aos gastos contínuos de um programa
          necessários para fornecer bens ou serviços. Geralmente, são
          considerados os custos que se acumulam ao longo do período
          orçamentário, geralmente calculado anualmente. Por outro lado, os
          custos de capital são aqueles despendidos na aquisição de ativos com
          vida útil superior a 1 ano. Tais custos ocorrem em um único ponto no
          tempo para itens que podem ser utilizados durante toda a vida útil de
          um programa, como por exemplo, veículos, computadores e microscópios.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Custos Fixos e Variáveis</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Custos fixos são aqueles cujo valor total permanece constante (dentro
          de um determinado intervalo), independentemente das variações no
          volume da atividade. Exemplos típicos abrangem despesas como aluguel e
          os custos associados ao design e produção de materiais publicitários.
          No curto prazo, esses custos fixos não sofrem alterações em resposta
          ao número de clientes atendidos ou à quantidade de produtos entregues.
          Por outro lado, os custos variáveis são aqueles que se ajustam
          proporcionalmente às mudanças no volume de atividade. Eles aumentam ou
          diminuem de acordo com o número de clientes atendidos. Exemplificando,
          podemos citar itens como kits de teste para o vírus da
          imunodeficiência humana (HIV), capacetes de bicicleta e preservativos.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock subTopico="1. 3 Análise de custo-benefício">
      <Paragraph>
        É um tipo de análise que mede a relação entre o valor monetário dos
        custos e benefícios de uma empresa, permitindo determinar se uma nova
        intervenção gera um benefício líquido para a sociedade. Pode ser
        utilizada como ferramenta de auxílio para a racionalização em tomadas de
        decisões sobre o bem-estar da população nas quais necessitem de grandes
        investimentos. Como aponta Carvalho (2021), um aspecto essencial na
        análise de custo-benefício são as externalidades, sejam elas negativas
        ou positivas, e os impactos que geram.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Na área de saúde e segurança, a análise de custo-benefício é um dos
      métodos mais amplamente adotados para comparar os benefícios de uma
      intervenção com os custos associados. Sua notável característica é o uso
      da mesma unidade monetária para expressar tanto os custos quanto os
      benefícios, o que a torna um destaque entre economistas e gestores
      empresariais.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para direcionar ações, muitas vezes emprega-se a abordagem
        <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')"
          ><i>willingness to pay</i></GlossarioButton
        >, na qual se questiona indivíduos sobre o quanto estariam dispostos a
        pagar por melhorias em saúde. Dois métodos comuns são usados nessa
        abordagem:
      </Paragraph>

      <GlossarioDialog title="Auxílio-Doença">
        <Paragraph>
          <strong><i>Willingness to pay:</i></strong> expressão em inglês que se
          traduz como "disposição para pagar". No contexto da economia, da
          tomada de decisões e da avaliação de custos e benefícios, a WTP é uma
          medida que avalia o valor que um indivíduo ou uma sociedade está
          disposto a gastar ou investir em um determinado produto, serviço,
          intervenção ou ação.
        </Paragraph>
      </GlossarioDialog>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Valoração contingente</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Nesse método, os analistas apresentam uma intervenção ou programa de saúde aos indivíduos e perguntam quanto estariam dispostos a pagar por esses benefícios em saúde, levando em conta suas expectativas.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Análise conjunta</v-expansion-panel-header>
        <v-expansion-panel-content>
          Nessa abordagem mais autocrática, realiza-se uma comparação entre diferentes bens ou intervenções de saúde e seus respectivos pesos relativos.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <BoxIcon tipo="voce_sabia">
      Além das metodologias discutidas até agora, existem outras abordagens na literatura para avaliar desfechos em saúde. Duas delas são o <strong>Capital Humano e Preferências</strong>. A primeira considera uma intervenção ou programa de saúde como um investimento nos colaboradores, uma vez que indivíduos mais saudáveis tendem a ser mais produtivos. Já a segunda aborda a relação entre os riscos à saúde do trabalhador, sua função no ambiente de trabalho e o salário que eles demandam.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Explorando ainda mais esses métodos na avaliação econômica, é fundamental reconhecer uma limitação significativa: a conversão dos benefícios clínicos em termos monetários. Dado que essa avaliação tende a ser mais qualitativa, é imperativo que compreendamos os passos envolvidos na transformação dos resultados de saúde em valores monetários.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Chegamos ao final deste tópico. Até o momento, discutimos análise de decisão, análise de custo e análise de custo-benefício. No próximo tópico, vamos adentrar em outras três ferramentas, permitindo que você compreenda melhor suas diferenças e entenda como aplicá-las.
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-05"
      nextName="Tópico 02"
      nextLink="modulo-05/topico-02"
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
import FlipCard from "@/components/FlipCard.vue";
import Table from "@/components/Table.vue";
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
    FlipCard,
    Table,
    GlossarioButton,
    GlossarioDialog,
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
