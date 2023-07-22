import Layout from "../Layout";
import LectureTitle from "./LectureTitle";
import { ModalSubmitButton } from "./ModalSubmitButton";
import ModalTtile from "./ModalTtile";
import NoteSction from "./NoteSction";

interface AddNoteModalProps {
  handleCloseModal: () => void;
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ handleCloseModal }) => {
  const modalTitle: string[] = ["강의 만들기", "노트 만들기"];

  return (
    <Layout handleCloseModal={handleCloseModal}>
      <ModalTtile modalTitle={modalTitle} />
      <LectureTitle />
      <NoteSction />
      <ModalSubmitButton
        handleCloseModal={handleCloseModal}
        contents={"업로드"}
      />
    </Layout>
  );
};

export default AddNoteModal;
