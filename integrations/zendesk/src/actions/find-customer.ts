import { userSchema } from 'src/definitions/schemas'
import { getZendeskClient } from '../client'
import type { Implementation } from '../types'

export const findCustomer: Implementation['actions']['findCustomer'] = async ({ ctx, input }) => {
  const customers = await getZendeskClient(ctx.configuration).findCustomers(input.query)
  return { customers: customers.map((c) => userSchema.parse(c)) }
}