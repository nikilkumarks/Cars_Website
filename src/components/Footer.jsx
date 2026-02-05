import { FaFacebookF, FaTwitter, FaInstagram, FaCarSide, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter group">
            <div className="bg-primary p-2 rounded-xl">
              <FaCarSide className="text-white text-xl" />
            </div>
            <span className="text-white font-outfit uppercase">Torque<span className="text-primary italic">Zone</span></span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Exclusively curating the finest automotive masterpieces for those who demand nothing but excellence.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all">
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Navigation</h4>
          <ul className="space-y-4">
            {["Home", "Inventory", "Comparison", "Inquiry", "Reviews"].map(item => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item === "Inventory" ? "CarList" : item.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Collections</h4>
          <ul className="space-y-4">
            {["Hypercars", "Supercars", "Luxury Sedans", "Exotic SUVs", "Classic Icons"].map(item => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-8">Newsletter</h4>
          <p className="text-white/40 text-sm mb-6 font-medium">Join our inner circle for exclusive updates on new arrivals.</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
            />
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-widest leading-relaxed text-center md:text-left">
          &copy; {new Date().getFullYear()} TorqueZone Automotive Group. <br className="md:hidden" /> Crafted with precision for enthusiasts.
        </p>
        <div className="flex gap-8">
          {["Privacy", "Cookies", "Terms"].map(label => (
            <a key={label} href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">{label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
