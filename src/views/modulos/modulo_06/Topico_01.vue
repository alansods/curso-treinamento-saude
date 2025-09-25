<template>
  <AulaTemplate
    :titulo="$store.state.modulos[5].titulo"
    :numero="$store.state.modulos[5].numero"
    titleSize="4"
  >
    <TextBlock
      topico="Tópico 01  - O impacto financeiro nas empresas dos acidentes de trabalho"
    >
      <Paragraph>
        Sejam bem-vindos ao módulo sobre o impacto dos acidentes de trabalho. Assim como os módulos anteriores, este também é de alta relevância para os gestores empresariais, pois tem como objetivo apoiar as empresas na análise de acidentes de trabalho e outros eventos adversos. Você sabia que a maioria dos eventos adversos é previsível e prevenível? Por isso é importante conhecer o que ocorre e sobre o que pode ocorrer em um sistema produtivo para prevenir e efetuar boas análises de eventos adversos. Vamos aprender mais sobre isso
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="1">
      <Paragraph>Você sabia que existem ferramentas valiosas que auxiliam as empresas na análise econômica das ações de saúde? Quando falamos em saúde e segurança, é importante considerar a eficácia e os custos das medidas adotadas. Nesta aula, vamos aprender alguns conceitos de economia aplicados à saúde e segurança. Ao final, você entenderá melhor as diferenças entre os diversos tipos de análise e compreenderá suas aplicabilidades. </Paragraph>

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
          video-id="KaTQ2glcQs4"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <TextBlock>
      <Paragraph>
        Um acidente de trabalho é definido como qualquer incidente que ocorra no
        exercício das atividades laborais e
        <strong
          >resulte em lesões corporais, perda temporária ou permanente da
          capacidade de trabalho, ou até mesmo na morte do trabalhador</strong
        >. Independentemente do tamanho ou gravidade do acidente, todas as
        empresas têm a responsabilidade de informar de maneira detalhada os
        riscos inerentes às tarefas realizadas pelos colaboradores.
      </Paragraph>

      <Paragraph>
        Além disso, é preciso fornecer medidas de segurança coletivas e
        individuais para preservar a saúde e a segurança dos funcionários. Não
        cumprir as normas de segurança no ambiente de trabalho pode resultar em
        penalidades financeiras. Os custos relacionados a acidentes de trabalho
        englobam desde despesas com assistência médica ao trabalhador até os
        gastos necessários para lidar com processos judiciais.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Segundo dados do Observatório de Segurança e Saúde do Trabalhador (2022),
      nos últimos 10 anos, houve o registro de 6.774.543 acidentes de trabalho,
      resultando em um gasto estimado de aproximadamente R$ 136.741.183.393,1 e
      em 461.424.375 dias de trabalho perdidos.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Em módulos anteriores deste curso, discutimos as leis e normas que
        regulam a prevenção de riscos à saúde dos trabalhadores, inclusive
        abordando os impactos financeiros e constitucionais decorrentes do
        descumprimento das normas estabelecidas.
      </Paragraph>

      <Paragraph>
        É importante destacar que toda empresa tem a obrigação de comunicar
        <strong>qualquer acidente de trabalho</strong> à Previdência Social
        <strong>em até um dia útil</strong> após o ocorrido. Caso a empresa não
        cumpra com essa obrigação, está sujeita a multas que variam entre o
        limite mínimo e o limite máximo do salário de contribuição. Essa medida
        visa garantir que os incidentes sejam devidamente registrados e que os
        trabalhadores recebam o suporte necessário em casos de acidentes.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Em casos de acidentes de trabalho com necessidade de afastamento menor que
      15 dias por determinação médica, o empregador é responsável por todos os
      custos do salário do funcionário. Por outro lado, é importante destacar
      que a concessão do benefício previdenciário em caso de morte do
      trabalhador é de competência do INSS. No entanto, é fundamental observar
      que quando esse trágico evento ocorre por dolo da empresa, esta deve
      indenizar seus dependentes por danos materiais e por lucros cessantes.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        É fundamental que a empresa demonstre competência na gestão dos custos
        relacionados aos acidentes de trabalho. Isso se justifica pela
        importância de compreender as implicações de um acidente, o que permite
        uma avaliação mais precisa dos custos envolvidos, podendo ser
        classificados como <strong>diretos ou indiretos</strong>, também
        denominados segurados e não segurados, respectivamente, conforme veremos
        a seguir:
      </Paragraph>
    </TextBlock>

    <Table
      legenda="Quadro 1.  Tipos de análises econômicas em saúde, de acordo com a medida de desfecho e unidade de medida de cada estudo."
      fonte="Tipos de análises econômicas em saúde (BRASIL, 2008)"
    >
      <thead>
        <tr>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Custo direto
          </th>
          <th
            class="primary white--text text-body-2 text-uppercase font-weight-bold"
          >
            Custos indiretos
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Refere-se à alíquota de seguro contra acidentes de trabalho que a
            empresa paga à Previdência Social. Essa alíquota pode variar, sendo
            de 1% para empresas cujas atividades são classificadas como de risco
            leve, 2% para risco médio e 3% quando o risco de acidentes de
            trabalho é considerado grave. Esse sistema é considerado de
            gerenciamento relativamente simples, uma vez que é possível estimar,
            em média, os valores que precisam ser alocados.
          </td>
          <td>
            Esses custos são variáveis e estão diretamente ligados a diversas
            despesas, como as legais relacionadas a processos judiciais, o tempo
            necessário para recrutar e treinar um novo colaborador, os gastos
            envolvidos no atendimento médico, a aquisição de medicamentos, o
            processo de reabilitação do trabalhador e o pagamento dos 15 dias de
            afastamento. Além disso, eles podem incluir despesas com
            indenizações.
          </td>
        </tr>
      </tbody>
    </Table>

    <BoxIcon tipo="voce_sabia">
      Os custos indiretos associados a acidentes de trabalho podem somar um total anual de R$50.263,50 em uma empresa com 86 funcionários. Nesse contexto, o pagamento dos 15 dias de afastamento e indenizações representa uma parcela significativa, totalizando R$11.250,00. Além disso, despesas relacionadas ao tempo de recrutamento e treinamento de um novo colaborador contribuem com um gasto adicional de R$4.300,00. Adicionalmente, os custos associados a exames, atendimento médico, medicamentos e reabilitação alcançam o montante de R$5.625,00.
    </BoxIcon>

    <TextBlock subTopico="1.1 Questões legais relacionadas aos acidentes de trabalho.">
      <Paragraph>
        A Lei Nº 6.367, datada de 19 de outubro de 1976, versa sobre o seguro de acidentes de trabalho, proporcionando uma definição abrangente de acidente de trabalho e oferecendo uma descrição minuciosa de diferentes situações relacionadas a esses acidentes. No seu Artigo 2º, a Lei estabelece o seguinte:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem src="modulo_06/quotes.svg" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        No parágrafo 1º desse mesmo artigo, a Lei equipara diversas circunstâncias relacionadas a acidentes de trabalho:
      </Paragraph>

      <div class="my-10">
        <v-alert border="left" color="blue" dark>I - a doença profissional ou do trabalho, assim entendida a inerente ou peculiar a determinado ramo de atividade e constante de relação organizada pelo Ministério da Previdência e Assistência Social (MPAS);</v-alert>
        <v-alert border="left" color="blue" dark>II - o acidente que, ligado ao trabalho, embora não tenha sido a causa única, haja contribuído diretamente para a morte, ou a perda, ou redução da capacidade para o trabalho;</v-alert>
        <v-alert border="left" color="blue" dark>III - o acidente sofrido pelo empregado no local e no horário do trabalho;
