import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-primary py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          {/* about section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className="mt-5">
              <p className="text-base">
                <strong>Email:</strong> info@meta.net
              </p>
              <p className="text-base">
                <strong>Phone:</strong> 880 123 456 789
              </p>
            </div>
          </div>

          {/* Quick Link */}
          <div className="md:pl-16">
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondery">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Author
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/*  Category */}
          <div className="">
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondery">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-secondery">
                  Economy
                </Link>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="bg-white hidden sm:block">
            <div className="px-6 py-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Weekly Newsletter</h3>
              <p className="text-gray-500 text-sm mb-2">
                Get blog articles and offers via email
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-100 text-white rounded-lg py-2 px-4 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondery text-white rounded-lg py-2 px-4 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;