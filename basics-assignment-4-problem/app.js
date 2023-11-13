const app=Vue.createApp({
    data(){
        return{
            userinput:'',
            parastate:'visible',
            inputstyle:'',
        }
    },
    methods:{
        addClass(event){
            this.userinput=event.target.value;
        },
        addToggler(){
              if(this.parastate=='visible'){
           this.parastate='hidden';
           console.log(parastate);}
           else{
               this.parastate='visible';
           }
        },
        addStyle(event){
            console.log(this.inputstyle);
            this.inputstyle="background-color:" + event.target.value;
            console.log(this.inputstyle);
        },
    }

});
app.mount('#assignment');