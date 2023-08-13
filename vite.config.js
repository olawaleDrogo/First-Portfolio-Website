import{ resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        rollupOptions : {
            input : {
                main: resolve('index.html'),
                nested: resolve('pages_html/contact.html'),
                nested_b: resolve('pages_html/portfolio.html'),
                
            },
        }
    }

})