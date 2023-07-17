const Footer = () => {
  return (
   <footer className="bg-gray-800 text-white py-4 mt-auto">
    
      <div className="flex justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <a
            className="font-bold bg-gradient-to-r from-[#af52fa] to-[#f80008] text-transparent bg-clip-text"
            href="https://alirezamak.com/"
          >
            Alireza Mak
          </a>
          , Front End Developer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
