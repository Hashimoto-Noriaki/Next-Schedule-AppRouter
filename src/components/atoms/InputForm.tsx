import { ComponentProps } from 'react'

export default function InputForm(props: ComponentProps<'input'>) {
  return (
    <input
      {...props}
      className="block w-full rounded-lg border border-sky-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none 
                    focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition"
    />
  )
}
