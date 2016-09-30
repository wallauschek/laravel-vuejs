window.billReceiveCreateComponent = Vue.extend({
	template: `
	<form name="form" @submit.prevent="submit">
		<label>Vencimento</label>
		<input type="text" name="name" v-model="bill.date_due"><br>
		<label>Nome</label>
		<select name="name" v-model="bill.name">
			<option v-for="name in names" :value="name">{{name}}</option>
		</select><br>
		<label>Valor</label>
		<input type="text" name="value" v-model="bill.value"><br>
		<label>Recebido?</label>
		<input type="checkbox" v-model="bill.done"> 
		<input type="submit" value="enviar" />
	</form>
	`,
	data: function(){
		return {
			formType: 'insert',
			names: [
				'Salário',
				'Freela'
			],
			bill: {
				date_due:'',
				name:'',
				value:0,
				done:false
			}
		};
	},
	created: function(){
		if(this.$route.name == 'billReceive.update'){
			this.formType = 'update';
			this.getBill(this.$route.params.index);
		}
	},
	methods: {
		submit: function(){
			if(this.formType=='insert'){
				bills: this.$root.$children[0].billsReceive.push(this.bill);
			}

			this.bill = {
				date_due:'',
				name:'',
				value:0,
				done:false
			};

			this.$router.go({
				name:'billReceive.list'
			});
		},
		getBill: function(index){
			var bills = this.$root.$children[0].billsReceive;
			this.bill = bills[index];
		}
	}
});