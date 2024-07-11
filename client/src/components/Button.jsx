import Proptypes from 'prop-types'
const Button = ({type,classname,onClick,text}) => {
  return (
    <>
    <button type={type} className={classname}
    onClick={onClick}>{text}</button>
    </>
  )
}

Button.propTypes = {
  type : Proptypes.string,
  classname :  Proptypes.string,
  onClick : Proptypes.func,
  text : Proptypes.string 
}

export default Button