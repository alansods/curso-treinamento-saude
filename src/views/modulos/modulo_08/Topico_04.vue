<template>
  <AulaTemplate
    :titulo="$store.state.modulos[7].titulo"
    :numero="$store.state.modulos[7].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 04 - Implementando Práticas ESG em sua empresa">
      <Paragraph>
        Neste tópico, abordaremos o mundo das práticas ESG, explorando suas
        nuances, importância e como as empresas estão incorporando esses
        princípios em suas operações.
      </Paragraph>

      <Paragraph>
        Para dar início a esta discussão sobre as práticas ESG, é fundamental
        compreender a importância de gerenciar riscos relacionados a esses
        pilares em todas as esferas das organizações. Os processos e a condução
        devem incluir procedimentos detalhados que auxiliem na mensuração,
        avaliação, monitoramento, reporte e mitigação dos riscos ambientais,
        sociais e de governança. As empresas precisam ficar atentas às
        tendências desse novo mercado. Os relatórios são uma excelente maneira
        de avaliar como estão as práticas relacionadas aos pilares, pois eles
        abrangem um amplo espectro de informações quantitativas e qualitativas
        que servem como exemplos de boas práticas. Isso permite que as partes
        interessadas, tanto internas quanto externas, obtenham informações que
        contribuam para a melhoria do comportamento corporativo.
      </Paragraph>

      <Paragraph>
        Além disso, para empresas que possuem muitas pessoas na alta gestão,
        como também nos conselhos, é preciso educá-las para compreender os
        riscos ESG presentes no negócio, assim poderão priorizá-los e
        monitorá-los em suas análises periódicas. Não podemos esquecer que a
        mentalidade sustentável começa neles. Precisam entender o que é material
        para a empresa e como definir os temas prioritários ESG, como as
        métricas são pensadas, como a estrutura atual está sendo usada para
        contar a história dessa aproximação entre outros. A diretoria precisa
        amadurecer, ela não pode ser tratada como uma parte intocável do
        negócio, melhorar seus hábitos influencia o todo do negócio. Vejamos no
        gráfico a seguir os benefícios alcançados pelas empresas que adotam as
        práticas ESG.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem
          src="modulo_08/3.png"
          fonte="Fonte: Consulta ESG na Indústria Brasileira (2022)"
          legenda="Imagem 4: Benefícios Alcançados com o ESG."
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Agora que você já conhece a importância do ESG e como ele pode impactar
        positivamente a sua empresa, é natural surgir a pergunta: "Como
        implementar o ESG na minha organização?" Implementar práticas ESG requer
        um compromisso firme da alta direção, uma compreensão clara dos
        objetivos e valores da empresa, bem como a definição de metas
        específicas e mensuráveis relacionadas aos pilares ambiental, social e
        de governança. Além disso, é fundamental envolver todos os colaboradores
        no processo, promovendo a conscientização e a capacitação necessárias
        para que todos entendam o papel que desempenham na construção de uma
        cultura empresarial mais responsável e sustentável. Vejamos algumas
        ações práticas que podem ser adotadas para implementar o ESG em sua
        empresa:
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="A) Relatório de Sustentabilidade">
      <Paragraph>
        É a melhor forma de publicitar as ações, os hábitos e a cultura
        empresarial, criando valor econômico para a empresa. Em 2020, com a
        explosão da temática ESG, os relatórios integrados passaram a incorporar
        um forte viés econômico-financeiro decorrente da inclusão da temática na
        tomada de decisão, o que resultou no aumento substancial dos recursos
        disponíveis para investimentos sustentáveis, como evidenciado pelo
        aumento do número de signatários dos Princípios para o Investimento
        Responsável (PRI), uma espécie de guia orientador para aqueles que
        ingressam nessa corrente de criação de valor, esclarecendo o que pode
        ser considerado um investimento sustentável ESG. Atualmente, o PRI conta
        com mais de 3 mil participantes em todo o mundo. Desde 2006, o padrão
        mais utilizado entre os mencionados neste texto é o Global Reporting
        Initiative (GRI). Vejamos a seguir um panorama sobre a divulgação dos
        relatórios pelas empresas que adotam as práticas ESG:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem
          src="modulo_08/4.png"
          fonte="Fonte: Consulta ESG na Indústria Brasileira (2022)"
          legenda="Imagem 5: Critérios utilizados na divulgação dos dados em relatórios. "
        />
      </v-col>
    </v-row>

    <TextBlock subTopico="B) Segurança e Saúde do Trabalhador">
      <Paragraph>
        No campo da Segurança e Saúde do Trabalhador (SST), por exemplo,
        políticas de desenvolvimento dentro da empresa podem impactar
        diretamente em indicadores de desempenho financeiro que podem afetar até
        a aquisição de financiamentos da empresa no futuro. A longo prazo, o
        sucesso dessas organizações estará atrelado diretamente aos fatores SST,
        seja por não terem práticas de saúde e segurança para seus
        colaboradores, seja por terem casos de discriminação e falta de
        diversidade. É claro que o objetivo não é desumanizar o SST; o foco
        continua sendo o trabalhador, mas um programa de ações pensado de
        maneira estratégica para mitigar o risco e potencializar a cultura da
        empresa certamente gerará ganhos financeiros para o negócio.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      Em 2021, o número de comunicados de acidentes e mortes associados ao
      trabalho aumentou 30% em relação a 2020. Segundo o Observatório de
      Segurança e Saúde no Trabalho, foram 571,8 mil acidentes e 2.487 mortes. O
      Brasil segue ocupando o quarto lugar no ranking mundial de mortes por
      empregos formais, atrás apenas da China, Índia e Indonésia. Ainda, de
      acordo com o Observatório de SST, a situação se agravou ainda mais nos
      dois anos de pandemia, em 2020 e 2021, quando houve registro de 33 mil
      CATs (Comunicações de Acidentes de Trabalho).
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Nesse sentido, cabe uma atenção especial ao pilar "S" da sigla ESG.
        Dessa maneira, percebe-se que as empresas precisam considerar a gestão
        de SST, as políticas de prevenção de acidentes, a conscientização dos
        colaboradores e o gerenciamento de riscos entre os indicadores que
        reforçam como elas respeitam e cuidam de seus trabalhadores. Isso pode
        ser medido por meio de indicadores como taxas de acidentes, número de
        doenças ocupacionais e absenteísmo, entre outros. Uma análise mais
        abrangente pode ser feita ao observar os ODS (imagem 1), que dialogam
        diretamente com a ISO 45001, e como essa norma contribui para o alcance
        dos Objetivos de Desenvolvimento Sustentável correlatos.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="C) Economia Circular">
      <Paragraph>
        Uma pesquisa da Confederação Nacional da Indústria (CNI) revelou que
        76,4% das fábricas no país já estão implementando processos relacionados
        à reutilização e reciclagem, visando à redução de custos e à melhoria da
        eficiência na produção. A economia circular redefine os métodos
        tradicionais de produção e consumo, seguindo a premissa de "E se os
        produtos de hoje se tornassem os recursos de amanhã?" Essa ideia
        exemplifica a essência desse sistema.
      </Paragraph>

      <Paragraph>
        Diante das projeções da ONU, que indicam um acréscimo de 2 bilhões de
        pessoas na população mundial nos próximos 30 anos, surge a preocupação
        sobre a capacidade da natureza de lidar com o lixo gerado por todo o
        planeta. É com o intuito de abordar desafios como esse que a economia
        circular se destaca. Esse conceito se assemelha ao "E" do ESG, uma vez
        que ambos compartilham o mesmo propósito: promover o desenvolvimento
        econômico sustentável e socialmente responsável, abrangendo projetos em
        diversas áreas para maximizar a reutilização de recursos.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="D) Impacto Social">
      <Paragraph>
        O impacto social é a repercussão das ações de uma empresa sobre os
        públicos de interesse, abrangendo clientes, colaboradores, fornecedores,
        comunidade do entorno e outros stakeholders. Este conceito está
        diretamente ligado à cadeia de valor, sendo fundamental tanto para o
        investimento ESG quanto para o investimento de impacto, pois ambos
        desempenham papéis essenciais na busca pelos Objetivos de
        Desenvolvimento Sustentável (ODS) da ONU e na construção de um mundo
        mais justo. O impacto percebido deve ser uma parte integrante do modelo
        de negócios da empresa, seja por meio de produtos e serviços que tenham
        impacto positivo ou por meio de práticas econômicas que beneficiem o
        mundo. Em 2019, a Global Reporting Initiative (GRI) revelou que 9 em
        cada 10 das maiores companhias do mundo em receita já reportam seu
        desempenho ESG. No entanto, muitas vezes se ouve mais sobre práticas
        ambientais e de sustentabilidade do que aquelas que valorizam o "S" em
        ESG, representando o componente social no desempenho dessas
        organizações.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="E) Diversidade">
      <Paragraph>
        Ações voltadas para diversidade e sustentabilidade podem resultar em um
        significativo aumento nos lucros da sua empresa. Segundo dados da
        consultoria McKinsey, empresas que promovem a diversidade de gênero
        podem alcançar lucros até 25% maiores em comparação com aquelas que não
        o fazem, enquanto aquelas que promovem a diversidade étnico-racial podem
        obter um aumento ainda mais expressivo, chegando a 36%. Além dos
        benefícios financeiros, é importante ressaltar que essas ações também
        contribuem significativamente para a satisfação dos colaboradores da
        empresa. Assim como os consumidores buscam cada vez mais se identificar
        com as marcas, os profissionais também consideram essa identificação ao
        escolherem um emprego.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      <p>Conheça alguns Cases ESG na indústria brasileira:</p>

      <ul class="mt-5">
        <li>
          <a
            class="white--text"
            href="https://mz-filemanager.s3.amazonaws.com/c8182463-4b7e-408c-9d0f-42797662435e/fce5b203-1e06-4e54-9521-d7e5441ab6e6_relatorio_anual_esg2023_anobase_2022.pdf"
            target="_blank"
            >Ambev</a
          >
        </li>

        <li class="my-1">
          <a
            class="white--text"
            href="https://www.grupoboticario.com.br/wp-content/uploads/2021/09/Relatorio-Sustentabilidade-2019-1.pdf"
            target="_blank"
            >O Boticário</a
          >
        </li>

        <li>
          <a
            class="white--text"
            href="https://www.itau.com.br/download-file/v2/d/42787847-4cf6-4461-94a5-40ed237dca33/0f6d20ef-214f-f8e3-7ceb-432350f7e412?origin=2"
            target="_blank"
            >Itaú</a
          >
        </li>
      </ul>
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        Caro cursista, após considerar todos esses elementos, você deve estar se
        perguntando:
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="6">
        <Imagem src="modulo_08/pergunta_balao.svg" />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Na verdade, não existe uma “receita de bolo”. É importante que você
        entenda que o ESG nasce de dentro do negócio, começando pelos pequenos
        hábitos, pela mudança de mentalidade e fazendo o que for possível com o
        menor gasto de energia e investimento financeiro. O ESG precisa começar
        leve, envolvendo e conscientizando as pessoas por meio de novos hábitos
        para que depois venham as metas audaciosas.
      </Paragraph>

      <Paragraph>
        Para iniciar a jornada de implementação das práticas ESG (Ambientais,
        Sociais e de Governança) na sua empresa de forma eficaz, é fundamental
        seguir oito passos essenciais. Essas etapas são cruciais para garantir
        que o ESG seja integrado de maneira sólida e impactante em toda a
        organização. Vejamos a seguir:
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
          <template #front>1ºPasso</template>

          <template #back>
            Entenda o perfil do seu <strong>CLIENTE</strong> atual.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>2º Passo</template>

          <template #back>
            Faça um diagnóstico do tipo
            <strong>CULTURA ORGANIZACIONAL</strong> instalada na empresa.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>3º Passo</template>

          <template #back>
            Identifique o que pode ser melhorado a curto prazo.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>4º Passo</template>

          <template #back>
            Treinamento e <strong>CAPACITAÇÃO</strong> com foco na introdução do
            ESG na mentalidade das pessoas, com foco na Alta Gestão.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>5º Passo</template>

          <template #back>
            Faça um <strong>DIAGNÓSTICO</strong> de
            <strong>MATERIALIDADE</strong> (material é tudo que é substancial
            para aquela empresa, por exemplo, para uma indústria do agronegócio
            é material o solo em que a produção acontece).
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>6º Passo</template>

          <template #back>
            Mapeie os <strong>RISCOS</strong> do negócio (aquilo que poderá
            fazer com que ele venha a sucumbir ao longo do tempo, fatores
            internos e externos).
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>7º Passo</template>

          <template #back>
            Defina o modelo de <strong>COMUNICAÇÃO</strong> com que alcançará
            todos os níveis da corporação.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>8º Passo</template>

          <template #back>
            Faça um <strong>PLANEJAMENTO EXECUTIVO</strong> em apoio ao plano
            estratégico anual da empresa.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <BoxIcon tipo="video_aula" numero="2">
      <Paragraph>
        Nesta segunda vídeo-aula, vamos aproximar a temática ESG do dia a dia
        dos negócios e como você gestor pode inserir as boas práticas ou
        estruturar as já existentes de maneira a trazer benefícios reais para a
        sua gestão.
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
          video-id="QaC51cZh1D4"
          style="border: solid 3px white"
          fitParent
        />
      </v-responsive>
    </v-dialog>

    <BoxIcon tipo="recapitulando">
      <p>
        Bem, chegamos ao final do módulo. Nesta aula, exploramos os fundamentos
        do ESG e discutimos sua importância crescente no cenário empresarial
        global e os benefícios que pode trazer às organizações. Vimos como as
        empresas podem implementar práticas ESG e abordamos as principais etapas
        desse processo.
      </p>

      <p>
        Lembrando que a adoção de práticas ESG não apenas contribui para a
        construção de um mundo mais sustentável e justo, mas também pode ser
        vantajosa para os negócios, promovendo maior atratividade para
        investidores, clientes e talentos.
      </p>

      <p>
        É fundamental entender que o ESG é uma jornada contínua de melhoria e
        compromisso com o desenvolvimento sustentável. À medida que seguimos em
        frente, é importante considerar como esses princípios podem ser
        aplicados nas organizações e nas decisões diárias, contribuindo para um
        futuro mais responsável e sustentável.
      </p>
    </BoxIcon>

    <NavFooter
      prevName="Tópico 03"
      prevLink="modulo-08/topico-03"
      nextName="Módulo 09"
      nextLink="modulo-09"
      :lastTopico="true"
      referenciasLink="modulo-08/referencias"
      atividadeLink="modulo-08/atividade"
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
