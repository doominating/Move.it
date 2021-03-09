import { shade } from 'polished';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Switch from 'react-switch';
import { useTheme } from '../../contexts/ThemeContext';

const Toggle: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();
  return (
    <Switch
      handleDiameter={20}
      onChange={ToggleTheme}
      checked={theme.title === 'light'}
      height={26}
      // width={40}
      // handleDiameter={20}
      // onColor={colors.text}
      onColor={shade(0.15, theme.colors.textHighlight)}
      checkedIcon={
        <FiSun
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 22,
            paddingLeft: 4,
          }}
          color={theme.colors.white}
          className='light'
        />
      }
      offColor={theme.colors.backgroundBox}
      // uncheckedIcon={false}
      offHandleColor={theme.colors.text}
      uncheckedIcon={
        <FiMoon
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 24,
            paddingLeft: 4,
          }}
          color={theme.colors.blueDark}
          className='dark'
        />
      }
    />
  );
};

export default Toggle;
