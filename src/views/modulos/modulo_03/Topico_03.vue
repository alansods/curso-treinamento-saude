<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <TextBlock topico="Tópico 03 - Plano de Saúde na Empresa ">
      <Paragraph>
        Neste tópico, vamos aprender sobre a importância do uso racional do
        plano de saúde empresarial, que é uma modalidade de assistência à saúde
        voltada para os sócios e colaboradores de uma empresa. Esse tipo de
        plano oferece acesso a uma variedade de coberturas e procedimentos
        médicos, que podem ser realizados em uma rede de profissionais médicos,
        clínicas, hospitais e laboratórios credenciados ou próprios, mediante o
        pagamento de uma mensalidade.
      </Paragraph>

      <Paragraph>
        Além disso, a gestão dos planos de saúde é uma questão de grande
        importância para as empresas, visto que eles podem representar uma parte
        significativa das despesas com folha de pagamento, com variações que
        geralmente oscilam entre 12% a 15%. Por esse motivo, é fundamental
        conduzir negociações de taxas e reajustes de forma técnica e
        estratégica, buscando equilibrar os custos e contribuir para o
        planejamento orçamentário e a manutenção do benefício.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="video_aula" numero="3">
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
        É relevante observar que as despesas assistenciais associadas aos planos
        de saúde têm apresentado um crescimento constante, frequentemente acima
        da taxa de inflação. Isso está diretamente relacionado ao aumento da
        utilização dos serviços de saúde, ao envelhecimento da população e à
        maior incidência de DCNT, que resultam em um volume maior e
        procedimentos mais complexos. A diferença entre a receita total
        proveniente das mensalidades e o somatório de todas as despesas
        (assistenciais e administrativas) constitui o resultado financeiro da
        operação.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="voce_sabia">
      A <strong>Sinistralidade</strong> é um dos principais fatores que
      influenciam os reajustes dos planos de saúde. Cada vez que um beneficiário
      utiliza o plano de saúde para consultas, exames, cirurgias ou outros
      procedimentos médicos, ocorre <strong>um sinistro</strong>. A
      sinistralidade é a relação entre os custos incorridos com sinistros e a
      receita obtida pela operadora do plano de saúde por meio das mensalidades.
      Geralmente, é considerada aceitável uma taxa de sinistralidade em torno de
      70% da receita.
    </BoxIcon>

    <TextBlock>
      <Paragraph>
        No que diz respeito às regras para o reajuste dos planos de saúde
        individuais e coletivos (contratados pela empresa para seus
        colaboradores), estas são distintas. Os reajustes dos planos coletivos
        não são regulados pela ANS e podem ser determinados com base no
        critérios descritos a seguir:
      </Paragraph>
    </TextBlock>

    <h1>TABELAAAA</h1>

    <TextBlock>
      <Paragraph>
        Lembrando que os planos de saúde coletivos não são regulados pela ANS da
        mesma forma que os planos individuais, mas devem seguir as diretrizes
        estabelecidas por este órgão.
      </Paragraph>

      <Paragraph>
        No caso dos planos individuais, os reajustes são regulamentados pela ANS
        e geralmente entram em vigor a partir de maio de cada ano. Vejamos a
        seguir:
      </Paragraph>
    </TextBlock>

    <h1>ACCODEONN</h1>

    <TextBlock>
      <Paragraph>
        Assim, é importante destacar que a VCMH é a base de cálculo que reflete
        as despesas médico-hospitalares por beneficiário em um grupo, durante um
        período específico. Ela busca demonstrar a variação dos custos
        médico-hospitalares entre dois períodos consecutivos para o mesmo grupo
        de beneficiários. Portanto, o uso responsável e sustentável do benefício
        de saúde é uma ferramenta crucial para manter os índices de
        sinistralidade dentro do planejamento inicial (limite técnico).
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="2.1 Uso racional dos planos de saúde">
      <Paragraph>
        Quando falamos sobre uso racional no sistema de saúde, é importante
        esclarecer que não estamos falando de racionamento, mas sim de
        racionalização. Ou seja, não se trata apenas de economizar, mas sim de
        usar os recursos de forma consciente. O uso racional implica em fazer
        escolhas sábias e conscientes, evitando desperdícios e garantindo que os
        recursos sejam usados com sabedoria.
      </Paragraph>

      <Paragraph>
        Além disso, o foco apenas na redução de custos e índices econômicos
        tira, muitas vezes, o olhar do principal ator dentro da Saúde
        Suplementar: o beneficiário/paciente. Para os empregados usarem o
        benefício do plano de saúde empresarial de forma racional é preciso
        desenvolver programas que estimulem hábitos saudáveis e orientem sobre a
        utilização do benefício, como por exemplo:
      </Paragraph>
    </TextBlock>

    <h1>ACCODEONN</h1>

    <h1>IMAGEMM</h1>

    <TextBlock>
      <Paragraph>
        O bem-estar dos colaboradores deve ser uma das prioridades de qualquer
        empresa, e o plano de saúde é uma ótima maneira de garanti-lo. É
        comprovado que colaboradores mais saudáveis são mais produtivos. Quando
        a empresa oferece um plano de saúde e executa ações preventivas, isso
        mostra como ela se importa com seus funcionários, consequentemente
        tornando-os mais fiéis ao propósito da empresa e com maiores chances de
        permanecerem na corporação por mais tempo.
      </Paragraph>
    </TextBlock>

    <BoxIcon tipo="recapitulando"
      >Chegamos ao final de mais um módulo. Neste período, abordamos temas
      ligados ao vasto universo da Saúde Suplementar e às burocracias envolvidas
      nos processos de contratação de operadoras de saúde. Por meio de um
      panorama do sistema de saúde brasileiro, foi possível dar uma visão geral
      a respeito das doenças crônicas não transmissíveis e como sua incidência
      impacta negativamente uma empresa. Mostrou-se, ainda, o desenvolvimento de
      programa de qualidade de vida e de gerenciamento de saúde populacional nas
      empresas, como funcionam e seus benefícios. Por fim, de maneira objetiva,
      foi possível esclarecer como são calculados os reajustes dentro do plano
      de saúde.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 02"
      prevLink="modulo-03/topico-02"
      nextName="Módulo 04"
      nextLink="modulo-04"
      :lastTopico="true"
      referenciasLink="modulo-03/referencias"
      atividadeLink="modulo-03/atividade"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    NavFooter,
    Paragraph,
  },
  data() {
    return {};
  },

  methods: {},

  created() {
    this.$store.state.progresso_modulo_01.items.topico_03 = true;
    this.$store.commit("SALVAR_PROGRESSO");
  },
};
</script>

<style scoped>
</style>
