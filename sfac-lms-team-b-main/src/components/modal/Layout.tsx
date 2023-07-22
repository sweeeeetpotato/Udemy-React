import Image from "next/image";
import { ReactNode } from "react";

interface ModalProps {
  handleCloseModal: () => void;
  children: ReactNode;
}

const Layout: React.FC<ModalProps> = ({ handleCloseModal, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black/30 flex flex-col justify-center items-center`}
      onClick={handleCloseModal}
    >
      <article
        className="relative w-[770px] shadow-2xl bg-white pt-10 px-8 pb-9 flex flex-col gap-5 box-border rounded-[10px]"
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button type="button">
          <Image
            src="images/close.svg"
            alt="닫기 버튼"
            width={24}
            height={24}
            className="absolute top-10 right-8"
            onClick={handleCloseModal}
          />
        </button>
      </article>
    </div>
  );
};

export default Layout;
