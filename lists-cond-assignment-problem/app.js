const app=Vue.createApp({
    data(){
        return{
            goals:[],
            input:'',
            vishid:'display:inline',
            button:'Hide It',

        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.input);
        },
        hideIt(){
            if(this.vishid=='display:inline'){
                this.vishid='display:none';
                this.button='Show It';
            }
            else{
                this.vishid='display:inline';
                this.button='Hide It';
            }
        },

    },

})
app.mount("#assignment")