import React, { ButtonHTMLAttributes } from 'react';
// import IconSizeType from './types/icon-sizes';
// import { IconType } from './types/icons';
import cn from 'classnames';

import Styles from './icon.scss';

export interface IconProps {
  // type: IconType;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onDark?: boolean;
  // size?: IconSizeType;
}

const lightStyle = { color: 'white' };

export const Icon: React.SFC<IconProps & React.InputHTMLAttributes<any>> = ({
  type,
  className,
  onClick: handleClick,
  onDark,
  size,
  style,
  ...attributes
}) => {
  let iconStyle;
  if (onDark) {
    iconStyle = { ...style, ...lightStyle };
  } else {
    iconStyle = style;
  }

  return (
    <i
      className={cn(
        className,
        'sg-icon',
        `sg-icon-${type}`,
        Styles['sg-icon'],
        Styles[`sg-icon-${type}`],
        {
          [Styles[`is-size-${size}`]]: size,
        }
      )}
      onClick={handleClick}
      style={Object.keys(iconStyle).length ? iconStyle : null}
      {...attributes}
    />
  );
};

Icon.defaultProps = {
  className: '',
  onDark: false,
  style: {},
};

export default Icon;