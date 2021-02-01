<template>
  <v-card class="mx-auto elevation-1 pa-5" max-width="800" outlined>
    <form>
      <div>
        <v-row>
          <v-col class="col-md-10">
            <v-text-field
              label="Todo Update"
              v-model="todo"
              :rules="rules"
            ></v-text-field>
          </v-col>
          <v-col class="col-md-2">
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="blue-grey"
              class="ma-2 white--text elevation-0"
              fab
              @click="createTodo()"
            >
              <v-icon dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-col> 
        </v-row>
      </div>
    </form>
  </v-card>
</template>

<script>
import axios, { URL } from '@/util/axiosConfig.js';

export default {
  data: () => ({
    loading:false,
    todo: "",
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  methods: {
    async createTodo() { 
        let todo = this.todo.trim()
        if (todo === '') return

        try {
            const response = await axios.post(URL.TODO_CREATE, { todo })
            todo = response.data.data.todo
            this.$emit('addTodo', todo)
            this.loading = false
            this.todo = ""
        } catch(exception) {
            console.log(exception)
        }
    },
  },
};
</script>

<style>
</style>