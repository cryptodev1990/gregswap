import React from "react";

const SelectTokenModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div className="fixed inset-0 w-full h-full opacity-40"></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-xl items-center mx-auto bg-app-dark-swap rounded-xl shadow-lg px-2 pt-3">
                <div className="flex justify-between">
                  <h3>Select a token</h3>
                  <h3 className="text-gray-600">X</h3>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SelectTokenModal;
