import React from 'react';

export type withChildren<P> = P & {
  children: React.ReactNode;
}
