import React from 'react';
import Container from './Container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withContainer?: boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  withContainer = true,
}) => {
  const content = withContainer ? (
    <Container>{children}</Container>
  ) : (
    children
  );

  return (
    <section id={id} className={`py-16 ${className}`}>
      {content}
    </section>
  );
};

export default Section;