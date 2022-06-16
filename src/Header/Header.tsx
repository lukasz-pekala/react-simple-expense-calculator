type HeaderProps = {
  children: JSX.Element;
};

const Header = ({ children }: HeaderProps) => {
  return <header>{children}</header>;
};

export default Header;
