'use client'

import { TypeTimeBlockFormState } from "@/types/time-block.types"
import { FormProvider, useForm } from "react-hook-form"
import { TimeBlockingForm } from "./form/TimeBlockingForm"

export function TimeBlocking() {
  const methods = useForm<TypeTimeBlockFormState>()

  return (
    <FormProvider {...methods}>
      <div>
        <TimeBlockingForm />
      </div>
    </FormProvider>
  )
}