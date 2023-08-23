import { Circle, CircleProps } from '../styled-system/jsx'

type Props = {
  size: CircleProps['size']
  backgroundColor: CircleProps['backgroundColor']
}

export default function CustomCircle(props: Props) {
  return <Circle {...props} />
}
