<template>
  <div>
    <ProfileHeader />
     <Nuxt />
    <ProfileFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: ":: My Portfolio ::",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Survey Module",
        },
      ],
      script: [
        {
          type: "text/javascript",
          charset: "utf-8",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
          body: true,
        },

        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
          body: true,
        },
      ],
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
        },

        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css",
          rel: "stylesheet",
        },
      ],
    };
  },
};
</script>

<style>
/* * {
    font-family: 'Quicksand', sans-serif;
  } */

/* html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
} */
</style>