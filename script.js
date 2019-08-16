let vm = new Vue({
	el: "#app",
	data:{
		n:1,
		list:["HomeWork", "Watch Video"],
		thing: "",
		numbers: ["1","4"]
	},
	methods:{
		double: function(event){
			console.log(event);
			this.n *= 2;
		},
		addItem: function(event){
				this.list.push(this.thing);
				this.thing = "";
			
		},
		remove: function(index){
			this.list.splice(index, 1);
		}
	},
	computed:{
		average: function(){
			let sum = 0, n = this.numbers.length;
			for (i in this.numbers)
				sum += Number(this.numbers[i]);
			return sum/n;
		}
	}
});