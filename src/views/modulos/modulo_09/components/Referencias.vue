<template>
  <AulaTemplate
    :titulo="$store.state.modulos[8].titulo"
    :numero="$store.state.modulos[8].numero"
    titleSize="4"
  >
    <TextBlock topico="Referêcias">
      <v-row style="word-break: break-word">
        <v-col cols="12" sm="6">
          <Paragraph>
            BRASIL. Congresso Nacional. Lei n. 8080, de 19 de setembro de 1990.
            Diário Oficial da União. 1990.
          </Paragraph>

          <Paragraph>
            BRASIL. Ministério da Economia. Portaria nº 6.730, de 9 de março de
            2020. Aprova a nova redação da Norma Regulamentadora nº 01 –
            Disposições Gerais e Gerenciamento de Riscos Ocupacionais. (Processo
            nº 19966.100073/2020-72). Diário Oficial da União: seção 1,
            Brasília, n. 49, p. 17, mar. 2020.
          </Paragraph>

          <Paragraph>
            GELLER, E. S. Cultura de Segurança Total. Profissional Safety,
            Setembro, 1994.
          </Paragraph>

          <Paragraph>
            HELMAN, Cecil G. Cultura, saúde e doença. 5 ed. Artmed, 2009.
          </Paragraph>

          <Paragraph>
            MARTINEZ, M. C.; LATORRE, M. D.R.; FISCHER, F. M. Capacidade para o
            trabalho: revisão de literatura. Ciência & Saúde Coletiva, v. 15, n.
            suppl 1, p. 1553–1561, 2010.
          </Paragraph>

          <Paragraph>
            MELO, L. A.; SILVA, J. J. F.; GALINDO, J.; QUELHAS, O. L. G. A
            Cultura de Segurança como resultado de um processo de liderança
            eficaz. In: Encontro Nacional de Engenharia de Produção, 21, 2001.
            Anais. Salvador.
          </Paragraph>
        </v-col>

        <v-col cols="12" sm="6">
          <Paragraph>
            MENDES, J.M.R; WUNSCH,D.S. Elementos para uma nova cultura em
            segurança e saúde no trabalho. Revista Brasileira de saúde
            ocupacional. N.32, v.115. 2007.
          </Paragraph>

          <Paragraph>
            ORGANIZAÇÃO INTERNACIONAL DO TRABALHO (OIT). Reforçar o diálogo
            social para uma cultura de segurança e saúde. 2022.
          </Paragraph>

          <Paragraph>
            PORTO, M.F.S.; MARTINS, B.S. Repensando alternativas em Saúde do
            Trabalhador em uma perspectiva emancipatória. Revista Brasileira de
            Saúde Ocupacional, 2019.
          </Paragraph>

          <Paragraph>
            RIBEIRO, I. C. M.; HENNEBERG, F. A. CATAI, R. E. Gestão de segurança
            por meio do emprego de ferramenta para identificação dos riscos
            contidos no ambiente de trabalho. XXXV Encontro Nacional de
            Engenharia de Produção. Perspectivas Globais para a Engenharia de
            Produção. Fortaleza, 2015.
          </Paragraph>

          <Paragraph
            >SANTANA, D.S. A importância da implantação de um sistema de gestão
            de saúde e segurança no trabalho nas universidades públicas. 15 f.
            Trabalho de conclusão de curso (Graduação em Administração),
            Universidade Estadual da Paraíba, Campina Grande, 2012.</Paragraph
          >

          <Paragraph>
            SOUSA, L.M.M. Saúde Ocupacional. 1 ed. Saraiva, 2014.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-09/topico-02"
          name="Voltar"
          color="primary"
          icon="mdi-arrow-left-bold-circle"
          :left="true"
          :block="true"
          height="50"
        ></NavButton>
      </v-col>
    </v-row>
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import TextBlock from "@/components/TextBlock.vue";
import NavButton from "@/components/NavButton.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: {
    AulaTemplate,
    TextBlock,
    NavButton,
    Paragraph,
  },
};
</script>

<style></style>
