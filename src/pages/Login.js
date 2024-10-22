import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import loginImage from '../assets/login-image.png';
import LogoMiAll from '../assets/mi-all-logo.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de login
    console.log('Logging in with:', { email, password });

    // Redireciona para a página /home
    navigate('/home');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-white">
      <img src={loginImage} alt="Vet" className="rounded-lg drop-shadow-md" />

      </div>

      <div className="flex flex-col justify-between items-center w-full md:w-1/2 bg-white p-8">
        <div className="w-full max-w-md h-full flex flex-col items-center justify-center">
          <img src={LogoMiAll} alt="Vet" className="w-2/4 rounded-lg mb-16" />

          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} text="Entrar" />
          
          <a href="/forgot-password" className="block text-sm text-gray-500 mt-3 text-right">
            Esqueci minha senha
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400">Dúvidas? Entre em contato através da nossa <a href="/support" className="text-customGreen">central de atendimento</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
