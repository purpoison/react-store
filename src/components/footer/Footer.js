import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">© i'm footer {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
