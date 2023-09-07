<template>
  <AulaTemplate
    :titulo="$store.state.modulos[6].titulo"
    :numero="$store.state.modulos[6].numero"
    titleSize="5"
  >
    <TextBlock topico="Tópico 2 - A Reabilitação do Trabalhador">
      <Paragraph>
        Neste tópico, vamos explorar a
        <strong>reabilitação profissional</strong>, um serviço que tem como
        objetivo auxiliar o trabalhador que possui alguma restrição física e/ou
        psíquica a retornar ao trabalho.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A palavra “reabilitação” é originária do latim “rehabilition”, que
      significa restauração ou recuperação. Ela é formada pelo prefixo “re”, que
      significa “de novo”, e pelo verbo “habilitare” que significa "adequar,
      adaptar, tornar hábil ou apto”. Dessa forma, reabilitar significa adquirir
      novamente uma habilidade perdida ou reduzida.
    </BoxIcon>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph> Não tem texto no roteiro. </Paragraph>

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
          video-id="hhw26SJYU_c"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        A reabilitação profissional é considerada uma ação orientada a
        possibilitar que a pessoa com deficiência, a partir da identificação de
        suas potencialidades laborativas, adquira o nível adequado de
        desenvolvimento profissional para o reingresso no mercado de trabalho e
        participar da vida comunitária, conforme cita o artigo 31, do Decreto N°
        3.298, de 1999.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      O programa de reabilitação profissional é estruturado por uma equipe
      multiprofissional de saúde, com o intuito de auxiliar na superação das
      dificuldades por meio do desenvolvimento de atividades terapêuticas e
      profissionalizantes, a fim de contribuir no retorno deste trabalhador.
    </BoxIcon>

    <TextBlock>
      <v-row align="start">
        <v-col cols="12" sm="5">
          <Imagem
            src="modulo_07/imagem2.jpg"
            legenda="Imagem 2: O programa de reabilitação conta com diversos profissionais."
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="7">
          <Paragraph>
            O programa, além de visar à estabilização física e a ampliação de
            movimentos e força, atua no processo de estabilização psicossocial,
            possibilitando a integração nas relações sociais, cotidianas e de
            trabalho através de uma identidade ressignificada. O objetivo do
            programa de reabilitação deve ser o estabelecimento de condições
            fundamentais para que seus beneficiários atinjam o melhor índice
            possível de inclusão em seu meio.
          </Paragraph>

          <Paragraph>
            A reabilitação possui três aspectos diferentes, vejamos:
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="space-between">
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front>Reabilitação médica</template>

          <template #back>
            Visa restaurar a capacidade funcional e mental e a qualidade de vida
            de pessoas com deficiência mental ou física
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front>Reabilitação vocacional (ou profissional)</template>

          <template #back>
            Visa permitir que pessoas com deficiências físicas ou mentais
            consigam superar barreiras quanto ao acesso, manutenção ou retorno
            ao trabalho.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="4">
        <FlipCard>
          <template #front> Reabilitação social </template>

          <template #back>
            Visa facilitar a participação de pessoas com deficiência na vida
            social.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock
      subTopico="2.1 Impacto financeiro dos programas de reabilitação do trabalhador para a empresa "
    >
      <Paragraph>
        Os afastamentos por doenças crônicas e aposentadorias precoces causam
        perdas salariais ao trabalhador, assim como custos físicos e emocionais.
        As empresas, por sua vez, apresentam custo adicional pelo
        <GlossarioButton @onToggleGlossario="$store.commit('TOGGLE_GLOSSARIO')"
          >turnover</GlossarioButton
        >
        de empregados e tempo perdido no gerenciamento do afastamento, além dos
        custos para a sociedade como um todo.
      </Paragraph>

      <GlossarioDialog title="Turnover">
        <Paragraph>
          <strong>Turnover: </strong>Rotatividade de pessoal.
        </Paragraph>
      </GlossarioDialog>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <Paragraph>
        Embora os impactos econômicos da saúde e segurança no trabalho sejam
        evidentes, ainda não se conhece totalmente os benefícios potenciais dos
        investimentos em programas de reabilitação do trabalhador.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Os impactos econômicos são decorrentes de perdas de produtividade, perda
        de dias trabalhados por motivo de doença e diversas obrigações
        financeiras assumidas pelas empresas, como seguridade social,
        assistência médica e possíveis ações judiciais. As avaliações econômicas
        devem ser realizadas para avaliar as perdas das empresas em virtude de
        doenças/acidentes do trabalho e quais as formas de intervenção possuem
        maior custo-efetividade.
      </Paragraph>

      <Paragraph>
        Para avaliar os investimentos em programas de reabilitação do
        trabalhador, é necessário realizar modelos de cálculo que considerem os
        custos associados ao adoecimento e os benefícios dos investimentos.
        Esses modelos podem incluir:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >A análise do payback period</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Tempo necessário para a recuperação do investimento
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >A relação custo-benefício</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          O valor presente líquido dos investimentos
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >O valor presente líquido dos investimentos</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          O valor presente líquido dos investimentos
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <TextBlock>
      <Paragraph>
        Essas análises são importantes para auxiliar na tomada de decisão sobre
        os investimentos em programas de reabilitação do trabalhador nas
        empresas.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.2 O significado social da reabilitação do trabalhador e suas vantagens"
    >
      <Paragraph>
        O trabalho desempenha um papel significativo no atendimento das
        necessidades básicas de um indivíduo. Além disso, é extremamente
        importante para o bem-estar de uma pessoa do ponto de vista financeiro,
        psicológico e emocional. Ele desempenha um papel fundamental no
        desenvolvimento da autoestima, do status social, do senso pessoal de
        conquista, independência, liberdade e segurança.
      </Paragraph>

      <Paragraph>
        Nesse sentido, o retorno ao trabalho é um conceito abrangente que
        engloba todos os procedimentos e iniciativas destinados a facilitar a
        reintegração de pessoas ao trabalho, que possuem uma redução na
        capacidade de trabalho devido a invalidez, doença ou envelhecimento.
      </Paragraph>

      <Paragraph>
        Desta forma, o conceito de retorno ao trabalho se aplica ao contexto
        político atual, que objetiva a manutenção da sustentabilidade dos
        sistemas de seguridade social, assim como a redução do impacto econômico
        dos afastamentos por doença e a inadequada gestão do retorno ao
        trabalho, que podem resultar em desemprego, pensões por invalidez ou
        aposentadorias precoces.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      <Paragraph>
        A aposentadoria por invalidez implica ônus significativo para as
        sociedades, agregando-se aos desafios trazidos pelo envelhecimento da
        força de trabalho. Uma vez que ocorre, com frequência, em idade
        relativamente jovem, reduz consideravelmente a idade de aposentadoria
        efetiva. Além dos custos para a sociedade, a aposentadoria precoce tem
        consequências importantes também para o indivíduo, pois o trabalho é uma
        importante fonte de bem-estar material e psicológico.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        O risco aumentado de desenvolver problemas de saúde durante o período de
        trabalho afeta a taxa de saída do mercado de trabalho devido a questões
        de saúde. Ainda que nem todas as aposentadorias precoces estejam
        relacionadas a problemas de saúde, há ampla evidência que sugere que
        questões de saúde desempenham um papel importante nesse contexto.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <Paragraph>
        A Organização para a Cooperação e Desenvolvimento Econômico (OCDE)
        afirma que muitas pessoas com incapacidade para o trabalho acabam
        deixando o mercado de trabalho de forma permanente, e poucos são capazes
        de retornar ou permanecer nele.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Nesse sentido, a reabilitação profissional deve estar disponível e
        acessível para quem necessita, a fim de incentivar as pessoas a
        trabalharem com sua capacidade residual de trabalho e evitar a saída
        definitiva do mercado de trabalho.(OCDE, 2018).
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.3  Vantagens do programa de gestão do absenteísmo">
      <Paragraph>
        Você deve saber que a ausência de colaboradores na empresa é um dos
        principais fatores que impactam a produtividade. Consequentemente, os
        custos com a gestão de pessoas aumentam, assim como a carga de trabalho
        para aqueles que estão presentes.
      </Paragraph>

      <Paragraph>
        Quando existe uma gestão eficiente do absenteísmo, a empresa ganha um
        time mais <strong>produtivo e engajado</strong>, pois os colaboradores
        se sentem valorizados e motivados a dar o seu melhor de si no desempenho
        de suas funções/ . Com isso, a organização melhora os seus resultados
        financeiros.
      </Paragraph>
    </TextBlock>

    <TextBlock>
      <v-row align="start">
        <v-col cols="12" sm="5">
          <Imagem
            src="modulo_07/imagem3.jpg"
            legenda="Imagem 3: A gestão eficiente do absenteísmo promove maior produtividade e redução de custos para a organização."
            fonte="freepik.com"
            left="true"
          />
        </v-col>

        <v-col cols="12" sm="7">
          <Paragraph>
            Outro benefício é a redução dos índices de
            <strong>rotatividade e de ausências ao trabalho</strong>. Afinal,
            quando os colaboradores estão satisfeitos com o reconhecimento
            recebido pela empresa, tendem a permanecer por mais tempo no
            emprego. Além disso, é menos provável que desenvolvam doenças
            emocionais relacionadas ao estresse e à infelicidade no trabalho.
          </Paragraph>

          <Paragraph>
            Uma vez que a empresa tem um time de profissionais satisfeitos, ela
            se torna mais <strong>atrativa para novos talentos</strong>. Muitas
            vezes, esses profissionais se candidatam às vagas disponíveis porque
            ouviram ou leram recomendações favoráveis de outros colaboradores.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <TextBlock subTopico="2.4  Vantagens do programa de promoção da saúde">
      <Paragraph>
        A promoção da saúde no trabalho difere das ações de prevenção. Enquanto
        a prevenção se encarrega de evitar acidentes e doenças, a promoção
        concentra-se em melhorar efetivamente o bem-estar e a qualidade de vida.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      <Paragraph>
        Uma equipe saudável vai além daquela que não apresenta sintomas e
        enfermidades, abrange também trabalhadores mentalmente saudáveis.
        Portanto, ações de promoção de saúde no trabalho devem abordar todos os
        aspectos que formam um profissional competente, criativo e produtivo.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Trabalhadores saudáveis, motivados e satisfeitos tendem a trabalhar mais
        tempo em um mesmo local e, também, a produzir mais. Assim, a promoção de
        saúde no trabalho envolve aspectos físicos e mentais, tais como
        direcionar campanhas e atividades para a alimentação saudável,
        exercícios físicos, relaxamento, acompanhamento e realização de exames
        laborais, boas condições para o desempenho das funções laborais.
      </Paragraph>

      <Paragraph>
        Deste modo, um bom planejamento estratégico garante que ações praticadas
        no dia a dia sejam alcançadas com excelentes resultados.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.5 A importância de ações preventivas para controle e redução de doenças crônicas nas empresas"
    >
      <Paragraph>
        Os impactos econômicos das doenças crônicas não transmissíveis (DCNT)
        representam um significativo dreno no potencial econômico das
        sociedades, afetando negativamente o crescimento econômico. Segundo
        dados fornecidos pela Organização Pan-americana de Saúde (2011),
        estima-se que o aumento projetado de 50% nas DCNT na América Latina até
        2030 resultará em uma redução anual de dois pontos percentuais no
        crescimento econômico. Vale ressaltar que dois terços de todas as mortes
        no mundo são atribuíveis às DCNT, sendo que aproximadamente 80% dessas
        mortes ocorrem em países de renda média ou baixa, e um terço delas afeta
        pessoas com menos de 60 anos de idade.
      </Paragraph>

      <Paragraph>
        Assim, investir em intervenções para prevenir as DCNT é a melhor saída.
        Primeiro, os custos da inércia aumentam à medida que tais doenças
        prosperam, ameaçando frágeis sistemas de saúde e seguridade social,
        diminuindo o desempenho econômico. Segundo, muitas intervenções eficazes
        trazem benefícios econômicos efetivos, pois custam menos do que o
        tratamento de doenças.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <Paragraph>
        Você sabia que implementar medidas de redução de riscos das DCNT pode
        trazer grandes benefícios econômicos? Estima-se que, com um avanço anual
        de 2%, essa abordagem possa impulsionar o crescimento econômico em até
        1% ao ano, após uma década. Incrível, não é mesmo? No Brasil, por
        exemplo, essa estratégia poderia gerar ganhos anuais estimados em US$ 16
        bilhões, superando os gastos necessários para as principais intervenções
        de prevenção e tratamento dessas doenças.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Assim, ações preventivas para controle e redução das DCNT podem
        contribuir para o progresso; por outro lado, a incapacidade ou o retardo
        em implementá-las afetará negativamente o progresso.
      </Paragraph>
    </TextBlock>

    <TextBlock
      subTopico="2.6 Integração de dados assistenciais e ocupacionais na gestão do absenteísmo empresarial"
    >
      <Paragraph>
        A gestão das bases de informações em saúde ocupacional desempenha um
        papel crucial para a determinação das estratégias e tomadas de decisão
        para mitigar as doenças ocupacionais dos trabalhadores. Embora o
        monitoramento da saúde dos trabalhadores por meio dos exames
        ocupacionais obrigatórios, previsto na Norma Regulamentadora 7 (NR7),
        seja a base das informações, é necessário recorrer a outras fontes para
        tomar decisões mais assertivas.
      </Paragraph>

      <Paragraph>
        Nesse sentido, a epidemiologia é a principal ferramenta para o
        acompanhamento da saúde dos trabalhadores, possibilitando a
        identificação de métodos preventivos. Embora algumas doenças sejam
        causadas unicamente por fatores genéticos, a maioria delas resulta da
        interação destes com fatores ambientais. Assim, a epidemiologia permite
        traçar indicadores que auxiliam no monitoramento dos trabalhadores. Esse
        conhecimento permite a melhor utilização de recursos para ações
        preventivas e prioritárias aos trabalhadores.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <Paragraph>
        Uma das mudanças trazidas pela nova NR7 é a inclusão das ações de
        vigilância da saúde ocupacional, de forma passiva e ativa, no Programa
        de Controle Médico de Saúde Ocupacional (PCMSO).
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Por sua vez, a vigilância passiva da saúde ocupacional dos trabalhadores
        é feita a partir de informações sobre a demanda espontânea de empregados
        que procuram serviços médicos. O monitoramento de atestados (programas
        de absenteísmo) é uma fonte de informação muito importante da vigilância
        passiva dos trabalhadores.
      </Paragraph>

      <Paragraph>
        Ao identificar a incidência e prevalência de doenças ocupacionais ou não
        nos trabalhadores por meio do controle de absenteísmo em determinado
        grupo (Grupo Homogêneo de Exposição, setor, função etc.), torna-se
        possível implementar ações preventivas mais assertivas. Além disso, a
        busca espontânea do trabalhador ao ambulatório ocupacional das
        organizações, caso possuam, é uma fonte importante de informações sobre
        a vigilância passiva. Essa busca possui uma importância, pois
        constituem, na sua maioria dos casos, queixas que estão no início de
        algum distúrbio orgânico, permitindo um diagnóstico antecipado para uma
        devida conduta, evitando assim uma incapacidade do trabalhador para o
        trabalho e seu afastamento.
      </Paragraph>

      <Paragraph>
        A vigilância ativa da saúde ocupacional é uma ferramenta para monitorar
        a saúde dos colaboradores. Veja como ela funciona:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Exames médicos direcionados</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Vão além dos exames previstos na NR e coletam dados sobre sinais e
          sintomas de agravos à saúde relacionados aos riscos ocupacionais.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Monitoramento "in loco"</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Além dos exames médicos ocupacionais previstos na NR7, a vigilância
          ativa inclui o monitoramento de queixas relacionadas a doenças
          ocupacionais através de programas como Distúrbios Osteomusculares
          Relacionados ao Trabalho, Análise Ergonômica Preliminar e Análise
          Ergonômica do Trabalho.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Processos de boas práticas</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Aferição de pressão arterial e glicemia de jejum antes de atividades
          de risco, como trabalho em altura e espaço confinado, também trazem
          informações importantes para a vigilância ativa.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <BoxIcon tipo="atencao">
      <Paragraph>
        Ao adotar essa abordagem integrada, a empresa pode obter dados mais abrangentes e atualizados sobre a saúde ocupacional de seus colaboradores, permitindo uma gestão mais eficiente do absenteísmo e a implementação de medidas preventivas adequadas.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        O número de encaminhamentos para benefícios da Previdência Social devido à incapacidade por doenças ocupacionais ou não é uma informação importante. O próprio Fator Acidentário de Prevenção (FAP) é um indicador de como está a saúde do trabalhador de determinada organização. Dados sobre a  frequência (quantidade), custo e gravidade e encaminhamentos dos trabalhadores para benefícios para Previdência Social são determinantes para ações preventivas de doenças ocupacionais. Assim, a gestão de afastamentos possui um papel importante nas ações preventivas.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      <Paragraph>
        O gerenciamento das informações de saúde do trabalhador desempenha um papel importante nas estratégias e ações preventivas em saúde e segurança do trabalho. São fontes de informações desde exames médicos ocupacionais e as buscas passiva dos trabalhadores a serviços de saúde e programas de saúde para controle de Absenteísmo, Afastamentos e Conservação Auditiva.
      </Paragraph>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Neste módulo você pode aprender que existem  diferentes  tipos e significados de absenteísmo nas empresas. No entanto, é fundamental analisar cuidadosamente qualquer ausência que não esteja coberta pelas políticas e procedimentos da empresa.
      </Paragraph>

      <Paragraph>
        Diante das novas relações de trabalho, as empresas estão percebendo a importância de direcionar esforços para o fator humano, visando alcançar altos níveis de assiduidade. A gestão de absenteísmo, juntamente com  programas de reabilitação do trabalhador e de promoção e prevenção de saúde, precisa ser uma pauta nas estratégias principais, buscando soluções mais criativas e eficientes para lidar com o problema.
      </Paragraph>

      <Paragraph>
        Em resumo, compreender os motivos para o absenteísmo é o primeiro passo para que a sua organização possa agir e reverter esse quadro. Lembre-se de que  os colaboradores precisam de um motivo para acordar todos os dias com vontade de ir trabalhar e fazer a diferença na organização.
      </Paragraph>
    </TextBlock>


    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-07/topico-01"
      nextName="Módulo 08"
      nextLink="modulo-08"
      :lastTopico="true"
      referenciasLink="modulo-07/referencias"
      atividadeLink="modulo-07/atividade"
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
import Imagem from "@/components/Imagem.vue";
import GlossarioButton from "@/components/GlossarioButton.vue";
import GlossarioDialog from "@/components/GlossarioDialog.vue";
import FlipCard from "@/components/FlipCard.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Accordion,
    Imagem,
    GlossarioButton,
    GlossarioDialog,
    FlipCard,
  },
  data() {
    return {
      aluno: "",
      glossario1: false,
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

  created() {},
};
</script>

<style scoped></style>
