const sgMail= require('@sendgrid/mail')

//const sendgridAPIKey ='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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//process.env.SENDGRID_API_KEY
const sendWelcomeEmail = (name,email) =>{
   
    sgMail.send({
        to:email,
        from:'sisirkumar833@gmail.com',
        subject:'Thanks For joining us',
        text:`Welcome to app, ${name} . Let me know how you get along with app`
    })
}

const sendCancelationEmail = (name,email) =>{
    sgMail.send({
        to:email,
        from:'sisirkumar833@gmail.com',
        subject:'Sorry to see you go',
        text:`GoodBye ${name}, I hope to see you sometime soon`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}