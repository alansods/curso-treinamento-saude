import Apresentacao from "@/views/modulos/modulo_08/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_08/Topico_01";
import Topico_02 from "@/views/modulos/modulo_08/Topico_02";
import Topico_03 from "@/views/modulos/modulo_08/Topico_03";
import Topico_04 from "@/views/modulos/modulo_08/Topico_04";
import Referencias from "@/views/modulos/modulo_08/components/Referencias";
import Atividade from "@/views/modulos/modulo_08/components/Atividade";

const modulo_08_Routes = [
  {
    path: "/modulo-08",
    name: "Módulo 08",
    component: Apresentacao,
  },
  {
    path: "/modulo-08/topico-01",
    name: "Módulo 08 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-08/topico-02",
    name: "Módulo 08 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-08/topico-03",
    name: "Módulo 08 - Tópico 03",
    component: Topico_03,
  },
  {
    path: "/modulo-08/topico-04",
    name: "Módulo 08 - Tópico 04",
    component: Topico_04,
  },
  {
    path: "/modulo-08/referencias",
    name: "Módulo 08 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-08/atividade",
    name: "Módulo 08 - Atividade",
    component: Atividade,
  },
];

export default modulo_08_Routes;
