'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/app/ui/button';

export function CreateInvoiceButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Creating...' : 'Create Invoice'}
    </Button>
  );
}