const takeOrder = (customer, call) => {
    console.log(`Take Order for ${customer}`);
    call(customer);
};
const processOrder = (customer, time, call) => {
    console.log(`Processing Order for ${customer}`);

    setTimeout(() => {
        console.log('Cooking Completed');
        console.log(`Order Processed for ${customer}`);
        call(customer);
    }, time);
};
const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);
};
takeOrder('customer 1', (custom) => {
    processOrder(custom, 9000, (custom) => {
        completeOrder(custom);
    });
});
takeOrder('customer 2', (custom) => {
    processOrder(custom, 5000, (custom) => {
        completeOrder(custom);
    });
});
takeOrder('customer 3', (custom) => {
    processOrder(custom, 7000, (custom) => {
        completeOrder(custom);
    });
});
console.log('Oikko');
