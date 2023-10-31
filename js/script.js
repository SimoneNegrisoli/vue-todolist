/*
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)
3- Bonus Super (superfacoltativo ): usare id invece di indici nei metodi
*/

const {createApp} = Vue;
createApp({
    data(){
        return {
            tasks:[
                {
                    id: 1,
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    id: 2,
                    text: 'Cucinare ',
                    done: false
                },
                {
                    id: 3,
                    text: 'Sistemare casa',
                    done: true
                },
                {
                    id: 4,
                    text: 'Lavare i piatti',
                    done: false
                }
            ],
            lastId: 3,
            addTextTask: '',

        }
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index,1)
        },
        addTask(){
            this.lastId++
            const upperCaseText = this.addTextTask.charAt(0).toUpperCase() + this.addTextTask.slice(1).toLowerCase()
            const newTask = {
                id: this.lastId,
                text: upperCaseText,
                done: false
            }
            this.tasks.unshift(newTask)
            this.addTextTask = ''
        }
        
    }
}).mount('#app');