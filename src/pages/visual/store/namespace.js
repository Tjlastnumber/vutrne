const namespace = 'visual'

export default namespace

export const useNamespace = (funcName) => {
  return `${namespace}/${funcName}`
}
