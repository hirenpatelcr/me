angular.module('invoicing', [])

    .constant('DEFAULT_INVOICE', {
        items: [{
            qty: 10,
            description: 'Gadget',
            cost: 9.95
        }]
    })

    .controller('InvoiceCtrl', ['$scope', 'DEFAULT_INVOICE', function ($scope, DEFAULT_INVOICE) {

    }]);