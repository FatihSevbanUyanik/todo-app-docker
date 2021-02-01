<template>
  <v-card class="mx-auto elevation-1 px-5 py-3 my-2" max-width="800" outlined> 
      
      <div>
        Todo: {{ todo.todo }}
      </div>
      <v-divider></v-divider>
<div>
        CreatedAt: {{ todo.createdAt }}
      </div>
  </v-card>
</template>

<script>
export default {
  props: ["todo"],
};
</script>

<style>
</style>