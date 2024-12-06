import React, { useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";

const App = () => {
  const [activeSection, setActiveSection] = useState("PageOne");

  const renderSection = () => {
    switch (activeSection) {
      case "PageOne":
        return (
          <section className="p-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="text-lg font-semibold">Page one</div>
            </div>
            <div className="mt-4">
              <PageOne />
            </div>
          </section>
        );
      case "PageTwo":
        return (
          <section className="p-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="text-lg font-semibold">Page two</div>
            </div>
            <div className="mt-4">
              <PageTwo />
            </div>
          </section>
        );
      case "PageThree":
        return (
          <section className="p-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="text-lg font-semibold">Page Three</div>
            </div>
            <div className="mt-4">
              <PageThree />
            </div>
          </section>
        );
      case "PageFour":
        return (
          <section className="p-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="text-lg font-semibold">Fertilizer Prediction</div>
            </div>
            <div className="mt-4">
              <PageFour />
            </div>
          </section>
        );
      case "PageFive":
        return (
          <section className="p-8 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between pb-4 border-b">
              <div className="text-lg font-semibold">Price Prediction</div>
            </div>
            <div className="mt-4">
              <PageFive />
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-yellow-50 overflow-hidden min-h-screen">
      <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto"></div>
      </header>

      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-yellow-700">TimeTable</span> Dashboard
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li onClick={() => setActiveSection("PageOne")}>
                  <div
                    className={`flex items-center ${
                      activeSection === "PageOne"
                        ? "bg-yellow-200"
                        : "bg-white hover:bg-yellow-50"
                    } rounded-xl font-bold text-sm ${
                      activeSection === "PageOne"
                        ? "text-yellow-900"
                        : "text-gray-900"
                    } py-3 px-4 cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    Page one
                  </div>
                </li>
                <li onClick={() => setActiveSection("PageTwo")}>
                  <div
                    className={`flex items-center ${
                      activeSection === "PageTwo"
                        ? "bg-yellow-200"
                        : "bg-white hover:bg-yellow-50"
                    } rounded-xl font-bold text-sm ${
                      activeSection === "PageTwo"
                        ? "text-yellow-900"
                        : "text-gray-900"
                    } py-3 px-4 cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    page two
                  </div>
                </li>
                <li onClick={() => setActiveSection("PageThree")}>
                  <div
                    className={`flex items-center ${
                      activeSection === "PageThree"
                        ? "bg-yellow-200"
                        : "bg-white hover:bg-yellow-50"
                    } rounded-xl font-bold text-sm ${
                      activeSection === "PageThree"
                        ? "text-yellow-900"
                        : "text-gray-900"
                    } py-3 px-4 cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                    </svg>
                    PageThree
                  </div>
                </li>
                <li onClick={() => setActiveSection("PageFour")}>
                  <div
                    className={`flex items-center ${
                      activeSection === "PageFour"
                        ? "bg-yellow-200"
                        : "bg-white hover:bg-yellow-50"
                    } rounded-xl font-bold text-sm ${
                      activeSection === "PageFour"
                        ? "text-yellow-900"
                        : "text-gray-900"
                    } py-3 px-4 cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 1 1-1h2.586a1 1 0 0 1 .707.293l7.414 7.414a2 2 0 0 1 0 2.828l-3.586 3.586a2 2 0 0 1-2.828 0L1.293 7.414A1 1 0 0 1 1 6.707V4a1 1 0 0 1 1-1zm.414 1L1 5.414V6h.586L6 1.586V2H4a1 1 0 0 0-.707.293L3.414 3zM1 11.586L4.586 8 8 11.414 4.414 15H3v-.586L1 12.586V11.586z" />
                    </svg>
                    pageFour
                  </div>
                </li>
                <li onClick={() => setActiveSection("PageFive")}>
                  <div
                    className={`flex items-center ${
                      activeSection === "PageFive"
                        ? "bg-yellow-200"
                        : "bg-white hover:bg-yellow-50"
                    } rounded-xl font-bold text-sm ${
                      activeSection === "PageFive"
                        ? "text-yellow-900"
                        : "text-gray-900"
                    } py-3 px-4 cursor-pointer`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm-2-2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm3 4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm-2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM4.118 1.589a1 1 0 0 0-.71.697l-.237 1.189L3 3.5h10l-.171-.025-.237-1.189a1 1 0 0 0-.71-.697L11 1.5H5l-.882.089zM11 3H5v-.5h6V3zM3.646 5.854a.5.5 0 0 0 0-.708l-1-1a.5.5 0 0 0-.707.708l.646.647-.646.647a.5.5 0 0 0 .707.708l1-1zM11.354 5.854a.5.5 0 0 1 0-.708l1-1a.5.5 0 1 1 .707.708l-.646.647.646.647a.5.5 0 1 1-.707.708l-1-1z" />
                    </svg>
                    PageFive
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="p-4 border-t">
            <button className="flex items-center space-x-4 hover:text-yellow-600 transition">
              <img
                src="/images/logo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex-grow">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-sm text-gray-600">
                  john.doe@example.com
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </aside>
      <main className="ml-60 pt-16 min-h-screen overflow-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-8">{renderSection()}</div>
        </div>
      </main>
    </div>
  );
};

export default App;
