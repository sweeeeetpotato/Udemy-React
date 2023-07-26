import { useState } from "react";
import Layout from "../common/Layout";
import LectureTitle from "../common/LectureTitle";
import DropzoneSection from "./DropzoneSection";
import ModalSubmitButton from "../common/ModalSubmitButton";
import Image from "next/image";
import useClassroomModal from "@/hooks/useClassroomModal";

const AddVideoModal: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { handleModalMove } = useClassroomModal();

  return (
    <Layout>
      <div className="flex gap-[10px] text-xl font-bold text-grayscale-100">
        <button onClick={() => handleModalMove("noteModal", "videoFileModal")}>
          강의 만들기
        </button>
        <span className="relative pl-[17px] before:absolute before:top-[9px] before:left-0 before:w-[7px] before:h-[11px] before:bg-[url('/images/right-arrow.svg')] before:bg-no-repeat">
          영상 강의 만들기
        </span>
      </div>
      <LectureTitle />
      {videoFile?.type.includes("video") && (
        <div className="flex gap-3">
          <Image
            src={"/images/file-icon.svg"}
            alt={"파일 아이콘"}
            width={0}
            height={0}
            className="w-6 h-auto"
          />
          <p className="text-primary-80">{videoFile?.name}</p>
        </div>
      )}
      <DropzoneSection setVideoFile={setVideoFile} />
      <ModalSubmitButton
        handleModalMove={() => handleModalMove("noteModal", "videoFileModal")}
        contents={"업로드"}
      />
    </Layout>
  );
};

export default AddVideoModal;
