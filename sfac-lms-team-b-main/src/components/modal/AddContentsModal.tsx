import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface AddContentsModalProps {
  handleBtn: () => void;
}

const AddContentsModal: React.FC<AddContentsModalProps> = ({ handleBtn }) => {
  const fontStyle: string = "text-xl font-bold";
  const btnStyle: string = "bg-primary-80 text-white rounded-[10px]";
  const flexStyle: string = "flex flex-col justify-center items-center";
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState<string>("");

  // 파일 업로드 핸들러
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // 업로드된 파일을 상태에 추가
    const file = acceptedFiles[0] || null;
    fileSelect(file);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    fileSelect(file);
  };

  const fileSelect = (file : File | null) => {
    if (file) {
      // 기존에 생성한 비디오 파일의 URL을 해제 -> 메모리 누수 방지
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
      // 비디오 파일의 URL 생성
      setFileURL(URL.createObjectURL(file));
      setVideoFile(file);
    }
  }

  // Dropzone 컴포넌트 설정
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(getInputProps())
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
        <div {...getRootProps()} className={`h-[298px] border border-dashed border-grayscale-20 gap-[10px] ${flexStyle}`}
        onClick={()=>{}} >
          {
            fileURL && 
              <div className="relative">
                <video key={fileURL} controls width={200} height={150} className="rounded-[10px]">
                  <source src={fileURL} type={videoFile?.type} />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
                <button type="button">
                  <Image 
                    src="/close.svg"
                    alt="닫기 버튼" 
                    width={20} 
                    height={20} 
                    className="absolute top-1 right-1" 
                    onClick={() => {
                      if(fileURL) {
                        URL.revokeObjectURL(fileURL);
                        setFileURL("");
                        setVideoFile(null);
                      }
                    }}
                    />
                </button>
              </div>
          }
          {
            isDragActive ? 
              <p className={`text-grayscale-30 ${fontStyle}`}>파일을 이곳에 드롭하세요</p> 
              : 
              <p className={`text-grayscale-30 ${fontStyle}`}>파일을 여기로 드래그 해주세요</p>
          }

          <label htmlFor="videoFile" className={`inline-block w-[200px] h-[38px] cursor-pointer ${btnStyle} font-bold text-base ${flexStyle}`}>
            컴퓨터에서 파일 선택
          </label>
          <input 
            {...getInputProps()}
            // name="videoFile" 
            // id="videoFile" 
            // key={fileURL}
            // className="hidden"
            multiple={false}
            accept=".mp4, .avi, .mov, .wmv, .mkv, .f4v"
            onClick={(e: React.ChangeEvent<HTMLInputElement>)=>handleFileSelect(e)}
            />
        </div>
        <div className="text-right mb-[-20px]">
          <button 
            type="button" 
            className={`w-[107px] h-[45px] font-bold text-base ${btnStyle}`}
            onClick={handleBtn}
          >
            업로드
          </button>
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