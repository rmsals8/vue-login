<template>
    <div class="hello-container">
      <!-- 컴포넌트 제목 -->
      <h1>백엔드 서버 통신 테스트</h1>
      
      <!-- 현재 사용 중인 API URL 표시 -->
      <p class="api-url">현재 API URL: {{ apiUrl }}</p>
      
      <!-- API 요청 버튼 -->
      <button @click="fetchData" :disabled="loading">서버에 요청 보내기</button>
      
      <!-- 로딩 중 상태 표시 -->
      <div v-if="loading" class="status loading">
        데이터를 불러오는 중...
      </div>
      
      <!-- 오류 상태 표시 -->
      <div v-else-if="error" class="status error">
        <h3>오류 발생:</h3>
        <p>{{ error }}</p>
      </div>
      
      <!-- 성공 상태와 받은 메시지 표시 -->
      <div v-else-if="message" class="status success">
        <h3>서버 응답:</h3>
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
<style scoped>

.hello-container {
    max-width : 600px ;
    margin : 0 auto ;
    padding : 20px ; 
    font-family: Arial, sans-serif;
    text-align: center ; 
}

.api-url {
    background-color : #4CAF50 ;
    color : white ; 
    padding : 10px 15px ;
    border: none;
    border-radius: 4px;
    cursor: pointer ;
    font-size : 16px;
    margin: 20px 0;
    transition: background-color 0.3s;
}

button:hover {
    background-color : #45a049;
}

button:disabled {
    background-color: #cccccc;
    cursor : not-allowed;
}

.status {
    margin-top : 20px;
    padding : 15px;
    border-radius: 4px;
    text-align: left;
}

.loading {
    background-color: #f9f9f9 ;
    border : 1px solid #ddd;
    text-align: center;
}

.error {
    background-color : #ffebee;
    border : 1px solid #ffcdd2;
    color : #c62828;
}

.success {
    background-color :  #e8f5e9;
    border : 1px solid  #e8f5e9;
    color : #2e7d32;
}

.status h3 {
    margin-top : 0;
    margin-bottom : 10px ;
    font-size : 1.1em;
}
</style>
<script>
import apiService from '../services/api.js';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Hello Backend',

    data() {
        return {
            message: '',

            loading: false,

            error : null,

            apiUrl : process.env.VUE_APP_API_URL
        };
    },

    methods : {
        async fetchData() {
            this.loading = true;

            this.error = null;

            try{
                const response = await apiService.getHello();

                this.message = response.data.message;

                console.log('서버 응답:',response.data);
            } catch(err) {
                this.error = `${err.message}, 서버가 실행 중인지 확인해주세요`;

                console.error('오류 발생:',err);
            } finally {
                this.loading = false ; 
            }
        }
    }
}
</script>
