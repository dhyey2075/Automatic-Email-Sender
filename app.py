import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Email credentials
sender_email = "dhyeypythonemail@gmail.com"
sender_password = "dhyey@123"
recipient_email = "202303023@daiict.ac.in"

# Create the email message
msg = MIMEMultipart()
msg['From'] = sender_email
msg['To'] = recipient_email
msg['Subject'] = "Subject of the Email"

# Email body
body = "Body of the email"
msg.attach(MIMEText(body, 'plain'))

# Sending the email
try:
    # Establish a secure session with Gmail's outgoing SMTP server using your gmail account
    server = smtplib.SMTP('smtp.gmail.com', 465)
    server.starttls()  # Secure the connection
    server.login(sender_email, sender_password)  # Login to your email account

    # Send email
    text = msg.as_string()
    server.sendmail(sender_email, recipient_email, text)

    print("Email sent successfully!")

except Exception as e:
    print(f"Error: {e}")


