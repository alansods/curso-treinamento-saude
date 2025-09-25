import Apresentacao from "@/views/modulos/modulo_09/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_09/Topico_01";
import Topico_02 from "@/views/modulos/modulo_09/Topico_02";
import Referencias from "@/views/modulos/modulo_09/components/Referencias";
import Atividade from "@/views/modulos/modulo_09/components/Atividade";

const modulo_09_Routes = [
  {
    path: "/modulo-09",
    name: "Módulo 09",
    component: Apresentacao,
  },
  {
    path: "/modulo-09/topico-01",
    name: "Módulo 09 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-09/topico-02",
    name: "Módulo 09 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-09/referencias",
    name: "Módulo 09 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-09/atividade",
    name: "Módulo 09 - Atividade",
    component: Atividade,
  },
];

export default modulo_09_Routes;
