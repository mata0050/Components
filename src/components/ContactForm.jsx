import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiSun } from 'react-icons/bi';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState.formData,
      [name]: value,
    }));
  };

  const styledIcon = {
    fontSize: '1.6rem',
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContactForm>
      <div className='info'>
        <h3>Contact information</h3>

        <div className='contact'>
          <AiOutlineMail style={styledIcon} />

          <span>
            Email
            <p>hello@tesla.com</p>
          </span>
        </div>

        <div className='contact'>
          <BsTelephone style={styledIcon} />

          <span>
            Phone
            <p>+49 (800) 335 35 35</p>
          </span>
        </div>

        <div className='contact'>
          <GoLocation style={styledIcon} />

          <span>
            Address
            <p>844 Morris Park avenue</p>
          </span>
        </div>

        <div className='contact'>
          <BiSun style={styledIcon} />

          <span>
            Working hours
            <p>8 a.m. – 11 p.m.</p>
          </span>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <h3>Get in touch</h3>

        <div className='grid'>
          <label htmlFor='name'>
            Your name
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Your name'
              onChange={onChange}
            />
          </label>

          <label htmlFor='email'>
            Your email
            <input
              type='email'
              name='email'
              value={email}
              required
              placeholder='Your email'
              onChange={onChange}
            />
          </label>

          <label htmlFor='subject'>
            Subject
            <input
              type='text'
              name='subject'
              value={subject}
              required
              placeholder='Subject'
              onChange={onChange}
            />
          </label>

          <label htmlFor='message'>
            Your message
            <textarea
              type='text'
              name='message'
              value={message}
              placeholder='Your message'
              onChange={onChange}
            />
          </label>
        </div>

        <button type='submit'>Send message</button>
      </form>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  border-radius: 20px;
  padding: 5px;
  margin-top: 60px;

  .info {
    background: rgb(42, 139, 223);
    background: linear-gradient(
      90deg,
      rgba(42, 139, 223, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    padding: 30px;
    width: 45%;

    border-radius: 20px;

    h3 {
      font-weight: 500;
      margin-bottom: 30px;
    }

    .contact {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;

      span {
        font-size: 0.8rem;

        p {
          font-size: 1rem;
        }
      }
    }
  }

  form {
    padding: 60px;
    width: 100%;

    h3 {
      opacity: 0.7;
      margin-bottom: 30px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      label {
        font-size: 0.9rem;
        input,
        textarea {
          margin-top: 10px;
          display: block;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          border: none;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.grey};
          padding: 5px;
          font-family: 'Poppins';
        }
      }
    }

    button {
      margin-top: 30px;
      padding: 8px 15px;
      background-color: ${({ theme }) => theme.colors.blue};
      border: none;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default ContactForm;
