import Apresentacao from "@/views/modulos/modulo_06/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_06/Topico_01";
import Topico_02 from "@/views/modulos/modulo_06/Topico_02";
import Referencias from "@/views/modulos/modulo_06/components/Referencias";
import Atividade from "@/views/modulos/modulo_06/components/Atividade";

const modulo_06_Routes = [
  {
    path: "/modulo-06",
    name: "Módulo 06",
    component: Apresentacao,
  },
  {
    path: "/modulo-06/topico-01",
    name: "Módulo 06 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-06/topico-02",
    name: "Módulo 06 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-06/referencias",
    name: "Módulo 06 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-06/atividade",
    name: "Módulo 06 - Atividade",
    component: Atividade,
  },
];

export default modulo_06_Routes;
