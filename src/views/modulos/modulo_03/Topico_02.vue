<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <TextBlock
      topico="Tópico 02 - Desenvolvimento dos Programas de Qualidade de Vida no Trabalho e de Gerenciamento da Saúde Populacional"
    >
      <Paragraph>
        Neste tópico, abordaremos os programas de Qualidade de Vida no Trabalho
        (QVT) e de Gerenciamento da Saúde da População. Essas duas iniciativas
        estão intrinsecamente relacionadas e desempenham um papel essencial na
        promoção do bem-estar individual e na construção de sociedades mais
        saudáveis e produtivas.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.1 Programa de Qualidade de Vida no Trabalho">
      <Paragraph>
        Atualmente, o programa de qualidade de vida no trabalho (QVT) envolve
        ações para promover hábitos saudáveis entre os funcionários, criando um
        ambiente de trabalho que valoriza o bem-estar das pessoas. É uma
        iniciativa prática e eficaz que traz benefícios para os trabalhadores e
        a empresa, enfatizando alguns aspectos cruciais:
      </Paragraph>

      <div class="my-10">
        <v-alert border="left" color="blue" dark>
          O cuidado com o bem-estar dos colaboradores.
        </v-alert>

        <v-alert border="left" color="blue" dark>
          A busca pela eficácia organizacional.
        </v-alert>

        <v-alert border="left" color="blue" dark>
          A participação ativa dos trabalhadores nas tomadas de decisão e na
          solução de questões relacionadas ao trabalho.
        </v-alert>
      </div>

      <Paragraph>
        É fundamental reconhecer que a QVT desempenha um papel essencial no
        estímulo do pleno desenvolvimento do potencial dos funcionários,
        promovendo, assim, o alcance do seu desempenho máximo. Portanto, é
        imperativo que as empresas incorporem essa preocupação de forma
        estratégica, a fim de alinhar-se com os objetivos organizacionais e
        assegurar o êxito global (CARNEIRO, 2018).
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem
          legenda="Imagem 2: É fundamental investir na QVT para um ambiente corporativo saudável e produtivo"
          fonte="Fonte: Freepick. com"
          src="modulo_03/imagem2.jpg"
        />
      </v-col>
    </v-row>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph> Falta o texto </Paragraph>

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
          video-id="TrwjLbkPSI0"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Deste modo, a preocupação com a QVT pode se manifestar em uma
        organização de maneiras variadas:
      </Paragraph>
    </TextBlock>

    <v-row>
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >

      <v-col cols="12" sm="6">
        <FlipCard>
          <template #front>Políticas de Gestão de Pessoas</template>

          <template #back>
            <p>
              - Valores voltados para o bem-estar e desenvolvimento saudável das dinâmicas de trabalho.
            </p>

            <p>
              - Prevenção de acidentes e doenças.
            </p>
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="6">
        <FlipCard>
          <template #front>Programas e Intervenções Específicas</template>

          <template #back>
            <p>
              - Promoção da saúde e bem-estar do trabalhador.
            </p>
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Tais perspectivas são complementares e, para gerarem os resultados
        almejados de modo que sejam benéficos, tanto para a empresa quanto para
        o seu corpo profissional, devem ser pensadas de acordo com as
        necessidades específicas da situação de trabalho avaliada, de forma a
        permitir a implantação de medidas que lidem com questões reais
        concernentes à realidade organizacional. Assim, é possível perceber que
        a construção e a gestão de programas de QVT podem incluir formatos e
        ações bastante diversificadas, ainda que tenham um objetivo comum
        (CARNEIRO, 2018).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      É fundamental destacar que a gestão da QVT deve incorporar o tema "saúde".
      Afinal, o bem-estar não apenas possui um valor inestimável para os
      indivíduos, mas também desempenha um papel crítico no sucesso das empresas
      e nos negócios. Dentro desse contexto, o ambiente de trabalho oferece
      oportunidades e recursos exclusivos para aprimorar a saúde de todos os
      colaboradores, impactando positivamente tanto no bem-estar pessoal quanto
      no desempenho organizacional.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Neste contexto, a OMS propôs um modelo para promoção de ambientes de
        trabalho saudáveis que pode ser aplicado para diferentes culturas e
        atividades, conforme a seguir:
      </Paragraph>
    </TextBlock>

    <h1>ACCORIONNNN</h1>

    <TextBlock subTopico="2.2 Gerenciamento da Saúde Populacional">
      <Paragraph>
        A saúde populacional envolve a análise dos indicadores de saúde em
        grupos específicos, em contraposição à avaliação da saúde de indivíduos
        isolados. Esses grupos podem variar desde a população de um país ou
        cidade até os beneficiários de seguros ou os funcionários de uma
        organização.
      </Paragraph>

      <Paragraph>
        Com o intuito de fomentar a criação e a implementação de estratégias
        voltadas para a melhoria da saúde da coletividade, as empresas têm
        desenvolvido programas de gestão da saúde da população que buscam
        aprimorar os resultados de saúde de seus colaboradores, realizando o
        monitoramento e a identificação de fatores de risco para DCNT neste
        grupo.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Mesmo aqueles indivíduos com notas de risco mais baixas podem se
      beneficiar de serviços como lembretes para exames preventivos, opções de
      comunicação com profissionais de saúde e incentivos para manter hábitos de
      vida saudáveis.
    </BoxIcon>

    <h1>GLOSSARIO</h1>

    <TextBlock>
      <Paragraph>
        Para efetuar essa tarefa, é fundamental que se disponha de dados
        clínicos, financeiros e operacionais, permitindo a construção de uma
        infraestrutura de gestão de cuidados. Essa infraestrutura inclui, tanto
        em nível individual quanto em seu impacto na coletividade, os seguintes
        processos:
      </Paragraph>
    </TextBlock>

    <h1>FLIPCARRD</h1>

    <BoxIcon tipo="voce_sabia">
      As métricas de qualidade desempenham um papel central na avaliação de um
      programa de gestão da saúde da população, mas muitas organizações
      enfrentam desafios ao identificar quais métricas utilizar, quais dados são
      necessários e como transformar os dados de desempenho em melhorias
      práticas.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Essas estratégias e serviços preventivos visam a manter o nível de saúde
        mais elevado possível em cada indivíduo, prevenindo crises de saúde,
        reduzindo hospitalizações desnecessárias e aprimorando a qualidade de
        vida geral. Como resultado, as empresas podem reduzir o absenteísmo,
        aumentar a satisfação dos funcionários e promover um melhor estado de
        saúde no geral.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      No próximo tópico, iremos compreender a importância do uso racional do
      plano de saúde empresarial.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-03/topico-01"
      nextName="Tópico 03"
      nextLink="modulo-03/topico-03"
      :lastTopico="false"
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
    return {};
  },

  methods: {},

  created() {
    this.$store.state.progresso_modulo_01.items.topico_02 = true;
    this.$store.commit("SALVAR_PROGRESSO");
  },
};
</script>

<style scoped></style>
