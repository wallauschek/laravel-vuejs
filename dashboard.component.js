window.dashboardComponent = Vue.extend({
	template: `
	{{ totalReceive }} - {{ totalPay }} = {{ total }}
	`,
	data: function(){
		return {
			totalReceive: 0,
			totalPay: 0,
		};
	},
	computed: {
		total: function(){
			var billsPay = this.$root.$children[0].billsPay
			var billsReceive = this.$root.$children[0].billsReceive
			if(billsPay.length){
				for(var i in billsPay){
					this.totalPay += billsPay[i].value;
				}
			}
			if(billsReceive.length){
				for(var i in billsReceive){
					this.totalReceive += billsReceive[i].value;
				}
			}

			return this.totalReceive - this.totalPay;
		}
	}
});