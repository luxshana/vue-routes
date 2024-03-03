<template>
  <div class="min-h-full text-center p-4 bg-blue-200">
    <h4>This is dashboard</h4>
    <div class="flex flex-wrap justify-center">
      <div
        class="w-60 h-60 bg-blue-300 text-center p-4 m-5 flex justify-center items-center flex-col rounded-xl"
        v-for="detail in details"
        :key="detail.id"
      >
        <h3 class="text-xl font-semibold">{{ detail.title }}</h3>
        <h3 class="text-xl font-semibold">{{ detail.vote_average }}</h3>
        <h3 class="text-xl font-semibold">{{ detail.vote_count }}</h3>
        <i :class="detail.icon + ' text-4xl'" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      details: [],
    };
  },
  mounted() {
    this.getFilm();
  },
  methods: {
    getFilm() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=8af1b59b5e4aac095c0dd25ecdfda2ed"
        )
        .then((response) => {
          this.details = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>