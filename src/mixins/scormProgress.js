import { SCORM } from "pipwerks-scorm-api-wrapper";

export default {
  methods: {
    // Método para salvar progresso automaticamente
    saveProgress() {
      try {
        console.log("Salvando progresso automaticamente...");

        // Salvar dados de retomada
        SCORM.set(
          "cmi.suspend_data",
          JSON.stringify(this.$store.state.progresso_modulos)
        );

        // Calcular progresso percentual
        const modulosConcluidos = Object.keys(
          this.$store.state.progresso_modulos
        ).filter(
          (key) =>
            key.startsWith("modulo_") &&
            this.$store.state.progresso_modulos[key] === true
        ).length;
        const totalModulos = 9; // Total de módulos
        const progressoPercentual = Math.round(
          (modulosConcluidos / totalModulos) * 100
        );

        // Salvar progresso no LMS (SCORM 1.2)
        SCORM.set(
          "cmi.core.lesson_status",
          progressoPercentual === 100 ? "completed" : "incomplete"
        );
        SCORM.set("cmi.core.score.raw", progressoPercentual.toString());
        SCORM.set("cmi.core.score.max", "100");
        SCORM.set("cmi.core.score.min", "0");

        SCORM.save();
        console.log(`Progresso salvo com sucesso: ${progressoPercentual}%`);
      } catch (error) {
        console.error("Erro ao salvar progresso:", error);
      }
    },
  },
};
