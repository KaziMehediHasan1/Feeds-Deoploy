import Link from "next/link";
import CommonWrapper from "./CommonWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#0A1C35] text-white py-10 px-6 md:px-16">
      <CommonWrapper>
        <div className="space-y-10">
          {/* Signup Section */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl text-white uppercase text-center md:text-left">
              Sign Up Now
            </h1>
            <p className="text-sm text-center md:text-left md:max-w-md">
              Become a member of our online community and get tickets to
              upcoming matches or sports events faster!
            </p>
            <form className="relative w-full max-w-72 mx-auto md:mx-0">
              <input
                type="email"
                className="py-2.5 px-5 w-full border rounded-full text-white bg-black border-[#f2e015]"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="py-2 px-6 bg-yellow-500 hover:text-black text-white absolute right-1 top-1 bottom-1 rounded-full text-sm hover:bg-yellow-500 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-[#262d36]"></div>

          {/* Bottom Navigation */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex justify-center md:justify-start gap-6 flex-wrap text-sm">
              <Link
                href="/"
                className="font-medium hover:underline hover:text-[var(--color-primary)]"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="hover:underline hover:text-[var(--color-primary)]"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="hover:underline hover:text-[var(--color-primary)]"
              >
                Contact
              </Link>
            </div>
            <p className="text-center text-sm text-white">
              © 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
