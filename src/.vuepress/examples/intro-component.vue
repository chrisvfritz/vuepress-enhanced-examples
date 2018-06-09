<template>
  <ol>
    <!-- Create an instance of the todo-item component -->
    <todo-item></todo-item>
  </ol>
</template>

<script>
// Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo</li>',
})
</script>
