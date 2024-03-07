<template>
    <div class="products">
      <h2>Produtos</h2>
  
      <button @click="listarProdutos">Listar Todos Produtos</button>
  
      <table v-if="produtos.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.id">
            <td>{{ produto.id }}</td>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.preco }}</td>
            <td>
              <button @click="editarProduto(produto)">Editar</button>
              <button @click="apagarProduto(produto.id)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Nenhum produto encontrado.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        produtos: []
      };
    },
    methods: {
      async listarProdutos() {
        try {
          const response = await axios.get('/produtos');
          this.produtos = response.data;
        } catch (error) {
          console.error('Erro ao listar produtos:', error);
        }
      },
      async apagarProduto(id) {
        try {
          await axios.delete(`URL_DA_API/produtos/${id}`);
          this.produtos = this.produtos.filter(produto => produto.id !== id);
          console.log('Produto apagado com sucesso');
        } catch (error) {
          console.error('Erro ao apagar produto:', error);
        }
      },
      editarProduto(produto) {
        console.log('Editar produto:', produto);
      }
    }
  };
  </script>
  
  <style scoped>
  .products {
    max-width: 800px;
    margin: 0 auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  