<template>
  <AulaTemplate
    :titulo="$store.state.modulos[0].titulo"
    :numero="$store.state.modulos[0].numero"
  >
    <TextBlock
      topico="Tópico 02 - Transtornos Mentais Mais Comuns no Ambiente de Trabalho"
    >
      <Paragraph>
        Neste tópico, abordaremos os transtornos mentais mais comuns no ambiente
        de trabalho. Você sabia que a partir de 2010, observou-se um aumento
        considerável nos transtornos mentais relacionados ao trabalho? Estima-se
        que a concessão de benefícios para esse grupo específico de
        trabalhadores tenha aumentado em 24%. Esses dados são ainda mais
        evidentes no público feminino, que apresentou um aumento de cerca de
        650% em um período de cinco anos. O perfil dos colaboradores afastados
        por transtornos mentais é composto, em sua grande maioria, por
        trabalhadores da produção de bens e serviços industriais, com idades
        entre 19 e 39 anos e nível de escolaridade médio. As principais causas
        do desenvolvimento desses transtornos estão relacionadas à reação ao
        estresse grave, episódios depressivos e transtorno de adaptação. Vejamos
        a seguir os transtornos mentais mais comuns no ambiente de trabalho:
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="Síndrome de Burnout">
      <Paragraph>
        Dentre os fatores relacionados à organização, podemos citar o excesso de
        normas, mudanças organizacionais frequentes, comunicação ineficiente,
        impossibilidade de ascender na carreira. Os fatores individuais podem
        potencializar o risco de desenvolver transtornos quando associados a um
        fator organizacional. Indivíduos pessimistas, perfeccionistas,
        controladores e passivos estão associados a índices mais elevados da
        síndrome de Burnout.
      </Paragraph>

      <v-row justify="center">
        <v-col cols="12" sm="8">
          <Imagem
            src="modulo_01/imagem2.svg"
            legenda="Imagem 2: Os fatores de risco para o desenvolvimento do Burnout"
            fonte="Senai Ceará / freepik.com"
          />
        </v-col>
      </v-row>

      <Paragraph>
        Dentre os fatores relacionados à organização, podemos citar o excesso de
        normas, mudanças organizacionais frequentes, comunicação ineficiente,
        impossibilidade de ascender na carreira. Os fatores individuais podem
        potencializar o risco de desenvolver transtornos quando associados a um
        fator organizacional. Indivíduos pessimistas, perfeccionistas,
        controladores e passivos estão associados a índices mais elevados da
        síndrome de Burnout.
      </Paragraph>

      <v-row justify="center">
        <v-col cols="12" sm="8">
          <Imagem
            src="modulo_01/imagem3.jpg"
            legenda="Imagem 3 : O esgotamento físico é um dos principais sintomas da síndrome de Burnout."
            fonte="Wikimedia Commons"
          />
        </v-col>
      </v-row>

      <Paragraph>
        Os fatores laborais também podem estar associados à síndrome de Burnout.
        O Trabalho por turnos ou noturno, a sobrecarga, os sentimentos de
        injustiça e de iniquidade nas relações laborais, e a ambiguidade de
        papel são os mais citados na literatura. O trabalho por turnos ou
        noturno chega a afetar cerca de 20% dos trabalhadores, acarretando
        transtornos físicos e psicológicos. O precário suporte organizacional e
        o relacionamento conflituoso entre colegas também são citados como
        fatores que podem agravar a síndrome. Além disso, a presença de
        indivíduos competitivos, distantes, excessivamente críticos ou
        desmotivados contribui para a intensificação desses problemas
      </Paragraph>

      <Paragraph>
        Em relação aos fatores sociais, pode-se destacar a falta de suporte
        social e familiar, bem como a necessidade da manutenção do prestígio
        social em oposição à baixa salarial de determinada profissão. O
        indivíduo busca vários empregos, o que leva a uma sobrecarga de trabalho
        e, consequentemente, pouco tempo para descanso, lazer e atualização
        profissional, levando à insatisfação e insegurança em relação às
        atividades desempenhadas.
      </Paragraph>

      <BoxIcon tipo="voce_sabia" class="my-10">
        Acredita-se que a síndrome de Burnout tenha uma associação significativa
        com transtornos depressivos e de ansiedade. Apesar de poucos estudos
        sobre a correlação, alguns autores afirmam que altos níveis de exigência
        psicológica, baixos níveis de liberdade de decisão, baixos níveis de
        apoio social no trabalho e estresse devido a trabalho inadequado são
        preditores significantes para subsequente depressão.
      </BoxIcon>

      <Paragraph>
        Quanto maior for o nível de estresse associado ao limitado apoio da
        organização ao funcionário, maior a probabilidade de desenvolver
        síndrome de Burnout. Quanto mais forte for o suporte da organização,
        menor a tendência em se desenvolver depressão. Constatou-se que oficiais
        ocupando cargos de alto nível recebiam menor apoio organizacional e
        estavam mais severamente deprimidos quando comparados a oficiais em
        cargos hierárquicamente mais baixos.
      </Paragraph>
    </TextBlock>

    <TextBlock subTopico="Ansiedade">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <Imagem
            src="modulo_01/ansiedade.svg"
            legenda="Imagem 3 : Ansiedade"
            fonte="freepik.com"
          />
        </v-col>

        <v-col cols="12" sm="8">
          <Paragraph>
            A ansiedade ocasiona emoções desagradáveis de aflição, com o corpo
            em sinal de alerta. O indivíduo pode apresentar fadiga constante e
            progressiva, dores musculares, distúrbios do sono, cefaleia,
            enxaquecas, falta de concentração, alterações de memória e
            lentificação do pensamento. Os três últimos sintomas têm um impacto
            significativo na organização e comprometem a qualidade do trabalho,
            a comunicação e a colaboração entre os colaboradores.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <TextBlock subTopico="Depressao">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <Imagem
            src="modulo_01/depressao.svg"
            legenda="Imagem 3 : Depressão"
            fonte="freepik.com"
          />
        </v-col>

        <v-col cols="12" sm="8">
          <Paragraph>
            Indivíduos que sofrem com esse transtorno mental estão mais sujeitos
            a deixar o emprego, levando a altas taxas de absenteísmo e
            rotatividade de funcionários. Com isso, a instituição aumenta os
            gastos com o tratamento do profissional já acometido pelo
            transtorno, contratação de novos funcionários e ainda reduz a
            qualidade do serviço prestado para seus compradores, pois diminui a
            produtividade, aumenta a probabilidade de erros e acidentes. Além
            disso, pode haver uma exposição negativa da marca e multas
            administrativas.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <BoxIcon tipo="recapitulando"
      >Chegamos ao final deste tópico. No próximo tópico, abordaremos um tema de
      extrema importância e sensibilidade: o assédio no ambiente de trabalho.
    </BoxIcon>

    <NavFooter
      prevName="Tópico 01"
      prevLink="modulo-01/topico-01"
      nextName="Tópico 03"
      nextLink="modulo-01/topico-03"
      :lastTopico="false"
    />
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import BoxIcon from "@/components/BoxIcon.vue";
import Imagem from "@/components/Imagem.vue";
import NavFooter from "@/components/NavFooter.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    BoxIcon,
    Imagem,
    NavFooter,
    Paragraph,
  },
  data() {
    return {
      modelTranstornos: 0,

      itemsConsequencias: {
        tab: 0,

        tab1: {
          titulo: "Para o indivíduo",
          items: [
            "Dores generalizadas",
            "Palpitações",
            "Distúrbios digestivos",
            "Dores de cabeça",
            "Hipertensão arterial",
            "Alteração do sono",
            "Irritabilidade",
            "Crises de choro",
            "Abandono de relações pessoais",
            "Problemas familiares",
            "Isolamento",
            "Depressão",
            "Síndrome do pânico",
            "Estresse",
            "Suicídio",
          ],
        },

        tab2: {
          titulo: "Para a empresa",
          items: [
            "Redução da produtividade",
            "Rotatividade de pessoal",
            "Aumento de erros e acidentes",
            "Absenteísmo (faltas)",
            "Licenças médicas ",
            "Exposição negativa da marca",
            "Indenizações trabalhistas",
            "Multas administrativas",
          ],
        },
      },

      itemsAssedioSexual: {
        tab: 0,
      },
    };
  },

  methods: {},

  created() {
    this.$store.state.progresso_modulo_01.items.topico_02 = true
    this.$store.commit("SALVAR_PROGRESSO");
  }
};
</script>

<style scoped>

</style>
