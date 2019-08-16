let vm = new Vue({
	el: "#app",
	data:{
		n:1,
		list:["HomeWork", "Watch Video"],
		thing: ""
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
	}
});