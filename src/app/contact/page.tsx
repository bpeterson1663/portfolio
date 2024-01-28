'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import style from './page.module.scss'

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
    <div className={style.container}>
      {status == 'success' && <h3>Thanks for reaching out! I will be in touch shortly.</h3>}
      {status == 'error' && <h3>Something went wrong sending the email. Please try again later</h3>}
      <form ref={form} className={style['contact-form']} method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="message">Message</label>
        <textarea rows={4} name="message" id="message" />

        <button disabled={disabled} type="submit">Send</button>
      </form>
    </div>
  )
}
