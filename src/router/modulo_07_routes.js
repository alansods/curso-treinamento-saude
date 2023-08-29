import Apresentacao from "@/views/modulos/modulo_01/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_01/Topico_01";
import Topico_02 from "@/views/modulos/modulo_01/Topico_02";
import Topico_03 from "@/views/modulos/modulo_01/Topico_03";
import Topico_04 from "@/views/modulos/modulo_01/Topico_04";
import Topico_05 from "@/views/modulos/modulo_01/Topico_05";
import Referencias from "@/views/modulos/modulo_01/components/Referencias";
import Atividade from "@/views/modulos/modulo_01/components/Atividade";

const modulo_01_Routes = [
  {
    path: "/modulo-01",
    name: "Módulo 01",
    component: Apresentacao,
  },
  {
    path: "/modulo-01/topico-01",
    name: "Módulo 01 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-01/topico-02",
    name: "Módulo 01 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-01/topico-03",
    name: "Módulo 01 - Tópico 03",
    component: Topico_03,
  },
  {
    path: "/modulo-01/topico-04",
    name: "Módulo 01 - Tópico 04",
    component: Topico_04,
  },
  {
    path: "/modulo-01/topico-05",
    name: "Módulo 01 - Tópico 05",
    component: Topico_05,
  },
  {
    path: "/modulo-01/referencias",
    name: "Módulo 01 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-01/atividade",
    name: "Módulo 01 - Atividade",
    component: Atividade,
  },
];

export default modulo_01_Routes;
