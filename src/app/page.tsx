import QuestionList from "./components/QuestionList";
import FullImage from "./components/util/FullImage";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white p-8 sm:p-10 shadow-2xl rounded-xl w-[100%] sm:w-[600px] mx-6 mt-32 sm:mt-40">
          <div className="sm:text-[54px] text-[32px] leading-tight font-bold flex items-center">
            <div className="mr-5 w-[24px] h-[24px] sm:w-[35px] sm:h-[35px]">
              <FullImage alt="pink star" src="/icon-star.svg" />
            </div>
            FAQs
          </div>
          <QuestionList />
        </div>
      </div>

    </>
  );
}
