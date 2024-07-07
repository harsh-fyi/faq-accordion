import QuestionList from "./components/QuestionList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white p-8 sm:p-10 shadow-2xl rounded-xl w-[100%] sm:w-[600px] h-96 mx-6 mt-32 sm:mt-40">
          <div className="sm:text-[54px] text-[32px] leading-tight font-bold flex items-center">
            <div className="mr-5 w-[24px] h-[24px] sm:w-[35px] sm:h-[35px]">
              <Image alt="pink star" src="/icon-star.svg"
                width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            FAQs
          </div>
          <QuestionList />
        </div>
      </div>

    </>
  );
}
