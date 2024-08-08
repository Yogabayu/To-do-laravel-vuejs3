<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="@images/logo.png" alt="Onegeek Logo" />
      </div>
    </header>

    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nama</label>
            <input class="bordered" type="text" id="name" v-model="name" placeholder="Nama" required />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input class="bordered" type="text" id="username" v-model="username" placeholder="Username" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input class="bordered" type="email" id="email" v-model="email" placeholder="Email" required />
          </div>
        </div>

        <div class="d-flex justify-center">
          <v-btn density="compact" icon="mdi-magnify" @click.prevent="searchTodo"></v-btn>
        </div>

        <div class="to-do-list">
          <div class="spare-between">
            <h2 class="mb-3">To Do List</h2>
            <v-btn prepend-icon="mdi-plus" @click.prevent="addTodo" variant="tonal" color="error">
              Tambah To DO
            </v-btn>
          </div>
          <div class="to-do-item" v-for="(todo, index) in todos" :key="index">
            <div class="form-group title-input">
              <label for="description">Description</label>
              <input class="bordered" v-model="todo.description" type="text" id="todo-description"
                placeholder="contoh: perbaikan xxx" />
            </div>
            <div class="form-group category-dropdown">
              <label for="category">Category</label>
              <v-select :items="categories" v-model="todo.category_id"></v-select>
            </div>
            <div class="mt-4">
              <v-btn density="compact" icon="mdi-delete" @click.prevent="removeTodo(todo.id)" color="error"></v-btn>
            </div>
          </div>
        </div>

        <button type="submit" class="submit-btn">
          <i class="fas fa-save"></i> Simpan
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import mainURL from '@/axios';

export default {
  data() {
    return {
      id: null,
      name: "",
      username: "",
      email: "",
      todos: [],
      categories: [],
    };
  },

  methods: {
    async searchTodo() {
      try {
        const formData = {
          name: this.name,
          username: this.username,
          email: this.email,
        };
        const response = await mainURL.post('/gettodos', formData);
        if (response.status == 200) {
          this.name = response.data.data.name;
          this.username = response.data.data.username;
          this.email = response.data.data.email;
          this.todos = response.data.data.tasks;
        } else {
          this.$showToast('error', 'Something went wrong', error.message);
        }
      } catch (error) {
        this.$showToast('error', 'Something went wrong', error.message);
      }
    },
    addTodo() {
      this.todos.push({ description: "", category_id: null });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    async submitForm() {
      try {
        const formData = {
          name: this.name,
          username: this.username,
          email: this.email,
          todos: this.todos,
        };
        // Send the data to the server
        await mainURL.post('/add', formData);
        this.$showSuccess('Data created successfully', 'The data has been saved.');
        await this.searchTodo();
      } catch (error) {
        this.$showToast('error', 'Something went wrong', error.message);
      }
    },

    async getCategories() {
      try {
        const response = await mainURL.get('/categories');
        this.categories = response.data.data.map((category) => ({
          'value': category.id,
          'title': category.name
        }));
      } catch (error) {
        this.$showToast('error', 'Something went wrong', error.message);
      }
    },

    async removeTodo(id) {
      try {
        this.$showDelete(
          'Apakah anda yakin?',
          'Todo yang dihapus tidak dapat dikembalikan',
          async () => {
            await mainURL.delete(`/delete/${id}`);
            this.$showSuccess('Data deleted successfully', 'The todo has been deleted.');
            await this.searchTodo();
          }
        );
      } catch (error) {
        this.$showToast('error', 'Something went wrong', error.message);
      }
    }

  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style>
.spare-between {
  display: flex;
  justify-content: space-between;
}

.bordered {
  border: 1px solid #ccc;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

.title-input {
  flex-grow: 1;
  margin-right: 10px;
}

.category-dropdown {
  flex-grow: 0.5;
  margin-right: 10px;
}

.delete-btn {
  flex-grow: 0.2;
}

.actions {
  display: flex;
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
