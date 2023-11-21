<template>
  <AulaTemplate
    :titulo="$store.state.modulos[7].titulo"
    :numero="$store.state.modulos[7].numero"
    titleSize="4"
  >
    <TextBlock
      topico="Tópico 03 - Desafios e Perspectivas do ESG: Impactos nas Empresas"
    >
      <Paragraph>
        Neste tópico, exploraremos os riscos e oportunidades que o ESG oferece
        às empresas. Vamos analisar como esses princípios podem afetar o
        desempenho e a sustentabilidade dos negócios, bem como as estratégias
        que as empresas podem adotar para aproveitar ao máximo essas tendências.
      </Paragraph>

      <Paragraph>
        Você já deve ter notado que o ESG não é mais apenas uma tendência
        passageira, mas uma parte fundamental dos negócios modernos. Embora
        muitas empresas já estejam adotando práticas ESG, algumas ainda relutam
        em reconhecer sua eficácia na gestão, apesar de suas enormes vantagens
        nos pilares ambientais, sociais e de governança corporativa. Os negócios
        atuais vivem um momento de desenvolvimento voltado ao design inteligente
        das operações, da tecnologia que transcendem muitas vezes ao espaço
        físico. O ESG auxilia a performance das empresas que passam a ser vistas
        como sustentáveis a longo prazo, trazendo segurança aos investidores,
        que avaliam seus indicadores não-financeiros. Não só no Brasil, mas
        outros países em desenvolvimento vêem suas empresas com dificuldade para
        aplicar o conceito ESG em seus negócios e em suas relações,
        principalmente devido à precariedade dos recursos existentes, da
        dependência de financiamento externo e de políticas que facilitem a ação
        dos empresários e empreendedores com menos impostos e obrigações.
      </Paragraph>

      <Paragraph>
        Notadamente, não temos mais tempo. Já estamos em déficit com o meio
        ambiente, atrasados em relação às desigualdades sociais e enfrentando um
        cenário de grande corrupção na política. Precisamos recuperar a dinâmica
        geracional para garantir a sobrevivência. A partir disso, surgem
        reflexões e teorias. O desenvolvimento sustentável é um grande desafio,
        especialmente considerando o aumento das populações, o que gera riscos
        sociais crescentes. Em outras palavras, muitas vezes, ao focar no meio
        ambiente, negligenciamos o combate à pobreza, tornando-o cada vez mais
        desafiador.
      </Paragraph>

      <Paragraph>
        Por esse motivo, as empresas são consideradas os principais atores nessa
        empreitada, pois enfrentam o desafio de produzir de forma sustentável,
        mesmo diante do cenário apresentado. Isso se deve principalmente à
        necessidade de incorporar o ESG como pilar estratégico e base de tomada
        de decisões, a fim de que seus produtos e serviços impactem o mínimo
        possível o ecossistema social e financeiro, proporcionando um sistema de
        compensação em que todos saiam ganhando. Vejamos a seguir os fatores que
        motivam os líderes a adotarem práticas sustentáveis.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem
          src="modulo_08/1.png"
          fonte="Consulta ESG na Indústria Brasileira ( 2022)"
          legenda="Imagem 2: Motivações que levam os líderes empresariais a integrar o ESG na tomada de decisões das empresas."
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        O principal risco para as empresas é não se adequar! Não se adequar a
        qualquer custo, apenas para atender a uma demanda crescente do mercado,
        mas sim se alinhar adotando as práticas ESG de acordo com seus valores e
        princípios. A pressão social por um aumento na responsabilidade
        socioambiental das empresas muitas vezes leva a ações rápidas, focadas
        apenas na imagem, sem um compromisso real com o cumprimento dos 17 ODS,
        por exemplo. É verdade que estamos vendo cada vez mais ações efetivas e
        impactantes ocorrendo, mas também há o que chamamos de greenwashing ou
        ações ESG superficiais, que estão presentes no mercado e na sociedade.
      </Paragraph>
    </TextBlock>

    <v-row justify="center">
      <v-col cols="12" sm="10">
        <Imagem
          src="modulo_08/2.png"
          fonte="Fonte: Consulta ESG na Indústria Brasileira (2022)"
          legenda="Imagem 3: Desafios na implementação do ESG"
        />
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        Você sabe o que são os <strong><i>washings</i></strong
        >? São ações que buscam enganar, burlar, ludibriar e maquiar resultados
        e conquistas com a ideia de melhorar a imagem da empresa de maneira
        imediata e que não gera resultado real. Temos alguns tipos já conhecidos
        do mercado, são eles:
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
          <template #front>GREENWASHING</template>

          <template #back>
            Chamado de “ lavagem verde”, é o termo mais conhecido, que surgiu na
            esteira de exigência dos consumidores por empresas mais conscientes
            do impacto ambiental que a produção daquela determinada empresa tem.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>SOCIALWASHING</template>

          <template #back>
            Quando empresas buscando maior visibilidade social junto a seus
            consumidores e a sociedade local, propõem ações pontuais e não geram
            resultado de fato para a diminuição das desigualdades.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>LAWSWASHING</template>

          <template #back>
            Quando as ações de governança corporativa são levadas para a esfera
            do desvio, fazendo uso de brecha na lei que privilegiam poucos e
            prejudicam a maioria.
          </template>
        </FlipCard>
      </v-col>

      <v-col cols="12" sm="3">
        <FlipCard>
          <template #front>BLUEWASHING</template>

          <template #back>
            Quando ações, projetos, organizações, associações entre outros ,
            associam a marca visual da ONU com o objetivo de legitimar de
            maneira indevida determinada atividade.
          </template>
        </FlipCard>
      </v-col>
    </v-row>

    <TextBlock>
      <Paragraph>
        O mercado financeiro é outro ponto de riscos que pode impactar todo o
        mundo globalizado e se depara com duas realidades: uma pelo papel
        crítico de influenciar outros setores nas questões que envolvem o ESG e
        por outro lado, junto a esfera pública e reguladores definindo novos
        padrões de divulgação e consistência das métricas ESG. Nessa direção,
        quatro elementos ganham destaque: a transparência, métricas, remuneração
        e pessoas. Vejamos cada um deles de forma mais detalhada a seguir:
      </Paragraph>
    </TextBlock>

    <Accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Transparência</v-expansion-panel-header>
        <v-expansion-panel-content>
          desempenha um papel crucial na divulgação pública das práticas ESG,
          mas enfrenta desafios devido à falta de padronização. Embora existam
          padrões voluntários, como o Global Reporting Initiative (GRI), o
          Sustainability Accounting Standards Board (SASB) e o Task Force on
          Climate-related Financial Disclosures (TCFD), a aplicação desses
          padrões ainda é voluntária. Além disso, empresas e entidades públicas
          muitas vezes recorrem aos Objetivos de Desenvolvimento Sustentável
          (ODS) como uma abordagem prática para aumentar a transparência em
          questões ESG. No contexto brasileiro, a Bolsa B3 passou a recomendar
          relatórios de sustentabilidade em 2012, tornando-se obrigatória em
          2015 pela Comissão de Valores Mobiliários ( CVM nº 552, de 9 de
          outubro de 2014).
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Métricas</v-expansion-panel-header>
        <v-expansion-panel-content>
          utilizadas para avaliar o grau de maturidade ESG. Em estudo da Nasdaq,
          a bolsa americana, cita que os emissores têm dificuldade para vincular
          estratégias ESG à gestão de risco.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Remuneração a metas ESG</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          um desafio adicional, pois a precisão da medida e da definição de
          atingimento individual e coletivo é complexa. Um estudo de 2020 da PwC
          com o Center for Corporate Governance da London Business School
          ressalta a dependência de diversos fatores na definição do alcance de
          metas ESG.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Pessoas</v-expansion-panel-header>
        <v-expansion-panel-content>
          diante de todo o exposto, um estudo da Sustainable Banker de 2021,
          cita que assim como ocorreu com a transformação digital que mudou o
          perfil de praticamente todos os profissionais do segmento. O mercado
          financeiro ainda carece de um perfil profissional executivo que
          incorpore tudo que foi apresentado anteriormente neste item, capaz de
          enraizar no seu modelo de gestão a tomada de decisão pautada no ESG.
          Já a área de RH precisa se adequar e ser capaz de desenvolver uma
          cultura ESG interna na empresa, alinhar seus processos seletivos e
          preparar novos líderes, capazes e adequados para o pensamento
          sustentável.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </Accordion>

    <BoxIcon tipo="recapitulando"
      >Vimos neste tópico os desafios e oportunidades que o mercado financeiro
      enfrenta em relação ao ESG, incluindo a necessidade de maior
      transparência, métricas sólidas, sistemas de remuneração adequados e
      profissionais preparados para promover a sustentabilidade. Essas são
      questões fundamentais para impulsionar a adoção efetiva das práticas ESG e
      enfrentar os desafios globais atuais.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 02"
      prevLink="modulo-08/topico-02"
      nextName="Tópico 04"
      nextLink="modulo-08/topico-04"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Accordion from "@/components/Accordion.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";
import FlipCard from "@/components/FlipCard.vue";
import Imagem from "@/components/Imagem.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    Accordion,
    NavFooter,
    Paragraph,
    FlipCard,
    Imagem,
  },
  data() {
    return {};
  },

  methods: {},


};
</script>

<style scoped>
.teste-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  background: #f07e27;
  color: #fff;
  font-weight: bold;
  width: 100px;
  padding: 10px 0;
  cursor: pointer;
  animation: tilt-shaking 1.5s ease infinite;
}

@keyframes tilt-shaking {
  0% {
    transform: translateX(0px);
  }
  15% {
    transform: translateX(3px);
  }
  30% {
    transform: translateX(0px);
  }
  45% {
    transform: translateX(3px);
  }
  60% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
