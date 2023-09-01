<template>
  <v-form v-model="valid">
    <v-container>
      <p class="text-h3 text-center mb-5">Contact</p>
      <p class="text-center">
        You can get in touch with me throught my
        <a :href="linkedin">linkedin </a>or mail:
      </p>
      <v-row justify="center" class="mt-5">
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="First name"
            filled
            rounded
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            filled
            rounded
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            v-model="body"
            label="Body"
            filled
            rounded
            required
          ></v-textarea>
        </v-col>
        <a :href="message">
          <v-btn color="primary" depressed>Send</v-btn>
        </a>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      body: '',
      linkedin: 'https://www.linkedin.com/in/leonardoabreurodrigues/',
    }
  },
  computed: {
    message() {
      return `mailto:contato@leonardorodrigues.me?subject=Contact from ${this.name}&body=${this.body}`
    },
  },
}
</script>
