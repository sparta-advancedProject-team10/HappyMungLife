import CommunityForm from '@/app/_components/communityPageComponents/CommunityForm';
import { createClientJs } from '@/app/_utils/supabase/createClientJs';

export const CommunityPostPage = () => {
  const supabase = createClientJs();

  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center bg-primaryColor/10 w-[1280px] min-h-[720px]">
        <h1 className="">커뮤니티 글쓰기</h1>
        <CommunityForm />
      </div>
    </div>
  );
};

export default CommunityPostPage;
