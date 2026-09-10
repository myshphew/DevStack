
const Footer = () => {
  return (
    <div className="border-t border-slate-100 bg-white">
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <img className="h-8" src="/public/logo.svg" alt="logo" />

              <span className="text-[16px] font-bold">
                <span className="text-slate-800">Dev</span>
                <span className="text-pink-600">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-[340px] text-[11px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex gap-5 text-[10px] font-medium text-slate-600">
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

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wide text-slate-700">
              Product
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-500">
              <a href="#" className="hover:text-indigo-500">
                Home
              </a>
              <a href="#technologies" className="hover:text-indigo-500">
                Technologies
              </a>
              <a href="#projects" className="hover:text-indigo-500">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wide text-slate-700">
              Company
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-500">
              <a href="#about" className="hover:text-indigo-500">
                About
              </a>

              <a href="#contact" className="hover:text-indigo-500">
                Contact
              </a>

              <a href="#" className="hover:text-indigo-500">
                Careers
              </a>
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
