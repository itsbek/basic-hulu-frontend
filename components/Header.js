import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <div className=" flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>{' '}
      <Image
        className="object-contain"
        height={100}
        width={200}
        src={
          'https://logodownload.org/wp-content/uploads/2019/09/hulu-logo-1.png'
        }
        alt="hulu logo"
      />
    </div>
  );
}

export default Header;
