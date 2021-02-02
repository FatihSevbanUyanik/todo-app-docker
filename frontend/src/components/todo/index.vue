<template>
  <div>
      <div>Update</div>
      <div v-for="todo in todos" :key="todo.id">
          <TodoDetail :todo='todo'></TodoDetail>
      </div>


      <TodoCreate @addTodo='addTodo($event)'></TodoCreate>
  </div>
</template>

<script>
import TodoDetail from '@/components/todo/detail'
import TodoCreate from '@/components/todo/create'
import axios, { URL } from '@/util/axiosConfig.js';

export default {
    async created() {

        try {
            const response = await axios.get(URL.TODO_INDEX)
            this.todos = response.data.data.todos
        } catch(exception) {
            console.log(exception)
        }

    },
    components: {
        TodoCreate,
        TodoDetail
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo)
        }
    }
}
</script>

<style>

</style>