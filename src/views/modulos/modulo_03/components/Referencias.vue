<template>
  <AulaTemplate
    :titulo="$store.state.modulos[2].titulo"
    :numero="$store.state.modulos[2].numero"
    titleSize="4"
  >
    <TextBlock topico="Referêcias">
      <v-row style="word-break: break-word">
        <v-col cols="12" sm="6">
          <Paragraph>
            AGÊNCIA NACIONAL DE SAÚDE SUPLEMENTAR (2018). Dados e indicadores do
            setor. Disponível em:
            https://www.gov.br/ans/pt-br/acesso-a-informacao/perfil-do-setor/dados-e-indicadores-do-setor.
            Acesso em: 26 set. 2023.
          </Paragraph>

          <Paragraph>
            AGÊNCIA NACIONAL DE SAÚDE SUPLEMENTAR (2023). O que é o Rol de
            Procedimentos ou cobertura mínima obrigatória? Disponível em:
            https://www.gov.br/ans/pt-br/acesso-a-informacao/participacao-da-sociedade/atualizacao-do-rol-de-procedimentos#:~:text=O%20Rol%20de%20procedimentos%20e%20eventos%20em%20sa%C3%BAde%20%C3%A9%20uma,sem%20obstetr%C3%ADcia%2C%20refer%C3%AAncia%20ou%20odontol%C3%B3gico.
            Acesso em 27 set. 2023
          </Paragraph>

          <Paragraph>
            AGÊNCIA NACIONAL DE SAÚDE SUPLEMENTAR (2017). Planos de saúde
            realizaram 1,5 bilhão de procedimentos em 2017. Disponível em:
            https://www.gov.br/ans/pt-br/assuntos/noticias/numeros-do-setor/planos-de-saude-realizaram-1-5-bilhao-de-procedimentos-em-2017.
            Acesso em 27 set. 2023
          </Paragraph>

          <Paragraph>
            AGÊNCIA NACIONAL DE SAÚDE SUPLEMENTAR (2023). Reajustes de preços de
            planos de saúde.
            https://www.gov.br/ans/pt-br/assuntos/consumidor/reajuste-variacao-de-mensalidade/reajuste-anual-de-planos-individuais-familiares-1/reajustes-de-precos-de-planos-de-saude-antigos.
            Acesso em 27 set. 2023
          </Paragraph>

          <Paragraph>
            BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde.
            Departamento de Atenção Básica. Prevenção clínica de doenças
            cardiovasculares, cerebrovasculares e renais. Brasil, 2006.
          </Paragraph>

          <Paragraph>
            BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde,
            Departamento de Análise em Saúde e Vigilância de Doenças Não
            Transmissíveis. Plano de Ações Estratégicas para o Enfrentamento das
            Doenças Crônicas e Agravos não Transmissíveis no Brasil 2021-2030.
            Brasília, 2021.
          </Paragraph>
        </v-col>

        <v-col cols="12" sm="6">
          <Paragraph>
            CARNEIRO, L.L. Qualidade de vida no trabalho. Gestão de Pessoas com
            Ênfase em Gestão por Competências, Salvador, 2018.
          </Paragraph>

          <Paragraph>
            DONATO, T.A.A.; et al. Exame ocupacional periódico: oportunidade de
            diagnóstico e monitoramento de doença crônica não transmissível em
            homens. Cadernos de Saúde Pública. vol. 37, no 11, 2021, p.
            e00298320.
          </Paragraph>

          <Paragraph>
            FIGUEIREDO, A.E.B. ; et al. Doenças crônicas não transmissíveis e
            suas implicações na vida de idosos dependentes. Ciência & Saúde
            Coletiva. v. 26, n. 1, janeiro de 2021, p. 77–88.
          </Paragraph>

          <Paragraph>
            HYEDA, A.; COSTA, E.S.M. A relação entre a ergonomia e as doenças
            crônicas não transmissíveis e seus fatores de risco. Rev Bras Med
            Trab, Espírito Santo, v. 15, n. 2, 2017.
          </Paragraph>

          <Paragraph>
            KOTEKEWIS, K.; et al. Doenças crônicas não transmissíveis e o
            estresse dos trabalhadores de enfermagem de bloco cirúrgico.
            Enfermería Global, vol. 16, no dia 2 de março de 2017, p. 295.
          </Paragraph>

          <Paragraph>
            MACIEL, A.C.C.; FERNANDES, M.B.; MEDEIROS, L.S. Prevalência e
            fatores associados à sintomatologia dolorosa entre profissionais da
            indústria têxtil. Rev Bras Epidemiol, v. 9, n. 1, 2006.
          </Paragraph>

          <Paragraph>
            SANTOS, E.P. Doenças crônicas não transmissíveis: desafios e
            repercussões na perspectiva da enfermagem da atenção básica.
            Arquivos de Ciências da Saúde da UNIPAR, Umuarama, v. 27, n. 4.
            2023.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-03/topico-03"
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
