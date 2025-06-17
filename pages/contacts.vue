<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">📬 Contact Messages</h1>

    <!-- FORM -->
    <form @submit.prevent="submitMessage" class="space-y-4 mb-6">
      <input
        v-model="form.name"
        type="text"
        placeholder="Your name"
        class="w-full p-2 border rounded"
        required
      />
      <textarea
        v-model="form.message"
        placeholder="Your message"
        class="w-full p-2 border rounded"
        required
      ></textarea>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        :disabled="submitting"
      >
        {{ submitting ? "Sending..." : "Send Message" }}
      </button>
    </form>

    <!-- LIST -->
    <div v-if="pending">Loading messages...</div>
    <div v-else-if="error">❌ Failed to load messages: {{ error.message }}</div>
    <ul v-else>
      <li
        v-for="contact in data"
        :key="contact.id"
        class="mb-2 p-2 border rounded"
      >
        <strong>{{ contact.name }}</strong
        >: {{ contact.message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Contact } from "~/types/contact";
const config = useRuntimeConfig();

const form = ref({ name: "", message: "" });
const submitting = ref(false);

// Fetch existing messages
const { data, pending, error, refresh } = await useFetch<Contact[]>(
  "/api/contact",
  {
    headers: {
      authorization: `Bearer ${config.public.apiSecret}`,
    },
  }
);

// Submit new message
const submitMessage = async () => {
  submitting.value = true;

  const res = await $fetch("/api/contact", {
    method: "POST",
    body: form.value,
    headers: {
      authorization: `Bearer ${config.public.apiSecret}`,
    },
  });

  // Reset form & refresh message list
  form.value.name = "";
  form.value.message = "";
  await refresh();
  submitting.value = false;
};
</script>
