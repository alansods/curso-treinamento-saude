import Apresentacao from "@/views/modulos/modulo_04/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_04/Topico_01";
import Topico_02 from "@/views/modulos/modulo_04/Topico_02";
import Referencias from "@/views/modulos/modulo_04/components/Referencias";
import Atividade from "@/views/modulos/modulo_04/components/Atividade";

const modulo_04_Routes = [
  {
    path: "/modulo-04",
    name: "Módulo 04",
    component: Apresentacao,
  },
  {
    path: "/modulo-04/topico-01",
    name: "Módulo 04 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-04/topico-02",
    name: "Módulo 04 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-04/referencias",
    name: "Módulo 04 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-04/atividade",
    name: "Módulo 04 - Atividade",
    component: Atividade,
  },
];

export default modulo_04_Routes;
