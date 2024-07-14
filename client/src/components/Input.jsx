import Proptypes from 'prop-types'
const Input = ({type,value,onChange,classname = "px-3 py-2 border rounded-md",name}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classname}
        name={name}
      />
    </>
  )
}

Input.propTypes = {
  type : Proptypes.string.isRequired,
  value : Proptypes.string,
  onChange : Proptypes.func,
  classname : Proptypes.string,
  name : Proptypes.string
};

export default Input