window.billReceiveListComponent = Vue.extend({
	template: `
	<style>
		.pago{
			color: green;
		}
		.naopago{
			color: red;
		}
	</style>
	<table border="1" cellpadding="10" >
		<thead>
			<tr>
				<th>#</th>
				<th>vecimento</th>
				<th>Nome</th>
				<th>valor</th>
				<th>Conta</th>
				<th>baixa</th>
				<th>ações</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(index,o) in bills">
				<td>{{ index+1 }}</td>
				<td>{{ o.date_due }}</td>
				<td>{{ o.name }}</td>
				<td>{{ o.value | currency 'R$ ' 2 }}</td>
				<td :class="{'pago' : o.done, 'naopago' : !o.done}">
					{{ o.done | doneLabel }}
				</td>
				<td>
					<input type="checkbox" v-model='o.done'>
				</td>
				<td>
					<a v-link="{ name: 'billReceive.update', params: {index: index} }">Editar</a> |
					<a href="#" @click.prevent="deleteBill(index)">Apagar</a> 
				</td>
			</tr>
		</tbody>
	</table>
	`,
	data: function(){
		return {
			bills: this.$root.$children[0].billsReceive
		};
	},
	methods: {
		deleteBill: function (index){
			if(confirm('Deseja mesmo apagar essa conta?')){
				this.$root.$children[0].billsReceive.splice(index,1);
			}
			this.$parent.activedView = 0;
		}
	}	
});
