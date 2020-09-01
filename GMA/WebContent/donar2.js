<<<<<<< HEAD

function paymentProcess() {



    var options = {
        "key": "rzp_test_UdmwEzXkHS6INp", // Enter the Key ID generated from the Dashboard
        "amount": 200*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "GMA Media",
        "description": "Donar Pass",
        "image": "gmalogo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Akshay Bhatia",
            "email": "akshay.bhatia@gmail.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('123456789').set({
    payment_id : response.razorpay_payment_id
    })
}
=======

function paymentProcess() {



    var options = {
        "key": "rzp_test_UdmwEzXkHS6INp", // Enter the Key ID generated from the Dashboard
        "amount": 200*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "GMA Media",
        "description": "Poshakalu",
        "image": "gmalogo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Akshay Bhatia",
            "email": "akshay.bhatia@gmail.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('123456789').set({
    payment_id : response.razorpay_payment_id
    })
}
>>>>>>> 48086e9b3d70cd8a64f583dabb02eee8bedbe175
