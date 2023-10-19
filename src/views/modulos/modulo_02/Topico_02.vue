<template>
  <AulaTemplate
    :titulo="$store.state.modulos[1].titulo"
    :numero="$store.state.modulos[1].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 02 - LER/DORT">
      <Paragraph>
        Neste tópico, vamos explorar e explicar de forma mais detalhada o que
        são as condições conhecidas como LER (Lesões por Esforços Repetitivos) e
        DORT (Distúrbios Osteomusculares Relacionados ao Trabalho). Embora esses
        termos possam parecer sinônimos, é fundamental compreender que eles
        apresentam diferenças significativas. Uma LER pode ou não se configurar
        como uma DORT, dependendo da presença ou ausência de uma relação de
        causa e efeito com a atividade laboral.
      </Paragraph>

      <Paragraph>
        Tanto a LER quanto o DORT resultam da sobrecarga no sistema responsável
        pelos movimentos do esqueleto humano, aliada à insuficiente oportunidade
        de recuperação. Eles se manifestam por meio de uma variedade de
        sintomas, tipicamente em estágios avançados, e tendem a afetar
        predominantemente os membros superiores, incluindo sintomas como dor,
        sensação de peso e fadiga. Alguns exemplos comuns destas condições
        incluem lesões no ombro e inflamação em articulações e nos tecidos que
        envolvem os tendões (BRASIL, 2015).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>Olá, no vídeo passado você aprendeu sobre ergonomia e sobre os sobre os tipos de ergonomia, além de explanar um pouco sobre a Norma Reguladora 17 (NR17). Agora nós iremos explicar um pouco sobre o que é LER/DORT. Vamos lá?</Paragraph>

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
          video-id="rrl_vN3ZCRc"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem
          legenda="Imagem 1: Geralmente as doenças enquadradas em LER/DORT acometem regiões da coluna vertebral e dos membros superiores."
          fonte="Fonte: Freepick.com"
          src="modulo_02/imagem1.jpg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Vejamos a seguir alguns exemplos de LER/DORT:
      </Paragraph>
    </TextBlock>

    <v-row justify="start">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >
      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/Tendinite.jpg">
          <template #front>Tendinite</template>

          <template #back>
            Inflamação de um tendão, muitas vezes causada por movimentos repetitivos.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/Tenossinovite.jpg">
          <template #front>Tenossinovite</template>

          <template #back>
            Inflamação da bainha que envolve um tendão, levando a dor e inchaço.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/bursite.jpg">
          <template #front>Bursite</template>

          <template #back>
            Inflamação da bolsa sinovial, que pode resultar em dor e inchaço nas articulações.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/epicondilite.jpg">
          <template #front>Epicondilite</template>

          <template #back>
            Também conhecida como cotovelo de tenista, é uma lesão nos tendões que se ligam ao epicôndilo do cotovelo.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/Sindrome_do_tunel_do_carpo.jpg">
          <template #front>Síndrome do túnel do carpo</template>

          <template #back>
            Compressão do nervo mediano no pulso, causando formigamento e fraqueza nas mãos.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/dedo_em_gatilho.jpg">
          <template #front>Dedo em gatilho</template>

          <template #back>
            Condição em que um dedo fica preso em uma posição dobrada.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/sindrome_do_desfiladeiro.jpg">
          <template #front>Síndrome do desfiladeiro torácico</template>

          <template #back>
            Compressão dos nervos e vasos sanguíneos na região do pescoço e ombro.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/bursite.jpg">
          <template #front>Síndrome do pronador redondo</template>

          <template #back>
            Inflamação da bolsa sinovial, que pode resultar em dor e inchaço nas articulações.
          </template>
        </FlipCardImg>
      </v-col>

      <v-col cols="4" sm="auto">
        <FlipCardImg bgImg="modulo_02/flipcard/mialgias.jpg">
          <template #front>Mialgias</template>

          <template #back>
            Dores musculares frequentemente relacionadas à fadiga ou lesões musculares.
          </template>
        </FlipCardImg>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Além dos exemplos mencionados, outras condições de saúde podem estar
        relacionadas às atividades profissionais, e essas têm o potencial de
        prejudicar a eficiência de uma organização. Além disso, desempenham um
        papel crucial nas faltas ao trabalho, resultando em custos
        significativos relacionados a indenizações, tratamentos médicos e
        reintegração de funcionários às suas funções (BRASIL, 2015)
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.1 Impacto das doenças musculoesqueléticas nos custos de saúde da empresa"
    >
      <Paragraph>
        De acordo com Pinto (2022), observou-se um aumento progressivo nas
        notificações de LER/DORT durante o período de 2007 a 2017, seguido de
        uma diminuição até o ano de 2020 e um leve aumento em 2021. Esse
        fenômeno pode estar relacionado à pandemia de Covid-19, que levou as
        pessoas a evitar hospitais e locais de trabalho, impactando a capacidade
        de notificação (PINTO, 2022).
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem
          legenda="Imagem 2:  Casos de  LER/DORT - Brasil 2007-2021"
          fonte="Fonte: PINTO (2022)"
          src="modulo_02/imagem2.png"
        />
      </v-col>
    </v-row>

    <BoxIcon tipo="voce_sabia">
      Os trabalhadores mais afetados pelas doenças muscoesqueléticas são
      predominantemente do sexo feminino, com idades entre 40 e 49 anos, e
      níveis de escolaridade até o ensino médio. Eles geralmente desempenham
      funções na indústria ou no comércio. Quanto aos fatores de risco, as
      notificações frequentemente mencionam exposição a jornadas de trabalho
      superiores a 6 horas, falta de pausas adequadas, realização de movimentos
      repetitivos e ambiente de trabalho estressante (PINTO, 2022).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Os dados indicam que uma grande proporção dos trabalhadores desenvolve
        incapacidades temporárias, resultando em altos índices de absenteísmo
        devido a esses distúrbios musculoesqueléticos relacionados ao trabalho.
        Isso ressalta o impacto econômico e previdenciário desse problema,
        destacando a importância da colaboração entre empregadores e autoridades
        públicas na implementação de medidas preventivas e na garantia de
        condições de trabalho adequadas para os indivíduos (PINTO, 2022).
      </Paragraph>

      <Paragraph>
        Existem várias abordagens que podem ser aplicadas para identificar e
        mitigar problemas no ambiente de trabalho, com o objetivo de reduzir
        custos unitários. Um exemplo é a Análise Ergonômica do Trabalho (AET),
        que é utilizada para diagnosticar e corrigir situações reais no local de
        trabalho. Essa abordagem visa minimizar a fadiga, o estresse, os erros e
        os acidentes por meio de análises aprofundadas e utiliza diversas
        ferramentas para avaliar os riscos de desenvolvimento de lesões
        musculoesqueléticas (BRASIL, 2020).
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.2 Análise Ergonômica preliminar e Análise Ergonômica do Trabalho"
    >
      <Paragraph>
        A fase inicial da análise ergonômica pode ser conduzida utilizando
        abordagens qualitativas, semiquantitativas, quantitativas ou uma
        combinação delas. O Ministério do Trabalho oferece orientações para
        essas etapas iniciais por meio do Programa de Gerenciamento de Riscos
        (PGR) e da NR 17. Um fluxograma detalhado desse processo é descrito a
        seguir, conforme estabelecido pelas diretrizes de 2020 (BRASIL, 2020).
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="12">
        <Imagem
          legenda="Imagem 4:  Programa de Gerenciamento de Riscos (PGR)  NR 17"
          fonte="Adaptado da NR17."
          src="modulo_02/imagem4.svg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A tomada de ações ergonômicas geralmente ocorre em resposta a demandas
        urgentes, com o objetivo de encontrar soluções apropriadas para essas
        situações. No entanto, é crucial realizar uma análise preliminar para
        identificar indicadores e circunstâncias de trabalho que requerem
        adaptações.
      </Paragraph>

      <Paragraph>
        Diferentemente da análise preliminar, a Análise Ergonômica do Trabalho
        (AET) é realizada quando se percebe a necessidade de uma investigação
        mais profunda da situação, especialmente quando são identificadas
        inadequações ou deficiências nas ações já implementadas. A AET é
        responsável por analisar, diagnosticar e intervir nas ações por meio das
        seguintes etapas: avaliação da demanda e do funcionamento da
        organização, dos processos de trabalho, das situações laborais e das
        atividades desempenhadas; descrição e justificação da escolha de
        métodos, técnicas e ferramentas adequados para a análise e sua
        aplicação; e apresentação dos resultados, validação e revisão das
        intervenções realizadas, quando necessário, com a participação dos
        trabalhadores (BRASIL, 2020).
      </Paragraph>

      <Paragraph>
        Existem diversas ferramentas disponíveis para conduzir uma análise
        ergonômica do trabalho, e a escolha da ferramenta adequada depende do
        tipo de atividade que está sendo analisada. Duas dessas ferramentas são
        o método RULA e o Method-Time Measurement (MTM) (DOMBIDAU JUNNIOR,
        SILVA, CANEDO, 2017; RIBEIRO JÚNIOR, CHAVES, 2012). Vejamos a seguir
        como essas ferramentas se caracterizam:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Método Rapid Upper Limb Assessment (RULA)</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Pode ser traduzido como Avaliação Rápida dos Membros Superiores,
          permite avaliar a sobrecarga biomecânica dos membros superiores e do
          pescoço. Utiliza uma planilha específica que atribui escores com base
          nos membros analisados, levando em consideração os tipos de
          movimentos, a carga aplicada e a postura. Essa avaliação fornece um
          indicativo de risco para o desenvolvimento de lesões, sendo que
          pontuações mais altas indicam um maior risco (DOMBIDAU JUNNIOR, SILVA,
          CANEDO, 2017).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Method-Time Measurement (MTM)</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Pode ser traduzido como Medição de Método-Tempo, tem como objetivo
          identificar o método de trabalho e os movimentos elementares
          necessários para executar uma tarefa. Essa ferramenta desempenha um
          papel fundamental na análise ergonômica, pois simplifica movimentos
          complexos e elimina movimentos desnecessários. O usuário precisa
          definir completamente o método de trabalho durante a fase de
          planejamento para obter um tempo padrão (RIBEIRO JÚNIOR, CHAVES,
          2012).
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Essas ferramentas são essenciais para garantir a eficiência e a
        segurança nas atividades laborais.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="Importância da implementação de ações preventivas relacionadas a adequações ergonômicas do ambiente de trabalho"
    >
      <Paragraph>
        Versatilidade, disposição e polivalência. Três características de um
        colaborador ideal para uma organização, capaz de desenvolver diversas
        atividades e estar disposto a novos desafios. No entanto, a ausência de
        análise e ações efetivas de ergonomia podem influir negativamente no
        desenvolvimento dessa versatilidade.
      </Paragraph>

      <Paragraph>
        Nesse contexto, para implementar ações preventivas para o
        desenvolvimento de lesões musculoesqueléticas, é necessário uma análise
        precisa da ergonomia, dos processos de trabalho, características dos
        colaboradores e mapeamento correto dos movimentos repetitivos.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem
          legenda="Imagem 5:  Programa de Gerenciamento de Riscos (PGR)  NR 17"
          fonte="Fonte: PINTO (2022)"
          src="modulo_02/imagem4.jpg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Casos de hérnia de disco, transtornos musculoesqueléticos no ombro e distensões musculares, por exemplo, costumam evoluir mal, principalmente quando as empresas não têm postos de trabalho ergonomicamente melhorados. Os colaboradores nessas condições costumam não se integrar bem no ambiente de trabalho quando voltam da Previdência Social. Desta forma, em muitas situações, torna-se mais barato corrigir e evitar novos problemas do que arcar com os custos.
      </Paragraph>

      <Paragraph>
        Em suma, pudemos observar que a ergonomia é uma ciência que melhora a relação das máquinas com os seres humanos e os benefícios de sua aplicação impactam tanto as empresas quanto os colaboradores. Ela é garantida aos funcionários por meio da NR 17 e a falta de seu cumprimento pode gerar consequências negativas tanto para os empregados quanto para os empregadores.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Passamos rapidamente sobre os tipos de ergonomia, onde entendemos as diferenças e a aplicabilidade de cada um deles, explicamos um pouco sobre o que é LER/DORT enfatizando suas semelhanças e diferenças e os impactos destas doenças nos custos da empresa. Por fim, explicitamos como uma empresa pode analisar, diagnosticar e intervir nas condições de trabalho através da Análise Ergonômica preliminar e Análise Ergonômica do Trabalho.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-02/topico-01"
      nextName="Módulo 03"
      nextLink="modulo-03"
      :lastTopico="true"
      referenciasLink="modulo-02/referencias"
      atividadeLink="modulo-02/atividade"
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
import FlipCardImg from "@/components/FlipCardImg.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
    FlipCardImg,
    Accordion,
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
