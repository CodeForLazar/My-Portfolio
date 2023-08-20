'use server';
import {validateEmailForm, getErrorMessage} from '@/lib/utils';
import ContactForm, {ContactFormEmailProps} from '@/email/ContactForm';
import {Resend} from 'resend';
import {createElement} from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (formData: FormData) => {
   'use server';
   const email = formData.get('email');
   const message = formData.get('message');

   try {
      validateEmailForm(email, message);
      const data = await resend.emails.send({
         from: `Acme <onboarding@resend.dev>`,
         to: ['l.kiridzievski@gmail.com'],
         subject: 'Portfolio Contact',
         reply_to: email as string,
         text: message as string,
         react: createElement(ContactForm, {
            message,
            email,
         } as ContactFormEmailProps),
      });
      if (!data?.id) {
         throw new Error('Something went wrong.');
      }
      return {data};
   } catch (error: unknown) {
      return {error: getErrorMessage(error)};
   }
};
