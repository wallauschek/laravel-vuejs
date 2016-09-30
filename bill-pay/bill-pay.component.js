window.billPayComponent = Vue.extend({
	components: {
		'bill-pay-menu-component': billPayMenuComponent
	},
	template: 
		`<style>
			.green{
				color: green;
			}
			.red{
				color: red;
			}
			.gray{
				color: gray;
			}
		</style>
			<h1>{{ title }}</h1>
		<h3 v-bind:class="{'gray': status===false, 'green': status === 0, 'red': status > 0 }">{{ status | generalStatusLabel 'bill-pay' }}</h3>
		<bill-pay-menu-component></bill-pay-menu-component>
		<router-view></router-view>
		`,
	data: function(){
		return {
			title: "Contas a pagar",
		}
	},
	computed: {
		status: function(){
			var bills = this.$root.$children[0].billsPay
			if(bills.length){
				var count = 0;
				for(var i in bills){
					if(!bills[i].done){
						count++;
					}
				}
			}else{
				return false;
			}
			return count;
		}
	}
});