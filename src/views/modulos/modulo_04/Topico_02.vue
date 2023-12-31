<template>
  <AulaTemplate
    :titulo="$store.state.modulos[3].titulo"
    :numero="$store.state.modulos[3].numero"
    titleSize="4"
  >
    <TextBlock
      topico="Tópico 02 - Acompanhamento da execução dos programas  de SST nas empresas"
    >
      <Paragraph>
        Neste tópico, vamos explorar mais duas ferramentas que desempenham um
        papel fundamental na gestão da saúde do trabalhador e no acompanhamento
        da execução dos programas.
      </Paragraph>

      <Paragraph> Vamos começar? </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph
        >Vimos na primeira aula sobre os programas que devem existir nas
        empresas. No entanto, não basta implementar os programas, é necessário
        acompanhar a execução dos mesmos. Portanto, nesta segunda aula iremos
        aprender sobre outras duas ferramentas utilizadas na saúde do
        trabalhador para o acompanhamento da execução dos programas. Vamos
        lá?</Paragraph
      >

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
          video-id="ZPPympHHdck"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock
      subTopico="2.1 Laudo Técnico das Condições de Ambiente de Trabalho (LTCAT)"
    >
      <Paragraph>
        O Laudo Técnico das Condições de Ambiente de Trabalho (LTCAT) é um
        documento que desempenha um papel essencial ao atestar a presença de
        agentes ambientais prejudiciais à saúde do trabalhador, determinando
        assim se ele possui ou não direito à aposentadoria especial (HOLZ,
        2018). Sua origem remonta à Lei Previdenciária nº 8.213/91, que se
        tornou necessária quando o Instituto Nacional do Seguro Social (INSS)
        precisou estabelecer critérios para avaliar as condições de trabalho nas
        empresas.
      </Paragraph>

      <Paragraph>
        É importante destacar que o Laudo Técnico deve estar bem documentado no
        Perfil Profissiográfico Previdenciário (PPP), um relatório que reúne
        todas as informações necessárias para a adoção de medidas preventivas e
        fiscalização da saúde e segurança dos trabalhadores. Isso ocorre porque
        o LTCAT está sujeito à legislação previdenciária e pode ser solicitado a
        qualquer momento por auditores fiscais do INSS para verificar se um
        colaborador tem direito à aposentadoria especial (HOLZ, 2018). Além
        disso, o LTCAT deve ser atualizado anualmente ou sempre que ocorrerem
        alterações estruturais no ambiente de trabalho.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A elaboração do LTCAT é uma tarefa que deve ser conduzida exclusivamente
      por engenheiros de segurança do trabalho ou médicos do trabalho. Ele pode
      ser desenvolvido de forma coletiva ou individual, com o objetivo de
      avaliar as condições ambientais de trabalho e a eficácia das medidas de
      controle, seja em âmbito individual ou coletivo.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para compilar as informações necessárias para a elaboração do LTCAT, é
        essencial seguir algumas etapas específicas, conforme veremos a seguir
        (HOLZ, 2018):
      </Paragraph>

      <div class="my-10">
        <v-alert border="left" color="blue" dark> Identificação da empresa, setor e função do trabalhador;</v-alert>
        <v-alert border="left" color="blue" dark> Definir se o Laudo é individual ou coletivo, descrevendo as medidas de controle existentes, atividade e localização de possíveis fontes geradoras;</v-alert>
        <v-alert border="left" color="blue" dark>Via e periodicidade de exposição ao agente nocivo;</v-alert>
        <v-alert border="left" color="blue" dark>Metodologia e procedimentos de avaliação do agente nocivo;</v-alert>
        <v-alert border="left" color="blue" dark>Identificação de agente nocivo capaz de causar dano à saúde e integridade física;</v-alert>
        <v-alert border="left" color="blue" dark>Procedimentos finais: identificação do médico do trabalho ou
            engenheiro de segurança com assinatura e data da realização da avaliação ambiental.</v-alert>
      </div>

      <Paragraph>
        O LTCAT deve conter informações cruciais relacionadas à existência de
        medidas de proteção que tenham o propósito de eliminar ou reduzir a
        intensidade dos agentes nocivos, conforme os limites de tolerância
        estabelecidos pela legislação vigente. É importante ressaltar que não
        basta apenas a existência dessas medidas; elas também devem ser
        aprovadas, adequadas e eficazes (HOLZ, 2018).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      A simples disponibilização de equipamentos de proteção individual ou
      coletiva não é suficiente. O uso efetivo, a manutenção adequada e a
      higienização regular desses equipamentos também desempenham um papel
      crucial (HOLZ, 2018).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        A aprovação das medidas de proteção é atestada por meio de um
        Certificado de Aprovação, emitido pelo Ministério do Trabalho e Emprego.
        Esse certificado assegura que os equipamentos de proteção foram
        adquiridos mediante uma análise técnica criteriosa, garantindo assim a
        sua característica "adequada".
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem fonte="Fonte: Freepik.com" src="modulo_04/frase_prof.svg" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Essa é uma pergunta importante, pois os custos por funcionário podem
        variar amplamente, dependendo de vários fatores, como a complexidade do
        trabalho, o número de condições ambientais a serem avaliadas, a
        localização geográfica, o tamanho da empresa, a empresa contratada para
        realizar o laudo e outros custos associados. Em organizações com riscos
        ambientais menos significativos, os custos tendem a ser mais baixos em
        comparação com empresas que exigem uma avaliação mais abrangente dos
        riscos ambientais.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem
          legenda="Imagem 3: LTCAT: Medidas de proteção aprovadas, adequadas e eficazes em foco."
          fonte="Fonte: RIBEIRO; HENNEBERG; CATAI, 2015."
          src="modulo_04/imagem4.jpeg"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Apesar de muitas empresas necessitarem de uma avaliação detalhada dos
        riscos ambientais, o aumento nos custos associados à elaboração do LTCAT
        é um investimento essencial. Os gestores empresariais precisam
        compreender a importância de alocar esses recursos para manter a
        conformidade dos processos. Isso ocorre porque as empresas que não
        mantêm o LTCAT atualizado podem estar sujeitas a multas e elas podem ser
        alvo de notificações e diligências solicitadas pelo Perito Médico
        Previdenciário, o que pode resultar em consequências financeiras e
        operacionais significativas (HOLZ, 2018). Portanto, a conformidade é
        fundamental para a saúde financeira e a reputação da empresa.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.2 Laudo de Insalubridade e Periculosidade (LIP)">
      <Paragraph>
        O laudo de Insalubridade e Periculosidade (LIP) é um documento técnico
        que tem a finalidade de atestar as condições insalubres e o nível de
        periculosidade nos ambientes de trabalho (HOLZ, 2018).
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      O termo "insalubre" deriva do latim e refere-se a tudo o que pode causar
      doença. Por outro lado, "periculosidade" diz respeito a situações de
      trabalho envolvendo atividades consideradas perigosas, que oferecem alto
      risco ao trabalhador devido à exposição contínua a certas situações.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        As condições de trabalho que oferecem riscos são regulamentadas pelas
        Normas Regulamentadoras da Consolidação das Leis Trabalhistas (CLT). O
        objetivo é proporcionar segurança tanto para os empregados quanto para
        os empregadores, ao determinar quais atividades são consideradas
        insalubres e perigosas. Além disso, essas normas estabelecem valores
        fixos de adicionais a serem pagos ao trabalhador, dependendo do grau de
        exposição. No entanto, a comprovação da condição insalubre e perigosa
        fica a cargo do órgão competente regional, e isso é feito por meio do
        LIP, assinado por um engenheiro de segurança do trabalho ou médico do
        trabalho regional, devidamente habilitado (HOLZ, 2018). Eles também
        determinam o valor adicional a ser pago, incidindo sobre o salário
        mínimo da região, de acordo com o grau de exposição ao risco.
      </Paragraph>

      <Paragraph>
        A Norma Regulamentadora Nº15 de 2022 descreve as situações de trabalho
        que dão direito ao adicional de insalubridade, especificando os agentes
        que caracterizam um ambiente insalubre. As informações estão descritas
        na tabela a seguir:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Tabela 1. Tipos de agentes insalubres."
      fonte="Fonte: NR-15,2022."
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            TIPO DE AGENTE
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            EXEMPLO
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Físico</td>
          <td>
            Ruído, calor, radiações ionizantes e não ionizantes, vibrações,
            frio, umidade.
          </td>
        </tr>

        <tr>
          <td>Químico</td>
          <td>Poeiras, fumo, névoas, neblina, gases e vapores.</td>
        </tr>

        <tr>
          <td>Biológico</td>
          <td>Bactérias, fungos, parasitas, vírus.</td>
        </tr>
      </tbody>
    </Table>

    <TextBlock>
      <Paragraph>
        Todas as atividades laborais que ultrapassem o limite de tolerância de
        exposição ao agente de risco são consideradas insalubres, conforme
        disposto em anexos da NR 15. O limite de tolerância é a concentração ou
        intensidade máxima ou mínima, relacionada com a natureza e o tempo de
        exposição ao agente, que não causará dano à saúde do trabalhador,
        durante a sua vida laboral (NR-15/2022). A partir de avaliações
        quantitativas e qualitativas é que se pode determinar o grau de
        exposição e o percentual de adicional a ser pago (10%, 20% ou 40%
        incidente sobre o salário-mínimo vigente).
      </Paragraph>

      <Paragraph>
        É importante compreender que todas as atividades laborais que
        ultrapassam o limite de tolerância de exposição a agentes de risco são
        consideradas insalubres, conforme disposto nos anexos da NR 15 (NR-15,
        2022). O limite de tolerância representa a concentração ou intensidade
        máxima ou mínima do agente em relação à natureza e ao tempo de
        exposição, que não causará danos à saúde do trabalhador durante sua vida
        laboral.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      A partir de avaliações quantitativas e qualitativas, é possível determinar
      o grau de exposição e o percentual do adicional de insalubridade a ser
      pago ao trabalhador, que pode ser de 10%, 20% ou 40%, incidente sobre o
      salário mínimo vigente.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Para elaboração do Laudo de Periculosidade, tem como base a Norma
        Regulamentadora Nº 16 (NR 16) de 2023, na qual determina quais
        atividades são consideradas perigosas, são elas: atividades e operações
        perigosas com explosivos, inflamáveis, com exposição a roubos ou outra
        espécie de violência física, operações perigosas com energia elétrica,
        em motocicleta, radiações ionizantes ou substâncias radioativas.
      </Paragraph>

      <Paragraph>
        Para elaborar o Laudo de Periculosidade, devemos nos basear na Norma
        Regulamentadora Nº 16 (NR 16) de 2023, que determina as atividades
        consideradas perigosas.
      </Paragraph>
    </TextBlock>

    <v-row justify="start">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >
      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10">
              <Imagem src="modulo_04/yellow_icons/perigos_explosivos.svg"/>
            </v-col>
          </template>

          <template #back> Com explosivos</template>
        </FlipCard>
      </v-col>

      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10">
              <Imagem src="modulo_04/yellow_icons/perigos_inflamaveis.svg"/>
            </v-col>
          </template>

          <template #back> Com inflamáveis</template>
        </FlipCard>
      </v-col>

      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10" >
              <Imagem src="modulo_04/yellow_icons/perigos_radiacao.svg"/>
            </v-col>
          </template>

          <template #back>
            Com radiações ionizantes ou substâncias radioativas
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10">
              <Imagem src="modulo_04/yellow_icons/perigos_violencia.svg"/>
            </v-col>
          </template>

          <template #back>
            Com exposição a roubos ou outras violências físicas
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10">
              <Imagem src="modulo_04/yellow_icons/perigos_energia_eletrica.svg"/>
            </v-col>
          </template>

          <template #back> Com energia elétrica</template>
        </FlipCard>
      </v-col>

      <v-col cols="4" sm="4">
        <FlipCard>
          <template #front>
            <v-col cols="10">
              <Imagem src="modulo_04/yellow_icons/perigos_motocicleta.svg"/>
            </v-col>
          </template>

          <template #back> Com motocicleta</template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Todos os colaboradores expostos às condições supracitadas têm direito ao
        adicional de 30% sobre o salário, sem os acréscimos resultantes de
        gratificações, prêmios ou participações nos lucros da empresa
        <strong>(NR-16,2023)</strong>.
      </Paragraph>

      <Paragraph>
        O LIP deve ser atualizado anualmente ou sempre que houver alterações nas
        condições laborais e a sua não atualização pode acarretar processos
        trabalhistas e multas para a empresa. Portanto, é essencial que os
        líderes empresariais compreendam a importância de manter a conformidade
        na emissão e atualização do Laudo Técnico, a fim de evitar penalidades
        previstas na legislação e multas, que podem chegar a R$ 6.304,00.
      </Paragraph>

      <Paragraph>
        Além disso, no Laudo Técnico, é crucial definir claramente as medidas de
        proteção disponibilizadas pela empresa para minimizar os riscos aos
        trabalhadores, como o fornecimento de equipamentos de proteção
        individual e coletiva. Os empregadores também devem promover o uso
        efetivo desses equipamentos para prevenir danos tanto à empresa quanto
        aos empregados. A segurança no ambiente de trabalho é uma
        responsabilidade compartilhada que requer o engajamento de todas as
        partes.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.3 A Importância dos gestores, líderes e coordenadores na execução das consultas ocupacionais e seus impactos financeiros. "
    >
      <Paragraph>
        Dada a importância de manter a periodicidade das consultas ocupacionais,
        é essencial que líderes e gestores organizacionais estejam envolvidos na
        supervisão desses processos. Isso permite uma análise mais detalhada e,
        consequentemente, uma maior agilidade nas ações de melhoria dos
        procedimentos. A análise gráfica dos indicadores relacionados à saúde
        ocupacional é uma ferramenta valiosa que pode auxiliar as empresas na
        elaboração de planos de ação eficazes.
      </Paragraph>

      <Paragraph>
        Após a avaliação dos indicadores, outra ferramenta útil para a
        comunicação acessível é o quadro de gestão à vista. Seu principal
        propósito é fornecer informações simples e acessíveis sobre tópicos
        específicos. No contexto da saúde e segurança no trabalho, os quadros de
        gestão à vista podem conter dados como o número mensal de exames
        ocupacionais realizados, taxas de frequência e gravidade de acidentes de
        trabalho, entre outros. Quando os dados comparativos são apresentados
        visualmente, os trabalhadores tendem a ficar mais atentos à segurança e
        ao cumprimento das práticas necessárias.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Após a análise dos indicadores, uma ferramenta que pode ser utilizada
      pelos gestores para uma comunicação acessível é o quadro de gestão à
      vista, no qual tem como principal objetivo disponibilizar informações
      acessíveis e simples sobre determinado assunto. Os quadros de gestão à
      vista na área da saúde e segurança do trabalho podem conter informações
      como: número mensal de exames ocupacionais realizados, taxas de frequência
      e gravidade de acidentes de trabalho, etc. Quando dados comparativos são
      colocados em evidência visual, os trabalhadores tendem a melhorar e ficar
      mais atentos à sua segurança.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        À medida que os gestores acompanham a execução das consultas
        ocupacionais, torna-se possível mapear o perfil de saúde dos
        colaboradores em uma empresa. Isso, por sua vez, pode reduzir os
        impactos financeiros do absenteísmo. Identificando os riscos aos quais
        os trabalhadores estão expostos, a empresa pode reduzir custos com
        afastamentos, tratamentos médicos, demissões por invalidez e até mesmo
        processos trabalhistas relacionados a doenças ocupacionais. O
        envolvimento ativo dos gestores nesse processo é, portanto, fundamental
        para a saúde dos funcionários e para a saúde financeira da organização.
      </Paragraph>

      <Paragraph>
        Em conclusão, o cumprimento das legislações abordadas neste módulo
        desempenha um papel fundamental no controle dos fatores de risco
        presentes em todos os processos de trabalho que envolvem os
        colaboradores de uma empresa. Além disso, essa conformidade legal
        contribui para o aumento da produtividade dos funcionários, a redução do
        risco de doenças ocupacionais e a minimização de encargos trabalhistas.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando">
      Neste módulo, exploramos os principais programas legais relacionados à
      saúde do trabalhador, todos interligados com as regulamentações
      trabalhistas. É de suma importância que os gestores empresariais adquiram
      conhecimento sobre esses programas, pois isso não apenas garante a
      segurança da empresa, mas também previne possíveis conflitos entre
      empregados e gestores. O entendimento e a aplicação dessas diretrizes
      legais são essenciais para manter um ambiente de trabalho saudável, seguro
      e produtivo.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-04/topico-01"
      nextName="Módulo 05"
      nextLink="modulo-05"
      :lastTopico="true"
      referenciasLink="modulo-04/referencias"
      atividadeLink="modulo-04/atividade"
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
import Table from "@/components/Table.vue";
import FlipCard from "@/components/FlipCard.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
    Imagem,
    Table,
    FlipCard,
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
