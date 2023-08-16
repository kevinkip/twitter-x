
import axios from 'axios';
import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast';
import useLoginModal from '../../hooks/useLoginModal';
import useRegisterModal from '../../hooks/useRegisterModal';
import { signIn } from 'next-auth/react';

import Input from '../Input';
import Modal from '../Modal';


const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
      if (isLoading){
        return;
      }

      registerModal.onClose();
      loginModal.onOpen();
    }, [loginModal, registerModal, isLoading])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // TODO ADD LOG IN AND REGISTER
            axios.post('/api/register', {
              email,
              name,
              username,
              password,
            });

            setIsLoading(false)

            // after success, add toaster
            toast.success('Account Created.')

            signIn('credentials', {
              email,
              password,
            })

            //close modal after submission
            registerModal.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [email, password, registerModal, username, name])

    const bodyContent = (
        <div className="flex flex-col gap-4">
          <Input 
            disabled={isLoading}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}  
          />
          <Input 
            placeholder="Name"
            disabled={isLoading}
            type="name"
            onChange={(e) => setName(e.target.value)}
            value={name} 
          />
          <Input 
            placeholder="Username"
            disabled={isLoading}
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username} 
          />
          <Input 
            placeholder="Password"
            disabled={isLoading}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
          />
        </div>
      )

      const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
          <p>
            Already have an account? 
            <span onClick={onToggle}
            className="text-white cursor-pointer hover:underline"
            > Sign in</span>
          </p>
        </div>
      )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
      );
    }

export default RegisterModal