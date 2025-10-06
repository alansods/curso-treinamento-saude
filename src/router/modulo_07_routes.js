import Apresentacao from "@/views/modulos/modulo_07/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_07/Topico_01";
import Topico_02 from "@/views/modulos/modulo_07/Topico_02";
import Referencias from "@/views/modulos/modulo_07/components/Referencias";
import Atividade from "@/views/modulos/modulo_07/components/Atividade";

const modulo_07_Routes = [
  {
    path: "/modulo-07",
    name: "Módulo 07",
    component: Apresentacao,
  },
  {
    path: "/modulo-07/topico-01",
    name: "Módulo 07 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-07/topico-02",
    name: "Módulo 07 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-07/referencias",
    name: "Módulo 07 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-07/atividade",
    name: "Módulo 07 - Atividade",
    component: Atividade,
  },
];

export default modulo_07_Routes;
