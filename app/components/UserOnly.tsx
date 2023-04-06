'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

const ClientOnly: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
