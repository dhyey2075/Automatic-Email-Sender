# Email Utility Module

This module is designed to send emails using the `nodemailer` package. It supports sending emails with a subject and text body to specified recipients.

## Prerequisites

- Node.js installed on your system.
- A Gmail account to send emails from.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/email-utility-module.git
    cd email-utility-module
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

## Configuration

Before using the module, you need to configure your Gmail account to allow less secure apps or create an App Password if you have 2-step verification enabled. Update the `auth` field in the transporter configuration with your Gmail address and password or App Password.

## Usage

To use the module, you can import it and call the `sendEmail` function with the necessary parameters.

### Example

```javascript
import sendEmail from './path/to/your/module';

sendEmail("recipient@example.com", "Test Subject", "This is a test email.")
    .then(() => console.log("Email sent successfully!"))
    .catch(error => console.log("Error sending email: ", error));
```
## Function Parameters

- `email` (string): The recipient's email address.
- `subject` (string): The subject of the email.
- `text` (string): The text body of the email.

## Note

- Ensure you have internet access to send emails.
- For security reasons, do not hardcode your email credentials in the code. Use environment variables or other secure methods to manage sensitive information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

