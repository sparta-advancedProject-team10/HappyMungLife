'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updatePostHandler } from '@/app/actions';

type CommunityEditFormProps = {
  postId: string;
  prevTitle: string;
  prevContent: string;
};

export const CommunityEditForm = ({ postId, prevTitle, prevContent }: CommunityEditFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState(prevTitle);
  const [content, setContent] = useState(prevContent);

  const titleHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await updatePostHandler(postId, title, content);
        alert('수정이 완료되었습니다.');
      }}
      className="m-5 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-full md:h-96 lg:h-80 xl:h-64"
    >
      <div className="my-10">
        <label className="text-2xl mr-5">제목</label>
        <input
          className="max-h-8 h-8 max-w-2xl w-full"
          type="text"
          value={title}
          onChange={titleHandler}
          placeholder="제목"
        />
      </div>
      <div>
        <label></label>
        <textarea
          placeholder="내용"
          name=""
          id=""
          style={{ resize: 'none' }}
          value={content}
          onChange={contentHandler}
          className="h-full w-full"
        />
      </div>
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">취소</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          작성
        </button>
      </div>
    </form>
  );
};

export default CommunityEditForm;