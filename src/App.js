import { GoBell } from 'react-icons/go';
import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Edit!
        </Button>
      </div>
    </div>
  );
}

export default App;
