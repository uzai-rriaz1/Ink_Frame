import React from "react";
import { Link } from "react-router-dom";
import InkFrameLogo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gray-100 border-t border-gray-300">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <InkFrameLogo width="100px" />
              </div>
              <p className="text-sm text-gray-500">
                &copy; 2025 Uzair Riaz. All rights reserved.
              </p>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wide text-gray-600">
                Company
              </h3>
              <ul>
                {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                  (item) => (
                    <li key={item} className="mb-3">
                      <Link
                        to="/"
                        className="text-sm font-medium text-gray-800 hover:text-teal-600 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wide text-gray-600">
                Support
              </h3>
              <ul>
                {["Account", "Help", "Contact Us", "Customer Support"].map(
                  (item) => (
                    <li key={item} className="mb-3">
                      <Link
                        to="/"
                        className="text-sm font-medium text-gray-800 hover:text-teal-600 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wide text-gray-600">
                Legals
              </h3>
              <ul>
                {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                  (item) => (
                    <li key={item} className="mb-3">
                      <Link
                        to="/"
                        className="text-sm font-medium text-gray-800 hover:text-teal-600 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
