window.billReceiveComponent = Vue.extend({
	components: {
		'bill-receive-menu-component': billReceiveMenuComponent
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
		<h3 v-bind:class="{'gray': status===false, 'red': status === 0, 'green': status > 0 }">{{ status | generalStatusLabel 'bill-receive'}}</h3>
		<bill-receive-menu-component></bill-receive-menu-component>
		<router-view></router-view>
		`,
	data: function(){
		return {
			title: "Contas a pagar",
		}
	},
	computed: {
		status: function(){
			var bills = this.$root.$children[0].billsReceive;
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