const kushki = new Kushki({
    merchantId: 'public-merchant-id', // Your public merchant id 
    inTestEnvironment: true,
  });
  kushki.requestSubscriptionToken({
    currency: "USD",
    card: {
      name: form.name,
      number: form.number,
      cvc: form.cvv,
      expiryMonth: form.expiry_month,
      expiryYear: form.expiry_year,
    },
  }, (response) => {
    if(response.code){
      console.log(response);
      // Submit your code to your back-end
    } else {
      console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
    }
  });
  kushki.requestDeviceToken({
    subscriptionId: "1543267242354000" // Replace with your subscription id
  }, (response) => {
    if(response.code){
      console.log(response);
      // Submit your code to your back-end
    } else {
      console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
    }
  });