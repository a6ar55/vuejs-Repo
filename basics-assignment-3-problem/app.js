const app=Vue.createApp({
    data(){
        return{
            number:0,
            output:'',

        }
    },
    watch:{
        output(){
            const that=this;
            setTimeout(function(){
                that.number = 0;
            },5000);
        }
    },
    methods:{
        add5(){
            this.number+=5;
            console.log(this.number);
        },
        
        add1(){
            this.number++;
            console.log(this.number);
        },

        displayNumber(){
            if (this.number < 37){
                this.output="Not there yet"
            }
            else if(this.number > 37){
                this.output="Too much!"
            }
            else{
                this.output=this.number;
            }
        }
    },

})
app.mount("#assignment")