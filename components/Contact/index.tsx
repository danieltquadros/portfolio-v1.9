import React from 'react';

// Global components

import Icon from '@mdi/react';
import {
  mdiCellphone,
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarker,
} from '@mdi/js';
import {
  ContactArea,
  ContactContainer,
  ContactItem,
  ContactList,
  Copy,
  LogoContainer,
} from './styles';
import logo from '@/public/logo-40x40.png';
import Image from 'next/image';

interface ContactListProps {
  id: string;
  icon: string;
  text: string;
}

const Contact = () => {
  const contactList: ContactListProps[] = [
    {
      id: '1',
      icon: mdiEmail,
      text: 'elisiane.quadros@hotmail.com',
    },
    {
      id: '2',
      icon: mdiCellphone,
      text: '(48) 99138-5686',
    },
    {
      id: '3',
      icon: mdiMapMarker,
      text: 'Santa Catarina - BR',
    },
  ];
  return (
    <ContactContainer id="contact">
      <ContactArea>
        <ContactList>
          {contactList.map((contact) => (
            <ContactItem key={contact.id}>
              <Icon path={contact.icon} size={1} />
              <p>{contact.text}</p>
            </ContactItem>
          ))}
        </ContactList>

        <LogoContainer>
          <Image src={logo} alt="logomarca" />
        </LogoContainer>
      </ContactArea>
      <Copy>
        <p>&copy; 2024 Elisiane Quadros. Todos os direitos reservados.</p>
      </Copy>
    </ContactContainer>
  );
};

export default Contact;
