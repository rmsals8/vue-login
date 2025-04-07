/**
 * Vue CLI 구성 파일
 * 
 * 이 파일에서 Vue CLI 프로젝트 설정을 구성할 수 있습니다.
 * 자세한 내용은 https://cli.vuejs.org/config/ 참조
 */
module.exports = {
  // 개발 서버 설정
  devServer: {

    port:8081,
    // 프록시 설정
    // CORS 문제를 해결하기 위해 개발 서버에서 API 요청을 프록시함
    proxy: {
      // '/api'로 시작하는 모든 요청을 프록시
      '/api': {
        // 대상 서버 URL
        // target: "https://a8d7d43481d3548a79e9ac89f8e1daab-675508054.ap-northeast-2.elb.amazonaws.com",
        target: process.env.VUE_APP_API_URL,
        
        // 요청 헤더의 host 값을 target의 호스트로 변경
        // 이렇게 하면 CORS 문제를 우회할 수 있음
        changeOrigin: true,
        
        // 경로 재작성 설정 (필요한 경우)
        // pathRewrite: {
        //   '^/api': ''  // '/api' 경로를 ''로 재작성 (예: /api/users -> /users)
        // },
        
        // 프록시 동작 로깅 (디버깅용)
        logLevel: 'debug'
      }
    }
  },
  
  // 추가 구성 옵션들
  
  // 빌드 출력 디렉토리 설정
  outputDir: 'dist',
  
  // 애셋 파일 경로 설정
  assetsDir: 'assets',
  
  // 소스맵 설정
  productionSourceMap: false,
  
  // CSS 관련 설정
  css: {
    // CSS 소스맵 비활성화
    sourceMap: false
  }
};