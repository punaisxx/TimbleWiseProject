import { useRouter } from 'next/router';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Container from './Container';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  return (
    <div 
      className='w-full bg-slate-200'
    >
      <Container>
        <div className='w-full flex flex-row py-3 '>

          {pathSegments.map((segment, index) => (
            <div 
              key={index}
              className='flex flex-row items-center bg-inherit'  
            >

              <Link 
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className='capitalize font-semibold bg-inherit'
              >
                {segment}
              </Link>

              { index < pathSegments.length - 1 && 
                <div className='px-3 bg-inherit'>
                  <Icon icon="mingcute:right-line" width="1.5rem" height="1.5rem" className='bg-inherit' />
                </div>
              }

            </div>
          ))}

        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
