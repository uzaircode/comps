import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  // Enable tab command key for both mac & window
  const handleClick = (event) => {
    if (event.crtlKey || event.metaKey) {
      return;
    }

    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
