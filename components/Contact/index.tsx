import React from 'react';

// Global components

import Icon from '@mdi/react';
import { mdiEmail, mdiGithub, mdiLinkedin, mdiWhatsapp } from '@mdi/js';
import { ContactArea, ContactContainer } from './styles';
import Link from 'next/link';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactArea>
        <Link href="#" target="_blank">
          <Icon path={mdiEmail} size={1.5} />
        </Link>
        <Link href="https://github.com/elisiane-quadros" target="_blank">
          <Icon path={mdiGithub} size={1.5} />
        </Link>
        <Link href="https://www.linkedin.com/in/elisiane-q/" target="_blank">
          <Icon path={mdiLinkedin} size={1.5} />
        </Link>
        <Link href="" target="_blank">
          <Icon path={mdiWhatsapp} size={1.5} />
        </Link>
      </ContactArea>
      <div>
        <span>&copy2024-ElisianeQuadros</span>
      </div>
    </ContactContainer>
  );
};

export default Contact;
