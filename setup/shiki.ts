/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import gmshGrammar from './gmsh.tmLanguage.json'
import bashGrammar from './shell-unix-bash.tmLanguage.json'
import mdcGrammar from './mdc.tmLanguage.json'

export default defineShikiSetup(() => {
    return {
        langs: [
            {
                name: 'bash',
                ...bashGrammar
            },
            {
                name: 'gmsh',
                ...gmshGrammar
            },
            {
                name: 'mdc',
                ...mdcGrammar
            },
            'js',
            'typescript',
            'cpp',
            'python',
            'html',
            'vue',
        ],
    }
})
