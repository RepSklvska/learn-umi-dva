import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  proxy: {
    "/api": {                                      // ---step1
      // step1: 设置了需要代理的请求头，比如这里定义了 /api ，当你访问如 /api/abc 这样子的请求，就会触发代理
      "target": "https://pvp.qq.com",// ---step2
      // step2: 设置代理的目标，即真实的服务器地址
      "changeOrigin": true,                        // ---step3
      // step3: 设置是否跨域请求资源
      "pathRewrite": { "^/api": "" }              // ---step4
      // step4: 表示是否重写请求地址，比如这里的配置，就是把 /api 替换成空字符
    }
  }
});
