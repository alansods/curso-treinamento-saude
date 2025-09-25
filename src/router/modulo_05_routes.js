import Apresentacao from "@/views/modulos/modulo_05/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_05/Topico_01";
import Topico_02 from "@/views/modulos/modulo_05/Topico_02";
import Referencias from "@/views/modulos/modulo_05/components/Referencias";
import Atividade from "@/views/modulos/modulo_05/components/Atividade";

const modulo_05_Routes = [
  {
    path: "/modulo-05",
    name: "Módulo 05",
    component: Apresentacao,
  },
  {
    path: "/modulo-05/topico-01",
    name: "Módulo 05 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-05/topico-02",
    name: "Módulo 05 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-05/referencias",
    name: "Módulo 05 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-05/atividade",
    name: "Módulo 05 - Atividade",
    component: Atividade,
  },
];

export default modulo_05_Routes;
