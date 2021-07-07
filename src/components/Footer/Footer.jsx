import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; 2011-{new Date().getFullYear()} Sabka Bazar Grocery
        Supplies Pvt Ltd
      </p>
    </footer>
  );
};
export default Footer;
