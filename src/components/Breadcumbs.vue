<template>
  <v-breadcrumbs class="pa-0 ma-0" :items="breadcrumbsItems">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        v-if="item.text === 'Início'"
        :to="{ path: '/' }"
        exact-path
        class="text-body-2"
      >
        {{ item.text }}
      </v-breadcrumbs-item>

      <v-breadcrumbs-item
        v-else
        :to="{ path: item.href }"
        exact-path
        class="text-body-2"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbsItems: [],
    };
  },

  watch: {
    $route() {
      this.updateBreadcrumbs();
    },
  },

  created() {
    this.updateBreadcrumbs();
  },

  methods: {
    updateBreadcrumbs() {
      const routePaths = this.$route.path.split("/").filter(Boolean);
      const breadcrumbs = [
        {
          text: "Início",
          href: "/",
        },
      ];

      let currentPath = "/";

      routePaths.forEach((routePath, index) => {
        currentPath += routePath + "/";

        const breadcrumb = {
          text: this.formatBreadcrumbText(routePath),
          href: currentPath,
          disabled: index === routePaths.length - 1 ? true : false,
        };

        breadcrumbs.push(breadcrumb);
      });

      this.breadcrumbsItems = breadcrumbs;
    },

    formatBreadcrumbText(text) {
      if (text.toLowerCase().split('-')[0] === 'modulo') {
        return `Módulo ${text.split('-')[1]}`;
      }

      if (text.toLowerCase().split('-')[0] === 'topico') {
        return `Tópico ${text.split('-')[1]}`;
      }

      if (text.toLowerCase().split('-')[0] === 'referencias') {
        return `Referências`;
      }

      if (text.toLowerCase().split('-')[0] === 'atividade') {
        return `Atividade`;
      }
    },
  },
};
</script>

<style></style>
