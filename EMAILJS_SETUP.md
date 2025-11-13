# EmailJS Setup Instructions

To enable direct email sending to sadeedesh499@gmail.com, follow these steps:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

## 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" (recommended)
- Connect your Gmail account or use SMTP settings

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

**Subject:** Hotel Inquiry from {{from_name}}

**Body:**
```
New hotel inquiry received:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Grand Vista Hotel website
```

## 4. Get Your Credentials
- Service ID: Found in "Email Services" section
- Template ID: Found in "Email Templates" section  
- Public Key: Found in "Account" > "General" section

## 5. Update the Code
Replace these values in Contact.tsx:
- `YOUR_PUBLIC_KEY` with your actual public key
- `YOUR_SERVICE_ID` with your service ID
- `YOUR_TEMPLATE_ID` with your template ID

## 6. Test the Form
- Fill out the contact form on your website
- Check if emails arrive at sadeedesh499@gmail.com
- Verify all form data is included correctly

## Free Plan Limits
- 200 emails per month
- No credit card required
- Perfect for hotel contact forms

## Alternative: Formspree (Simpler Setup)
If EmailJS seems complex, you can use Formspree:
1. Go to https://formspree.io/
2. Create account and get form endpoint
3. Update form action to point to Formspree endpoint