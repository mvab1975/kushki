const request = require("request");

const options = {
  method: 'POST',
  url: 'https://api-uat.kushkipagos.com/subscriptions/v1/card',
  headers: {'content-type': 'application/json'},
  body: {
    token: 'gV3ox6100000sAxClU033646vnnJsT83',
    planName: 'Gold',
    periodicity: 'custom',
    contactDetails: {
      "documentType": "CC",
      "documentNumber": "1009283738",
      "email": "test@test.com",
      "firstName": "Diego",
      "lastName": "Cadena",
      "phoneNumber": "+593988734644"
    },
    amount: {
      subtotalIva: 0, 
      subtotalIva0: 0, 
      ice: 0, 
      iva: 0, 
      currency: 'USD'
    },
    startDate: '2021-01-01',
  },
  json: true
};

request(options, (error, response, body) => {
  if (error) throw new Error(error);

  console.log(body);
});
var request = require("request");

var options = {
  method: 'POST',
  headers: [
            'Private-Merchant-Id': '' // Reemplaza con tu Private merchant id
        ]
  url: 'https://api-uat.kushkipagos.com/subscriptions/v1/card/291929129192912', // Reemplázalo con tu id de suscripción
  headers: {'content-type': 'application/json'},
  body: {
  language: "es",
  token: "1cfaze100000qQ4dtN016410Ow7ot8nd",
  amount: {
    subtotalIva: 0,
    subtotalIva0: 49.99,
    ice: 0,
    iva: 0,
    currency: "USD"
  },
  "deferred": {
    graceMonths: "02",
    creditType: "01",
    months: 6
                },
  metadata: {
    customerId: "123"
  },
  contactDetails: {
    documentType: "CC",
    documentNumber: "1009283738",
    email: "test@test.com",
    firstName: "Diego",
    lastName: "Cadena",
    phoneNumber: "+593988734644"
  },
  orderDetails: {
    siteDomain: "tuebook.com",
    shippingDetails: {
      name: "Diego Cadena",
      phone: "+593988734644",
      address: "Eloy Alfaro 139 y Catalina Aldaz",
      city: "Quito",
      region: "Pichincha",
      country: "Ecuador",
      zipCode: "170402"
    },
    billingDetails: {
      name: "Diego Cadena",
      phone: "+593988734644",
      address: "Eloy Alfaro 139 y Catalina Aldaz",
      city: "Quito",
      region: "Pichincha",
      country: "Ecuador",
      zipCode: "170402"
    }
  },
  productDetails: {
    product: [
      {
        id: "198952AB",
        title: "eBook Digital Services",
        price: 6990000,
        sku: "10101042",
        quantity: 1
      },
      {
        id: "198953AB",
        title: "eBook Virtual Selling",
        price: 9990000,
        sku: "004834GQ",
        quantity: 1
      }
    ]
  },
  fullResponse: true
},
  json: true
};

request(options, (error, response, body) => {
  if (error) throw new Error(error);

  console.log(body);
});