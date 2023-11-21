<template>
  <AulaTemplate
    :titulo="$store.state.modulos[8].titulo"
    :numero="$store.state.modulos[8].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 01 - A importância de uma cultura de SST e promoção da saúde nas empresas.">
      <Paragraph>
        Neste tópico, iremos apresentar os benefícios de uma cultura de Segurança e Saúde do Trabalho e Promoção da Saúde nas empresas.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>
        Neste  vídeo, iremos apresentar os benefícios de uma cultura de Segurança e Saúde do Trabalho e Promoção da Saúde nas empresas. Ao final, espera-se que você tenha adquirido conhecimentos teóricos e práticos sobre a importância dessa cultura no ambiente de trabalho. Vamos começar?
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
          video-id="gYddWj89DE4"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Quando se trata de saúde, não estamos apenas considerando a ausência de doenças; estamos abordando um conjunto de fatores que impactam diretamente na qualidade de vida. Nesse contexto, o trabalho é amplamente reconhecido como um determinante social da saúde, juntamente com moradia, alimentação e outros aspectos.
      </Paragraph>

      <Paragraph>
        Para embasar eficazmente a promoção da saúde, devemos levar em conta o conceito de Higiene Ocupacional. Trata-se de uma ciência que se dedica à avaliação e ao controle dos riscos que afetam a saúde dos trabalhadores. Além disso, as Normas Regulamentadoras do Ministério do Trabalho e Emprego, abordadas em módulos anteriores, servem como base para que as empresas adotem uma cultura de medicina preventiva, em contrapartida à abordagem curativa.
      </Paragraph>

      <Paragraph>
        Quando nos aprofundamos na questão da medicina preventiva, percebemos que ela se concentra na avaliação regular da saúde dos trabalhadores antes que problemas se manifestem. Porém, é notável que muitos colaboradores apresentam resistência a esse acompanhamento preventivo.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          fonte="Fonte: Freepick.com"
          src="modulo_09/reflexao.svg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Diante dessas questões, torna-se crucial avaliar se os colaboradores reconhecem a relevância das medidas preventivas para sua saúde no ambiente de trabalho. A partir dessa compreensão, podemos prosseguir com a implementação de uma cultura de SST.
      </Paragraph>

      <Paragraph>
        Quando se fala em SST, é fundamental partir do princípio de que todos os indivíduos são iguais perante a lei e têm o direito a condições salubres no trabalho. Essa abordagem possibilita a integração de todos os colaboradores e a melhoria contínua das condições de segurança e saúde, promovendo uma abordagem preventiva e proativa.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 1: Contribuir com o bem-estar dos trabalhadores ajuda a prevenir problemas de saúde."
          fonte="Fonte: Freepick.com"
          src="modulo_09/imagem1.jpeg"
        />
      </v-col>
    </v-row>

    <BoxIcon tipo="atencao">
      Uma gestão proativa implica na busca por soluções adequadas, eficazes e sustentáveis em colaboração com os funcionários. Isso encoraja os colaboradores a se sentirem confiantes para questionar possíveis riscos em suas atividades, promovendo uma abordagem direta à segurança do trabalho.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para promover a integração eficaz de ambientes e pessoas com o objetivo de promover a prevenção de saúde e segurança no trabalho, é necessário estabelecer um diálogo sólido e uma comunicação aberta. Isso se baseia no princípio de dar ouvidos às necessidades dos trabalhadores, construindo uma relação de confiança e respeito mútuo entre gestores e liderados, o que facilita a implementação de uma cultura de SST positiva.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A educação contínua desempenha um papel fundamental na transformação da cultura de saúde do trabalhador, passando de uma abordagem curativa para uma preventiva. Por exemplo, programas de conscientização no local de trabalho, como workshops sobre alimentação saudável e atividade física, são essenciais para incentivar comportamentos voltados para a promoção da saúde e a prevenção de doenças entre os colaboradores.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Em resumo, a implementação de uma cultura positiva de SST contribui para a redução de acidentes e doenças no trabalho, além de aprimorar a produtividade, qualidade e rentabilidade das empresas.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1.1 Impacto da cultura de SST na mudança comportamental dos funcionários e adoção de hábitos de vida seguros e saudáveis.">
      <Paragraph>
        É sabido que doenças profissionais e acidentes de trabalho prejudicam a produtividade do trabalhador e acarretam custos para a empresa. Além disso, há também o impacto que os hábitos de vida do indivíduo podem refletir na efetividade e eficácia das atividades laborais. Indivíduos que possuem hábitos de vida desfavoráveis à saúde têm risco aumentado de redução de produtividade em todos os âmbitos da vida.
      </Paragraph>

      <Paragraph>
        Desta forma, as ações de segurança e saúde para o trabalhador não devem focar somente nos transtornos desencadeados pelo trabalho e sim focar ações de promoção da saúde como um todo. Hábitos de vida como tabagismo, consumo abusivo de álcool e a inatividade da prática de exercícios físicos são exemplos de hábitos desfavoráveis a saúde de um indivíduo, pois todos eles impactam negativamente na capacidade cardiorrespiratória e musculoesquelética o que favorece a redução na produtividade do trabalho.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Existem fortes evidências de que a prática de exercícios físicos gera benefícios à cognição, além de contribuir para um menor risco de desenvolver doenças crônicas não transmissíveis e uma melhor qualidade de vida no trabalho.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Muitos indivíduos não têm acesso a educação em saúde multidisciplinar fora do local de trabalho e esse é um fator predisponente a postergação do autocuidado, favorecendo ao adoecimento físico e mental contínuo. A implantação e manutenção de uma cultura voltada para promoção da saúde e prevenção de doenças é capaz de estimular os trabalhadores a promover mudanças nos hábitos de vida e, consequentemente, melhorar o desempenho nas atividades do trabalho.
      </Paragraph>

      <Paragraph>
        Em muitos países foi possível observar os benefícios sociais e econômicos ao priorizar ações de promoção da saúde, demonstrando que vale a pena investir nessas ações. Dentre os benefícios, observou-se que foram gerados valores adicionais à empresa em consequência de uma maior satisfação e motivação do colaborador, além de obter uma melhor imagem da empresa.
      </Paragraph>

      <Paragraph>
        Portanto, desenvolver medidas preventivas e de controle da saúde do trabalhador no âmbito social e laboral, é uma atitude que coopera para a mudança comportamental do colaborador em hábitos de vida sociais, refletindo em uma melhor produtividade no ambiente de trabalho.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1.2 Fatores culturais influenciadores de hábitos de vida seguros e saudáveis.">
      <Paragraph>
        A imagem corporal, o modo de vestir, a dieta e a linguagem variam de acordo com a origem cultural de cada um. No entanto, quando se trata de saúde, esses são apenas alguns dos fatores que influenciam nossos hábitos de vida. Fatores educacionais e ambientais também desempenham papéis importantes nesse comportamento.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          fonte="Fonte: Freepick.com"
          src="modulo_09/frase_balao.svg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Primeiramente, ao abordar os fatores educacionais, estamos considerando a educação que alguém recebe ao longo de sua vida, abrangendo até mesmo elementos religiosos e étnicos. No entanto, estudos indicam que esses últimos fatores não parecem ter um impacto significativo na adoção de práticas saudáveis.
      </Paragraph>

      <Paragraph>
        Por outro lado, a adolescência é um estágio crítico para incentivar hábitos saudáveis, como uma alimentação equilibrada e a prática regular de atividades físicas. Neste contexto, também é possível identificar lacunas de conhecimento e desmistificar equívocos que podem ter se desenvolvido durante a infância.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Alguns estudos exploram a relação entre as condições socioeconômicas e práticas saudáveis, abordando temas como padrões alimentares, níveis de escolaridade das mães, gênero e etnia dos indivíduos. No entanto, não existe uma associação estatisticamente significativa entre a manutenção da saúde e variáveis socioeconômicas.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Portanto, podemos concluir que os fatores culturais desempenham um papel significativo em nossos estilos de vida. Quando esses fatores têm um impacto negativo, pode levar mais tempo para promover mudanças nos hábitos de vida. Isso é um problema de saúde pública, e a solução envolve não apenas incentivar práticas saudáveis, mas também tornar essas práticas acessíveis por meio de orientação profissional e espaços apropriados.
      </Paragraph>

      <Paragraph>
        Vejamos alguns hábitos de vida seguros e saudáveis fundamentais para a manutenção da saúde e a qualidade de vida:
      </Paragraph>

      <Paragraph>
        <ul>
          <li>Evitar o tabagismo</li>
          <li>Controlar o consumo de álcool </li>
          <li>Manter uma alimentação saudável </li>
          <li>Gerenciar o estresse</li>
          <li>Fazer check-ups regulares </li>
          <li>Praticar exercícios</li>
        </ul>
      </Paragraph>

      <Paragraph>
        Quando as pessoas estão em ambientes que apoiam esses hábitos, elas têm um desempenho melhor em todos os aspectos da vida, incluindo o trabalho. É importante que as empresas compreendam como esses fatores afetam a qualidade de vida dos funcionários e tomem medidas diretas para promover hábitos saudáveis.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      No próximo tópico, discutiremos outras variáveis relacionadas à cultura de saúde e segurança no trabalho. Até lá!
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-09"
      nextName="Tópico 02"
      nextLink="modulo-09/topico-02"
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
import Imagem from "@/components/Imagem.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Imagem
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
