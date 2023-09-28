
const regTemplate = (name,email) => {
    return `<div style="padding:20px;width:80%;margin:auto;background:#222;height:500px;">
                <h4 style="color:#fff;">Hello ${name}, Thank you for being awesome.</h4>

                <p style="color:gold;">We have received your registration details and would like to thank you for joining our family. if any queries contact to <br> 
                
                <strong style="color:#fff;">contact@foody.com </strong> </p>

                <p> <strong style="color:orange;">Email: </strong> <span style="color:#fff;"> ${email} </span> </p>

                <hr>
                <p style="color:#aaa;">Have a nice day..</p>
                <p style="color:#fff;"> <strong> <i>Team Foody</i> </strong> </p>
           </div>`;
}


const loginConfirm = (name,email) => {
    return `<div style="padding:20px;width:80%;margin:auto;background:#222;height:500px;">
            <h4 style="color:#fff;">Hello ${name}, You have successfully Login..</h4>
                <p style="color:orange;">If it is un authorized login... contact 
                    <a href="mailto:support@foody.com">support@foody.com</a>
                </p>
            </div>`
}

const orderTemplate = (user,items,order,amount) => {
    return `<div style="text-align:center; height:100%;width:100%;margin:auto;padding:20px;">
                  <div style="background:#ccc;padding:20px;margin:10px;">
                        <h1 style="color:#222;">Hi, ${user.name}, Your Order placed Successfully.</h1>
                        <p style="color:slateblue;"> <strong>Order Id</strong> <i> ${order._id} </i> </p>
                        <p style="color:orangered;"> <strong>Order Time</strong> <i> ${order.orderTime} </i> </p>
                        <p style="color:orangered;"> <strong>Order Status</strong> <i> ${order.orderStatus} </i> </p>
                        <p style="color:orangered;"> <strong>Pay Mode</strong> <i> ${order.payMode} </i> </p>
                        <p style="color:orangered;"> <strong>Pay Status</strong> <i> ${order.payStatus} </i> </p>
                        <p style="color:orangered;"> <strong>Delivery Status</strong> <i> ${order.deliveryStatus} </i> </p>
                  </div>

                  <div style="background:#ccc;padding:20px;margin:10px;">
                        <div style="background:#222;padding:10px;">
                            <h3 style="color:#fff;">Order Summary</h3>
                        </div>
                        <div style="background:#fff;color:#222;padding:20px;margin:10px;">
                            <table border="1" style="border-collapse:collapse;text-align:center;">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${
                                        items.map(item => {
                                            return `<tr>
                                                        <td>
                                                            ${ item.title }
                                                        </td>
                                                        <td>
                                                            ${ item.qnty }
                                                        </td>
                                                        <td>
                                                            ${ item.price }
                                                        </td>
                                                    </tr>`
                                        })
                                    }
                                    </tbody>
                            </table>
            
                        </div>
                        <div style="background:#222;color:#fff;padding:10px;margin:10px;">
                            <h4>Amount: ${amount} </h4>
                        </div>
                  </div>

                  <div style="background:#eee;color:#222;padding:10px;margin:10px;">
                        <h3>Address</h3>
                        <hr/>
                        <div>
                            <p> <strong>Email</strong> ${user.email} </p>
                            <p> <strong>Mobile</strong> ${user.mobile} </p>
                            <p> <strong>Line- 1</strong> ${user.address.line1} </p>
                            <p> <strong>Line- 2</strong> ${user.address.line2} </p>
                            <p> <strong>Landmark</strong> ${user.address.landmark} </p>
                            <p> <strong>City</strong> ${user.address.city} </p>
                            <p> <strong>Pincode</strong> ${user.address.pincode} </p>
                        </div>
                  </div>

                  <h4>Team Foody</h4>
           </div>`;
}

const deliveryStatusTemp = (name,orderId,payStatus,orderStatus,deliveryStatus) => {
    return `<html>
                 <head>
                        <style>
                            .container {
                                text-align:center; 
                                height:800px;
                                width:100%;
                                margin:auto;
                                padding:20px;
                            }
                            .box {
                                background:#fff;
                                padding:20px;
                                margin:10px;
                                border:1px solid #222;
                                border-radius:10px;
                            }
                            .color-1 {
                                color:#222;
                            }
                            .color-2{ color:slateblue;}
                            .color-3 { color:orangered;}
                            p {
                                display: flex;
                                align-items: center;
                                justify-content: space-evenly;
                            }

                            i {
                                float: right;
                            }
                        </style>
                 </head>
                 <body>
                    <div class="container">
                            <div class="box">
                                <h1 class="color-1">Hi, ${name}, your order Id ${orderId}</h1>
                                <p class="color-2"> <strong>Order Status</strong> <i> ${orderStatus} </i> </p>
                                <p class="color-2"> <strong>Pay Status</strong> <i> ${payStatus} </i> </p>
                                <p class="color-3"> <strong>Delivery Status</strong> <i> ${deliveryStatus} </i> </p>
                            </div>
            
                            <h4>Team Foody</h4>
                    </div>
                 </body>
            </html>`;
}

module.exports = { regTemplate, loginConfirm, orderTemplate , deliveryStatusTemp}