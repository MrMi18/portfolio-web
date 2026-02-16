# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form (Email delivery)

This project uses EmailJS to send contact form messages from the client. To receive messages at your email (e.g. imra.mohd1910@gmail.com):

- Install the EmailJS browser package:

```bash
npm install @emailjs/browser
```

- Create an account at https://www.emailjs.com/, then create a service and an email template.
- In the template, include variables `from_name`, `from_email`, `message` (and optionally `to_email` if you prefer dynamic recipients).
- Copy your EmailJS `service_id`, `template_id`, and `public_key` into `.env` using the keys in `.env.example`.
- Restart the dev server after adding env variables.

Notes:
- The contact form component will send messages using the configured template. Make sure the template is configured to send to your desired recipient address or accepts a `to_email` variable.
- If you want me to configure a template or add server-side forwarding, provide the EmailJS keys or let me know and I can guide you through the steps.
