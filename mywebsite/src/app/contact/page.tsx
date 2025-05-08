'use client';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <input 
        {...register('name', { required: true })} 
        placeholder="Your Name"
        className="w-full p-2 border border-green-300 rounded"
      />
      {errors.name && <span className="text-red-500">Name is required</span>}
      
      <input 
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
        placeholder="Email"
        className="w-full p-2 border border-green-300 rounded"
      />
      {errors.email && <span className="text-red-500">Valid email is required</span>}
      
      <textarea 
        {...register('message', { required: true })} 
        placeholder="Your Message"
        className="w-full p-2 border border-green-300 rounded"
        rows={4}
      />
      
      <button 
        type="submit" 
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Send Message
      </button>
    </form>
  );
}