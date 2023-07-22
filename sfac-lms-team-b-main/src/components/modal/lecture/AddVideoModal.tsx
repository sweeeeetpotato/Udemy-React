import { useState } from "react";
import Layout from "../Layout";
import ModalTtile from "./ModalTtile";
import LectureTitle from "./LectureTitle";
import DropzoneSection from "./DropzoneSection";
import { ModalSubmitButton } from "./ModalSubmitButton";
import Image from "next/image";

interface AddLectureModalProps {
  handleCloseModal: () => void;
}

const AddVideoModal: React.FC<AddLectureModalProps> = ({
  handleCloseModal,
}) => {
  const modalTitle: string[] = ["강의 만들기", "강의 목록 만들기"];
  const [videoFile, setVideoFile] = useState<File | null>(null);

  return (
    <Layout handleCloseModal={handleCloseModal}>
      <ModalTtile modalTitle={modalTitle} />
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
        handleCloseModal={handleCloseModal}
        contents={"업로드"}
      />
    </Layout>
  );
};

export default AddVideoModal;
