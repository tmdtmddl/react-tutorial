const Footer = ({ name, email, mobile, intro }) => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">{name}'s github</a>
        </li>
        <li>
          <a href="">{email}로메일전송하기</a>
        </li>
        <li>
          <a href="">{mobile}</a>
        </li>
      </ul>
      <p>{intro}</p>
    </footer>
  );
};

export default Footer;
