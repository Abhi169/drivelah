const Footer = ({ onNext }) => {
  return (
    <div className="submission-footer">
      <button className="button" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Footer;
