import {Stack, Select} from '@chakra-ui/react'
import React from 'react'

const FilterBar = () => {
  return (
    <Stack>
  <Select placeholder="Select option" variant="outline">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>

  <Select placeholder="Select option" variant="filled">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>

  <Select placeholder="Select option" variant="flushed">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>

  <Select placeholder="Select option" variant="unstyled">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>
</Stack>
  )
}

export default FilterBar