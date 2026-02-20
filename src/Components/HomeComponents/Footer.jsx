import {
  FiShoppingBag,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8f9fc]">
      <div className="mx-auto  px-6 py-8 lg:px-10">
        <div className="flex justify-between flex-col md:flex-row gap-5 text-left">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="text-[#0b50da] text-xl" />
              <span className="text-lg font-bold text-[#0d121c]">MINIMAL</span>
            </div>
            <p className="text-sm leading-relaxed text-[#49659c]">
              Redefining modern retail with a focus on quality, minimalism, and
              sustainable practices.
            </p>
            <div className="flex gap-4">
              <a
                className="text-[#49659c] transition-colors hover:text-[#0b50da]"
                href="#"
              >
                <span className="sr-only">Facebook</span>
                <FiFacebook size={20} />
              </a>
              <a
                className="text-[#49659c] transition-colors hover:text-[#0b50da]"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <FiInstagram size={20} />
              </a>
              <a
                className="text-[#49659c] transition-colors hover:text-[#0b50da]"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 - Shop */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0d121c]">Shop</h4>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              New Arrivals
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Clothing
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Accessories
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Sale
            </a>
          </div>

          {/* Links 2 - Support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0d121c]">Support</h4>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Help Center
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Shipping & Returns
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Size Guide
            </a>
            <a
              className="text-sm text-[#49659c] transition-colors hover:text-[#0b50da]"
              href="#"
            >
              Contact Us
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#0d121c]">Stay in the loop</h4>
            <p className="text-sm text-[#49659c]">
              Subscribe for exclusive offers and updates.
            </p>
            <form
              className="flex w-full flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full rounded-lg border-gray-200 bg-white px-4 py-2 text-sm text-[#0d121c] placeholder-[#49659c] focus:border-[#0b50da] focus:ring-[#0b50da]"
                placeholder="Your email"
                type="email"
              />
              <button
                className="rounded-lg bg-[#0b50da] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0941b3]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-[#49659c] md:flex-row">
          <p>© 2023 Minimal E-commerce. All rights reserved.</p>
          <div className="flex gap-3">
            <a className="hover:text-[#0b50da]" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#0b50da]" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
