/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Container, LinkContainer, Link } from './TabBar.style';

const TabBar = () => {
  const [selected, setSelected] = useState('Campaign');

  const options = {
    '1': 'Campaign',
    '2': 'FAQ',
    '3': 'Updates',
    '4': 'Comments',
    '5': 'Community',
  };

  const showAndSelect = (selection) => {
    setSelected(selection);

    if (selection === options['1']) {
      document.getElementById('campaign').style.display = 'block';
      document.getElementById('update').style.display = 'none';
    } else if (selection === options['2']) {
      document.getElementById('campaign').style.display = 'none';
      document.getElementById('update').style.display = 'block';
    }
  };

  return (
    <div>
      <Container>
        <LinkContainer leftAlign>
          <Link selected={selected} onClick={() => showAndSelect(options['1'])}>
            {options['1']}
          </Link>
          <Link selected={selected} onClick={() => showAndSelect(options['2'])}>
            {options['2']}
          </Link>
          <Link selected={selected} onClick={() => showAndSelect(options['3'])}>
            {options['3']}
          </Link>
          <Link selected={selected} onClick={() => showAndSelect(options['4'])}>
            {options['4']}
          </Link>
          <Link selected={selected} onClick={() => showAndSelect(options['5'])}>
            {options['5']}
          </Link>
        </LinkContainer>
      </Container>
    </div>
  );
};

export default TabBar;
