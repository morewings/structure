import Link from 'next/link';
import {useRouter} from 'next/router';

import {NavigationLink as NavigationLinkUI} from '@/ui/NavigationLink';

import classes from './NavigationLink.module.css';

export const NavigationLink = ({title, href, icon}) => {
  const {pathname} = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationLinkUI title={title} icon={icon} isActive={isActive} className={classes.navigationLink} />
    </Link>
  );
};
