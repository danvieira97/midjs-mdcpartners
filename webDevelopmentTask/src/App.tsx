import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const [formData, setFormData] = useState<IForm | undefined>()

  interface IForm {
    name: string
    email: string
    subject: string
    message: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>()

  function submitForm(data: IForm){
    console.log(data)
    setFormData(data)
  }

  return (
    <div className="main-container">
      <h1>Simple Form</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" 
          {...register('name', { required: "Name is required" })} 
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span role="alert">{errors.name?.message}</span>}
        
        <label htmlFor="email">Email:</label>
        <input type='email'
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
      {errors.email && <span role="alert">{errors.email?.message}</span>}

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" 
          {...register('subject', { required: "Subject is required" })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && <span role="alert">{errors.subject?.message}</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows={5} cols={33} 
          {...register('message', { required: "Message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <span role="alert">{errors.message?.message}</span>}

        <button>Send</button>
      </form>
        {formData ? (
          <div>
            <h3>Your Datas:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Subject: {formData.subject}</p>
            <p>Message: {formData.message}</p>
          </div>
        ) : (
          <div></div>
        )}
    </div>
  )
}

export default App
