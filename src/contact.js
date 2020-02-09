import React from "react"

import { useFormik } from "formik"



export default function ContactForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
          },
          onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm();
            actions.setSubmitting(false);
          }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        name="email"
        type="text"
        placeholder="Your email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <textarea
        name="message"
        placeholder="Your message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <button
        disabled={formik.isSubmitting}
        type="submit">
        Send message</button>
    </form>
  )
}