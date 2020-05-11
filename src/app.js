import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
      el: '#app',
      data: {
          title: "To Do List!",
          tasks: [
              {name: "Do homework", priority: "high"},
              {name: "Feed the cat", priority: "low"},
              {name: "Wash the dishes", priority: "medium"}
          ],
          newTask: {
              name: "",
              priority: null
          },
        },
     methods: {
         saveNewTask: function(){
             this.tasks.push(this.newTask);
         this.newTask = 
         { name: "",
           priority: null
        };
         },
     }
  })





})