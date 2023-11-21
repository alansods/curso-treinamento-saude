<template>
  <AulaTemplate
    :titulo="$store.state.modulos[5].titulo"
    :numero="$store.state.modulos[5].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 2 - Fator Acidentário Previdenciário (FAP)">
      <Paragraph>
        Olá! Vimos na aula anterior deste módulo sobre aspectos legais dos acidentes de trabalho e o impacto financeiro para as empresas. Nesta aula iremos abordar sobre o Fator Acidentário Previdenciário, bem como os impactos financeiros destes e normas da previdência social. Ao final deste módulo, você será capaz de definir acidentes de trabalho e os seus impactos, bem como entender aspectos legais do Ministério do Trabalho, então vem comigo...
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>Nesta aula iremos abordar sobre os outros três tipos de análise existentes e espera-se que ao final deste módulo, você possa compreender todos os tipos de análise em economia na saúde.</Paragraph>

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
          video-id="n30kPVoDRVI"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        O FAP é um instrumento que surgiu a partir do artigo 10 da Lei nº
        10.666/03, datada de 08 de maio de 2003. Sua criação visa incentivar as
        empresas a adotarem práticas que minimizem os riscos de acidentes de
        trabalho para seus colaboradores.
      </Paragraph>

      <Paragraph>
        Esse índice desempenha um papel relevante, pois monitora a ocorrência de
        acidentes de trabalho nas empresas. É de responsabilidade do setor de
        <strong>Recursos Humanos acompanhar de perto o FAP</strong>, pois ele
        desempenha um papel importante na implementação de medidas de SST nas
        empresas. Além de ajudar a reduzir a incidência de acidentes, o FAP pode
        impactar diretamente os custos previdenciários das empresas.
      </Paragraph>

      <Paragraph>
        A partir da Lei nº 10.666/03, a definição de
        <strong>acidente de trabalho</strong> foi ampliada para incluir qualquer
        evento que cause
        <strong>lesão corporal ou perturbação funcional</strong> durante o
        <strong>exercício da profissão</strong>, conforme o Artigo 19 da Lei n.º
        8.213/91. Como resultado, todos esses eventos devem ser considerados no
        cálculo do FAP. Essa iniciativa foi adotada pelo governo com o objetivo
        de cumprir as exigências relacionadas à prevenção e controle de riscos
        de acidentes de trabalho, independentemente de onde ocorram.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      O FAP é um multiplicador que varia de 0,5 a 2 e é aplicado sobre a
      alíquota dos Riscos Ambientais do Trabalho (RAT). O resultado desse
      cálculo determina o valor que as empresas devem pagar ao Conselho Nacional
      da Previdência Social (CNPS) para cobrir os custos da Previdência
      relacionados a acidentes de trabalho. Conforme estipulado pelo Decreto
      6.042/2007, o pagamento do FAP deve ser realizado anualmente, como parte
      das obrigações legais das empresas perante a Previdência Social.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        O cálculo do FAP segue três categorias de índices, que são:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12"
        ><small class="text-center d-block grey--text">
          (Clique nos cards abaixo para ver o conteúdo)</small
        >
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Frequência</template>

          <template #back>
            Quanto maior o número de acidentes ocorridos, maior será o valor do
            índice. Ou seja, a incidência de acidentes afeta diretamente o
            cálculo do FAP.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Gravidade</template>

          <template #back>
            A gravidade dos acidentes também é levada em consideração. Acidentes
            com consequências mais sérias terão um custo maior para a empresa,
            refletindo em um índice mais alto.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard :fullWidth="true">
          <template #front>Custo</template>

          <template #back>
            O valor que o acidente representa em custos para a Previdência
            Social é outro fator importante. Quanto mais dispendioso o acidente
            se torna para a previdência, maior será o impacto no índice da
            empresa, que precisará pagar mais por isso.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Além das categorias que envolvem frequência, gravidade e custo dos
        acidentes, o cálculo do FAP também considera os valores dos benefícios
        relacionados às seguintes categorias:
      </Paragraph>

      <div class="mt-10">
        <v-alert border="left" color="blue" dark
          ><strong>B91 -</strong> Auxílio-doença acidentário;</v-alert
        >
        <v-alert border="left" color="blue" dark
          ><strong>B92 -</strong> Aposentadoria por Invalidez
          Acidentária;</v-alert
        >
        <v-alert border="left" color="blue" dark
          ><strong>B93 -</strong> Pensão por Morte por Acidente de
          Trabalho;</v-alert
        >
        <v-alert border="left" color="blue" dark
          ><strong>B94 -</strong> Auxílio acidente.</v-alert
        >
      </div>
    </TextBlock>

    <TextBlock>
      <Paragraph>
        Esses valores dos benefícios concedidos em decorrência de acidentes de
        trabalho são incorporados ao cálculo do FAP, tornando-o um índice mais
        abrangente que reflete os custos totais associados a acidentes laborais.
      </Paragraph>

      <Paragraph>
        O cálculo do FAP é realizado de acordo com a seguinte fórmula:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem src="modulo_06/formula1.svg" />
      </v-col>
      <v-col cols="12">
        <SmallText>
          <i
            >*Exceto se o óbito tenha acontecido em decorrência do trajeto,
            identificados por meio da CAT.</i
          >
        </SmallText>
      </v-col>
    </v-row>

    <TextBlock
      subTopico="2.1 Impactos financeiros do FAP nos custos com saúde na empresa"
    >
      <Paragraph>
        O FAP desempenha um papel importante, recompensando as empresas que
        conseguem manter baixos índices de acidentalidade e, ao mesmo tempo,
        penalizando aquelas que registram um número significativo de acidentes
        ou doenças ocupacionais, especialmente quando esses eventos resultam em
        <strong>morte, invalidez ou afastamentos prolongados</strong>, todos
        relacionados ao trabalho. Em resumo, o FAP funciona como um indicador de
        sinistralidade e fornece às empresas a oportunidade de considerar
        investimentos em melhorias nos ambientes de trabalho.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Para promover resultados financeiros tangíveis para as empresas e apoiar
      as equipes SST na tarefa de convencer a alta administração a investir em
      SST, uma boa prática envolve a utilização de cálculos simples para
      estratificar os resultados do FAP.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Uma análise cuidadosa dos dados do FAP pode ajudar a identificar áreas
        específicas que necessitam de melhorias e que podem levar a uma redução
        nos custos associados a acidentes de trabalho. Além disso, essa análise
        ajuda a mostrar de forma mais concreta o impacto financeiro das ações de
        prevenção de acidentes, tornando o investimento em SST uma escolha mais
        evidente e vantajosa para as empresas.
      </Paragraph>

      <v-row justify="center">
        <v-col cols="12" sm="6">
          <Imagem src="modulo_06/exemplo_pratico.svg" />
        </v-col>
      </v-row>

      <Paragraph>
        Suponhamos que a indústria X possui uma folha salarial mensal, sem
        incluir encargos, no valor de R$1 milhão. O grau de risco (RAT)
        autodeclarado pela empresa é de 1%, e o menor fator possível do
        multiplicador, ou seja, 0,5000. A equação fica da seguinte forma:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem src="modulo_06/tabela.png" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Ou seja, a indústria X deve pagar no ano subsequente à publicação do FAP
        o valor de R$ 5 mil mensais (ou R$ 65 mil anuais somados os meses**).
      </Paragraph>

      <SmallText>
        ** O valor final se refere à soma dos 12 meses do ano mais a folha de
        pagamento do 13º salário.
      </SmallText>

      <Paragraph>
        Se a mesma empresa, a fictícia indústria X, se encaixa no multiplicador
        mais alto, determinado de acordo com o grau de risco da atividade
        econômica, a empresa pagaria R$ 20 mil mensais, e teria custo anual de
        R$ 260 mil. Vejamos os comparativos:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem src="modulo_06/tabela2.png" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A gestão do Fator Acidentário Previdenciário (FAP) desempenha, sem
        dúvida, um papel importante na sustentabilidade da própria empresa. No
        âmbito estratégico, é essencial incluir, no mínimo, uma análise
        econômico-financeira dos acidentes de trabalho e dos benefícios
        acidentários. Essa análise gera informações relevantes que embasam
        decisões relacionadas à prevenção eficaz desses eventos nos níveis
        táticos e operacionais.
      </Paragraph>

      <Paragraph>
        Ter acesso a esses valores é fundamental para a alta administração tomar
        decisões embasadas. Isso muda a perspectiva de saúde e segurança,
        fazendo com que essas áreas não sejam vistas apenas como despesas, mas
        sim como componentes de estratégias bem-sucedidas voltadas para a
        promoção e prevenção em SST, independentemente de seus custos.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.2 Impacto das ações regressivas e as situações passíveis de ocorrência"
    >
      <Paragraph>
        É importante lembrar que, por lei, todas as empresas têm a obrigação de
        zelar pela saúde de seus funcionários. No entanto, infelizmente, alguns
        empregadores ainda mantêm uma visão limitada de que os trabalhadores
        devem apenas cumprir suas tarefas, sem necessidade de qualquer
        acompanhamento adicional, acreditando que a contribuição previdenciária
        mensal seja suficiente para assegurar a seguridade deles. É nesse
        contexto que as <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')"><i>Ações Regressivas</i></GlossarioButton>
        ganham destaque, evidenciando a responsabilidade do empregador perante a
        Previdência Social.
      </Paragraph>

      <GlossarioDialog title="Ações Regressivas">
        <Paragraph>
          <strong><i>Ações Regressivas:</i></strong> representam instrumentos judiciais utilizados pela Previdência Social para buscar o ressarcimento de despesas previdenciárias relacionadas a atos ilícitos.
        </Paragraph>
      </GlossarioDialog>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A Previdência Social busca que as empresas assumam os custos decorrentes
      de acidentes ou doenças de seus colaboradores quando fica evidente que
      tais eventos ocorreram devido ao não cumprimento das leis de saúde e
      segurança do trabalho por parte da empresa.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para que seja viável ingressar com uma "ação regressiva" na justiça, é
        necessário que existam alguns requisitos essenciais:
      </Paragraph>

      <div class="my-10">
        <v-alert border="left" color="blue" dark><strong>1. </strong>
          Ocorrência de acidente de trabalho, como lesões, doenças ou acidentes relacionados à atividade laboral.
        </v-alert>
        <v-alert border="left" color="blue" dark><strong>2. </strong>
          Dano(s) à Previdência Social, ou seja, despesas previdenciárias geradas em decorrência do acidente de trabalho.
        </v-alert>
        <v-alert border="left" color="blue" dark><strong>3. </strong>
          Culpa qualificada, resultante do não cumprimento ou da falta de fiscalização das normas de segurança e higiene do trabalho por parte da empresa.
        </v-alert>
        <v-alert border="left" color="blue" dark><strong>4. </strong>
          Nexo causal, ou seja, a demonstração de que a falta de cumprimento das normas de segurança e higiene no trabalho pela empresa foi a causa direta ou contribuiu significativamente para o acidente de trabalho ou doença ocupacional.
        </v-alert>
      </div>

      <Paragraph>
        Quando esses elementos estão presentes, a Previdência Social pode entrar com uma "ação regressiva" contra a empresa para buscar o ressarcimento das despesas previdenciárias relacionadas aos acidentes de trabalho ou doenças ocupacionais. Isso reforça a importância da observância rigorosa das normas de segurança e higiene no ambiente de trabalho, tanto para a proteção dos trabalhadores quanto para evitar despesas adicionais para as empresas.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Quando ocorre um acidente de trabalho com afastamento do trabalho superior a 15 dias, o segurado dá entrada na Previdência Social para solicitar o benefício denominado "auxílio-doença acidentário". Para fins de direitos do segurado relacionados a acidentes de trabalho, é obrigatório que o benefício seja o "auxílio-doença acidentário". Esse benefício é concedido quando o trabalhador sofre um acidente de trabalho que o impede de realizar suas atividades laborais temporariamente devido a lesões ou doenças relacionadas ao acidente.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        A Previdência Social cumpre suas obrigações legais no que diz respeito ao salário do acidentado, isentando o empregador dessa responsabilidade inicialmente. Quando o acidentado retorna ao trabalho, ele tem direito a um período de estabilidade de doze meses, garantido pelo recebimento do "auxílio-doença acidentário," e sua remuneração volta a ser paga pela empresa normalmente.
      </Paragraph>

      <Paragraph>
        Em seguida, a Previdência Social busca seus direitos através da "Ação regressiva" nos tribunais. A Advocacia Geral da União (AGU) conduz uma análise minuciosa do acidente, coletando todas as informações e detalhes do ocorrido para entender as circunstâncias que geraram ônus. Se for comprovada a responsabilidade do empregador, a Previdência Social obtém êxito na ação, e a empresa é obrigada a reembolsar o órgão pelos gastos relacionados ao período de afastamento do colaborador.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.3 O papel didático das Ações Regressivas">
      <Paragraph>
        As Ações Regressivas desempenham um papel didático importante, não apenas na recuperação de custos para a Previdência Social, mas também na conscientização das empresas em relação à importância da prevenção de acidentes de trabalho e ao cumprimento das normas de segurança e higiene no ambiente laboral. Vejamos a seguir:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Aplicação do papel didático</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          O processo de conscientização frisa que o empregador deve estar em dia com as exigências da Legislação de SST.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Prevenção de Acidentes</v-expansion-panel-header>
        <v-expansion-panel-content>
          A prevenção inicia ainda no exame pré-admissional com avaliações médicas específicas para cada função da empresa, evitando a entrada de funcionários portadores de doenças pré-qualificadas pela Previdência Social, como doença do trabalho para aquela atividade, tornando o processo eficiente e evitando afastamentos futuros.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Estar em conformidade com a Legislação de SST garante segurança, saúde e bem-estar no ambiente de trabalho tanto para os trabalhadores quanto para a empresa. Afastamentos não são saudáveis para a produção e podem causar multas por meio das Ações Regressivas, prejudicando a imagem da empresa. Além disso, cada ação regressiva resulta em um processo trabalhista contra o empregador ou a empresa. Portanto, cumprir as normas de SST é essencial para manter a segurança no trabalho, evitar penalidades legais e preservar a reputação da empresa.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Os números de causas ganhas pela Previdência Social giram em torno de 80%. Um índice bastante alto, significando que há falha das empresas no que tange à Legislação de SST.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        As Ações Regressivas afetam o principal ponto de qualquer empresa, <strong>o financeiro</strong>. Essas ações constituem em uma das várias outras consequências que o empregador pode sofrer, se não proporcionar condições dignas de saúde e segurança do trabalho para seus trabalhadores.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Em conclusão, mesmo considerando que os acidentes fazem parte da vida humana, cabe aos gestores a responsabilidade de conhecer os riscos, mapear as atividades, analisar os dados, desenvolver estratégias e, sobretudo, promover a conscientização. Este módulo teve como objetivo disseminar informações sobre os impactos financeiros e as obrigações legais relacionadas aos acidentes de trabalho para as empresas, esclarecendo os direitos e deveres no que diz respeito à segurança e saúde no trabalho. A adoção de medidas preventivas e o cumprimento das normas de SST são cruciais para proteger tanto a integridade dos trabalhadores quanto a saúde financeira das empresas.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-06/topico-01"
      nextName="Módulo 07"
      nextLink="modulo-07"
      :lastTopico="true"
      referenciasLink="modulo-06/referencias"
      atividadeLink="modulo-06/atividade"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";
import Imagem from "@/components/Imagem.vue";
import FlipCard from "@/components/FlipCard.vue";
import SmallText from "@/components/SmallText.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";
import GlossarioButton from "@/components/GlossarioButton.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
    FlipCard,
    SmallText,
    GlossarioDialog,
    GlossarioButton,
    Accordion
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
