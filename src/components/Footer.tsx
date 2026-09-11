const Footer = () => {
  return (
    <div className="font-sora mt-12 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-11">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <img className="h-7" src={`${import.meta.env.BASE_URL}logo.svg`} alt="Dev Stack logo" />

              <span className="text-md font-bold">
                <span className="text-slate-800">Dev</span>
                <span className="text-[#3a7ff2]">Stack</span>
              </span>
            </a>

            <p className="mt-4 mb-4 max-w-85 text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-2 mb-2 flex gap-5 font-sora text-[10px] font-medium text-slate-400">
              <a href="#" className="hover:text-indigo-500">
                GitHub
              </a>

              <a href="#" className="hover:text-indigo-500">
                Twitter
              </a>

              <a href="#" className="hover:text-indigo-500">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 md:col-span-3">
            <div>
              <h3 className="text-[11px] font-semibold text-slate-700">
                Product
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-400">
                <a href="#" className="hover:text-slate-700">
                  Technologies
                </a>
                <a href="#" className="hover:text-slate-700">
                  Categories
                </a>
                <a href="#" className="hover:text-slate-700">
                  Resources
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold text-slate-700">
                Company
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-400">
                <a href="#" className="hover:text-slate-700">
                  About
                </a>
                <a href="#" className="hover:text-slate-700">
                  Contact
                </a>
                <a href="#" className="hover:text-slate-700">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold text-slate-700">
                Legal
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-400">
                <a href="#" className="hover:text-slate-700">
                  Privacy
                </a>
                <a href="#" className="hover:text-slate-700">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-slate-100 py-6 text-[10px] text-slate-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
