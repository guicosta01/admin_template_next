'use client'

import { useState } from 'react';
import AuthInput from "@/components/auth/AuthInput";


export default function Autenticacao() {

    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    function exibirErro(msg, tempoEmSegundos = 5){
        setErro(msg);
        setTimeout(() => setErro(''), tempoEmSegundos * 1000)
    }

    function submeter(){
        if(modo === 'login'){
            console.log('login');
        } else {
            console.log('cadastro')
        }
    }


    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='hidden md:block md:w-1/2 lg:w-2/3'>
                <img src="/images/dino.jpg" alt="Imagem" className='h-screen w-full object-cover text-white'/>
            </div>
            <div className='m-10 w-full md:w-1/2'>
                <h1 className='text-xl font-bold mb-5 text-white'>
                    {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se no site'}
                </h1>

                {erro ? (
                    <div className='text-red-400 flex items-center justify-center'>
                        <span>{erro}</span>
                    </div>
                ):false}
                


                <AuthInput
                    label="Email"
                    tipo='email'
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo='password'
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />

                <button onClick={submeter} className='
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-2 mt-6
                '>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>


                <hr className='my-6 border-gray-300 w-full'/>

                <button onClick={submeter} className='
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-2
                '>
                    Entrar com o Google
                </button>

                {modo === 'login' ? (
                    <p className='mt-8 text-white'>
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className='
                            text-blue-500 hover:text-blue-400 font-semibold cursor-pointer m-3
                        '>
                            Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className='mt-8 text-white'>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className='
                            text-blue-500 hover:text-blue-400 font-semibold cursor-pointer m-3
                        '>
                            Entre com suas credenciais
                        </a>
                    </p>
                )}
                
            </div>
        </div>
    );
}