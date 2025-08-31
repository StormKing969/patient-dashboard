import NavLinkComponent from "../components/NavLinkComponent.tsx";
import React, { type SetStateAction } from "react";

const Navbar = ({
  setCurrentPageId,
  currentPageId,
}: {
  setCurrentPageId: React.Dispatch<SetStateAction<string>>;
  currentPageId: string;
}) => {
  return (
    <nav
      className={
        "flex flex-row justify-between items-center gap-5 px-5 py-3 rounded-full text-black font-semibold bg-white mb-8"
      }
    >
      <img src={"TestLogo.svg"} alt={"Logo"} className={"object-contain"} />

      {/*Would have used react-routers if I had to make different pages*/}
      <div className={"flex flex-row justify-between items-center gap-2"}>
        <NavLinkComponent
          pageId={"OverviewPage"}
          title={"Overview"}
          image={"home_FILL0_wght300_GRAD0_opsz24.svg"}
          altName={"Home Icon"}
          currentPageId={currentPageId}
          setCurrentPageId={setCurrentPageId}
        />

        <NavLinkComponent
          pageId={"PatientPage"}
          title={"Patients"}
          image={"group_FILL0_wght300_GRAD0_opsz24.svg"}
          altName={"Patients Icon"}
          currentPageId={currentPageId}
          setCurrentPageId={setCurrentPageId}
        />

        <NavLinkComponent
          pageId={"SchedulePage"}
          title={"Schedule"}
          image={"calendar_today_FILL0_wght300_GRAD0_opsz24.svg"}
          altName={"Schedule Icon"}
          currentPageId={currentPageId}
          setCurrentPageId={setCurrentPageId}
        />

        <NavLinkComponent
          pageId={"MessagePage"}
          title={"Message"}
          image={"chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"}
          altName={"Message Icon"}
          currentPageId={currentPageId}
          setCurrentPageId={setCurrentPageId}
        />

        <NavLinkComponent
          pageId={"TransactionsPage"}
          title={"Transactions"}
          image={"credit_card_FILL0_wght300_GRAD0_opsz24.svg"}
          altName={"Transactions Icon"}
          currentPageId={currentPageId}
          setCurrentPageId={setCurrentPageId}
        />
      </div>

      <div className={"flex flex-row justify-between items-center"}>
        <img
          src={
            "senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
          }
          alt={"Doctor Img"}
        />

        <div className={"text-sm ml-2"}>
          <h1>Dr. Jose Simmons</h1>
          <span className={""}>General Practitioner</span>
        </div>

        <div className="border-l border-gray-300 h-8 mx-3" />

        <img
          src={"settings_FILL0_wght300_GRAD0_opsz24.svg"}
          alt={"Settings"}
          className={"mr-3"}
        />
        <img
          src={"more_vert_FILL0_wght300_GRAD0_opsz24.svg"}
          alt={"More Options"}
        />
      </div>
    </nav>
  );
};

export default Navbar;