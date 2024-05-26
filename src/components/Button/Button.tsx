import Link from 'next/link';

type ButtonProps = {
  className?: string;
  title: string;
  url: string;
  onclick?: () => void;
};

const Button = ({ className, title, url, onclick }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={`font-semibold p-2 ${className}`}
      onClick={onclick}
    >
      {title}
    </Link>
  );
};

export default Button;
