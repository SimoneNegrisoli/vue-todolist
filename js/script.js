/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
- id, un numero intero positivo incrementale  (univoco per ogni task)

## MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- inizializzare vue in script.js
- dichiarare variabile `todos` in `data()`
- stampare in html `todos` 
- usare operatore ternario in :class per stampare la class `done` 

## MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- aggiungere icona dentro ogni todo in html
- aggiungere un event click che esegue una funzione
- fare console log nella funzione per vedere se funziona
- funzione toglie oggetto cliccato dall'array `todos`

## MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- creare nuova variabile in `data()` per valore dell'input
- aggiungere input in html e bottone per invio
- al click del bottone esegue funzione
- fare console log nella funzione per vedere se funziona
- la funzione crea un nuovo oggetto todo usando nuova variabile in data() e pusha dentro array `todos`
- svuotare input
*/

const {createApp} = Vue;
createApp({
    data(){
        return {
            tasks:[
                {
                    id: 1,
                    text: 'fare la spesa',
                    done: false
                },
                {
                    id: 2,
                    text: 'cucinare ',
                    done: false
                },
                {
                    id: 3,
                    text: 'sistemare casa',
                    done: true
                },
                {
                    id: 4,
                    text: 'lavare i piatti',
                    done: false
                }
            ],
            lastId: 3
        }
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index,1)
        }
        
    }
}).mount('#app');