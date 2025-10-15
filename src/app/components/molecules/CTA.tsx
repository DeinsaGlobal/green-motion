'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import Heading from '../atoms/heading';
import Text from '../atoms/text';
import Button from '../atoms/button';

type CTAButton = {
  text: string;
  href: string;
  ariaLabel?: string;
  variant?: Parameters<typeof Button>[0]['variant'];
};

export type CTAProps = {
  title: string;
  description?: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
  headingVariant?: 'neon' | 'modern' | 'simple';
  primary: CTAButton;
  secondary?: CTAButton;
  className?: string;
};

export default function CTA({
  title,
  description,
  headingLevel = 'h2',
  headingVariant = 'modern',
  primary,
  secondary,
  className = '',
}: CTAProps) {
  const router = useRouter();

  return (
    <section
      role="region"
      aria-label="Llamado principal a la acción"
      className={`w-full bg-gradient-to-br from-[#00764e] via-[#289B8F] to-[#47BA41] text-white ${className}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <Heading level={headingLevel} variant={headingVariant} className="mb-2">
          {title}
        </Heading>

        {description && (
          <Text variant="lead" className="max-w-2xl mx-auto">
            {description}
          </Text>
        )}

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <Button
            variant={primary?.variant ?? 'white-primary'}
            aria-label={primary.ariaLabel}
            onClick={() => router.push(primary.href)}
          >
            {primary.text}
          </Button>

          {secondary && (
            <Button
              variant={secondary.variant ?? 'white-secondary'}
              aria-label={secondary.ariaLabel}
              onClick={() => router.push(secondary.href)}
            >
              {secondary.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
