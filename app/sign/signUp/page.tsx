'use client';
import React from 'react';
import supabase from '@/app/_utils/supabase/api';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

export interface userValidate {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export default function Home() {
  const [passwordCheck, setPasswordCheck] = useState('');

  const onSubmitSignUpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const nickname = formData.get('nickname') as string;

    if (validation({ email, password, passwordCheck, nickname })) {
      // sign up
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { nickname }
        }
      });

      const addUserInfo = async () => {
        const { error: insertError } = await supabase.from('users').insert({ userId: email, nickname: nickname });
        if (error) {
          console.error(`Failed to insert data to Supabase - ${error.message}`);
        }
      };
      addUserInfo();
    }
  };

  return (
    <div className="container">
      {' '}
      {/* 가운데에 왼쪽 정렬을 위한 부모 컨테이너 */}
      <form onSubmit={onSubmitSignUpHandler}>
        <div>
          <input name="email" type="email" required placeholder="아이디 입력(6~20자)" />
        </div>
        <div>
          <input name="nickname" type="text" required minLength={3} placeholder="닉네임 입력" />
        </div>
        <div>
          <input name="password" type="password" required minLength={6} placeholder="비밀번호 입력" />
        </div>
        <div>
          <input name="passwordCheck" type="password" required minLength={6} placeholder="비밀번호 확인" />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
}

//유효성 검사
const validation = ({ email, password, passwordCheck, nickname }: userValidate) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;

  // if (!email.match(validRegex)) {
  //   alert('이메일 형식이 올바르지 않습니다.');
  //   return false;
  // }

  // if (password.length < 6) {
  //   alert('비밀번호는 6자리 이상 입력해주세요.');
  //   return false;
  // }

  // if (nickname.length < 3) {
  //   alert('닉네임은 3자리 이상 입력해주세요.');
  //   return false;
  // }

  // if (password !== passwordCheck) {
  //   alert('비밀번호가 일치하지 않습니다.');
  //   return false;
  // }

  // 유효성검사 form에서 이미 진행
  alert('회원가입 되었습니다!'); // redircet 안됨
  return true;
};
