<template>
  <AulaTemplate
    :titulo="$store.state.modulos[4].titulo"
    :numero="$store.state.modulos[4].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 2  - Elaborando uma análise econômica - Parte 2">
      <Paragraph>
        Vimos no tópico anterior que na área da economia da saúde, a avaliação
        de intervenções e decisões relacionadas à políticas de saúde tornou-se
        fundamental para garantir a alocação eficiente de recursos e a melhoria
        dos sistemas de assistência médica.
      </Paragraph>

      <Paragraph>
        Neste contexto, abordaremos neste tópico outros três tipos de análises
        em economia da saúde: Análise de Custo-Efetividade, Análise de
        Custo-Utilidade e as métricas ROI (Retorno sobre o Investimento) e VOI
        (Valor do Investimento). Compreender essas análises é fundamental para
        tomar decisões embasadas, tanto em termos de eficácia clínica quanto
        financeira, em um campo que requer equilíbrio entre recursos limitados e
        a busca contínua por melhores resultados em saúde.
      </Paragraph>

      <Paragraph>
        Com a conclusão deste módulo, esperamos que você esteja apto a
        compreender e aplicar efetivamente esses tipos de análises na economia
        da saúde. Vamos começar!
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.1 Análise de custo-efetividade">
      <Paragraph>
        Trata-se de uma análise com uma abordagem comparativa, na qual
        diferentes alternativas são avaliadas para atingir um objetivo
        específico, e a melhor alternativa é selecionada posteriormente. O uso
        dessa ferramenta como suporte para empresas na implementação de ações
        voltadas para a saúde dos trabalhadores deriva da necessidade do
        empregador em implementar uma intervenção ou programa de saúde com
        máxima eficácia dentro de um custo estabelecido.
      </Paragraph>

      <Paragraph>
        Em contraste com a análise de custo-benefício, a análise de
        custo-efetividade não atribui valores monetários aos impactos das
        intervenções em saúde. Nesse contexto, os custos são mensurados em
        unidades monetárias, mas os benefícios são expressos em unidades
        naturais, como anos de vida ganhos, número de vidas salvas e eventos
        clínicos evitados, por exemplo.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Enquanto a análise de custo-benefício busca responder à pergunta "vale a
      pena, financeiramente, investir em um determinado projeto?", a análise de
      custo-efetividade se concentra em determinar qual estratégia é mais
      efetiva em termos de custos para alcançar um objetivo específico.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para avaliar a relação de custo-efetividade entre duas intervenções de
        saúde, é necessário realizar um cálculo, conforme vemos a seguir:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="5">
        <Imagem src="modulo_05/formulas-01.svg" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Para facilitar a compreensão do cálculo, vamos utilizar um exemplo que
        envolve a escolha entre dois tipos diferentes de equipamento de proteção
        individual e quantos eventos clínicos podem ser evitados em um período
        específico de uso. A seguir, apresentaremos um exemplo de comparação
        entre dois tipos de máscaras faciais usadas por trabalhadores do setor
        de limpeza e desinfecção de ambientes:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem src="modulo_05/formulas-02.svg" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Neste caso, o analista irá determinar qual equipamento tem a capacidade
        de reduzir o máximo de eventos com o melhor custo.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      A principal limitação dessa ferramenta para tomada de decisão é que sua
      utilização permite comparar apenas tratamentos ou programas sanitários e
      unidades de medidas iguais. Por exemplo, não é viável comparar o número de
      eventos clínicos evitados com o número de equipamentos de proteção
      utilizados no mês.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Desta forma, conclui-se que na avaliação de duas intervenções, são
        calculadas razões que expressam o custo adicional necessário para
        atingir uma unidade extra de benefício clínico. Podem ser utilizadas
        intervenções para prevenção, diagnóstico ou tratamento de determinada
        condição de saúde.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="Análise de custo-utilidade">
      <Paragraph>
        Semelhante à análise de custo-efetividade, a análise custo-utilidade
        utiliza unidades monetárias para determinar os custos e anos de vida
        ajustados pela qualidade como unidade de medida. Muitos especialistas
        consideram essa abordagem uma versão mais refinada da análise de
        custo-efetividade. No entanto, enquanto a análise de custo-efetividade
        utiliza anos de vida salvo e complicações como medidas de eficácia, a
        análise de custo-utilidade recorre aos Anos de Vida Ajustados pela
        Qualidade (AVAQ).
      </Paragraph>

      <Paragraph>
        Para realizar uma análise de custo-utilidade, é essencial, em primeiro
        lugar, identificar a quantidade de AVAQ correspondente a cada tipo de
        intervenção ou programa de saúde. Isso requer estudos prévios e cálculos
        para determinar a expectativa de vida das pessoas afetadas por essa
        intervenção. Em seguida, esse valor é ponderado com uma estimativa do
        estado de saúde ou qualidade de vida após a implementação da
        intervenção.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Para um melhor entendimento sobre a unidade de medida da análise de
      custo-utilidade, é importante esclarecer a diferença entre expectativa de
      vida e expectativa de vida ajustada para qualidade. A primeira se refere
      exclusivamente ao aumento da sobrevida em indivíduos com problemas de
      saúde, enquanto a segunda aborda a qualidade de vida.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Ou seja, o aumento da expectativa de vida por si só pode não estar
        relacionado a um aumento da expectativa de vida ajustada para qualidade
        de vida. Algumas intervenções de saúde podem estender a sobrevida com
        qualidade em certos indivíduos, enquanto outros podem se beneficiar de
        uma tecnologia de saúde apenas para prolongar a vida, sem melhorar a
        qualidade.
      </Paragraph>

      <Paragraph>
        Em organizações empresariais, essa análise pode ser uma ferramenta
        valiosa para comparar diferentes programas de saúde e seu impacto na
        qualidade de vida de pacientes que já enfrentam problemas de saúde
        específicos. No contexto da ergonomia, é fundamental que os empregadores
        compreendam a importância dessa análise, pois ela pode permitir a
        implementação de intervenções para melhorar a postura de trabalhadores
        com hérnia de disco durante suas atividades laborais, resultando em uma
        melhoria na qualidade de vida e, por conseguinte, na sobrevida desses
        pacientes.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem
          legenda="Imagem 1: A análise de custo-utilidade atua na melhoria da ergonomia no ambiente de trabalho"
          fonte="Fonte: Freepik.com"
          src="modulo_05/imagem1.jpeg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A principal limitação da análise de custo-utilidade reside no fato de
        que ela envolve a avaliação comparativa de tratamentos que podem ser
        altamente dispendiosos, com impactos qualitativos e quantitativos sobre
        a sobrevida dos pacientes ainda pouco conhecidos. No entanto, essa
        abordagem possibilita a comparação entre diferentes estratégias de
        intervenção em saúde em diversas condições dos indivíduos.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="Retorno Sobre o Investimento (ROI) e Valor sobre o Investimento (VOI)"
    >
      <Paragraph>
        O investimento na saúde dos trabalhadores é de suma importância para
        reconhecer e valorizar uma empresa. No entanto, a implementação e
        manutenção de um programa de saúde no ambiente de trabalho requer uma
        sólida gestão, pois a falta de ferramentas adequadas pode acarretar
        custos de alto impacto. Nesse contexto, duas ferramentas se destacam por
        seu potencial auxílio: o Retorno Sobre o Investimento (ROI) e o Valor
        Sobre o Investimento (VOI).
      </Paragraph>

      <Paragraph>
        O Retorno Sobre o Investimento é o mais requerido pelos empregadores
        para aprovação e implementação de um programa de saúde, pois evidencia o
        quanto a empresa obteve de resultados em relação aos investimentos
        realizados nela. No entanto, ele se concentra em avaliar indicadores
        individuais na área de saúde do trabalhador, o que, de acordo com
        especialistas, torna uma medida insuficiente e inadequada para avaliar o
        sucesso da promoção da saúde no ambiente de trabalho.
      </Paragraph>

      <Paragraph>
        A fórmula para calcular o ROI é a seguinte:
        <strong class="text-center"
          >ROI = Lucro Operacional Líquido / Investimentos</strong
        >
      </Paragraph>

      <Paragraph>
        Embora o ROI seja considerado uma métrica simples de retorno de
        investimento, é importante tomar precauções. A falta de atualização
        contínua do processo operacional pode ameaçar sua continuidade, gerando
        benefícios apenas a curto prazo. Além disso, o empate em sua equalização
        pode indicar que o investimento foi bem-sucedido, desde que o programa
        também tenha melhorado a saúde de forma mais abrangente.
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
        Após a exploração dos tópicos deste módulo, os gestores poderão compreender os aspectos fundamentais na interpretação dos tipos de estudos e familiarizar-se com os conceitos relacionados. Isso permitirá que realizem uma análise crítica da literatura existente e estabeleçam referências para a aplicação dessas informações em seus ambientes de trabalho, desenvolvendo uma visão ampla e aprofundada sobre o assunto.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Chegamos ao final deste  módulo. Esperamos que as informações aqui apresentadas tenham sido úteis e enriquecedoras. Vimos que a gestão da saúde e segurança no trabalho é uma parte vital de qualquer organização, e seu impacto se reflete tanto na qualidade de vida dos colaboradores quanto na prosperidade dos negócios. Continue a explorar e aplicar esse conhecimento em seu ambiente de trabalho e, assim, promova um local mais seguro e saudável para todos.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-05/topico-01"
      :lastTopico="true"
      referenciasLink="modulo-05/referencias"
      atividadeLink="modulo-05/atividade"
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

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
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
