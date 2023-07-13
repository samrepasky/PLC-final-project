import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  loaders: [{
    test: "/.jsx?$/",
    loader: 'babel-loader',
    exclude: '/node_modules/'
  }, {
    test: '/\.css$/',
    loader: "style-loader!css-loader"
  }, {
    test: '/\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/',
    loader: 'url-loader?limit=100000' }]
},{
  plugins: [react()],
})
