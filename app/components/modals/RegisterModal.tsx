'use client';
import axios from 'axios';
import { FC, useState } from 'react';
// import {AiFillGithub} from 'react-icons/ai';
// import {FcGoogle} from 'react-icons/fc';
import useRegisterModal from '@/app/api/hooks/useRegisterModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const RegisterModal: FC = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      password: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post('/api/register', data)
      .then(() => registerModal.onClose())
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading tilte='Welcome to Sirbnb' subtitle='Create an account!' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
