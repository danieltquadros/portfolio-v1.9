import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StyledButton } from './styled';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      router.push('/#contact');
    }, 200);
  };

  return (
    <StyledButton isClicked={isClicked} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
