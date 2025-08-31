import type { Patient } from "../../types/patient";

const Profile = ({ selectedPatient }: { selectedPatient: Patient | null }) => {
  return (
    <div className={"bg-white rounded-xl py-5 px-4 h-fit min-w-[250px] mb-8"}>
      {selectedPatient ? (
        <div>
          <div
            className={"flex flex-col justify-center items-center mb-3 w-full"}
          >
            <img
              src={selectedPatient.profile_picture}
              alt={selectedPatient.name}
            />
            <h2 className={"text-xl font-bold mt-2"}>{selectedPatient.name}</h2>
          </div>

          <div
            className={"flex flex-col justify-center items-start gap-4 mb-3"}
          >
            <div className={"flex flex-row gap-3 w-full items-center"}>
              <img src={"/BirthIcon.svg"} alt={"Birthday Icon"} />

              <div>
                <p className={"text-gray-600 text-sm"}>Date Of Birth</p>
                <p className={"font-semibold"}>
                  {new Date(selectedPatient.date_of_birth).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className={"flex flex-row gap-3  w-full items-center"}>
              {selectedPatient.gender === "male" ? (
                <img src={"/MaleIcon.svg"} alt={"Male Icon"} />
              ) : (
                <img src={"/FemaleIcon.svg"} alt={"Female Icon"} />
              )}

              <div>
                <p className={"text-gray-600 text-sm"}>Gender</p>
                <p className={"font-semibold"}>{selectedPatient.gender}</p>
              </div>
            </div>

            <div className={"flex flex-row gap-3  w-full items-center"}>
              <img src={"/PhoneIcon.svg"} alt={"Phone Icon"} />

              <div>
                <p className={"text-gray-600 text-sm"}>Contact Info.</p>
                <p className={"font-semibold"}>
                  {selectedPatient.phone_number}
                </p>
              </div>
            </div>

            <div className={"flex flex-row gap-3  w-full items-center"}>
              <img src={"/PhoneIcon.svg"} alt={"Phone Icon"} />

              <div>
                <p className={"text-gray-600 text-sm"}>Emergency Contact</p>
                <p className={"font-semibold"}>
                  {selectedPatient.emergency_contact}
                </p>
              </div>
            </div>

            <div className={"flex flex-row gap-3 w-full items-center"}>
              <img src={"/PhoneIcon.svg"} alt={"Phone Icon"} />

              <div>
                <p className={"text-gray-600 text-sm"}>Insurance Provider</p>
                <p className={"font-semibold"}>
                  {selectedPatient.insurance_type}
                </p>
              </div>
            </div>
          </div>

          <div
            className={"flex flex-col justify-center items-center mt-8 w-full"}
          >
            <button
              className={
                "px-8 py-2 bg-[#01F0D0] rounded-full font-semibold text-center"
              }
            >
              Show All Information
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className={"text-gray-600 text-center"}>
            Select a patient to view profile
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;