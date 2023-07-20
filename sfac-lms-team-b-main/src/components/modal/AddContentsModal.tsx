import Image from "next/image";
import { useState } from "react";

interface AddContentsModalProps {
  handleBtn: () => void;
}

const AddContentsModal: React.FC<AddContentsModalProps> = ({ handleBtn }) => {
  const fontStyle: string = "text-xl font-bold";
  const btnStyle: string = "bg-primary-80 text-white rounded-[10px]";
  const flexStyle: string = "flex flex-col justify-center items-center";
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log(file)
    console.log(event.target.files)
    setFile(file);
  };

  return (
    <div className={`fixed top-0 left-0 ${flexStyle} w-screen h-screen bg-black/30`} onClick={handleBtn}>
      <article className="relative w-[770px] h-[529px] shadow-2xl bg-white pt-[41px] px-8 pb-[37px] flex flex-col gap-5 box-border rounded-[10px]" onClick={(e) => e.stopPropagation()}>
        <p className="flex gap-[10px]">
          <span className={`relative text-grayscale-100 pr-5 ${fontStyle} after:absolute after:top-[9px] after:right-0 after:w-[7px] after:h-[11px] after:bg-[url('/right-arrow.svg')] after:bg-no-repeat`} >
            강의 만들기
          </span>
          <span className={`text-grayscale-100 ${fontStyle}`}>
            영상 강의 만들기
          </span>
        </p>
        <label htmlFor="title">
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="제목을 입력해주세요. (선택)" 
            className={`text-grayscale-100 outline-none ${fontStyle} placeholder-grayscale-40`} 
          />
        </label>
        <div className={`h-[298px] border border-dashed border-grayscale-20 gap-[10px] ${flexStyle}`}>
          <p className={`text-grayscale-30 ${fontStyle}`}>
            파일을 여기로 드래그 해주세요
          </p>
          <label htmlFor="videoFile" className={`inline-block w-[200px] h-[38px] cursor-pointer ${btnStyle} font-bold text-base ${flexStyle}`}>
            컴퓨터에서 파일 선택
            <input 
              type="file" 
              name="videoFile" 
              id="videoFile" 
              className="hidden"
              accept=".mp4, .avi, .mov, .wmv, .mkv, .f4v"
              onChange={handleFileSelect}
            />
          </label>
        </div>
        <div className="text-right mb-[-20px]">
          <button type="button" className={`w-[107px] h-[45px] font-bold text-base ${btnStyle}`}>업로드</button>
        </div>
        <button type="button">
          <Image 
            src="/close.svg"
            alt="닫기 버튼" 
            width={24} 
            height={24} 
            className="absolute top-[41px] right-[31px]" 
            onClick={handleBtn}
            />
        </button>
      </article>
    </div>
  )
}

export default AddContentsModal;