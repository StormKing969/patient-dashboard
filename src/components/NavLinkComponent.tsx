import React, { type SetStateAction } from "react";

const NavLinkComponent = ({
  pageId,
  title,
  image,
  altName,
  currentPageId,
  setCurrentPageId,
}: {
  pageId: string;
  title: string;
  image: string;
  altName: string;
  currentPageId: string;
  setCurrentPageId: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <button
        className={`${currentPageId.startsWith(pageId) ? "bg-[#01F0D0]" : "hover:bg-gray-400"} cursor-pointer py-2 px-4 rounded-xl flex flex-row justify-center items-center gap-2`}
        onClick={() => setCurrentPageId(pageId)}
      >
        <img src={image} alt={altName} className={"object-contain"} />
        {title}
      </button>
    </div>
  );
};

export default NavLinkComponent;