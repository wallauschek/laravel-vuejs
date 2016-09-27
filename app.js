Vue.filter('doneLabel', function(done){	
	if(done == 0){
		return 'não paga';
	}else{
		return 'paga';
	}
});

Vue.filter('generalStatusLabel', function(status){
	if(status===false){
		return "Nenhuma conta cadastrada";
	}else{
		if(status>0){
			return "Existe(m) "+status+" conta(s) a ser(em) paga(s).";
		}else{
			return "Nenhuma conta a pagar";
		}
	}

});

var app = new Vue({
	el: "#app",
	data: {
		title: "Contas a pagar",
		menus: [
			{id:0, name: "Listar contas"},
			{id:1, name: "Criar conta"}
		],
		activedView: 0,
		formType: 'insert',
		bill: {
			date_due:'',
			name:'',
			value:0,
			done:false
		},
		names: [
			'Conta de luz',
			'Conta de água',
			'Conta de telefone',
			'Supermercado',
			'Cartão de crédito',
			'Empréstimo',
			'Gasolina'
		],
		bills: [
			{date_due: '20/09/2016', name: 'Conta de luz', value: 120.99, done: true},
			{date_due: '20/09/2016', name: 'Conta de aguá', value: 130.99, done: false},
			{date_due: '21/09/2016', name: 'Conta de gás', value: 99.99, done: true},
			{date_due: '23/09/2016', name: 'Cartão de crédito', value: 1000.99, done: false},
			{date_due: '23/09/2016', name: 'Aluguel', value: 3000.00, done: true},
			{date_due: '24/09/2016', name: 'Condomínio', value: 300.00, done: true}
		]
	},
	computed: {
		status: function(){
			if(this.bills.length){
				var count = 0;
				for(var i in this.bills){
					if(!this.bills[i].done){
						count++;
					}
				}
			}else{
				return false;
			}
			return count;
		}
	},
	methods: {
		showView: function(id){
			this.activedView = id;
			if(id==1){
				this.formType='insert';
			}
		},
		submit: function(){
			if(this.formType=='insert'){
				this.bills.push(this.bill);
			}

			this.bill = {
				date_due:'',
				name:'',
				value:0,
				done:false
			};

			this.activedView = 0;
		},
		loadBill: function(bill){
			this.bill = bill;
			this.activedView = 1;
			this.formType='update';
		},
		deleteBill: function (index){
			if(confirm('Deseja mesmo apagar essa conta?')){
				this.bills.splice(index,1);
			}
			this.activedView = 0;
		}
	}
});