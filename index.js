export default function createProp (type, defaultVal, isRequired, validator) {
  let ret = {type}
  if (isRequired) {
    ret['required'] = true
  }
  if (defaultVal) {
    ret['default'] = defaultVal
  }
  if (validator) {
    ret['validator'] = validator
  }
  return ret
}