<template>
  <div id="app">
    <!-- 앱 헤더 -->
    <!-- <header>
      <h1>Vue.js - 백엔드 통신 예제</h1>
    </header> -->
    
    <!-- HelloBackend 컴포넌트 렌더링 -->
    <!-- <HelloBackend /> -->
    <Login/>
    
    <!-- 앱 푸터 -->
    <footer>
      <p>환경: {{ currentEnv }}</p>
    </footer>
  </div>
</template>

<script>
// HelloBackend 컴포넌트 가져오기
// import HelloBackend from './components/HelloBackend.vue'
import Login from './components/LoginForm.vue'

export default {
  // 앱 이름
  name: 'App',
  
  // 컴포넌트 등록
  components: {
    // HelloBackend,
    Login
  },
  
  // 컴포넌트 데이터
  data() {
    return {
      // 현재 환경 정보 (NODE_ENV 환경 변수에서 가져옴)
      currentEnv: process.env.NODE_ENV
    }
  }
}
</script>

<style>
/* 전역 스타일 */
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}

/* 앱 컨테이너 스타일 */
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* 헤더 스타일 */
header {
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  text-align: center;
}

header h1 {
  color: #2c3e50;
  font-size: 1.8em;
}

/* 푸터 스타일 */
footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
  color: #666;
  font-size: 0.9em;
}
</style>