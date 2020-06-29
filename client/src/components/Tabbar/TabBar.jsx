/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Container, LinkContainer, Link } from './TabBar.style';

const TabBar = () => {
  const [selected, setSelected] = useState('Campaign');

  return (
    <div>
      <Container>
        <LinkContainer leftAlign>
          <Link selected={selected} onClick={() => setSelected('Campaign')}>
            Campaign
          </Link>
          <Link selected={selected} onClick={() => setSelected('FAQ')}>
            FAQ
          </Link>
          <Link selected={selected} onClick={() => setSelected('Updates')}>
            Updates
          </Link>
          <Link selected={selected} onClick={() => setSelected('Comments')}>
            Comments
          </Link>
          <Link selected={selected} onClick={() => setSelected('Community')}>
            Community
          </Link>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default TabBar;
