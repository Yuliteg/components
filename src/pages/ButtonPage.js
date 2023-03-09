import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Button secondary rounded>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button primary >
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success rounded>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;