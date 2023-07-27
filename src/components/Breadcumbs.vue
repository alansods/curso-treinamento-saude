<template>
  <v-breadcrumbs class="pa-0 ma-0" :items="breadcrumbsItems">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        v-if="item.text === 'Início'"
        :to="{ path: '/' }"
        exact-path
      >
        {{ item.text }}
      </v-breadcrumbs-item>

      <v-breadcrumbs-item
        v-else
        :to="{ path: item.href }"
        exact-path
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
          text: this.capitalizeFirstLetter(routePath.replace(/-/g, " ")),
          href: currentPath,
          disabled: index === routePaths.length - 1 ? true : false,
        };

        breadcrumbs.push(breadcrumb);
      });

      this.breadcrumbsItems = breadcrumbs;
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style></style>
