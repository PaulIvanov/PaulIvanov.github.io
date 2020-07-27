import React from 'react'
import styles from './contact-form.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contactform}>
      <form
        method="post"
        action="https://getform.io/f/3324d541-c631-4c1c-9986-3f072e3b0fdc"
      >
        <div className={styles.formField}>
          <label className={styles.formLabel}>Email</label>
        </div>
        <input type="email" name="email" required />
        <div className={styles.formField}>
          <label className={styles.formLabel}>Name</label>
        </div>
        <input type="text" name="name" />
        <div className={styles.formField}>
          <label className={styles.formLabel}>Message</label>
        </div>
        <textarea rows="4" name="message" required />
          <button className={styles.submitButton} type="submit">Send Message</button>
       </form>
    </div>
  )
}

export default ContactForm
