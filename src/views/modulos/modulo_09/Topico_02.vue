<template>
  <AulaTemplate
    :titulo="$store.state.modulos[8].titulo"
    :numero="$store.state.modulos[8].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 02 - Valores humanos para instituição da cultura de Segurança e Saúde do Trabalhador ">
      <Paragraph>
        Neste tópico, continuaremos nossa análise das variáveis relacionadas à cultura de saúde e segurança no ambiente de trabalho, concentrando-nos agora em outros aspectos.
      </Paragraph>

      <Paragraph>
      Vamos descobrir!
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>
        Olá! Vimos na aula anterior deste módulo a importância de uma cultura de saúde e segurança no trabalho voltada para ações de promoção da saúde. Iremos continuar discutindo sobre, porém com foco em outras variáveis.
      </Paragraph>

      <Paragraph>
        Você sabia que as situações evidenciadas como causa raiz para a ocorrência da grande maioria dos acidentes de trabalho estão diretamente relacionadas com o comportamento humano? Há algum outro fator influenciável para a cultura de segurança? Vamos descobrir!
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
          video-id="ngixt3suaWg"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        O comportamento humano é o conjunto de ações que o homem executa através de seu contato com o mundo, esse é o fator que pode ser observado, registrado, filmado e até mesmo quantificado. As situações evidenciadas como causa raiz para a ocorrência da grande maioria dos acidentes de trabalho estão diretamente relacionadas com o comportamento humano, sendo o fator mais visível, imediato e superficial (MELO et al, 2001).
      </Paragraph>

      <Paragraph>
        Então, como podemos melhorar o comportamento dos trabalhadores? Bem, vejamos três maneiras de se fazer isso (MELO et al, 2001):
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
          <template #front>Mudar os homens</template>

          <template #back>
            Adapte a seleção de trabalhadores de acordo com as demandas específicas da tarefa.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>Transformar os homens</template>

          <template #back>
            Invista na capacitação e desenvolvimento dos trabalhadores, proporcionando treinamento técnico e oportunidades de reciclagem.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>Exercer pressão sobre os homens</template>

          <template #back>
            Exercer uma pressão moral constante sobre os trabalhadores, fazendo uso de palavras de ordem, sanções disciplinares e recompensas.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Consideremos como as pessoas se desenvolvem ao longo da vida, um processo influenciado pelo aprendizado e pelas experiências vivenciadas nos ambientes em que estão inseridas. Essas experiências desempenham um papel fundamental na definição do que cada indivíduo valoriza e considera importante. Dado que cada pessoa passa por experiências únicas desde a infância, é perfeitamente natural que haja variações nos valores de um indivíduo para outro.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      No contexto de uma organização, a maneira mais eficaz de transmitir valores é por meio do exemplo. Portanto, as pessoas que ocupam posições de liderança desempenham um papel crucial na formação desses valores por meio de suas atitudes.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Por outro lado, o comportamento que observamos diariamente nas organizações é resultado de forças objetivas e também de fatores subjetivos. É importante entender que as organizações não são apenas estruturas técnicas e racionais; elas têm aspectos culturais, alguns visíveis e outros invisíveis. As organizações consistem em tarefas que precisam ser gerenciadas, mas são os funcionários que realmente dão vida a essas tarefas. Eles influenciam a forma como a organização opera, pois aspiram incorporar tanto ações racionais quanto intuitivas em seu trabalho, dando significado a ele.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 2 : A liderança pode transformar a cultura de uma organização."
          fonte="Fonte: Freepick.com"
          src="modulo_09/imagem2.jpeg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Portanto, a liderança das organizações desempenha um papel fundamental na condução de mudanças culturais. Eles têm a capacidade e os recursos necessários para incorporar conhecimento e habilidades que podem modificar os princípios culturais, provocando mudanças reais e necessárias.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.1 Variáveis organizacionais envolvidas na implementação da cultura de segurança.">
      <Paragraph>
        Na perspectiva da cultura de segurança, a ideia central é que a responsabilidade por manter um ambiente seguro recai sobre todos. Nesse contexto, os trabalhadores compreendem que a segurança vai além das tarefas específicas de seus cargos; eles se comprometem a identificar comportamentos e condições inseguras, colaborando na resolução de quaisquer problemas identificados.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Em uma cultura de segurança, não podemos tratar a segurança do trabalho como algo que pode ser flexibilizado ou alterado de acordo com a situação. Pelo contrário, a segurança do trabalho é um valor que se sobrepõe a qualquer outra prioridade. Manter esse compromisso é uma missão desafiadora, mas essencial.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        A segurança deve ser considerada uma estratégia essencial nas organizações, abrangendo todas as áreas de atuação. Ela está intrinsecamente ligada à qualidade, produtividade, lucratividade e eficiência. Trabalhar com segurança não deve ser apenas um requisito formal, mas sim um valor adotado por todos os membros da organização, independentemente de seus cargos.
      </Paragraph>

      <Paragraph>
        Existem três fatores fundamentais que moldam a cultura de segurança, conforme ilustrado a seguir:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="11">
        <Imagem
          legenda="Imagem 3: A cultura de segurança em três pilares."
          fonte="Fonte: RIBEIRO; HENNEBERG; CATAI, 2015."
          src="modulo_09/imagem3.svg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        A imagem fornece uma visão geral sucinta da complexa rede de fatores que moldam a cultura de segurança no ambiente de trabalho. Vamos aprofundar nossa compreensão, detalhando esses pilares.
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
          <template #front>Fatores Ambientais</template>

          <template #back>
            Inclui equipamentos, ferramentas, o layout do ambiente e a temperatura. Essas condições desempenham um papel essencial na segurança no local de trabalho.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>Fatores Pessoais</template>

          <template #back>
            Aqui, estamos lidando com atitudes, crenças e características de personalidade dos indivíduos. Esses fatores têm um impacto significativo em como as pessoas se comportam no trabalho em termos de segurança.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>Fatores Comportamentais</template>

          <template #back>
            Refere-se às ações dos trabalhadores no que diz respeito à segurança e ao risco no trabalho. Ir além das obrigações para garantir a segurança de outras pessoas é parte desse aspecto.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        É importante notar que todos esses fatores são dinâmicos e estão interconectados. Quando um deles muda, pode afetar os outros dois. Por exemplo, quando os trabalhadores optam por realizar suas atividades com segurança, estão demonstrando uma atitude mental de segurança. Esses comportamentos podem se tornar hábitos e, na maioria das vezes, resultam em mudanças no ambiente de trabalho.
      </Paragraph>

      <Paragraph>
        Para concluir, é fundamental destacar que os fatores pessoais e comportamentais desempenham um papel fundamental na prática da segurança no trabalho e na construção de uma cultura de segurança sólida e eficaz. Eles representam os alicerces sobre os quais se baseia a segurança no ambiente de trabalho, moldando atitudes e ações que promovem a proteção de todos os envolvidos. Ao reconhecer a influência desses fatores e trabalhar ativamente para fortalecê-los, as organizações podem alcançar níveis mais elevados de segurança e bem-estar para seus colaboradores.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.2 A influência da cultura como estratégia de controle de custos de segurança e saúde na empresa.">
      <Paragraph>
        A gestão de Segurança e Saúde Ocupacional é um aspecto fundamental em qualquer organização, pois perdas, injúrias e danos à propriedade resultantes de suas atividades podem ter várias implicações, como processos de responsabilidade civil devido aos riscos associados aos produtos ou serviços oferecidos, bem como altos índices de absenteísmo e afastamentos devido a acidentes (SANTANA, 2012).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Você sabia que é fundamental que as empresas assegurem ambientes de trabalho livres de riscos inaceitáveis, visando à segurança e ao bem-estar físico, mental e social de seus trabalhadores e partes interessadas? Uma estratégia comumente adotada para atingir esse objetivo é o desenvolvimento e a implementação de uma cultura de segurança e saúde ocupacional (MENDES; WUNSCH, 2007).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Portanto, acidentes e incidentes são, frequentemente, eventos que exigem medidas preventivas, envolvendo o planejamento, organização e avaliação do desempenho dos meios de controle implementados. Esses eventos estão, com frequência, relacionados a múltiplas causas, em vez de uma única causa específica.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="7">
        <Imagem
          legenda="Imagem 4: A prevenção de acidentes envolve planejamento e controle"
          fonte="Fonte: Freepick.com"
          src="modulo_09/imagem4.jpeg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Embora análises simplificadas e rápidas possam apontar para causas imediatas associadas a fatores humanos ou problemas técnicos, em grande parte, tais eventos resultam de deficiências na gestão responsável pela segurança e saúde ocupacional relacionada a esses fatores. Sendo assim, é essencial que os gestores encarregados de supervisionar os aspectos de segurança e saúde na organização dediquem especial atenção aos fatores humanos e à tecnologia empregada (RIBEIRO; HENNEBERG; CATAI, 2015).
      </Paragraph>

      <Paragraph>
        É importante destacar que qualquer acidente gera um prejuízo econômico considerável, uma vez que todos os custos diretos e indiretos são suportados pela empresa e afetam todas as partes envolvidas. Portanto, é crucial que os empresários estejam cientes dos recursos desperdiçados em cada acidente, o que deve servir como motivação para investimentos destinados a reduzir ou eliminá-los.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      É importante destacar que os custos totais da falta de segurança podem ser desafiadores de quantificar, uma vez que englobam as consequências dos acidentes e as medidas corretivas que se seguem. Por outro lado, os custos associados à segurança estão relacionados ao planejamento para prevenir acidentes e às ações de controle implementadas no local de trabalho (PORTO; MARTINS, 2019).
    </BoxIcon>

    <BoxIcon tipo="recapitulando">
      <Paragraph>
        Ao chegarmos ao final deste módulo, é importante enfatizar a influência dos fatores humanos, pessoais e comportamentais na cultura de saúde e segurança das empresas. Portanto, é essencial que os gestores responsáveis pelo controle dos aspectos de segurança e saúde da organização dediquem atenção especial ao fator humano e à tecnologia utilizada.
      </Paragraph>

      <Paragraph>
        Vimos que análises rápidas podem sugerir causas imediatas relacionadas a fatores humanos ou problemas técnicos, mas, em grande parte, esses eventos refletem falhas na gestão da segurança e saúde ocupacional. A promoção de uma cultura de segurança sólida é uma missão contínua e crucial para garantir o bem-estar de todos os envolvidos.
      </Paragraph>
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-09/topico-01"
      :lastTopico="true"
      referenciasLink="modulo-09/referencias"
      atividadeLink="modulo-09/atividade"
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

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
    FlipCard
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
