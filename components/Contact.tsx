import { InputField } from './Input';
import { ImSpinner9 } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { BiSolidPaperPlane } from 'react-icons/bi';

export const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [])
  

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div className='flex flex-col lg:flex-row pt-36 lg:py-20 pb-16 items-center justify-center mx-auto px-2 sm:px-8 gap-20'>
      <article className='grid gap-10 text-center flex-1 max-w-2xl'>
        <h1 className='uppercase font-extrabold text-4xl tracking-widest'>
          Contact
        </h1>

        <p className='text-sm leading-8 text-neutral-400 tracking-wider max-w-lg'>
          Whether you&apos;re interested in networking, or career advice, or
          want to have a casual conversation, I look forward to communicating
          with you and learning from our interactions!
        </p>

        <div className='grid gap-10 text-sm'>
          <div className='grid gap-2'>
            <h2 className='text-lg font-bold tracking-widest'>Address</h2>
            <p className='text-neutral-400 tracking-wider'>Ondo State, Nigeria</p>
          </div>
          <div className='grid gap-2'>
            <h2 className='text-lg font-bold tracking-widest'>Email</h2>
            <p className='text-neutral-400 tracking-wider'>
              <a href='mailto:aworetanjeremiah@gmail.com' className='hover:underline underline-offset-2'>
                aworetanjeremiah@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>

      <form
        onSubmit={handleSubmit}
        action='https://formsubmit.co/5ad6e90d1d6c9847586699d8ecf9fee2'
        method='POST'
        className='w-full flex-1 grid gap-10 md:shadow-2xl bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl md:p-14 max-w-xl'
      >
        <h1 className='uppercase font-extrabold text-xl sm:text-4xl tracking-widest text-center'>
          Contact Form
        </h1>

        <div className='grid gap-8'>
          <InputField type='text' name='name' placeholder='Your name' />
          <InputField type='email' name='email' placeholder='Your email' />
          <InputField textarea name='message' placeholder='Message' rows={1} />

          <input type="hidden" name="_next" value="https://jeremy0x.tech/contact" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <button
            type='submit'
            disabled={isLoading}
            className='uppercase flex items-center justify-center gap-3 flex-row tracking-wider shadow-2xl px-10 py-4 w-fit mx-auto mt-4 bg-zinc-800 bg-opacity-30 rounded-xl hover:-translate-y-1 active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-pulse'
          >
            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            {isLoading ? <ImSpinner9 className='text-xl animate-spin' /> : <BiSolidPaperPlane className='text-xl' />}
          </button>
        </div>
      </form>
    </div>
  );
};
