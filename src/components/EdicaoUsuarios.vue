<template>
    <div class="edicao-usuarios">
      <h2>Edição de Usuários</h2>
      
      <button @click="listarUsuarios">Listar Todos Usuários</button>
      <br>
      <input type="text" v-model="emailListar" placeholder="Email para listar">
      <button @click="listarUsuario">Listar Usuário por Email</button>
      <br>
      <input type="text" v-model="emailApagar" placeholder="Email para apagar">
      <button @click="apagarUsuario">Apagar Usuário por Email</button>
      <br>
      <input type="text" v-model="emailEditar" placeholder="Email para editar">
      <button @click="editarUsuario">Editar Usuário por Email</button>
  
      <div v-if="usuario">
        <h3>Dados do Usuário</h3>
        <p>Email: {{ usuario.email }}</p>
        <p>Nome: {{ usuario.nome }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        emailListar: '',
        emailApagar: '',
        emailEditar: '',
        usuario: null
      };
    },
    methods: {
      async listarUsuarios() {
        try {
          // Fazer uma requisição para listar todos os usuários
          const response = await axios.get('URL_DA_API/listar-usuarios');
          console.log('Todos Usuários:', response.data);
        } catch (error) {
          console.error('Erro ao listar usuários:', error);
        }
      },
      async listarUsuario() {
        try {
          // Fazer uma requisição para listar um usuário por email
          const response = await axios.get(`URL_DA_API/listar-usuario/${this.emailListar}`);
          console.log('Usuário por Email:', response.data);
          this.usuario = response.data;
        } catch (error) {
          console.error('Erro ao listar usuário por email:', error);
        }
      },
      async apagarUsuario() {
        try {
          // Fazer uma requisição para apagar um usuário por email
          await axios.delete(`URL_DA_API/apagar-usuario/${this.emailApagar}`);
          console.log('Usuário apagado com sucesso');
        } catch (error) {
          console.error('Erro ao apagar usuário por email:', error);
        }
      },
      async editarUsuario() {
        try {
          // Fazer uma requisição para editar um usuário por email
          // Você precisará enviar os dados do usuário que deseja editar
          console.log('Usuário editado com sucesso');
        } catch (error) {
          console.error('Erro ao editar usuário por email:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .edicao-usuarios {
    max-width: 600px;
    margin: 0 auto;
  }
  
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  input {
    margin-bottom: 10px;
  }
  </style>
  