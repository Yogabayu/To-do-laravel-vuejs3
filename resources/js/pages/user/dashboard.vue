<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="@images/logo.png" alt="Onegeek Logo" />
      </div>
    </header>

    <div class="form-container">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" v-model="name" placeholder="Nama" />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" placeholder="Username" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Email" />
          </div>
        </div>

        <div class="to-do-list">
          <h2>To Do List</h2>
          <div class="to-do-item" v-for="(todo, index) in todos" :key="index">
            <div class="form-group">
              <label for="email">{{ todo.title }}</label>
              <input type="email" id="email" placeholder="contoh: perbaikan xxx" />
            </div>
            <div class="form-group">
              <label for="email">Kategori</label>
              <div class="category-dropdown">
                <select v-model="todo.category">
                  <option v-for="category in categories" :value="category">
                    {{ category }}
                  </option>
                </select>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div class="form-group">
              <v-btn prepend-icon="mdi-delete" class="delete-btn" @click.prevent="removeTodo(index)" color="error">
              </v-btn>
            </div>
          </div>
          <button class="add-btn" @click.prevent="addTodo">
            <i class="fas fa-plus"></i> Tambah To Do
          </button>
        </div>

        <button type="submit" class="submit-btn">
          <i class="fas fa-save"></i> Simpan
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      todos: [
        { title: 'Perbaikan api master', category: 'To Do' },
        { title: 'Perbaikan api master', category: 'To Do' },
        { title: 'Perbaikan api master', category: 'To Do' },
      ],
      categories: ['To Do', 'In Progress', 'Done'],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ title: '', category: 'To Do' });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 20px 0;
}

.logo {
  max-width: 200px;
  margin: 0 auto;
}

.logo img {
  width: 100%;
}

.form-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
  text-align: left;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child {
  margin-right: 0;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.to-do-list {
  margin-top: 30px;
}

.to-do-list h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

.to-do-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.to-do-item input {
  flex-grow: 1;
  margin-right: 10px;
}

.actions {
  display: flex;
}

.category-btn,
.delete-btn {
  background-color: #e41523;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}

.add-btn {
  display: block;
  width: 100%;
  background-color: #e41523;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.category-dropdown {
  position: relative;
  display: inline-block;
}

.category-dropdown select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  padding: 5px 25px 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.category-dropdown i {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: white;
  pointer-events: none;
}

.submit-btn i {
  margin-right: 5px;
}

.submit-btn {
  display: block;
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}
</style>
