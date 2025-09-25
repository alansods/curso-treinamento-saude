<template>
  <AulaTemplate :titulo="$store.state.modulos[2].titulo" :numero="$store.state.modulos[2].numero" titleSize="4">
    <TextBlock
      topico="Tópico 02 - Desenvolvimento dos Programas de Qualidade de Vida no Trabalho e de Gerenciamento da Saúde Populacional">
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
        <Imagem legenda="Imagem 2: É fundamental investir na QVT para um ambiente corporativo saudável e produtivo"
          fonte="Fonte: Freepick. com" src="modulo_03/imagem2.jpg" />
      </v-col>
    </v-row>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>
        Olá, neste vídeo, vamos aprender um pouco sobre o desenvolvimento do programa de qualidade de vida no trabalho e
        do programa de gerenciamento da saúde da população.
      </Paragraph>

      <Paragraph>
        <strong style="cursor: pointer" @click="dialog = true"><u>Clique aqui</u></strong>
        para iniciar o vídeo.
      </Paragraph>
    </BoxIcon>

    <v-dialog v-model="dialog" max-width="800" @input="dialogInput">
      <v-responsive :aspect-ratio="16 / 9" class="pa-0 ma-0">
        <youtube ref="videoPlayer" video-id="rrl_vN3ZCRc" style="border: solid 3px white" fitParent />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Deste modo, a preocupação com a QVT pode se manifestar em uma
        organização de maneiras variadas:
      </Paragraph>
    </TextBlock>

    <v-row>
      <v-col cols="12"><small class="text-center d-block grey--text">(Clique nos cards abaixo para ver o
          conteúdo)</small></v-col>

      <v-col cols="12" sm="6">
        <FlipCard>
          <template #front>Políticas de Gestão de Pessoas</template>

          <template #back>
            <p class="text-h5">
              - Valores voltados para o bem-estar e desenvolvimento saudável das
              dinâmicas de trabalho.
            </p>

            <p class="text-h5">- Prevenção de acidentes e doenças.</p>
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="6">
        <FlipCard>
          <template #front>Programas e Intervenções Específicas</template>

          <template #back>
            <p class="text-h5">- Promoção da saúde e bem-estar do trabalhador.</p>
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

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Ambiente físico de trabalho</v-expansion-panel-header>
        <v-expansion-panel-content>
          Refere-se às questões de segurança no ambiente físico de trabalho
          (estrutura, ar, equipamentos, produtos, processos de produção,
          veículos). Cuidar do ambiente físico é o início de tudo, e a prevenção
          da exposição a agentes que podem trazer prejuízos à saúde do
          trabalhador se inicia pela identificação desses agentes, os quais
          devem ser avaliados e controlados.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Ambiente psicossocial de trabalho</v-expansion-panel-header>
        <v-expansion-panel-content>
          Cultura organizacional como um todo, que refletem as atitudes,
          valores, crenças e práticas diárias na empresa, afetando o bem-estar
          físico e mental dos trabalhadores.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Recursos pessoais em saúde no ambiente de
          trabalho</v-expansion-panel-header>
        <v-expansion-panel-content>
          Promover um estilo de vida saudável aos colaboradores, incluindo
          serviços, informações, flexibilidade e ambiente de incentivo às
          práticas saudáveis. Orientar, por meio de programas de educação e
          sensibilização, a atividade física, a alimentação saudável, o não
          tabagismo e a moderação no uso de álcool. As empresas devem buscar
          oferecer acesso à assistência médica adequada para os trabalhadores,
          com possibilidade de diagnóstico e tratamento efetivos e de qualidade.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Envolvimento da empresa com a comunidade</v-expansion-panel-header>
        <v-expansion-panel-content>
          Trabalho da empresa junto à comunidade, engajando e sendo engajada,
          ofertando recursos e/ou conhecimentos que possibilitam a melhoria da
          saúde e do bem-estar dos trabalhadores, suas famílias e dos membros da
          comunidade.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

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
      Mesmo aqueles indivíduos com
      <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')">notas de risco</GlossarioButton>
      mais baixas podem se beneficiar de serviços como lembretes para exames
      preventivos, opções de comunicação com profissionais de saúde e incentivos
      para manter hábitos de vida saudáveis.
    </BoxIcon>

    <GlossarioDialog title="Notas de Risco">
      <Paragraph>
        <strong>Notas de risco:</strong> Classificações usadas para avaliar o
        risco de doenças ou condições de saúde, indicando a probabilidade de uma
        pessoa desenvolver certos problemas de saúde com base em fatores como
        histórico familiar, estilo de vida e outros indicadores.
      </Paragraph>
    </GlossarioDialog>

    <TextBlock>
      <Paragraph>
        Para efetuar essa tarefa, é fundamental que se disponha de dados
        clínicos, financeiros e operacionais, permitindo a construção de uma
        infraestrutura de gestão de cuidados. Essa infraestrutura inclui, tanto
        em nível individual quanto em seu impacto na coletividade, os seguintes
        processos:
      </Paragraph>
    </TextBlock>

    <v-row>
      <v-col cols="12"><small class="text-center d-block grey--text">(Clique nos cards abaixo para ver o
          conteúdo)</small></v-col>

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front>Estratificação de Risco</template>

          <template #back>
            A estratificação de risco envolve a categorização de indivíduos com
            base em fatores de risco para direcionar cuidados e recursos de
            saúde de forma eficiente, priorizando aqueles com maior
            probabilidade de desenvolver problemas de saúde.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front>Prestação de Cuidados</template>

          <template #back>
            A prestação de cuidados é o processo de oferecer assistência médica
            e tratamento para promover a saúde e bem-estar dos pacientes,
            abrangendo desde consultas médicas até educação sobre hábitos
            saudáveis.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front>Acompanhamento Contínuo dos Resultados</template>

          <template #back>
            O acompanhamento contínuo dos resultados envolve a avaliação regular
            dos efeitos das intervenções de saúde, permitindo ajustes no
            tratamento com base na evolução do paciente e garantindo a eficácia
            das ações de saúde.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

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

    <NavFooter prevName="Tópico 01" prevLink="modulo-03/topico-01" nextName="Tópico 03" nextLink="modulo-03/topico-03"
      :lastTopico="false" />
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
import Accordion from "@/components/Accordion.vue";
import GlossarioButton from "@/components/GlossarioButton.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
    FlipCard,
    Accordion,
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
