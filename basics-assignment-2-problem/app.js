const app=Vue.createApp({
    data(){
        return{
            para1:"",
            para2:"",
        }
    },
    methods:{
        alerter(){
            alert("you are ready to start !!");
        },
        showPara1(event){
            this.para1=event.target.value;
        },
        showPara2(event){
            this.para2=event.target.value;
        },


    }
    
})
app.mount("#assignment")