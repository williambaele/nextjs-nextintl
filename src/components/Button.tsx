import Link from 'next/link';

type ButtonProps = {
  Link: string;
  Text: string;
  external?: boolean; // Add the external prop
};

export default function Button({ Link: href, Text, external = false }: ButtonProps) {
  return (
    <Link
      href={href}
      className='inline-block px-6 py-2 primary-color text-white rounded-md transition-colors'
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined} 
    >
      {Text}
    </Link>
  );
}
