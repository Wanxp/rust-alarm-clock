import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'
interface Headers{
    token: string
    contentType: string
    version: string
    device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON,
  version: '',
  device: Device.PC
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: '',
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
