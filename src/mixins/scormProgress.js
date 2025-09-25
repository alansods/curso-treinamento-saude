import { SCORM } from "pipwerks-scorm-api-wrapper";

export default {
  methods: {
    // Método para salvar progresso automaticamente
    saveProgress() {
      try {
        console.log("Salvando progresso automaticamente...");
        SCORM.set("cmi.score.raw", this.$store.state.progresso_modulos.LMS_Progress);
        SCORM.set("cmi.completion_status", this.$store.state.progresso_modulos.completion_status);
        SCORM.set("cmi.suspend_data", JSON.stringify(this.$store.state.progresso_modulos));
        SCORM.set("cmi.progress_measure", this.$store.state.progresso_modulos.LMS_Progress / 100);
        SCORM.set("cmi.success_status", this.$store.state.progresso_modulos.completion_status === "completed" ? "passed" : "unknown");
        SCORM.save();
        console.log("Progresso salvo com sucesso");
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }
    }
  }
};
