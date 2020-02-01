new Vue({
    el:'#app',
    data:{ 
        // array namirnica s informacijom dali se nalaze u košarici
        groceries:[
            {
                name:"Apple",
                inBasket: false
            },
            {
                name:"Juice",
                inBasket: false
            },
            {
                name:"Eggs",
                inBasket: false
            },
        ],

        // ukoliko je 'valid' zadovoljen pojavit ce se button
        valid:false,
        // svaka odabrana namirnica se dodaje u array.. koju logamo
        groInBasket:[]
    },
    methods:{
        addGro:function(i){
            this.groceries[i].inBasket=true
            this.groInBasket.push(this.groceries[i].name)
            console.log(this.groInBasket)
            this.resetButt()
        },
        // funkcija provjerava dali su sve namirnice odabrane te postavlja valid na trrue sto otkriva reset button
        resetButt:function(){
            if(this.groInBasket.length=== this.groceries.length)
                this.valid=true
            
        }
    },

})