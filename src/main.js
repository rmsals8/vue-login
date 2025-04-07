// src/main.js

// Vue 라이브러리에서 createApp 함수를 가져옴
import { createApp } from 'vue'

// 루트 컴포넌트인 App을 가져옴
import App from './App.vue'

// 환경 변수 로깅 (디버깅용)
console.log('현재 환경:', process.env.NODE_ENV);
console.log('API URL:', process.env.VUE_APP_API_URL);

// Vue 애플리케이션 생성 및 마운트
// 1. createApp()으로 Vue 앱 인스턴스 생성
// 2. mount()로 '#app' 요소에 앱을 마운트
createApp(App).mount('#app')