</v-alert>
        <v-alert border="left" color="blue" dark>IV - a doença proveniente de contaminação acidental de pessoal de área médica, no exercício de sua atividade;</v-alert>
        <v-alert border="left" color="blue" dark>V - o acidente sofrido pelo empregado ainda que fora do local e horário de trabalho.</v-alert>
      </div>

      <Paragraph>
        Nos incisos III e V da legislação, encontramos informações importantes sobre acidentes de trabalho ocorridos dentro e fora do local e horário de trabalho. No primeiro caso, é relevante ressaltar que esses acidentes podem resultar de atos de sabotagem ou terrorismo cometidos por colegas de trabalho, agressões físicas intencionais, desabamentos, inundações, incêndios ou outras situações fortuitas ou decorrentes de força maior. Já no segundo cenário, acidentes durante o trajeto entre a residência e o trabalho, atividades sob a autoridade da empresa ou viagens a serviço da empresa também são considerados.
      </Paragraph>

      <Paragraph>
        Vale destacar que a empresa assume a responsabilidade pelos custos nos casos de acidentes de trabalho que resultem em afastamento de até 15 dias. Caso contrário, a legislação brasileira assegura ao colaborador o direito ao auxílio-doença acidentário, equivalente a 91% do salário de contribuição, com os pagamentos feitos pela Previdência Social, desde que não ultrapassem o teto de dez salários-mínimos.
      </Paragraph>

      <Paragraph>
        Além disso, a Lei estabelece que o Instituto Nacional do Seguro Social (INSS) custeie o auxílio-doença em casos de afastamento superior a 15 dias, mas há outras obrigações do empregador em relação aos direitos do trabalhador. Se um empregado perde a capacidade de exercer suas funções devido a sequelas de um acidente de trabalho, ele tem direito a um ano de estabilidade no emprego. Caso a empresa demita o funcionário antes do término desse período de estabilidade, ela será obrigada a pagar os salários restantes do período assegurado.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="atencao">
      Para notificar a Previdência Social sobre um incidente ocupacional no primeiro dia útil após o ocorrido, você deve utilizar um documento denominado <strong>Comunicação de Ocorrência Ocupacional</strong>, disponível no site do órgão competente. Esse formulário deve ser preenchido com todas as informações necessárias, impresso em quatro cópias e, posteriormente, entregue ao INSS e ao segurado ou seu dependente.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Portanto, tanto os empregadores quanto os empregados precisam estar cientes dos aspectos abordados na Lei para gerenciar adequadamente situações de acidentes de trabalho. Essa compreensão contribuirá para um processo de investigação e resolução mais harmonioso, evitando prejuízos tanto para a empresa quanto para o funcionário.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="1.2 Importância do envolvimento da alta gerência para o sucesso nas ações de SST e redução de custos com acidentes">
      <Paragraph>
        Tanto a Engenharia de Segurança do Trabalho quanto a Medicina do Trabalho desempenham um papel fundamental na garantia da saúde dos trabalhadores. Essas áreas, munidas de conhecimentos específicos, desenvolvem ferramentas e atividades essenciais para preservar a integridade física dos colaboradores. Entretanto, para maximizar o impacto dessas ações, é essencial que esses profissionais contem com o apoio e os recursos necessários por parte da alta administração da empresa.
      </Paragraph>

      <Paragraph>
        O sucesso das iniciativas em SST deve refletir em indicadores da área, como a <strong>redução do número de acidentes</strong> de trabalho ao longo de um determinado período. Comparar a incidência antes e depois da implementação dessas ações é um meio eficaz de avaliar o progresso. Além disso, o engajamento dos gestores desempenha um papel importante, não apenas quebrando as barreiras entre líderes e subordinados, mas também facilitando a compreensão das equipes sobre a relevância das ações de prevenção de acidentes de trabalho. Isso resulta na diminuição das ocorrências na empresa e, consequentemente, na redução dos custos associados a esses eventos adversos.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="8">
        <Imagem
          legenda="Imagem 1: O engajamento dos gestores é fundamental na prevenção de acidentes de trabalho"
          fonte="Fonte: Freepik.com"
          src="modulo_06/imagem1.jpeg"
        />
      </v-col>
    </v-row>

    <BoxIcon tipo="recapitulando">
      <p>
        Até este ponto, ficou claro que os acidentes de trabalho podem gerar custos financeiros significativos. Portanto, é imperativo que as organizações adotem medidas eficazes de prevenção, como investir em treinamentos, capacitações e equipamentos de segurança. Essas medidas visam a reduzir os riscos de acidentes de trabalho e, por conseguinte, a minimizar os custos diretos e indiretos decorrentes desses eventos. Com base nesses conceitos, você estará mais preparado para entender o que será abordado no próximo tópico: o Fator Acidentário Previdenciário (FAP).
      </p>

      <p>
        Fique atento e continue aprendendo!
      </p>
    </BoxIcon>

    <NavFooter
      prevName="Apresentação"
      prevLink="modulo-06"
      nextName="Tópico 02"
      nextLink="modulo-06/topico-02"
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
import Table from "@/components/Table.vue";
import Imagem from "@/components/Imagem.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    Paragraph,
    BoxIcon,
    NavFooter,
    Table,
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
