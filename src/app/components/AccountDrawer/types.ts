import React from 'react';

export type DrawerItem = {
  id: string,
  title: string,
  icon: React.ReactNode,
  onClick?: () => void
}
