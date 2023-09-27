
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

const orderTemplate = (user,order,orderId,orderTime,amount,address) => {
    return `<div style="text-align:center; height:800px;width:1000px;margin:auto;padding:20px;">
                  <div style="background:#ccc;padding:20px;margin:10px;">
                        <h1 style="color:#222;">Hi, ${user.name}, Your Order placed Successfully.</h1>
                        <p style="color:slateblue;"> <strong>Order Id</strong> <i> ${orderId} </i> </p>
                        <p style="color:orangered;"> <strong>Order Time</strong> <i> ${orderTime} </i> </p>
                  </div>

                  <div style="background:#ccc;padding:20px;margin:10px;">
                        <div style="background:#222;padding:10px;">
                            <h3 style="color:#fff;">Order Summary</h3>
                        </div>
                        <div style="background:#fff;color:#222;padding:20px;margin:10px;">
                            ${
                                order.map(item => {
                                    return `<ul>
                                                <li>
                                                    <strong>Title</strong>
                                                    <span>${ item.title } </span>
                                                </li>
                                                <li>
                                                    <strong>Quantity</strong>
                                                    <span>${ item.qnty } </span>
                                                </li>
                                                <li>
                                                    <strong>Price</strong>
                                                    <span>${ item.price } </span>
                                                </li>
                                            </ul>`
                                })
                            }
                        </div>
                        <div style="background:#222;color:#fff;padding:10px;margin:10px;">
                            <h4>Amount: ${amount} </h4>
                        </div>
                  </div>

                  <div style="background:#eee;color:#222;padding:10px;margin:10px;">
                        <h3>Address</h3>
                        <hr/>
                        <div>
                            <p> <strong>Email</strong> ${address.email} </p>
                            <p> <strong>Mobile</strong> ${address.mobile} </p>
                            <p> <strong>location</strong> ${address.location} </p>
                            <p> <strong>City</strong> ${address.city} </p>
                            <p> <strong>Pincode</strong> ${address.pincode} </p>
                        </div>
                  </div>

                  <h4>Team Foody</h4>
           </div>`;
}

const deliveryStatus = (name,orderId,status) => {
    return `<div style="text-align:center; height:800px;width:1000px;margin:auto;padding:20px;">
                <div style="background:#ccc;padding:20px;margin:10px;">
                    <h1 style="color:#222;">Hi, ${name}, Your Order Delivery Status.</h1>
                    <p style="color:slateblue;"> <strong>Order Id</strong> <i> ${orderId} </i> </p>
                    <p style="color:orangered;"> <strong>Order Status</strong> <i> ${status} </i> </p>
                </div>

                <h4>Team Foody</h4>

            </div>`;
}

module.exports = { regTemplate, loginConfirm, orderTemplate , deliveryStatus}