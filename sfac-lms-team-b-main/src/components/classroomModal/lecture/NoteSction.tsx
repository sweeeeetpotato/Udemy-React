import Image from "next/image";

const NoteSction: React.FC = () => {
  return (
    <section
      className="h-72 border border-solid border-grayscale-10 rounded-[10px] flex flex-col justify-between gap-4 p-4 placeholder:text-grayscale-21013
    0"
    >
      <div className="flex-1">
        <label htmlFor="note" />
        <textarea
          name="note"
          id="note"
          placeholder="내용을 입력해주세요."
          className="w-full h-full resize-none outline-none"
        />
      </div>
      <div className="flex gap-2 rounded-[10px]">
        <button type="button">
          <Image
            src={"/images/note-plus-icon.svg"}
            alt={"이미지 추가 버튼"}
            width={0}
            height={0}
            className="w-14 h-auto"
          />
        </button>
      </div>
    </section>
  );
};

export default NoteSction;
