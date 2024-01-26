export default function Page() {
  return (
    <form>
      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="message">Message</label>
      <input type="text" name="message" id="message" />
    </form>
  )
}
