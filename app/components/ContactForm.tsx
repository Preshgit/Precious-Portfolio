import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // EmailJS Configuration
  const SERVICE_ID = 'service_b4ngonl';
  const TEMPLATE_ID = 'template_kyniapa';
  const PUBLIC_KEY = 'bTKMYYt2ejiQfdgW7';
  const validateForm = () => {
    const newErrors = { from_name: '', email: '', message: '' };
    let isValid = true;

    // Validate name
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
      isValid = false;
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      setStatusMessage('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Initialize EmailJS with public key
      emailjs.init(PUBLIC_KEY);

      // Send email
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.from_name,
        email: formData.email,
        message: formData.message,
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon. ✨"
        );
        setFormData({ from_name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage(
        'Oops! Something went wrong. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12'>
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Name
            </label>
            <input
              type='text'
              name='from_name'
              value={formData.from_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 ${
                errors.from_name ? 'border-red-400' : 'border-gray-200'
              } focus:border-yellow-400 focus:outline-none transition-colors`}
              placeholder='Your name'
              disabled={isSubmitting}
            />
            {errors.from_name && (
              <p className='text-red-500 text-sm mt-1'>{errors.from_name}</p>
            )}
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 ${
                errors.email ? 'border-red-400' : 'border-gray-200'
              } focus:border-yellow-400 focus:outline-none transition-colors`}
              placeholder='your@email.com'
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.message ? 'border-red-400' : 'border-gray-200'
            } focus:border-yellow-400 focus:outline-none transition-colors resize-none`}
            placeholder='Tell me about your project...'
            disabled={isSubmitting}
          ></textarea>
          {errors.message && (
            <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className='w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin'></div>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={20} />
            </>
          )}
        </button>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div
            className={`flex items-start gap-3 p-4 rounded-xl ${
              submitStatus === 'success'
                ? 'bg-green-50 border-2 border-green-200'
                : 'bg-red-50 border-2 border-red-200'
            } animate-in fade-in slide-in-from-top duration-300`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle
                className='text-green-500 flex-shrink-0 mt-0.5'
                size={20}
              />
            ) : (
              <AlertCircle
                className='text-red-500 flex-shrink-0 mt-0.5'
                size={20}
              />
            )}
            <p
              className={`text-sm font-medium ${
                submitStatus === 'success' ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {statusMessage}
            </p>
          </div>
        )}

        <div className='flex justify-center gap-6 mt-8'>
          <a
            href='mailto:preciousdesk10@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-yellow-400 transition-colors'
          >
            <Mail size={24} />
          </a>

          <a
            href='https://www.linkedin.com/in/precious-omotosho/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-yellow-400 transition-colors'
          >
            <Linkedin size={24} />
          </a>

          <a
            href='https://www.instagram.com/preciousomotoshot/' // 👈 replace with your actual Instagram username
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-yellow-400 transition-colors'
          >
            <Instagram size={24} />
          </a>

          <a
            href='https://github.com/Preshgit'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-yellow-400 transition-colors'
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
