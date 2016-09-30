var router = new VueRouter();

var mainComponent = Vue.extend({
	components: {
		'bill-component': billComponent
	},
	template: '<bill-component></bill-component>',
	data: function(){
		return {
			billsPay: [
				{date_due: '20/09/2016', name: 'Conta de luz', value: 120.99, done: true},
				{date_due: '20/09/2016', name: 'Conta de água', value: 130.99, done: false},
				{date_due: '23/09/2016', name: 'Cartão de crédito', value: 1000.99, done: false},
				{date_due: '24/09/2016', name: 'Condomínio', value: 300.00, done: true}
			],
			billsReceive: [
				{date_due: '20/09/2016', name: 'Salário', value: 2000, done: true},
				{date_due: '20/09/2016', name: 'Freela', value: 500, done: false},
				{date_due: '23/09/2016', name: 'Freela', value: 1000, done: false},
			]
		};
	}
});

router.map({
	'/': {
		name: 'dashboard',
		component: dashboardComponent
	},

	'/bill-pays': {
		component: billPayComponent,
		subRoutes:{
			'/': {
				name: 'billPay.list',
				component: billPayListComponent
			},
			'/create': {
				name: 'billPay.create',
				component: billPayCreateComponent
			},
			'/:index/update': {
				name: 'billPay.update',
				component: billPayCreateComponent
			}
		}
	},
	'/bill-receives': {
		component: billReceiveComponent,
		subRoutes:{
			'/': {
				name: 'billReceive.list',
				component: billReceiveListComponent
			},
			'/create': {
				name: 'billReceive.create',
				component: billReceiveCreateComponent
			},
			'/:index/update': {
				name: 'billReceive.update',
				component: billReceiveCreateComponent
			}
		}
	},
	'*': {
		component: billPayListComponent
	}


});

router.start({ 
	components: {
		'main-component': mainComponent
	}
},'#app')

// router.redirect({
// 	'*': '/bills-pays'
// });