<template>
  <AulaTemplate
    :titulo="$store.state.modulos[1].titulo"
    :numero="$store.state.modulos[1].numero"
    titleSize="4"
  >
    <TextBlock topico="Referêcias">
      <v-row style="word-break: break-word">
        <v-col cols="12" sm="6">
          <Paragraph>
            ABERGO. Associação Brasileira de Ergonomia.  Disponível em: http://www.abergo.org.br/. Acesso em: 26 ago. 2023.

          </Paragraph>

          <Paragraph>
            BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância de Doenças e Agravos não Transmissíveis e Promoção da Saúde. Saúde Brasil 2018: uma análise de situação de saúde e das doenças e agravos crônicos: desafios e perspectivas. Brasília: Ministério da Saúde, 2019.
          </Paragraph>

          <Paragraph>
            BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância em Saúde Ambiental e Saúde do Trabalhador. Dor relacionada ao trabalho: lesões por esforços repetitivos (LER): distúrbios osteomusculares relacionados ao trabalho (DORT). Brasília: Ministério da Saúde do Brasil, 2012.
          </Paragraph>

          <Paragraph>
            BRASIL; Ministério do Trabalho e Previdência. Norma Regulamentadora 17: NR 17 - Ergonomia. Brasília: Ministério do Trabalho e Previdência, 2021
          </Paragraph>

          <Paragraph>
            BRASIL. Justiça Federal. Orientações ergonômicas. Brasília: Ministério da Justiça, 2015.

          </Paragraph>

          <Paragraph>
            COUTO, H. A. Ergonomia 4.0: dos conceitos básicos à 4ª revolução industrial. Belo Horizonte: Ergo, 2020.
          </Paragraph>
        </v-col>

        <v-col cols="12" sm="6">
          <Paragraph>
            DOMBIDAU JUNNIOR, R.C., SILVA, B.C.B., CANEDO, G.R. Aplicação do método RULA (RAPID UPPER LIMB ASSESSMENT) em um laboratório didático. XXXVII Encontro Nacional de Engenharia de Produção.  2017. Disponível em: https://abepro.org.br/biblioteca/tn_sto_241_401_32996.pdf Acesso em 08 ago 2023.

          </Paragraph>

          <Paragraph>
            FERREIRA, M. C. Ergonomia da Atividade aplicada à Qualidade de Vida no Trabalho: lugar, importância e contribuição da Análise Ergonômica do Trabalho (AET). Revista Brasileira de Saúde Ocupacional, Brasília, v. 40, n. 131. 11 p, 2014.
          </Paragraph>

          <Paragraph>
            FILHO, N.F. Tópicos em Ergonomia e Segurança no Trabalho. 1 ed. Belo Horizonte: Poisson, 2017.
          </Paragraph>

          <Paragraph>
            MENDONÇA, A. G. Custos diretos da dor lombar em hospitais financiados pelo Sistema Único de Saúde. Revista Pesquisa em Fisioterapia, Salvador, v. 11, n. 1,  2021.
          </Paragraph>

          <Paragraph>
            MULLER, M.M. Nova NR17 - ERGONOMIA. 2021.
          </Paragraph>

          <Paragraph>
            PAIM, C., PERAÇA, D., SAPPER,F., MOREITA,I. Análise Ergonômica: Métodos Rula e Owas aplicados em uma Instituição de ensino superior. Revista Espacios. V.38,n.11, 2017.
          </Paragraph>

          <Paragraph>
            PINTO, Fernando Prietto. Notificações de LER/DORT no Brasil entre 2007 e 2021: um estudo descritivo. Florianópolis, 2022. Disponível em: https://repositorio.ufsc.br/bitstream/handle/123456789/236134/TCC.pdf?sequence=1&isAllowed=y Acesso em: 08 ago 2023
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-02/topico-02"
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
