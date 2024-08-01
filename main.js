import sendEmail from "./sendEmail.js";

let attachment = [
    {
        filename: 'dhyey.jpg',
        path: './dhyey.jpg'
    },
    {
        filename: 'smaller-new-file.pdf',
        path: './smaller-new-file.pdf'
    }
]

sendEmail("dhyeyhparekh@gmail.com", "Hello", "Hello, World! from node js", attachment)