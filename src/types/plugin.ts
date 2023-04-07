/**
 * @internal
 */
export interface IPlugin {
  name: string
  components: Array<any>
  [key: string]: any  
}
