import type { GenericApplicationError as TGenericApplicationError } from '@/types';

import { GenericApplicationError } from './GenericApplicationError';

export class VCWebSocketCloseError extends GenericApplicationError {
  constructor(props: TGenericApplicationError) {
    props.name = 'VoiceChannelWebSocketCloseError';
    super(props);
  }
}
