(function() {
  'use strict';
  // two way data binding (to UI)
  var vm = new Vue({
    el: '#app',
    data:{
      newItem: '',
      todos: [
        // {
        // title: 'task1',
        // isDone: false
        // },{
        // title: 'task2',
        // isDone: false
        // },{
        // title: 'task3',
        // isDone: true
        // } 
      ]
    },
    watch:{
      todos: {
        handler: function(){
         localStorage.setItem('todos',JSON.stringify(this.todos));
        //  alert('Data Saved!')
         },
        deep: true
      }
      // todos: function(){
      //    localStorage.setItem('todos',JSON.stringify(this.todos));
      //    alert('Data Saved!')
      // }

    },
    mounted: function(){
       this.todos=JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods:{
      addItem: function(){
        let item ={
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem='';
       },
       deleteItem: function(index){
        if(confirm('are you sure?')){
          this.todos.splice(index,1);
        }},
       purge: function(){
        if(!confirm('delete finished?')){
          return;
        } 
    
          this.todos = this.remaining;
        }},
    computed:{
      remaining: function(){
    
        return this.todos.filter(function(todo){
          return !todo.isDone;
        });
      }
    }
  });


})();