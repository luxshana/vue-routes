<template>
  <div class="text-center  p-4 h-screen bg-blue-200">
    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
    <form @submit.prevent="submitForm" class=" inline-flex justify-center">
      <div class="flex flex-wrap mb-4">
        <label for="name" class="w-full md:w-auto mb-2 md:mb-0">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formValues.name"
          class="w-full md:w-auto md:ml-2 px-2 py-1 border border-gray-300 rounded"
        />
        <label for="profileSummary" class="w-full md:w-auto md:ml-2 mb-2 md:mb-0">Profile Summary:</label>
        <input
          type="text"
          id="profileSummary"
          v-model="formValues.profileSummary"
          class="w-full md:w-auto md:ml-2 px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <div class="flex items-center mb-4">
        <input
          type="checkbox"
          id="remoteWork"
          v-model="formValues.remoteWork"
          class="mr-2"
        />
        <label for="remoteWork">Remote Work?</label>
      </div>
      <div class="text-center">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contactPage",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        remoteWork: false,
      },
    };
  },
  methods: {
    submitForm() {
      console.log("formValues", this.formValues);
    },
  },
};
</script>