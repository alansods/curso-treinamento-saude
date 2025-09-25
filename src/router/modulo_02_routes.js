import Apresentacao from "@/views/modulos/modulo_02/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_02/Topico_01";
import Topico_02 from "@/views/modulos/modulo_02/Topico_02";
import Referencias from "@/views/modulos/modulo_02/components/Referencias";
import Atividade from "@/views/modulos/modulo_02/components/Atividade";

const modulo_02_Routes = [
  {
    path: "/modulo-02",
    name: "Módulo 02",
    component: Apresentacao,
  },
  {
    path: "/modulo-02/topico-01",
    name: "Módulo 02 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-02/topico-02",
    name: "Módulo 02 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-02/referencias",
    name: "Módulo 02 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-02/atividade",
    name: "Módulo 02 - Atividade",
    component: Atividade,
  },
];

export default modulo_02_Routes;
