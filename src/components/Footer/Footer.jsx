import "./Footer.css"

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div
        className="text-center p-4"
        // style={{ backgroundColor: "slategray" }}
      >
        © 2022 Copyright:
        <a
          className="text-reset fw-bold"
          style={{ color: "white" }}
          href="https://main--stupendous-basbousa-dc3dc5.netlify.app/"
        >
          TaskHacks
        </a>
      </div>
    </footer>
  );
};

export default Footer;
