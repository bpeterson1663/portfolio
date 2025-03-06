'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './page.scss'
import { Button, Textarea, TextInput } from '@mantine/core'

type Status = 'idle' | 'success' | 'error'

export default function Page() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisabled(true)
    if (form.current) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EJS_TEMPLATE_CONTACT!,
          form.current,
          process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY,
        )
        setStatus('success')
      } catch (err) {
        console.error({ err })
        setStatus('error')
      }
    }
  }

  return (
    <div className="container">
      {status == 'success' && <h3>Thanks for reaching out! I will be in touch shortly.</h3>}
      {status == 'error' && <h3>Something went wrong sending the email. Please try again later</h3>}
      <form ref={form} className="contact-form" method="POST" onSubmit={handleSubmit}>
        <TextInput label="Your Name" type="text" name="name" id="name" />

        <TextInput label="Your Email" type="email" name="email" id="email" />

        <Textarea label="Message" rows={4} name="message" id="message" />

        <Button disabled={disabled} type="submit">Send</Button>
      </form>
    </div>
  )
}
