import Layout from "../common/Layout";
import LectureTitle from "../common/LectureTitle";
import ModalSubmitButton from "../common/ModalSubmitButton";
import NoteSction from "./NoteSction";
import useClassroomModal from "@/hooks/useClassroomModal";

const AddNoteModal: React.FC = () => {
  const { handleModalMove } = useClassroomModal();

  return (
    <Layout>
      <div className="flex gap-[10px] text-xl font-bold text-grayscale-100">
        <button onClick={() => handleModalMove("videoFileModal", "noteModal")}>
          강의 만들기
        </button>
        <span className="relative pl-[17px] before:absolute before:top-[9px] before:left-0 before:w-[7px] before:h-[11px] before:bg-[url('/images/right-arrow.svg')] before:bg-no-repeat">
          노트 만들기
        </span>
      </div>
      <LectureTitle />
      <NoteSction />
      <ModalSubmitButton
        handleModalMove={() => handleModalMove("videoFileModal", "noteModal")}
        contents={"업로드"}
      />
    </Layout>
  );
};

export default AddNoteModal;
