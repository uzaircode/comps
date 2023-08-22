import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
  const { navigate } = useNavigation();

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
