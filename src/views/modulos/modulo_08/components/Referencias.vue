<template>
  <AulaTemplate
    :titulo="$store.state.modulos[7].titulo"
    :numero="$store.state.modulos[7].numero"
    titleSize="4"
  >
    <TextBlock topico="Referêcias">
      <v-row style="word-break: break-word">
        <v-col cols="12" sm="6">
          <Paragraph>
            BOFF, Leonardo. Sustentabilidade: O que é – o que não é. 3ª edição.
            Petrópolis, RJ: Vozes, 2014.
          </Paragraph>

          <Paragraph>
            CONFEDERAÇÃO NACIONAL DA INDÚSTRIA (CNI). Consulta ESG e a Indústria
            brasileira. Junho de 2022. Disponível em:
            https://www.portaldaindustria.com.br/publicacoes/2022/6/consulta-esg-na-industria-brasileira/.
            Acesso em: 10 de julho de 2023.
          </Paragraph>

          <Paragraph>
            ELKINGTON, J. Canibais com Garfo e Faca. São Paulo: Makron Books,
            2001.
          </Paragraph>

          <Paragraph>
            GLOBAL REPORTING INITIATIVE (GRI). GRI Standards (tradução em
            português). Disponível em:
            https://www.globalreporting.org/how-to-use-the-gri-standards/gri-standards-portuguese-translations/.
            Acesso em: 10 de julho de 2023.
          </Paragraph>

          <Paragraph>
            INSTITUTO BRASILEIRO DE GOVERNANÇA CORPORATIVA (IBGC). Código das
            Melhores Práticas de Governança Corporativa. 5ª edição. Ano.
            Disponível em: Incluir o link correto. Acesso em: 10 de julho de
            2023.
          </Paragraph>
        </v-col>

        <v-col cols="12" sm="6">
          <Paragraph>
            ISEB3 - Índice de Sustentabilidade Empresarial Brasil. Disponível
            em: http://iseb3.com.br/. Acesso em: 10 de julho de 2023.
          </Paragraph>

          <Paragraph>
            MACKEY, John; SISODIA, Raj. Capitalismo Consciente. São Paulo: Alta
            Books, 2018.
          </Paragraph>

          <Paragraph>
            ONU. Objetivos de Desenvolvimento Sustentável. Disponível em
            https://www.pactoglobal.org.br/ods. Acesso em: 20 de julho de 2023.
          </Paragraph>

          <Paragraph>
            ONU. Pacto Global. Disponível em
            https://www.pactoglobal.org.br/a-iniciativa. Acesso em: 10 de julho
            de 2023.
          </Paragraph>

          <Paragraph>
            ONU. Plataforma Agenda 2030. Disponível em:
            http://www.agenda2030.com.br/. Acesso em: 27 de julho de 2023.
          </Paragraph>

          <Paragraph>
            VOLTOLINI, Ricardo. Vamos falar de ESG? Provocações de um pioneiro
            em sustentabilidade empresarial. Editora Voo; 1ª edição, 2021.
          </Paragraph>
        </v-col>
      </v-row>
    </TextBlock>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="6">
        <NavButton
          link="modulo-08/topico-04"
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
