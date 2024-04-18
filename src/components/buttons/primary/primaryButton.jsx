import {ButtonWrapper} from "./styled";

export const PrimaryButton = ({children, href, ...props}) => {
  return (
      <ButtonWrapper {...props} href={'mailto:131313Constantine@gmail.com'}>
        {children}
      </ButtonWrapper>
  )

}
