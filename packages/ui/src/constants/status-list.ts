import { KeyOf } from '@1nhealth/api/typings/utils';
import { STATUSES } from '@1nhealth/api/src/constants/statuses';

export const STATUS_LIST: Readonly<KeyOf<typeof STATUSES>> = [
  STATUSES.latest as any,
  STATUSES.active,
  STATUSES.waiting,
  STATUSES.completed,
  STATUSES.failed,
  STATUSES.delayed,
  STATUSES.paused,
] as const;
