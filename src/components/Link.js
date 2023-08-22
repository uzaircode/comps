import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500');
  // Enable tab command key for both mac & window
  const handleClick = (event) => {
    if (event.crtlKey || event.metaKey) {
      return;
    }

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
