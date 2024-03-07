<template>
    <div class="register-form">
      <h2>Register</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="name" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
   import axios from 'axios';

    const apiUrl = process.env.VUE_APP_API_URL;


  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post(`${apiUrl}/register`, {
            name: this.name,
            email: this.email,
            password: this.password
          });
          console.log('Resposta da API:', response.data);
        } catch (error) {
          console.error('Erro ao enviar dados:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
  }

  input[type="name"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  </style>
  