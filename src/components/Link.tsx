import Link, { LinkProps } from "next/link";

const CustomLink = ({ href, children, ...rest }: LinkProps | any) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default CustomLink;
