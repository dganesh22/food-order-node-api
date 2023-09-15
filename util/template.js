
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

module.exports = { regTemplate }