<template>
  <AulaTemplate
    :titulo="$store.state.modulos[5].titulo"
    :numero="$store.state.modulos[5].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 2 - Fator Acidentário Previdenciário (FAP)">
      <Paragraph>
        Neste tópico, exploraremos o Fator Acidentário Previdenciário (FAP) e
        seus impactos financeiros, juntamente com as normas da Previdência
        Social relacionadas a essa questão.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>falta texto</Paragraph>

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
          video-id="O2lN8aUr9-E"
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
        Ou seja, a indústria X deve pagar no ano subsequente à publicação do FAP o valor de R$ 5 mil mensais (ou R$ 65 mil anuais somados os meses**).
      </Paragraph>

      <SmallText>
        ** O valor final se refere à soma dos 12 meses do ano mais a folha de pagamento do 13º salário.
      </SmallText>

      <Paragraph>
        Se a mesma empresa, a fictícia indústria X, se encaixa no multiplicador mais alto, determinado de acordo com o grau de risco da atividade econômica, a empresa pagaria R$ 20 mil mensais, e teria custo anual de R$ 260 mil. Vejamos os comparativos:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem src="modulo_06/tabela2.png" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A gestão do Fator Acidentário Previdenciário (FAP) desempenha, sem dúvida, um papel importante na sustentabilidade da própria empresa. No âmbito estratégico, é essencial incluir, no mínimo, uma análise econômico-financeira dos acidentes de trabalho e dos benefícios acidentários. Essa análise gera informações relevantes que embasam decisões relacionadas à prevenção eficaz desses eventos nos níveis táticos e operacionais.
      </Paragraph>

      <Paragraph>
        Ter acesso a esses valores é fundamental para a alta administração tomar decisões embasadas. Isso muda a perspectiva de saúde e segurança, fazendo com que essas áreas não sejam vistas apenas como despesas, mas sim como componentes de estratégias bem-sucedidas voltadas para a promoção e prevenção em SST, independentemente de seus custos.
      </Paragraph>
    </TextBlock>
















    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 2: É importante complementar o ROI com outros métodos para resultados mais abrangentes."
          fonte="Fonte: Freepick.com"
          src="modulo_05/imagem2.jpeg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Diante desse cenário, surge o VOI, uma abordagem que oferece uma visão
        mais sistêmica dos resultados associados a um programa abrangente de
        promoção da saúde no ambiente de trabalho. Neste modelo, as empresas
        investem na saúde organizacional como um todo, em vez de focar apenas na
        saúde individual do trabalhador, redefinindo a ideia de que programas de
        saúde são introduzidos apenas para reduzir custos.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Para aplicar o VOI, as empresas devem mapear a saúde organizacional,
      direcionando ações de promoção da saúde e promovendo uma cultura de
      bem-estar entre os colaboradores. Além disso, o acompanhamento contínuo
      das ações é fundamental para avaliar o impacto a longo prazo, identificar
      lacunas e priorizar estratégias de alto impacto.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Em resumo, o investimento em tecnologias para promover a saúde dos
        trabalhadores tem um impacto direto na economia das empresas. Portanto,
        é essencial escolher a ferramenta de gestão mais adequada para planejar
        e organizar esse investimento, garantindo a qualidade da saúde e
        segurança dos trabalhadores. Cada empresa deve analisar qual ferramenta
        melhor se adapta ao seu contexto.
      </Paragraph>

      <Paragraph>
        Após a exploração dos tópicos deste módulo, os gestores poderão
        compreender os aspectos fundamentais na interpretação dos tipos de
        estudos e familiarizar-se com os conceitos relacionados. Isso permitirá
        que realizem uma análise crítica da literatura existente e estabeleçam
        referências para a aplicação dessas informações em seus ambientes de
        trabalho, desenvolvendo uma visão ampla e aprofundada sobre o assunto.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Chegamos ao final deste módulo. Esperamos que as informações aqui
      apresentadas tenham sido úteis e enriquecedoras. Vimos que a gestão da
      saúde e segurança no trabalho é uma parte vital de qualquer organização, e
      seu impacto se reflete tanto na qualidade de vida dos colaboradores quanto
      na prosperidade dos negócios. Continue a explorar e aplicar esse
      conhecimento em seu ambiente de trabalho e, assim, promova um local mais
      seguro e saudável para todos.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-06/topico-01"
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
    this.$store.state.progresso_modulo_01.items.topico_02 = true;
    this.$store.commit("SALVAR_PROGRESSO");
  },
};
</script>

<style scoped></style>
