import Apresentacao from "@/views/modulos/modulo_03/components/Apresentacao";
import Topico_01 from "@/views/modulos/modulo_03/Topico_01";
import Topico_02 from "@/views/modulos/modulo_03/Topico_02";
import Topico_03 from "@/views/modulos/modulo_03/Topico_03";
import Referencias from "@/views/modulos/modulo_03/components/Referencias";
import Atividade from "@/views/modulos/modulo_03/components/Atividade";

const modulo_03_Routes = [
  {
    path: "/modulo-03",
    name: "Módulo 03",
    component: Apresentacao,
  },
  {
    path: "/modulo-03/topico-01",
    name: "Módulo 03 - Tópico 01",
    component: Topico_01,
  },
  {
    path: "/modulo-03/topico-02",
    name: "Módulo 03 - Tópico 02",
    component: Topico_02,
  },
  {
    path: "/modulo-03/topico-03",
    name: "Módulo 03 - Tópico 03",
    component: Topico_03,
  },
  {
    path: "/modulo-03/referencias",
    name: "Módulo 03 - Referências",
    component: Referencias,
  },
  {
    path: "/modulo-03/atividade",
    name: "Módulo 03 - Atividade",
    component: Atividade,
  },
];

export default modulo_03_Routes;
