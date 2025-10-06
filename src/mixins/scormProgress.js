import { SCORM } from "pipwerks-scorm-api-wrapper";

export default {
  methods: {
    // Método para salvar progresso automaticamente
    saveProgress() {
      try {
        console.log("Salvando progresso automaticamente...");
        // Salvar apenas dados de retomada
        SCORM.set(
          "cmi.suspend_data",
          JSON.stringify(this.$store.state.progresso_modulos)
        );
        SCORM.save();
        console.log("Progresso salvo com sucesso");
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }
    },
  },
};
