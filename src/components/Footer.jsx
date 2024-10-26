import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
           <span className="text-xl">logo</span>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              Te
            </a>
            <a>
              Tw
            </a>
            <a>
             In
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
